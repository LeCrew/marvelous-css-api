# Marvelous-css-api

## SHUT UP AND TAKE MY CSS REFERENCE

** **RIGHT NOW IN YOUR POCKET** ** 

** **EVERYTHING ABOUT WHATEVER IN CSS** **

** **ALL ATTRIBUTES INFORMATION INCLUDING** **

- NAME,
- VALUES,
- DEFAULT VALUE,
- PARENT ATTRIBUTE,
- TYPES,
- REGEXP TESTER,
- BROWSERS SUPPORT,
- MOBILES SUPPORT

## OKAY FRESH, SO #FRESH, BUT HOW QUICK ACCESS ???

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

      reference: { ... },                              // the complete cssSheet (cssSheet.json at project root)

      getAttr: function(attributeName){},              // return attributeName object
      getValues: function(attributeName){},            // return possible values pattern form attributeName
      getDefaultValues: function(attributeName){},     // return possible default values pattern from attributeName
      getTypes: function(attributeName){},             // return all attribute types, with for each a regexp tester and units
      getSupports: function(attributeName){},          // return browsers/mobiles support
      
      isValid: function(attributeName, inputString){}, // return true/false if the inputString is valid for attributeName
      isParent: function(attributeName){},             // return true/false is the attributeName is a parent attribute

      getPseudoClasses: function(){},                  // return all CSS pseudo classes
      getFunctions: function(){},                      // return all CSS functions
      getRules: function(){},                          // return all CSS rules
      
    }

## TODO

- more informations about pseudoClasses, rules and functions.

## IMPORTANT NOTES

Do you like it ? Support the crew with all issues and pull requests you can done !
