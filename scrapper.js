'use strict'

const cheerio = require('cheerio')
const request = require('request')
const jsonfile = require('jsonfile')
const path = require('path')
const _ = require('lodash')

class cssValuesScrapper {
  constructor() {
    this.toWrite = {}
    this.types = {
      '<time>': {
        reTest: '^[+-]?\\d+(\\.\\d+)?(ms|s)$',
        units: ['s', 'ms']
      },
      '<integer>': {
        reTest: '^[+-]?\\d+$',
        units: []
      },
      '<number>': {
        reTest: '^[+-]?\\d+(\\.\\d+)?$',
        units: []
      },
      '<percentage>': {
        reTest: '^[+-]?\\d+(\\.\\d+)?(%)$',
        units: ['%']
      },
      '<length>': {
        reTest: '^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$',
        units: ['em', 'ex', 'ch', 'rem', 'vw', 'vh', 'vmin', 'vmax', 'cm', 'mm', 'q', 'in', 'pc', 'pt', 'px']
      },
      '<angle>': {
        reTest: '^[+-]?\\d+(\\.\\d+)?(deg|grad|rad|turn)$',
        units: ['deg', 'grad', 'rad', 'turn']
      },
      '<color>': {
        reTest: '(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)',
        units: []
      }
    }
    this.itemModel = {
      isParent: false,
      children: {
        names: '',
        childrenDefaultValues: {}
      },
      values: [],
      defaultValue: '',
      types: {},
      supports: {
        browsers: {},
        mobiles: {}
      }
    }

    this.checkTypes = new RegExp(/(<\w+>)/img)
    this.checkchildrensDefaultValues = new RegExp(/\[(\w*(-)?\w*?(-?)?\w*?)\]/g)
    this.checkValues = new RegExp(/(<a href=".{1,60}">|\||&nbsp;|\n|<\/a>|\?|\*|<code.+>|<\/code>)/g)

    this.url = 'http://cssvalues.com/'
    this.tableClass = '.list.extras'

  }

  run() {
    return new Promise((resolve, reject) => {
      request(this.url, (err, response, body) => {

        console.log('Body fetched well done.')

        this.scrapValues(body)
        console.log('Parsing done.')

        this.splitValues()
        console.log('Conversion of the array of the values done.')

        this.replaceDefaultValuesByContainer()
        console.log('Replacing defaultValues children.childrenDefaultValues done.')

        this.endTreatement()
        console.log('Replacing childrenless, split default value, and replace <currentColor> by <color> done.')

        resolve({
          toWrite: {attributes: this.toWrite},
          name: 'attributes'
        })
      })
    })
  }

  scrapValues(body) {
    let i, sectionsLen
    const $ = cheerio.load(body, {decodeEntities: false})
    const sections = $(this.tableClass + ' section')

    for (i = 0, sectionsLen = sections.length; i < sectionsLen; i++) {
      this.parseValues(
        $(sections[i]).attr('id'),
        this.getEachValue($, sections[i]),
        _.cloneDeep(this.itemModel),
        this.getSupports($, sections[i])
      )
    }
  }

  parseValues(attrName, values, currentItem, supports) {
    let i, valuesLen, types
    types = []

    for (i = 0, valuesLen = values.length; i < valuesLen; i++) {
      this.setCurrentItem(i, values[i], currentItem, types)
    }

    this.insertAvailableTypes(types, currentItem)
    this.setSupport(supports[0], 'browsers', currentItem)
    this.setSupport(supports[1], 'mobiles', currentItem)

    this.toWrite[attrName] = currentItem
  }

  setCurrentItem(i, value, currentItem, types) {
    const matchType = value.match(this.checkTypes)

    if (i === 0) {
      currentItem.defaultValue = value.replace(/\[ /g, '[').replace(/ ]/g, ']')
      currentItem.children.names = currentItem.defaultValue.replace(/(\[ ?| ?\])/g, '').replace(/  /g, ' ').split(' / ')
      if (this.checkchildrensDefaultValues.test(currentItem.defaultValue)) {
        this.addContainerAttribute(currentItem, currentItem.defaultValue.match(this.checkchildrensDefaultValues))
      }
    } else {
      currentItem.values.push(value)
    }

    if (matchType && matchType.length) {
      this.addType(matchType, types)
    }
  }

  addContainerAttribute(currentItem, matching) {
    let i, matchingLen

    currentItem.isParent = true
    for (i = 0, matchingLen = matching.length; i < matchingLen; i++) {
      currentItem.children.childrenDefaultValues[matching[i].replace(/(\[|\])/g, '')] = ''
    }
  }

  getEachValue($, item) {
    return $(item).find('ul li code').map((idx, code) =>
      $(code).html()
        .replace(this.checkValues, '')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/ +/g, ' ')
    )
  }

  getSupports($, item) {
    return $(item).find('.browser-support').map((idx, support) =>
      $(support).find('li').map((idx, browser) =>
        $(browser).attr('title') + ':' + $(browser).html()
      )
    )
  }

  addType(matchType, types) {
    let i, len

    for (i = 0, len = matchType.length; i < len; i++) {
      if (this.types.hasOwnProperty(matchType[i])) {
        types.push(matchType[i])
      }
    }
  }

  insertAvailableTypes(types, currentItem) {
    let i, valuesLen

    if (types.length) {
      for (i = 0, valuesLen = types.length; i < valuesLen; i++) {
        if (!currentItem.types[types[i]]) {
          currentItem.types[types[i]] = this.types[types[i]]
        }
      }
    }
  }

  setSupport(support, device, currentItem) {
    if (support) {
      support.map((idx, s) => {
        const split = s.split(':')
        currentItem.supports[device][split[0]] = split[1]
      })
    }
  }

  splitValues() {
    for (const styleAttr in this.toWrite) {
      if (this.toWrite.hasOwnProperty(styleAttr) && typeof this.toWrite[styleAttr].values === 'string') {
        let attribute = this.toWrite[styleAttr]
        attribute.values = attribute.values.split(' ')
      }
    }
  }

  replaceDefaultValuesByContainer() {
    for (const styleAttr in this.toWrite) {
      if (this.toWrite.hasOwnProperty(styleAttr) && this.toWrite[styleAttr].isParent) {
        const currentItem = this.toWrite[styleAttr]
        const containerAttrs = currentItem.children.childrenDefaultValues
        for (let containerAttr in containerAttrs) {
          if (containerAttrs.hasOwnProperty(containerAttr) && this.toWrite.hasOwnProperty(containerAttr)) {
            currentItem.defaultValue = currentItem.defaultValue.split('[' + containerAttr + ']').join(this.toWrite[containerAttr].defaultValue)
            containerAttrs[containerAttr] = this.toWrite[containerAttr].defaultValue
          }
        }
      }
    }
  }

  endTreatement() {
    for (let styleAttr in this.toWrite) {
      if (this.toWrite.hasOwnProperty(styleAttr)) {
        const currentItem = this.toWrite[styleAttr]
        currentItem.defaultValue = currentItem.defaultValue.split(' / ')
        if (!currentItem.isParent) {
          delete this.toWrite[styleAttr].children
        } else {
          for (let childrenDefaultValue in currentItem.children.childrenDefaultValues) {
            if (currentItem.children.childrenDefaultValues.hasOwnProperty(childrenDefaultValue)
              && currentItem.children.childrenDefaultValues[childrenDefaultValue] === '<currentColor>') {
              currentItem.children.childrenDefaultValues[childrenDefaultValue] = '<color>'
            }
          }
        }
        currentItem.defaultValue = currentItem.defaultValue.map(e => e.replace('<currentColor>', '<color>'))
      }
    }
  }

}

class tympanusScrapper {
  constructor(idTab, name) {
    this.url = 'http://tympanus.net/codrops/css_reference'
    this.idTab = idTab
    this.name = name
    this.toWrite = {}
    this.toWrite[this.name] = []
  }

  run() {
    return new Promise((resolve) => {
      request(this.url, (err, response, body) => {
        console.log('Body fetched well done.')

        this.scrapValues(body)
        console.log(this.name + ' fetched.')

        resolve({
          toWrite: this.toWrite,
          name: this.name
        })

      })
    })
  }

  scrapValues(body) {
    const $ = cheerio.load(body, {decodeEntities: false})
    const items = $(this.idTab).children()
    let i = -1, itemsLen = items.length

    while (++i < itemsLen) {
      const item = items[i]
      const string = $(item).find('a').html()
      if (string) {
        this.toWrite[this.name].push(string)
      }
    }
  }

}

const Common = {
  writeToJSON(jsonPath, toWrite, spaces, err) {
    jsonfile.writeFile(jsonPath, toWrite, spaces, err)
  },
  parseResults(results) {
    let i = 0, len = results.length, toWrite = {}
    while (i < len) {
      toWrite[results[i].name] = results[i].toWrite[results[i].name]
      ++i
    }
    return toWrite
  }
}

// main
const attributes = new cssValuesScrapper()
const pseudoClass = new tympanusScrapper('#section_css-pseudo-class ul', 'pseudoClass')
const functions = new tympanusScrapper('#section_css-function ul', 'functions')
const rules = new tympanusScrapper('#section_css-at-rule ul', 'rules')

Promise.all([
  attributes.run(),
  pseudoClass.run(),
  functions.run(),
  rules.run()
]).then((results) => {
  Common.writeToJSON("./cssSheet.json", Common.parseResults(results), {spaces: 2}, (err) => {
    console.log(err ? err : 'Let\'s see the ./cssSheet.json')
  })
})

