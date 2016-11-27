# Marvelous-css-api

Get all css datas in JSON.

<img src="http://i.giphy.com/Yv66XRlbWCuQw.gif">

** **ALL ATTRIBUTES INFORMATION INCLUDING** **

- NAME
- VALUES
- DEFAULT VALUE
- PARENT ATTRIBUTE
- TYPES
- REGEXP TESTER
- BROWSERS SUPPORT
- MOBILES SUPPORT
- PSEUDO CLASSES
- RULES
- FUNCTIONS

## Install & use

    npm install --save marvelous-css-api

1. [Access from cssSheet.json](#cssSheet)
2. [Access from window.css](#cssAPI)

## 1. Access from cssSheet.json

Just see the cssSheet.json

Exemple with a parent attribute:

    "animation": {          // attribute Name
      "isParent": true,     // isParent -> can container multiple css attributes
      "children": {         // children names and default values
        "names": [          // multiple ways to interpret
          "animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-fill-mode animation-play-state"
        ],
        "childrenDefaultValues": {              // all default values for each child
          "animation-name": "none",
          "animation-duration": "0s",
          "animation-timing-function": "ease",
          "animation-delay": "0s",
          "animation-iteration-count": "1",
          "animation-direction": "normal",
          "animation-fill-mode": "none",
          "animation-play-state": "running"
        }
      },
      "values": [],
      "defaultValue": [                          // default value of parent
        "none 0s ease 0s 1 normal none running"
      ],
      "types": {},
      "supports": {                              // browsers and mobile support
        "browsers": {
          "Chrome": "Yes",
          "Firefox": "Yes",
          "Internet Explorer": "10+",
          "Safari": "Yes",
          "Opera": "Yes"
        },
        "mobiles": {
          "iOS Safari": "6.1+",
          "Android Browser": "2.3+",
          "Opera Mobile": "Yes",
          "Chrome for Android": "Yes",
          "Firefox for Android": "Yes",
          "IE Mobile": "10+"
        }
      }
    },
    
Exemple with a child attribute

    "animation-iteration-count": {        // child attribute name
      "isParent": false,                  // is not a parent :)
      "values": [                         // multiple values possible, here infinite or <number> (its a type)
        "infinite",
        "<number>"
      ],
      "defaultValue": [                   // default value
        "1"
      ],
      "types": {                          // types with units and regexp for test input
        "<number>": {
          "reTest": "^[+-]?\\d+(\\.\\d+)?$",
          "units": []
        }
      },
      "supports": {                       // browsers and mobile supports
        "browsers": {
          "Chrome": "Yes",
          "Firefox": "Yes",
          "Internet Explorer": "10+",
          "Safari": "Yes",
          "Opera": "Yes"
        },
        "mobiles": {
          "iOS Safari": "6.1+",
          "Android Browser": "2.3+",
          "Opera Mobile": "Yes",
          "Chrome for Android": "Yes",
          "Firefox for Android": "Yes",
          "IE Mobile": "10+"
        }
      }
    },

## 2. Access from window.css

Just include css-api.js in your html page and see the magic in window.css

    window.css = {

      reference: { ... },                             // the complete cssSheet (cssSheet.json at project root)

      getAttr: (attributeName){},                     // return attributeName object
      getValues: (attributeName){},                   // return possible values pattern form attributeName
      getDefaultValues: (attributeName){},            // return possible default values pattern from attributeName
      getChildrenNames: (attributeName){},            // return all children name
      getChildrenDefaultValues: (attributeName){},    // return all children default values
      getTypes: (attributeName){},                    // return all attribute types, with for each a regexp tester and units
      getSupports: (attributeName){},                 // return browsers/mobiles support
      
      isValid: (attributeName, type, expr){},         // return true/false if the expr is valid for attributeName and type
      isParent: (attributeName){},                    // return true/false is the attributeName is a parent attribute

      getPseudoClasses: (){},                         // return all CSS pseudo classes
      getFunctions: (){},                             // return all CSS functions
      getRules: (){},                                 // return all CSS rules
        
    }
    
## LAUNCH THE SCRIPT

        $> npm run start

## TODO

- more informations about pseudoClasses, rules and functions.
- isolated types
- better support functions

## IMPORTANT NOTES

Support the crew with all issues and pull requests you can done !
