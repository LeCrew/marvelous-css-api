window.css = {
  getAttr: function(attrName) {
    return this.reference[attrName];
  },
  getValues: function(attrName) {
    return this.reference[attrName].values;
  },
  getDefaultValues: function(attrName) {
    return this.reference[attrName].defaultValue;
  },
  getChildrenNames: function(attrName) {
    return this.reference[attrName].children.names;
  },
  getChildrenDefaultValues: function(attrName) {
    return this.reference[attrName].children.childrenDefaultValues;
  },
  getTypes: function(attrName) {
    return this.reference[attrName].types;
  },
  getSupports: function(attrName) {
    return this.reference[attrName].supports;
  },
  isValid: function(attrName, type, expression) {
    return this.reference[attrName].types[type].test(expression);
  },
  isParent: function(attrName) {
    return this.reference[attrName].isParent;
  },
  getPseudoClasses: function() {
    return this.reference.pseudoClass;
  },
  getFunctions: function() {
    return this.reference.functions;
  },
  getRules: function() {
    return this.reference.rules;
  },
  reference: {
    "attributes": {
      "all": {
        "isParent": false,
        "values": [
          "unset",
          "inherit"
        ],
        "defaultValue": [
          "initial"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "No",
            "Opera": "24+"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "No",
            "Opera Mobile": "No",
            "Chrome for Android": "No",
            "Firefox for Android": "27+",
            "IE Mobile": "No"
          }
        }
      },
      "animation": {
        "isParent": true,
        "children": {
          "names": [
            "animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-fill-mode animation-play-state"
          ],
          "childrenDefaultValues": {
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
        "defaultValue": [
          "none 0s ease 0s 1 normal none running"
        ],
        "types": {},
        "supports": {
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
      "animation-delay": {
        "isParent": false,
        "values": [
          "<time>"
        ],
        "defaultValue": [
          "0s"
        ],
        "types": {
          "<time>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(ms|s)$",
            "units": [
              "s",
              "ms"
            ]
          }
        },
        "supports": {
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
      "direction": {
        "isParent": false,
        "values": [
          "rtl"
        ],
        "defaultValue": [
          "ltr"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "animation-direction": {
        "isParent": false,
        "values": [
          "reverse",
          "alternate-reverse",
          "alternate"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
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
      "animation-duration": {
        "isParent": false,
        "values": [
          "<time>"
        ],
        "defaultValue": [
          "0s"
        ],
        "types": {
          "<time>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(ms|s)$",
            "units": [
              "s",
              "ms"
            ]
          }
        },
        "supports": {
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
      "animation-fill-mode": {
        "isParent": false,
        "values": [
          "forwards",
          "both",
          "backwards"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
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
      "animation-iteration-count": {
        "isParent": false,
        "values": [
          "infinite",
          "<number>"
        ],
        "defaultValue": [
          "1"
        ],
        "types": {
          "<number>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?$",
            "units": []
          }
        },
        "supports": {
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
      "animation-name": {
        "isParent": false,
        "values": [
          "[ custom identifier ]"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
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
      "animation-timing-function": {
        "isParent": false,
        "values": [
          "steps(<integer>, start)",
          "steps(<integer>, end)",
          "step-start",
          "step-end",
          "linear",
          "ease-out",
          "ease-in-out",
          "ease-in",
          "cubic-bezier(<number>, <number>, <number>, <number>)"
        ],
        "defaultValue": [
          "ease"
        ],
        "types": {
          "<integer>": {
            "reTest": "^[+-]?\\d+$",
            "units": []
          },
          "<number>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?$",
            "units": []
          }
        },
        "supports": {
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
      "animation-play-state": {
        "isParent": false,
        "values": [
          "paused"
        ],
        "defaultValue": [
          "running"
        ],
        "types": {},
        "supports": {
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
      "visibility": {
        "isParent": false,
        "values": [
          "hidden",
          "collapse"
        ],
        "defaultValue": [
          "visible"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "backface-visibility": {
        "isParent": false,
        "values": [
          "hidden"
        ],
        "defaultValue": [
          "visible"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "10+",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "15+"
          },
          "mobiles": {
            "iOS Safari": "6.1+",
            "Android Browser": "4+",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "10+"
          }
        }
      },
      "background": {
        "isParent": true,
        "children": {
          "names": [
            "background-color background-image background-repeat background-attachment background-position",
            "background-size background-origin background-clip"
          ],
          "childrenDefaultValues": {
            "background-color": "transparent",
            "background-image": "none",
            "background-repeat": "repeat",
            "background-attachment": "scroll",
            "background-position": "0% 0%",
            "background-size": "auto",
            "background-origin": "padding-box",
            "background-clip": "border-box"
          }
        },
        "values": [],
        "defaultValue": [
          "transparent none repeat scroll 0% 0%",
          "auto padding-box border-box"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "background-attachment": {
        "isParent": false,
        "values": [
          "local",
          "fixed"
        ],
        "defaultValue": [
          "scroll"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "background-blend-mode": {
        "isParent": false,
        "values": [
          "soft-light",
          "screen",
          "saturation",
          "overlay",
          "multiply",
          "luminosity",
          "lighten",
          "hue",
          "hard-light",
          "exclusion",
          "difference",
          "darken",
          "color-dodge",
          "color-burn",
          "color"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "7.1+",
            "Opera": "22+"
          },
          "mobiles": {
            "iOS Safari": "8+",
            "Android Browser": "No",
            "Opera Mobile": "+",
            "Chrome for Android": "No",
            "Firefox for Android": "30+",
            "IE Mobile": "No"
          }
        }
      },
      "color": {
        "isParent": false,
        "values": [
          "<color>"
        ],
        "defaultValue": [
          "[initial value depends on the user agent]"
        ],
        "types": {
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "background-color": {
        "isParent": false,
        "values": [
          "<color>"
        ],
        "defaultValue": [
          "transparent"
        ],
        "types": {
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "clip": {
        "isParent": false,
        "values": [
          "rect(<length>, <length>, <length>, <length>)",
          "inset(<length>, <length>, <length>, <length>)"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "clip-path": {
        "isParent": false,
        "values": [
          "view-box",
          "stroke-box",
          "fill-box",
          "<url>",
          "<shape-box>",
          "<basic-shape>"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "No",
            "Opera": "No"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "No",
            "Opera Mobile": "No",
            "Chrome for Android": "No",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "background-clip": {
        "isParent": false,
        "values": [
          "padding-box",
          "content-box"
        ],
        "defaultValue": [
          "border-box"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "Yes",
            "Opera": "10.5+"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "background-image": {
        "isParent": false,
        "values": [
          "url(\"path/file.png\")",
          "<repeating-gradient>",
          "<radial-gradient>",
          "<linear-gradient>",
          "<image-function>"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "background-origin": {
        "isParent": false,
        "values": [
          "content-box",
          "border-box"
        ],
        "defaultValue": [
          "padding-box"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "Yes",
            "Opera": "10.5+"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "position": {
        "isParent": false,
        "values": [
          "sticky",
          "relative",
          "page",
          "fixed",
          "center",
          "absolute"
        ],
        "defaultValue": [
          "static"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "background-position": {
        "isParent": false,
        "values": [
          "right bottom",
          "left top",
          "center center",
          "<percentage> <length>"
        ],
        "defaultValue": [
          "0% 0%"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "background-repeat": {
        "isParent": false,
        "values": [
          "space",
          "round",
          "repeat-y",
          "repeat-x",
          "repeat no-repeat",
          "no-repeat"
        ],
        "defaultValue": [
          "repeat"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "background-size": {
        "isParent": false,
        "values": [
          "cover",
          "contain",
          "auto <percentage>",
          "<percentage> <length>",
          "<percentage>",
          "<length> auto",
          "<length> <percentage>",
          "<length>"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "Yes",
            "Opera": "10.5+"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "order": {
        "isParent": false,
        "values": [
          "<integer>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<integer>": {
            "reTest": "^[+-]?\\d+$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "6+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "?",
            "Opera Mobile": "+",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "border": {
        "isParent": true,
        "children": {
          "names": [
            "border-width border-style border-color"
          ],
          "childrenDefaultValues": {
            "border-width": "medium",
            "border-style": "none",
            "border-color": "<color>"
          }
        },
        "values": [],
        "defaultValue": [
          "medium none <color>"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-collapse": {
        "isParent": false,
        "values": [
          "collapse"
        ],
        "defaultValue": [
          "separate"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-color": {
        "isParent": false,
        "values": [
          "transparent",
          "<color>"
        ],
        "defaultValue": [
          "<color>"
        ],
        "types": {
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "top": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-top": {
        "isParent": true,
        "children": {
          "names": [
            "border-width border-style border-color"
          ],
          "childrenDefaultValues": {
            "border-width": "medium",
            "border-style": "none",
            "border-color": "<color>"
          }
        },
        "values": [],
        "defaultValue": [
          "medium none <color>"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-top-color": {
        "isParent": false,
        "values": [
          "transparent",
          "<color>"
        ],
        "defaultValue": [
          "<color>"
        ],
        "types": {
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "right": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-right": {
        "isParent": true,
        "children": {
          "names": [
            "border-width border-style border-color"
          ],
          "childrenDefaultValues": {
            "border-width": "medium",
            "border-style": "none",
            "border-color": "<color>"
          }
        },
        "values": [],
        "defaultValue": [
          "medium none <color>"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-right-color": {
        "isParent": false,
        "values": [
          "transparent",
          "<color>"
        ],
        "defaultValue": [
          "<color>"
        ],
        "types": {
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "bottom": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-bottom": {
        "isParent": true,
        "children": {
          "names": [
            "border-width border-style border-color"
          ],
          "childrenDefaultValues": {
            "border-width": "medium",
            "border-style": "none",
            "border-color": "<color>"
          }
        },
        "values": [],
        "defaultValue": [
          "medium none <color>"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-bottom-color": {
        "isParent": false,
        "values": [
          "transparent",
          "<color>"
        ],
        "defaultValue": [
          "<color>"
        ],
        "types": {
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "left": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-left": {
        "isParent": true,
        "children": {
          "names": [
            "border-width border-style border-color"
          ],
          "childrenDefaultValues": {
            "border-width": "medium",
            "border-style": "none",
            "border-color": "<color>"
          }
        },
        "values": [],
        "defaultValue": [
          "medium none <color>"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-left-color": {
        "isParent": false,
        "values": [
          "transparent",
          "<color>"
        ],
        "defaultValue": [
          "<color>"
        ],
        "types": {
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-radius": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length> <length> <length> <length>",
          "<length> / <percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-top-left-radius": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-top-right-radius": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-bottom-left-radius": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-bottom-right-radius": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-image": {
        "isParent": true,
        "children": {
          "names": [
            "border-image-source border-image-slice",
            "border-image-width border-image-width",
            "border-image-outset border-image-repeat"
          ],
          "childrenDefaultValues": {
            "border-image-source": "none",
            "border-image-slice": "100%",
            "border-image-width": "1",
            "border-image-outset": "0",
            "border-image-repeat": "stretch"
          }
        },
        "values": [],
        "defaultValue": [
          "none 100%",
          "1 1",
          "0 stretch"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "5.1+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "border-image-source": {
        "isParent": false,
        "values": [
          "url(\"path/file.png\")"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "6+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "4.4+",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "border-image-slice": {
        "isParent": false,
        "values": [
          "[ Up to four space-separated <number> or <percentage> values; the optional 'fill' keyword can be included after the other values are declared ]"
        ],
        "defaultValue": [
          "100%"
        ],
        "types": {
          "<number>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?$",
            "units": []
          },
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "6+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "4.4+",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "width": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-image-width": {
        "isParent": false,
        "values": [
          "[ Up to four space-separated <length>, <percentage>, or <number> values for top, right, bottom, and left; one or more values can be 'auto' ]"
        ],
        "defaultValue": [
          "1"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          },
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<number>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "6+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "4.4+",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "border-image-outset": {
        "isParent": false,
        "values": [
          "[ Up to four space-separated <length> or <number> values defining outsets for top, right, bottom, and left sides ]"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          },
          "<number>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "6+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "4.4+",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "border-image-repeat": {
        "isParent": false,
        "values": [
          "space",
          "round",
          "repeat"
        ],
        "defaultValue": [
          "stretch"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "6+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "4.4+",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "border-spacing": {
        "isParent": false,
        "values": [
          "<length> <length>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "8+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-style": {
        "isParent": false,
        "values": [
          "solid",
          "ridge",
          "outset",
          "inset",
          "hidden",
          "groove",
          "double",
          "dotted",
          "dashed"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-top-style": {
        "isParent": false,
        "values": [
          "solid",
          "ridge",
          "outset",
          "inset",
          "hidden",
          "groove",
          "double",
          "dotted",
          "dashed"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-right-style": {
        "isParent": false,
        "values": [
          "solid",
          "ridge",
          "outset",
          "inset",
          "hidden",
          "groove",
          "double",
          "dotted",
          "dashed"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-bottom-style": {
        "isParent": false,
        "values": [
          "solid",
          "ridge",
          "outset",
          "inset",
          "hidden",
          "groove",
          "double",
          "dotted",
          "dashed"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-left-style": {
        "isParent": false,
        "values": [
          "solid",
          "ridge",
          "outset",
          "inset",
          "hidden",
          "groove",
          "double",
          "dotted",
          "dashed"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-width": {
        "isParent": false,
        "values": [
          "thin",
          "thick",
          "<length>"
        ],
        "defaultValue": [
          "medium"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-top-width": {
        "isParent": false,
        "values": [
          "thin",
          "thick",
          "<length>"
        ],
        "defaultValue": [
          "medium"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-right-width": {
        "isParent": false,
        "values": [
          "thin",
          "thick",
          "<length>"
        ],
        "defaultValue": [
          "medium"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-bottom-width": {
        "isParent": false,
        "values": [
          "thin",
          "thick",
          "<length>"
        ],
        "defaultValue": [
          "medium"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "border-left-width": {
        "isParent": false,
        "values": [
          "thin",
          "thick",
          "<length>"
        ],
        "defaultValue": [
          "medium"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "box-decoration-break": {
        "isParent": false,
        "values": [
          "clone"
        ],
        "defaultValue": [
          "slice"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "32+",
            "IE Mobile": "?"
          }
        }
      },
      "box-shadow": {
        "isParent": false,
        "values": [
          "<length> <length> <length> <length> <color> inset"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          },
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "box-sizing": {
        "isParent": false,
        "values": [
          "padding-box",
          "border-box"
        ],
        "defaultValue": [
          "content-box"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "break-before": {
        "isParent": false,
        "values": [
          "right",
          "page",
          "left",
          "column",
          "avoid-page",
          "avoid-column",
          "avoid",
          "always"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "No",
            "Firefox": "No",
            "Internet Explorer": "10+",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "No",
            "Opera Mobile": "No",
            "Chrome for Android": "No",
            "Firefox for Android": "No",
            "IE Mobile": "?"
          }
        }
      },
      "break-after": {
        "isParent": false,
        "values": [
          "right",
          "page",
          "left",
          "column",
          "avoid-page",
          "avoid-column",
          "avoid",
          "always"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "No",
            "Firefox": "No",
            "Internet Explorer": "10+",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "No",
            "Opera Mobile": "No",
            "Chrome for Android": "No",
            "Firefox for Android": "No",
            "IE Mobile": "?"
          }
        }
      },
      "break-inside": {
        "isParent": false,
        "values": [
          "avoid-page",
          "avoid-column",
          "avoid"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "No",
            "Firefox": "No",
            "Internet Explorer": "10+",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "No",
            "Opera Mobile": "No",
            "Chrome for Android": "No",
            "Firefox for Android": "No",
            "IE Mobile": "?"
          }
        }
      },
      "caption-side": {
        "isParent": false,
        "values": [
          "bottom"
        ],
        "defaultValue": [
          "top"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "8+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "clear": {
        "isParent": false,
        "values": [
          "right",
          "left",
          "both"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "clear-after": {
        "isParent": false,
        "values": [
          "top",
          "start",
          "right",
          "outside",
          "left",
          "inside",
          "end",
          "descendants",
          "bottom",
          "both"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "?",
            "Internet Explorer": "?",
            "Safari": "?",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "column-fill": {
        "isParent": false,
        "values": [
          "auto"
        ],
        "defaultValue": [
          "balance"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "column-span": {
        "isParent": false,
        "values": [
          "all"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "No",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "No",
            "IE Mobile": "Yes"
          }
        }
      },
      "column-width": {
        "isParent": false,
        "values": [
          "<length>"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "column-count": {
        "isParent": false,
        "values": [
          "<integer>"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {
          "<integer>": {
            "reTest": "^[+-]?\\d+$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "column-gap": {
        "isParent": false,
        "values": [
          "<length>"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "column-rule": {
        "isParent": true,
        "children": {
          "names": [
            "column-rule-width column-rule-style column-rule-color"
          ],
          "childrenDefaultValues": {
            "column-rule-width": "medium",
            "column-rule-style": "none",
            "column-rule-color": "[Initial value depends on the user agent]"
          }
        },
        "values": [],
        "defaultValue": [
          "medium none [Initial value depends on the user agent]"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "column-rule-color": {
        "isParent": false,
        "values": [
          "<color>"
        ],
        "defaultValue": [
          "[Initial value depends on the user agent]"
        ],
        "types": {
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "column-rule-style": {
        "isParent": false,
        "values": [
          "solid",
          "ridge",
          "outset",
          "inset",
          "hidden",
          "groove",
          "double",
          "dotted",
          "dashed"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "column-rule-width": {
        "isParent": false,
        "values": [
          "thin",
          "thick",
          "<length>"
        ],
        "defaultValue": [
          "medium"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "columns": {
        "isParent": true,
        "children": {
          "names": [
            "column-width column-count"
          ],
          "childrenDefaultValues": {
            "column-width": "auto",
            "column-count": "auto"
          }
        },
        "values": [],
        "defaultValue": [
          "auto auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "content": {
        "isParent": false,
        "values": [
          "open-quote",
          "none",
          "no-open-quote",
          "no-close-quote",
          "icon",
          "close-quote",
          "attr(<identifier>",
          "<url>",
          "<string>",
          "<counter>"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "8+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "counter-increment": {
        "isParent": false,
        "values": [
          "<identifier> <integer>"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {
          "<integer>": {
            "reTest": "^[+-]?\\d+$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "8+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "counter-reset": {
        "isParent": false,
        "values": [
          "<identifier> <integer>"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {
          "<integer>": {
            "reTest": "^[+-]?\\d+$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "8+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "cursor": {
        "isParent": false,
        "values": [
          "zoom-out",
          "zoom-in",
          "wait",
          "w-resize",
          "vertical-text",
          "url(\"path/file.png\")",
          "text",
          "sw-resize",
          "se-resize",
          "s-resize",
          "row-resize",
          "progress",
          "pointer",
          "nwse-resize",
          "nw-resize",
          "ns-resize",
          "not-allowed",
          "none",
          "no-drop",
          "nesw-resize",
          "ne-resize",
          "n-resize",
          "move",
          "help",
          "ew-resize",
          "e-resize",
          "default",
          "crosshair",
          "copy",
          "context-menu",
          "col-resize",
          "cell",
          "all-scroll",
          "alias"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "n/a",
            "Android Browser": "n/a",
            "Opera Mobile": "+",
            "Chrome for Android": "n/a",
            "Firefox for Android": "n/a",
            "IE Mobile": "n/a"
          }
        }
      },
      "display": {
        "isParent": false,
        "values": [
          "table-row-group",
          "table-row",
          "table-header-group",
          "table-footer-group",
          "table-column-group",
          "table-column",
          "table-cell",
          "table-caption",
          "table",
          "run-in",
          "run-in",
          "none",
          "list-item",
          "inline-table",
          "inline-flex",
          "inline-block",
          "flex",
          "container",
          "compact",
          "block"
        ],
        "defaultValue": [
          "inline"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "empty-cells": {
        "isParent": false,
        "values": [
          "hide"
        ],
        "defaultValue": [
          "show"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "8+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "float": {
        "isParent": false,
        "values": [
          "right",
          "left"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "flex": {
        "isParent": true,
        "children": {
          "names": [
            "flex-grow flex-shrink flex-basis"
          ],
          "childrenDefaultValues": {
            "flex-grow": "0",
            "flex-shrink": "1",
            "flex-basis": "auto"
          }
        },
        "values": [
          "none"
        ],
        "defaultValue": [
          "0 1 auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "21+",
            "Firefox": "20+",
            "Internet Explorer": "10+",
            "Safari": "6.1+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "?",
            "IE Mobile": "11+"
          }
        }
      },
      "flex-basis": {
        "isParent": false,
        "values": [
          "<length>"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "7+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "flex-direction": {
        "isParent": false,
        "values": [
          "row-reverse",
          "column-reverse",
          "column"
        ],
        "defaultValue": [
          "row"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "7+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "7+",
            "Android Browser": "4.4+",
            "Opera Mobile": "+",
            "Chrome for Android": "Yes",
            "Firefox for Android": "No",
            "IE Mobile": "No"
          }
        }
      },
      "flex-flow": {
        "isParent": true,
        "children": {
          "names": [
            "flex-direction flex-wrap"
          ],
          "childrenDefaultValues": {
            "flex-direction": "row",
            "flex-wrap": "nowrap"
          }
        },
        "values": [],
        "defaultValue": [
          "row nowrap"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "6.1+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "7.1+",
            "Android Browser": "?",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "11+"
          }
        }
      },
      "flex-grow": {
        "isParent": false,
        "values": [
          "<number>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<number>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "6.1+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "flex-shrink": {
        "isParent": false,
        "values": [
          "<number>"
        ],
        "defaultValue": [
          "1"
        ],
        "types": {
          "<number>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "6.1+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "flex-wrap": {
        "isParent": false,
        "values": [
          "wrap-reverse",
          "wrap"
        ],
        "defaultValue": [
          "nowrap"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "6.1+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "7+",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "11+"
          }
        }
      },
      "align-items": {
        "isParent": false,
        "values": [
          "flex-start",
          "flex-end",
          "center",
          "baseline"
        ],
        "defaultValue": [
          "stretch"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "7+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "7+",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "align-self": {
        "isParent": false,
        "values": [
          "stretch",
          "flex-start",
          "flex-end",
          "center",
          "baseline"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "align-content": {
        "isParent": false,
        "values": [
          "space-between",
          "space-around",
          "flex-start",
          "flex-end",
          "center"
        ],
        "defaultValue": [
          "stretch"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "justify-content": {
        "isParent": false,
        "values": [
          "space-between",
          "space-around",
          "flex-end",
          "center"
        ],
        "defaultValue": [
          "flex-start"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "?",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "?",
            "IE Mobile": "No"
          }
        }
      },
      "filter": {
        "isParent": false,
        "values": [
          "sepia(<number> <percentage>)",
          "saturate(<number> <percentage>)",
          "opacity(<number> <percentage>)",
          "invert(<number> <percentage>)",
          "hue-rotate(<angle>)",
          "grayscale(<number> <percentage>)",
          "drop-shadow(<length> <color>)",
          "contrast(<number> <percentage>)",
          "brightness(<number> <percentage>)",
          "blur(<length>)",
          "<url>"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {
          "<number>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?$",
            "units": []
          },
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<angle>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(deg|grad|rad|turn)$",
            "units": [
              "deg",
              "grad",
              "rad",
              "turn"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          },
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "font": {
        "isParent": true,
        "children": {
          "names": [
            "font-style font-variant font-weight font-stretch font-size",
            "line-height font-family"
          ],
          "childrenDefaultValues": {
            "font-style": "normal",
            "font-variant": "normal",
            "font-weight": "normal",
            "font-stretch": "normal",
            "font-size": "medium",
            "line-height": "normal",
            "font-family": "[Initial value depends on the user agent]"
          }
        },
        "values": [],
        "defaultValue": [
          "normal normal normal normal medium",
          "normal [Initial value depends on the user agent]"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "font-family": {
        "isParent": false,
        "values": [
          "<family-name>"
        ],
        "defaultValue": [
          "[Initial value depends on the user agent]"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "font-feature-settings": {
        "isParent": false,
        "values": [
          "<feature-tag-value>"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "?",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "font-size": {
        "isParent": false,
        "values": [
          "xx-small",
          "xx-large",
          "x-small",
          "x-large",
          "smaller",
          "small",
          "larger",
          "large",
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "medium"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "font-stretch": {
        "isParent": false,
        "values": [
          "ultra-expanded",
          "ultra-condensed",
          "semi-expanded",
          "semi-condensed",
          "extra-expanded",
          "extra-condensed",
          "expanded",
          "condensed"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "No",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "No",
            "Opera": "No"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "No",
            "Opera Mobile": "No",
            "Chrome for Android": "?",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "font-size-adjust": {
        "isParent": false,
        "values": [
          "<number>"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {
          "<number>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "No",
            "Opera": "No"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "?",
            "Opera Mobile": "No",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "font-synthesis": {
        "isParent": false,
        "values": [
          "weight",
          "style",
          "none"
        ],
        "defaultValue": [
          "weight style"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "Yes",
            "Internet Explorer": "?",
            "Safari": "?",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "font-kerning": {
        "isParent": false,
        "values": [
          "normal",
          "none"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "7+",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "font-variant": {
        "isParent": false,
        "values": [
          "unicase",
          "titling-caps",
          "small-caps",
          "petite-caps",
          "all-small-caps",
          "all-petite-caps"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "font-variant-caps": {
        "isParent": false,
        "values": [
          "unicase",
          "titling-caps",
          "small-caps",
          "petite-caps",
          "all-small-caps",
          "all-petite-caps"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "Yes",
            "Internet Explorer": "?",
            "Safari": "?",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "font-style": {
        "isParent": false,
        "values": [
          "oblique",
          "italic"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "font-weight": {
        "isParent": false,
        "values": [
          "lighter",
          "bolder",
          "bold",
          "900",
          "800",
          "700",
          "600",
          "500",
          "400",
          "300",
          "200",
          "100"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "hanging-punctuation": {
        "isParent": false,
        "values": [
          "last force-end",
          "last allow-end",
          "last",
          "force-end",
          "first force-end",
          "first allow-end",
          "first",
          "allow-end"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "?",
            "Internet Explorer": "?",
            "Safari": "?",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "height": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "hyphens": {
        "isParent": false,
        "values": [
          "none",
          "auto"
        ],
        "defaultValue": [
          "manual"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "No"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "4+",
            "Opera Mobile": "No",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "image-rendering": {
        "isParent": false,
        "values": [
          "pixelated",
          "crisp-edges"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "?",
            "Internet Explorer": "?",
            "Safari": "?",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "Yes",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "image-resolution": {
        "isParent": false,
        "values": [
          "snap",
          "from-image"
        ],
        "defaultValue": [
          "1dppx"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "?",
            "Internet Explorer": "?",
            "Safari": "?",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "image-orientation": {
        "isParent": false,
        "values": [
          "from-image",
          "<angle> flip",
          "<angle>"
        ],
        "defaultValue": [
          "0deg"
        ],
        "types": {
          "<angle>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(deg|grad|rad|turn)$",
            "units": [
              "deg",
              "grad",
              "rad",
              "turn"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "No",
            "Firefox": "26+",
            "Internet Explorer": "No",
            "Safari": "No",
            "Opera": "No"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "No",
            "Opera Mobile": "No",
            "Chrome for Android": "No",
            "Firefox for Android": "26+",
            "IE Mobile": "No"
          }
        }
      },
      "isolation": {
        "isParent": false,
        "values": [
          "isolate"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "?",
            "Safari": "?",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "Yes",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "letter-spacing": {
        "isParent": false,
        "values": [
          "<length>"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "line-break": {
        "isParent": false,
        "values": [
          "strict",
          "normal",
          "loose"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "?",
            "Internet Explorer": "?",
            "Safari": "?",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "line-height": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<number>",
          "<length>"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<number>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?$",
            "units": []
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "list-style": {
        "isParent": true,
        "children": {
          "names": [
            "list-style-type list-style-position list-style-image"
          ],
          "childrenDefaultValues": {
            "list-style-type": "disc",
            "list-style-position": "outside",
            "list-style-image": "none"
          }
        },
        "values": [],
        "defaultValue": [
          "disc outside none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "list-style-image": {
        "isParent": false,
        "values": [
          "<url>"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "list-style-position": {
        "isParent": false,
        "values": [
          "inside"
        ],
        "defaultValue": [
          "outside"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "list-style-type": {
        "isParent": false,
        "values": [
          "upper-roman",
          "upper-latin",
          "upper-alpha",
          "square",
          "none",
          "lower-roman",
          "lower-latin",
          "lower-greek",
          "lower-alpha",
          "georgian",
          "decimal-leading-zero",
          "decimal",
          "circle",
          "armenian"
        ],
        "defaultValue": [
          "disc"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "margin": {
        "isParent": true,
        "children": {
          "names": [
            "margin-top margin-right margin-bottom margin-left"
          ],
          "childrenDefaultValues": {
            "margin-top": "0",
            "margin-right": "0",
            "margin-bottom": "0",
            "margin-left": "0"
          }
        },
        "values": [],
        "defaultValue": [
          "0 0 0 0"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "margin-left": {
        "isParent": false,
        "values": [
          "auto",
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "margin-right": {
        "isParent": false,
        "values": [
          "auto",
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "margin-top": {
        "isParent": false,
        "values": [
          "auto",
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "margin-bottom": {
        "isParent": false,
        "values": [
          "auto",
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "mask-type": {
        "isParent": false,
        "values": [
          "alpha"
        ],
        "defaultValue": [
          "luminance"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "7+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "No",
            "Opera Mobile": "Yes",
            "Chrome for Android": "No",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "max-height": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "7+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "max-width": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "7+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "min-height": {
        "isParent": false,
        "values": [
          "auto",
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "7+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "min-width": {
        "isParent": false,
        "values": [
          "auto",
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "7+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "mix-blend-mode": {
        "isParent": false,
        "values": [
          "soft-light",
          "screen",
          "saturation",
          "overlay",
          "multiply",
          "luminosity",
          "lighten",
          "hue",
          "hard-light",
          "exclusion",
          "difference",
          "darken",
          "color-dodge",
          "color-burn",
          "color"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "8+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "8+",
            "Android Browser": "Yes",
            "Opera Mobile": "?",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "object-fit": {
        "isParent": false,
        "values": [
          "scale-down",
          "none",
          "cover",
          "contain"
        ],
        "defaultValue": [
          "fill"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "object-position": {
        "isParent": false,
        "values": [
          "right bottom",
          "left top",
          "center center",
          "<percentage> <length>"
        ],
        "defaultValue": [
          "50% 50%"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "opacity": {
        "isParent": false,
        "values": [
          "<number>"
        ],
        "defaultValue": [
          "1"
        ],
        "types": {
          "<number>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "orphans": {
        "isParent": false,
        "values": [
          "<integer>"
        ],
        "defaultValue": [
          "2"
        ],
        "types": {
          "<integer>": {
            "reTest": "^[+-]?\\d+$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "25+",
            "Firefox": "No",
            "Internet Explorer": "8+",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "25+",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "outline": {
        "isParent": true,
        "children": {
          "names": [
            "outline-color outline-style outline-width"
          ],
          "childrenDefaultValues": {
            "outline-color": "invert",
            "outline-style": "none",
            "outline-width": "medium"
          }
        },
        "values": [],
        "defaultValue": [
          "invert none medium"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "8+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "outline-color": {
        "isParent": false,
        "values": [
          "<color>"
        ],
        "defaultValue": [
          "invert"
        ],
        "types": {
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "8+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "outline-offset": {
        "isParent": false,
        "values": [
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "outline-style": {
        "isParent": false,
        "values": [
          "solid",
          "ridge",
          "outset",
          "inset",
          "groove",
          "double",
          "dotted",
          "dashed",
          "auto"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "8+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "outline-width": {
        "isParent": false,
        "values": [
          "thin",
          "thick",
          "<length>"
        ],
        "defaultValue": [
          "medium"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "8+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "overflow": {
        "isParent": false,
        "values": [
          "scroll",
          "hidden",
          "auto"
        ],
        "defaultValue": [
          "visible"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "overflow-x": {
        "isParent": false,
        "values": [
          "scroll",
          "hidden",
          "auto"
        ],
        "defaultValue": [
          "visible"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "overflow-y": {
        "isParent": false,
        "values": [
          "scroll",
          "hidden",
          "auto"
        ],
        "defaultValue": [
          "visible"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "overflow-wrap": {
        "isParent": false,
        "values": [
          "break-word"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "padding": {
        "isParent": true,
        "children": {
          "names": [
            "padding-top padding-right padding-bottom padding-left"
          ],
          "childrenDefaultValues": {
            "padding-top": "0",
            "padding-right": "0",
            "padding-bottom": "0",
            "padding-left": "0"
          }
        },
        "values": [],
        "defaultValue": [
          "0 0 0 0"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "padding-top": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "padding-bottom": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "padding-left": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "padding-right": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "page-break-after": {
        "isParent": false,
        "values": [
          "right",
          "left",
          "avoid",
          "always"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "page-break-before": {
        "isParent": false,
        "values": [
          "right",
          "left",
          "avoid",
          "always"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "page-break-inside": {
        "isParent": false,
        "values": [
          "avoid"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "19+",
            "Internet Explorer": "8+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "19+",
            "IE Mobile": "?"
          }
        }
      },
      "perspective": {
        "isParent": false,
        "values": [
          "<length>"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "15+"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "3+",
            "Opera Mobile": "+",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "10+"
          }
        }
      },
      "perspective-origin": {
        "isParent": false,
        "values": [
          "top",
          "right",
          "left",
          "center",
          "bottom",
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "50% 50%"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "15+"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "3+",
            "Opera Mobile": "+",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "10+"
          }
        }
      },
      "pointer-events": {
        "isParent": false,
        "values": [
          "none"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "11+",
            "Safari": "4+",
            "Opera": "15+"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "quotes": {
        "isParent": false,
        "values": [
          "none",
          "<string> <string>"
        ],
        "defaultValue": [
          "[Initial value depends on the user agent]"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "8+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "resize": {
        "isParent": false,
        "values": [
          "vertical",
          "horizontal",
          "both"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "7+",
            "Opera": "17+"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "No",
            "Opera Mobile": "No",
            "Chrome for Android": "No",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "scroll-behavior": {
        "isParent": false,
        "values": [
          "smooth"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "scroll-snap-coordinate": {
        "isParent": false,
        "values": [
          "right bottom",
          "margin-box",
          "left center",
          "border-box",
          "<percentage> <length>"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "Yes",
            "Internet Explorer": "?",
            "Safari": "?",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "scroll-snap-destination": {
        "isParent": false,
        "values": [
          "top bottom",
          "left right",
          "center center",
          "<length> <percentage>"
        ],
        "defaultValue": [
          "0px 0px"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          },
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "Yes",
            "Internet Explorer": "?",
            "Safari": "?",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "scroll-snap-type": {
        "isParent": false,
        "values": [
          "proximity",
          "mandatory"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "9+",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "9+",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "tab-size": {
        "isParent": false,
        "values": [
          "<length>",
          "<integer>"
        ],
        "defaultValue": [
          "8"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          },
          "<integer>": {
            "reTest": "^[+-]?\\d+$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "25+",
            "Internet Explorer": "No",
            "Safari": "7+",
            "Opera": "17+"
          },
          "mobiles": {
            "iOS Safari": "7+",
            "Android Browser": "4.4+",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "table-layout": {
        "isParent": false,
        "values": [
          "fixed"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "text-align": {
        "isParent": false,
        "values": [
          "start end",
          "start",
          "right",
          "match-parent",
          "left",
          "justify",
          "end",
          "center",
          "<string>"
        ],
        "defaultValue": [
          "[Initial value depends on the writing direction (ltr or rtl)]"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "text-align-last": {
        "isParent": false,
        "values": [
          "start",
          "right",
          "left",
          "justify",
          "end",
          "center"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "No",
            "Opera": "No"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "No",
            "Opera Mobile": "No",
            "Chrome for Android": "No",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "text-combine-upright": {
        "isParent": false,
        "values": [
          "digits <integer>",
          "all"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {
          "<integer>": {
            "reTest": "^[+-]?\\d+$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "No",
            "Internet Explorer": "11+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "text-decoration": {
        "isParent": true,
        "children": {
          "names": [
            "text-decoration-line text-decoration-style text-decoration-color"
          ],
          "childrenDefaultValues": {
            "text-decoration-line": "none",
            "text-decoration-style": "solid",
            "text-decoration-color": "<color>"
          }
        },
        "values": [],
        "defaultValue": [
          "none solid <color>"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "text-decoration-color": {
        "isParent": false,
        "values": [
          "<color>"
        ],
        "defaultValue": [
          "<color>"
        ],
        "types": {
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "Yes",
            "Internet Explorer": "?",
            "Safari": "Yes",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "8+",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "text-decoration-line": {
        "isParent": false,
        "values": [
          "underline",
          "overline",
          "line-through",
          "blink"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "No",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "7.1+",
            "Opera": "No"
          },
          "mobiles": {
            "iOS Safari": "8+",
            "Android Browser": "No",
            "Opera Mobile": "No",
            "Chrome for Android": "No",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "text-decoration-skip": {
        "isParent": false,
        "values": [
          "spaces",
          "objects",
          "ink",
          "edges",
          "box-decoration"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "?",
            "Internet Explorer": "?",
            "Safari": "?",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "text-decoration-style": {
        "isParent": false,
        "values": [
          "wavy",
          "double",
          "dotted",
          "dashed"
        ],
        "defaultValue": [
          "solid"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "No",
            "Opera": "15+"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "Yes",
            "Opera Mobile": "+",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "text-emphasis": {
        "isParent": true,
        "children": {
          "names": [
            "text-emphasis-style text-emphasis-color"
          ],
          "childrenDefaultValues": {
            "text-emphasis-style": "none",
            "text-emphasis-color": "<color>"
          }
        },
        "values": [],
        "defaultValue": [
          "none <color>"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "text-emphasis-style": {
        "isParent": false,
        "values": [
          "triangle",
          "sesame",
          "open",
          "filled",
          "double-circle",
          "dot",
          "circle",
          "<string>"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "text-emphasis-color": {
        "isParent": false,
        "values": [
          "<color>"
        ],
        "defaultValue": [
          "<color>"
        ],
        "types": {
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "text-emphasis-position": {
        "isParent": false,
        "values": [
          "over left",
          "below right",
          "below left"
        ],
        "defaultValue": [
          "over right"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "text-indent": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length> hanging each-line",
          "<length> hanging",
          "<length> each-line",
          "<length>"
        ],
        "defaultValue": [
          "0"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "text-justify": {
        "isParent": false,
        "values": [
          "none",
          "inter-word",
          "distribute"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "?",
            "Internet Explorer": "?",
            "Safari": "?",
            "Opera": "?"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "text-orientation": {
        "isParent": false,
        "values": [
          "use-glyph-orientation",
          "upright",
          "sideways-right",
          "sideways-left",
          "sideways"
        ],
        "defaultValue": [
          "mixed"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "?",
            "Firefox": "Yes",
            "Internet Explorer": "?",
            "Safari": "?",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "text-overflow": {
        "isParent": false,
        "values": [
          "ellipsis",
          "<string>"
        ],
        "defaultValue": [
          "clip"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "text-rendering": {
        "isParent": false,
        "values": [
          "optimizeSpeed",
          "optimizeLegibility",
          "geometricPrecision"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "?",
            "Firefox for Android": "?",
            "IE Mobile": "?"
          }
        }
      },
      "text-shadow": {
        "isParent": false,
        "values": [
          "<length> <length> <length> <color>"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          },
          "<color>": {
            "reTest": "(^#\\w{6}$)|(^#\\w{3}$)|(^\\w+$)",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "text-underline-position": {
        "isParent": false,
        "values": [
          "under right",
          "under left",
          "under",
          "right",
          "left"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "No",
            "Internet Explorer": "6+",
            "Safari": "No",
            "Opera": "No"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "No",
            "Opera Mobile": "No",
            "Chrome for Android": "No",
            "Firefox for Android": "No",
            "IE Mobile": "?"
          }
        }
      },
      "touch-action": {
        "isParent": false,
        "values": [
          "pan-y",
          "pan-y",
          "pan-x",
          "pan-up",
          "pan-right",
          "pan-left",
          "pan-down",
          "none",
          "manipulation"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "No",
            "Internet Explorer": "10+",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "?",
            "Android Browser": "Yes",
            "Opera Mobile": "?",
            "Chrome for Android": "Yes",
            "Firefox for Android": "?",
            "IE Mobile": "Yes"
          }
        }
      },
      "transform": {
        "isParent": false,
        "values": [
          "translateZ(<length>)",
          "translateY(<translation-value>)",
          "translateX(<translation-value>)",
          "translate3d(<translation-value>, <translation-value>, <length>)",
          "translate(<translation-value>, <translation-value>)",
          "skewY(<angle>)",
          "skewX(<angle>)",
          "scaleZ(<number>)",
          "scaleY(<number>)",
          "scaleX(<number>)",
          "scale3d(<number>, <number>, <number>)",
          "scale(<number>)",
          "rotateZ(<angle>)",
          "rotateY(<angle>)",
          "rotateX(<angle>)",
          "rotate3d(<number>, <number>, <number>, <angle>)",
          "rotate(<angle>)",
          "perspective(<length>)",
          "matrix3d([16 comma-separated <number> values])",
          "matrix([<number>, <number>, <number>, <number>, <number>, <number>])"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          },
          "<angle>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(deg|grad|rad|turn)$",
            "units": [
              "deg",
              "grad",
              "rad",
              "turn"
            ]
          },
          "<number>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "10+"
          }
        }
      },
      "transform-box": {
        "isParent": false,
        "values": [
          "view-box",
          "fill-box"
        ],
        "defaultValue": [
          "border-box"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "No",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "No",
            "Opera": "No"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "No",
            "Opera Mobile": "No",
            "Chrome for Android": "No",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "transform-origin": {
        "isParent": false,
        "values": [
          "top",
          "right",
          "left",
          "center",
          "bottom",
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "50% 50%"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "10+"
          }
        }
      },
      "transform-style": {
        "isParent": false,
        "values": [
          "preserve-3d"
        ],
        "defaultValue": [
          "flat"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "8.1+"
          }
        }
      },
      "text-transform": {
        "isParent": false,
        "values": [
          "uppercase",
          "lowercase",
          "full-width",
          "capitalize"
        ],
        "defaultValue": [
          "none"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "transition": {
        "isParent": true,
        "children": {
          "names": [
            "transition-property transition-duration transition-timing-function transition-delay"
          ],
          "childrenDefaultValues": {
            "transition-property": "all",
            "transition-duration": "0s",
            "transition-timing-function": "ease",
            "transition-delay": ""
          }
        },
        "values": [],
        "defaultValue": [
          "all 0s ease [transition-delay]"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "10+"
          }
        }
      },
      "transition-property": {
        "isParent": false,
        "values": [
          "none",
          "[ A comma-separated list of property names ]"
        ],
        "defaultValue": [
          "all"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "10+"
          }
        }
      },
      "transition-timing-function": {
        "isParent": false,
        "values": [
          "steps(<integer>, start)",
          "steps(<integer>, end)",
          "steps(<integer>)",
          "step-start",
          "step-end",
          "linear",
          "ease-out",
          "ease-in-out",
          "ease-in",
          "cubic-bezier(<number>, <number>, <number>, <number>)"
        ],
        "defaultValue": [
          "ease"
        ],
        "types": {
          "<integer>": {
            "reTest": "^[+-]?\\d+$",
            "units": []
          },
          "<number>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "10+"
          }
        }
      },
      "transition-duration": {
        "isParent": false,
        "values": [
          "<time>"
        ],
        "defaultValue": [
          "0s"
        ],
        "types": {
          "<time>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(ms|s)$",
            "units": [
              "s",
              "ms"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "10+",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "10+"
          }
        }
      },
      "unicode-bidi": {
        "isParent": false,
        "values": [
          "embed",
          "bidi-override"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "vertical-align": {
        "isParent": false,
        "values": [
          "top",
          "text-top",
          "text-bottom",
          "super",
          "sub",
          "middle",
          "bottom",
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "baseline"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "white-space": {
        "isParent": false,
        "values": [
          "pre-wrap",
          "pre-line",
          "pre",
          "nowrap"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "widows": {
        "isParent": false,
        "values": [
          "<integer>"
        ],
        "defaultValue": [
          "2"
        ],
        "types": {
          "<integer>": {
            "reTest": "^[+-]?\\d+$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "No",
            "Internet Explorer": "8+",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "No",
            "Opera Mobile": "?",
            "Chrome for Android": "No",
            "Firefox for Android": "No",
            "IE Mobile": "?"
          }
        }
      },
      "will-change": {
        "isParent": false,
        "values": [
          "scroll-position",
          "contents",
          "[ custom identifier ]"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "No",
            "Safari": "No",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "No",
            "Android Browser": "Yes",
            "Opera Mobile": "No",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "No"
          }
        }
      },
      "word-break": {
        "isParent": false,
        "values": [
          "keep-all",
          "break-all"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "No"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "No",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "word-spacing": {
        "isParent": false,
        "values": [
          "<percentage>",
          "<length>"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {
          "<percentage>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(%)$",
            "units": [
              "%"
            ]
          },
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "word-wrap": {
        "isParent": false,
        "values": [
          "break-word"
        ],
        "defaultValue": [
          "normal"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "writing-mode": {
        "isParent": false,
        "values": [
          "vertical-rl",
          "vertical-lr"
        ],
        "defaultValue": [
          "horizontal-tb"
        ],
        "types": {},
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "9+",
            "Safari": "8+",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "8+",
            "Android Browser": "?",
            "Opera Mobile": "?",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "?"
          }
        }
      },
      "z-index": {
        "isParent": false,
        "values": [
          "<integer>"
        ],
        "defaultValue": [
          "auto"
        ],
        "types": {
          "<integer>": {
            "reTest": "^[+-]?\\d+$",
            "units": []
          }
        },
        "supports": {
          "browsers": {
            "Chrome": "Yes",
            "Firefox": "Yes",
            "Internet Explorer": "Yes",
            "Safari": "Yes",
            "Opera": "Yes"
          },
          "mobiles": {
            "iOS Safari": "Yes",
            "Android Browser": "Yes",
            "Opera Mobile": "Yes",
            "Chrome for Android": "Yes",
            "Firefox for Android": "Yes",
            "IE Mobile": "Yes"
          }
        }
      },
      "help": {
        "isParent": false,
        "values": [
          "inherit",
          "initial"
        ],
        "defaultValue": [
          "<length>"
        ],
        "types": {
          "<length>": {
            "reTest": "^[+-]?\\d+(\\.\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)$",
            "units": [
              "em",
              "ex",
              "ch",
              "rem",
              "vw",
              "vh",
              "vmin",
              "vmax",
              "cm",
              "mm",
              "q",
              "in",
              "pc",
              "pt",
              "px"
            ]
          }
        },
        "supports": {
          "browsers": {},
          "mobiles": {}
        }
      }
    },
    "pseudoClass": [
      "::after",
      "::before",
      "::first-letter",
      "::first-line",
      "::placeholder",
      "::selection",
      ":active",
      ":blank",
      ":checked",
      ":default",
      ":dir()",
      ":disabled",
      ":empty",
      ":enabled",
      ":first",
      ":first-child",
      ":first-of-type",
      ":focus",
      ":fullscreen",
      ":hover",
      ":in-range",
      ":indeterminate",
      ":invalid",
      ":lang()",
      ":last-child",
      ":last-of-type",
      ":left",
      ":link",
      ":not()",
      ":nth-child()",
      ":nth-last-child()",
      ":nth-last-of-type()",
      ":nth-of-type()",
      ":only-child",
      ":only-of-type",
      ":optional",
      ":out-of-range",
      ":read-only",
      ":read-write",
      ":required",
      ":right",
      ":root",
      ":scope",
      ":target",
      ":valid",
      ":visited",
      "content"
    ],
    "functions": [
      "attr()",
      "calc()",
      "circle()",
      "ellipse()",
      "hsl()",
      "hsla()",
      "inset()",
      "linear-gradient()",
      "matrix()",
      "matrix3d()",
      "polygon()",
      "radial-gradient()",
      "repeating-linear-gradient()",
      "repeating-radial-gradient()",
      "rgb()",
      "rgba()",
      "rotate()",
      "rotate3d()",
      "rotateX()",
      "rotateY()",
      "rotateZ()",
      "scale()",
      "scale3d()",
      "scaleX()",
      "scaleY()",
      "scaleZ()",
      "skew()",
      "skewX()",
      "skewY()",
      "translate()",
      "translate3d()",
      "translateX()",
      "translateY()",
      "translateZ()"
    ],
    "rules": [
      "@charset",
      "@document",
      "@font-face",
      "@import",
      "@keyframes",
      "@media",
      "@namespace",
      "@page",
      "@supports"
    ]
  }

};