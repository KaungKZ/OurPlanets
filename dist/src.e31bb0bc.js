// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/@popperjs/core/lib/enums.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifierPhases = exports.afterWrite = exports.write = exports.beforeWrite = exports.afterMain = exports.main = exports.beforeMain = exports.afterRead = exports.read = exports.beforeRead = exports.placements = exports.variationPlacements = exports.reference = exports.popper = exports.viewport = exports.clippingParents = exports.end = exports.start = exports.basePlacements = exports.auto = exports.left = exports.right = exports.bottom = exports.top = void 0;
var top = 'top';
exports.top = top;
var bottom = 'bottom';
exports.bottom = bottom;
var right = 'right';
exports.right = right;
var left = 'left';
exports.left = left;
var auto = 'auto';
exports.auto = auto;
var basePlacements = [top, bottom, right, left];
exports.basePlacements = basePlacements;
var start = 'start';
exports.start = start;
var end = 'end';
exports.end = end;
var clippingParents = 'clippingParents';
exports.clippingParents = clippingParents;
var viewport = 'viewport';
exports.viewport = viewport;
var popper = 'popper';
exports.popper = popper;
var reference = 'reference';
exports.reference = reference;
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
exports.variationPlacements = variationPlacements;
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

exports.placements = placements;
var beforeRead = 'beforeRead';
exports.beforeRead = beforeRead;
var read = 'read';
exports.read = read;
var afterRead = 'afterRead'; // pure-logic modifiers

exports.afterRead = afterRead;
var beforeMain = 'beforeMain';
exports.beforeMain = beforeMain;
var main = 'main';
exports.main = main;
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

exports.afterMain = afterMain;
var beforeWrite = 'beforeWrite';
exports.beforeWrite = beforeWrite;
var write = 'write';
exports.write = write;
var afterWrite = 'afterWrite';
exports.afterWrite = afterWrite;
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
exports.modifierPhases = modifierPhases;
},{}],"../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNodeName;

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
},{}],"../node_modules/@popperjs/core/lib/dom-utils/getWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
},{}],"../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isElement = isElement;
exports.isHTMLElement = isHTMLElement;
exports.isShadowRoot = isShadowRoot;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isElement(node) {
  var OwnElement = (0, _getWindow.default)(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = (0, _getWindow.default)(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0, _getWindow.default)(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
},{"./getWindow.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"../node_modules/@popperjs/core/lib/modifiers/applyStyles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getNodeName = _interopRequireDefault(require("../dom-utils/getNodeName.js"));

var _instanceOf = require("../dom-utils/instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};
exports.default = _default;
},{"../dom-utils/getNodeName.js":"../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","../dom-utils/instanceOf.js":"../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"../node_modules/@popperjs/core/lib/utils/getBasePlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBasePlacement;

var _enums = require("../enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
},{"../enums.js":"../node_modules/@popperjs/core/lib/enums.js"}],"../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBoundingClientRect;

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
},{}],"../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLayoutRect;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  var clientRect = (0, _getBoundingClientRect.default)(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
},{"./getBoundingClientRect.js":"../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js"}],"../node_modules/@popperjs/core/lib/dom-utils/contains.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _instanceOf = require("./instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0, _instanceOf.isShadowRoot)(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
},{"./instanceOf.js":"../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getComputedStyle;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComputedStyle(element) {
  return (0, _getWindow.default)(element).getComputedStyle(element);
}
},{"./getWindow.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTableElement;

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0, _getNodeName.default)(element)) >= 0;
}
},{"./getNodeName.js":"../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js"}],"../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocumentElement;

var _instanceOf = require("./instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0, _instanceOf.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
},{"./instanceOf.js":"../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParentNode;

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _instanceOf = require("./instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getParentNode(element) {
  if ((0, _getNodeName.default)(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0, _instanceOf.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElement.default)(element) // fallback

  );
}
},{"./getNodeName.js":"../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./getDocumentElement.js":"../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./instanceOf.js":"../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOffsetParent;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _instanceOf = require("./instanceOf.js");

var _isTableElement = _interopRequireDefault(require("./isTableElement.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTrueOffsetParent(element) {
  if (!(0, _instanceOf.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0, _getComputedStyle.default)(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && (0, _instanceOf.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0, _getComputedStyle.default)(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = (0, _getParentNode.default)(element);

  while ((0, _instanceOf.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0, _getNodeName.default)(currentNode)) < 0) {
    var css = (0, _getComputedStyle.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0, _getWindow.default)(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0, _isTableElement.default)(offsetParent) && (0, _getComputedStyle.default)(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0, _getNodeName.default)(offsetParent) === 'html' || (0, _getNodeName.default)(offsetParent) === 'body' && (0, _getComputedStyle.default)(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
},{"./getWindow.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./getNodeName.js":"../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./getComputedStyle.js":"../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./instanceOf.js":"../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./isTableElement.js":"../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js","./getParentNode.js":"../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js"}],"../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMainAxisFromPlacement;

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
},{}],"../node_modules/@popperjs/core/lib/utils/math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = exports.min = exports.max = void 0;
var max = Math.max;
exports.max = max;
var min = Math.min;
exports.min = min;
var round = Math.round;
exports.round = round;
},{}],"../node_modules/@popperjs/core/lib/utils/within.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = within;

var _math = require("./math.js");

function within(min, value, max) {
  return (0, _math.max)(min, (0, _math.min)(value, max));
}
},{"./math.js":"../node_modules/@popperjs/core/lib/utils/math.js"}],"../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFreshSideObject;

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
},{}],"../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergePaddingObject;

var _getFreshSideObject = _interopRequireDefault(require("./getFreshSideObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0, _getFreshSideObject.default)(), paddingObject);
}
},{"./getFreshSideObject.js":"../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js"}],"../node_modules/@popperjs/core/lib/utils/expandToHashMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = expandToHashMap;

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
},{}],"../node_modules/@popperjs/core/lib/modifiers/arrow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));

var _contains = _interopRequireDefault(require("../dom-utils/contains.js"));

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));

var _within = _interopRequireDefault(require("../utils/within.js"));

var _mergePaddingObject = _interopRequireDefault(require("../utils/mergePaddingObject.js"));

var _expandToHashMap = _interopRequireDefault(require("../utils/expandToHashMap.js"));

var _enums = require("../enums.js");

var _instanceOf = require("../dom-utils/instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0, _getBasePlacement.default)(state.placement);
  var axis = (0, _getMainAxisFromPlacement.default)(basePlacement);
  var isVertical = [_enums.left, _enums.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0, _getLayoutRect.default)(arrowElement);
  var minProp = axis === 'y' ? _enums.top : _enums.left;
  var maxProp = axis === 'y' ? _enums.bottom : _enums.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0, _getOffsetParent.default)(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0, _within.default)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if ("development" !== "production") {
    if (!(0, _instanceOf.isHTMLElement)(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!(0, _contains.default)(state.elements.popper, arrowElement)) {
    if ("development" !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
exports.default = _default;
},{"../utils/getBasePlacement.js":"../node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../dom-utils/getLayoutRect.js":"../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","../dom-utils/contains.js":"../node_modules/@popperjs/core/lib/dom-utils/contains.js","../dom-utils/getOffsetParent.js":"../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../utils/getMainAxisFromPlacement.js":"../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../utils/within.js":"../node_modules/@popperjs/core/lib/utils/within.js","../utils/mergePaddingObject.js":"../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js","../utils/expandToHashMap.js":"../node_modules/@popperjs/core/lib/utils/expandToHashMap.js","../enums.js":"../node_modules/@popperjs/core/lib/enums.js","../dom-utils/instanceOf.js":"../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"../node_modules/@popperjs/core/lib/modifiers/computeStyles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapToStyles = mapToStyles;
exports.default = void 0;

var _enums = require("../enums.js");

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));

var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("../dom-utils/getComputedStyle.js"));

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0, _math.round)((0, _math.round)(x * dpr) / dpr) || 0,
    y: (0, _math.round)((0, _math.round)(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums.left;
  var sideY = _enums.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0, _getOffsetParent.default)(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0, _getWindow.default)(popper)) {
      offsetParent = (0, _getDocumentElement.default)(popper);

      if ((0, _getComputedStyle.default)(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums.top) {
      sideY = _enums.bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums.left) {
      sideX = _enums.right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if ("development" !== "production") {
    var transitionProperty = (0, _getComputedStyle.default)(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: (0, _getBasePlacement.default)(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};
exports.default = _default;
},{"../enums.js":"../node_modules/@popperjs/core/lib/enums.js","../dom-utils/getOffsetParent.js":"../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../dom-utils/getWindow.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindow.js","../dom-utils/getDocumentElement.js":"../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","../dom-utils/getComputedStyle.js":"../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","../utils/getBasePlacement.js":"../node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/math.js":"../node_modules/@popperjs/core/lib/utils/math.js"}],"../node_modules/@popperjs/core/lib/modifiers/eventListeners.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0, _getWindow.default)(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};
exports.default = _default;
},{"../dom-utils/getWindow.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOppositePlacement;
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};

function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
},{}],"../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOppositeVariationPlacement;
var hash = {
  start: 'end',
  end: 'start'
};

function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}
},{}],"../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindowScroll;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWindowScroll(node) {
  var win = (0, _getWindow.default)(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
},{"./getWindow.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindowScrollBarX;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0, _getBoundingClientRect.default)((0, _getDocumentElement.default)(element)).left + (0, _getWindowScroll.default)(element).scrollLeft;
}
},{"./getBoundingClientRect.js":"../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getDocumentElement.js":"../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getWindowScroll.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js"}],"../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getViewportRect;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getViewportRect(element) {
  var win = (0, _getWindow.default)(element);
  var html = (0, _getDocumentElement.default)(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0, _getWindowScrollBarX.default)(element),
    y: y
  };
}
},{"./getWindow.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./getDocumentElement.js":"../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getWindowScrollBarX.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js"}],"../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocumentRect;

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0, _getDocumentElement.default)(element);
  var winScroll = (0, _getWindowScroll.default)(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0, _math.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0, _math.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0, _getWindowScrollBarX.default)(element);
  var y = -winScroll.scrollTop;

  if ((0, _getComputedStyle.default)(body || html).direction === 'rtl') {
    x += (0, _math.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
},{"./getDocumentElement.js":"../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getComputedStyle.js":"../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./getWindowScrollBarX.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js","./getWindowScroll.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js","../utils/math.js":"../node_modules/@popperjs/core/lib/utils/math.js"}],"../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isScrollParent;

var _getComputedStyle2 = _interopRequireDefault(require("./getComputedStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0, _getComputedStyle2.default)(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
},{"./getComputedStyle.js":"../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js"}],"../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScrollParent;

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _instanceOf = require("./instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0, _getNodeName.default)(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0, _instanceOf.isHTMLElement)(node) && (0, _isScrollParent.default)(node)) {
    return node;
  }

  return getScrollParent((0, _getParentNode.default)(node));
}
},{"./getParentNode.js":"../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./isScrollParent.js":"../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js","./getNodeName.js":"../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./instanceOf.js":"../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listScrollParents;

var _getScrollParent = _interopRequireDefault(require("./getScrollParent.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0, _getScrollParent.default)(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0, _getWindow.default)(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0, _isScrollParent.default)(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0, _getParentNode.default)(target)));
}
},{"./getScrollParent.js":"../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js","./getParentNode.js":"../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./getWindow.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./isScrollParent.js":"../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js"}],"../node_modules/@popperjs/core/lib/utils/rectToClientRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rectToClientRect;

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
},{}],"../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClippingRect;

var _enums = require("../enums.js");

var _getViewportRect = _interopRequireDefault(require("./getViewportRect.js"));

var _getDocumentRect = _interopRequireDefault(require("./getDocumentRect.js"));

var _listScrollParents = _interopRequireDefault(require("./listScrollParents.js"));

var _getOffsetParent = _interopRequireDefault(require("./getOffsetParent.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _instanceOf = require("./instanceOf.js");

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _contains = _interopRequireDefault(require("./contains.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _rectToClientRect = _interopRequireDefault(require("../utils/rectToClientRect.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getInnerBoundingClientRect(element) {
  var rect = (0, _getBoundingClientRect.default)(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums.viewport ? (0, _rectToClientRect.default)((0, _getViewportRect.default)(element)) : (0, _instanceOf.isHTMLElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0, _rectToClientRect.default)((0, _getDocumentRect.default)((0, _getDocumentElement.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0, _listScrollParents.default)((0, _getParentNode.default)(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0, _getComputedStyle.default)(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0, _instanceOf.isHTMLElement)(element) ? (0, _getOffsetParent.default)(element) : element;

  if (!(0, _instanceOf.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0, _instanceOf.isElement)(clippingParent) && (0, _contains.default)(clippingParent, clipperElement) && (0, _getNodeName.default)(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = (0, _math.max)(rect.top, accRect.top);
    accRect.right = (0, _math.min)(rect.right, accRect.right);
    accRect.bottom = (0, _math.min)(rect.bottom, accRect.bottom);
    accRect.left = (0, _math.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
},{"../enums.js":"../node_modules/@popperjs/core/lib/enums.js","./getViewportRect.js":"../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js","./getDocumentRect.js":"../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js","./listScrollParents.js":"../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js","./getOffsetParent.js":"../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","./getDocumentElement.js":"../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getComputedStyle.js":"../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./instanceOf.js":"../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getBoundingClientRect.js":"../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getParentNode.js":"../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./contains.js":"../node_modules/@popperjs/core/lib/dom-utils/contains.js","./getNodeName.js":"../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","../utils/rectToClientRect.js":"../node_modules/@popperjs/core/lib/utils/rectToClientRect.js","../utils/math.js":"../node_modules/@popperjs/core/lib/utils/math.js"}],"../node_modules/@popperjs/core/lib/utils/getVariation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVariation;

function getVariation(placement) {
  return placement.split('-')[1];
}
},{}],"../node_modules/@popperjs/core/lib/utils/computeOffsets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeOffsets;

var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));

var _getVariation = _interopRequireDefault(require("./getVariation.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("./getMainAxisFromPlacement.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0, _getBasePlacement.default)(placement) : null;
  var variation = placement ? (0, _getVariation.default)(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0, _getMainAxisFromPlacement.default)(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
},{"./getBasePlacement.js":"../node_modules/@popperjs/core/lib/utils/getBasePlacement.js","./getVariation.js":"../node_modules/@popperjs/core/lib/utils/getVariation.js","./getMainAxisFromPlacement.js":"../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../enums.js":"../node_modules/@popperjs/core/lib/enums.js"}],"../node_modules/@popperjs/core/lib/utils/detectOverflow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectOverflow;

var _getBoundingClientRect = _interopRequireDefault(require("../dom-utils/getBoundingClientRect.js"));

var _getClippingRect = _interopRequireDefault(require("../dom-utils/getClippingRect.js"));

var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));

var _computeOffsets = _interopRequireDefault(require("./computeOffsets.js"));

var _rectToClientRect = _interopRequireDefault(require("./rectToClientRect.js"));

var _enums = require("../enums.js");

var _instanceOf = require("../dom-utils/instanceOf.js");

var _mergePaddingObject = _interopRequireDefault(require("./mergePaddingObject.js"));

var _expandToHashMap = _interopRequireDefault(require("./expandToHashMap.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
  var altContext = elementContext === _enums.popper ? _enums.reference : _enums.popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0, _getClippingRect.default)((0, _instanceOf.isElement)(element) ? element : element.contextElement || (0, _getDocumentElement.default)(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = (0, _getBoundingClientRect.default)(referenceElement);
  var popperOffsets = (0, _computeOffsets.default)({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0, _rectToClientRect.default)(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums.right, _enums.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums.top, _enums.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
},{"../dom-utils/getBoundingClientRect.js":"../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","../dom-utils/getClippingRect.js":"../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js","../dom-utils/getDocumentElement.js":"../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./computeOffsets.js":"../node_modules/@popperjs/core/lib/utils/computeOffsets.js","./rectToClientRect.js":"../node_modules/@popperjs/core/lib/utils/rectToClientRect.js","../enums.js":"../node_modules/@popperjs/core/lib/enums.js","../dom-utils/instanceOf.js":"../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./mergePaddingObject.js":"../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js","./expandToHashMap.js":"../node_modules/@popperjs/core/lib/utils/expandToHashMap.js"}],"../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeAutoPlacement;

var _getVariation = _interopRequireDefault(require("./getVariation.js"));

var _enums = require("../enums.js");

var _detectOverflow = _interopRequireDefault(require("./detectOverflow.js"));

var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums.placements : _options$allowedAutoP;
  var variation = (0, _getVariation.default)(placement);
  var placements = variation ? flipVariations ? _enums.variationPlacements : _enums.variationPlacements.filter(function (placement) {
    return (0, _getVariation.default)(placement) === variation;
  }) : _enums.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if ("development" !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0, _detectOverflow.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0, _getBasePlacement.default)(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
},{"./getVariation.js":"../node_modules/@popperjs/core/lib/utils/getVariation.js","../enums.js":"../node_modules/@popperjs/core/lib/enums.js","./detectOverflow.js":"../node_modules/@popperjs/core/lib/utils/detectOverflow.js","./getBasePlacement.js":"../node_modules/@popperjs/core/lib/utils/getBasePlacement.js"}],"../node_modules/@popperjs/core/lib/modifiers/flip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getOppositePlacement = _interopRequireDefault(require("../utils/getOppositePlacement.js"));

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getOppositeVariationPlacement = _interopRequireDefault(require("../utils/getOppositeVariationPlacement.js"));

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

var _computeAutoPlacement = _interopRequireDefault(require("../utils/computeAutoPlacement.js"));

var _enums = require("../enums.js");

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function getExpandedFallbackPlacements(placement) {
  if ((0, _getBasePlacement.default)(placement) === _enums.auto) {
    return [];
  }

  var oppositePlacement = (0, _getOppositePlacement.default)(placement);
  return [(0, _getOppositeVariationPlacement.default)(placement), oppositePlacement, (0, _getOppositeVariationPlacement.default)(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0, _getBasePlacement.default)(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0, _getOppositePlacement.default)(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0, _getBasePlacement.default)(placement) === _enums.auto ? (0, _computeAutoPlacement.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0, _getBasePlacement.default)(placement);

    var isStartVariation = (0, _getVariation.default)(placement) === _enums.start;

    var isVertical = [_enums.top, _enums.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0, _detectOverflow.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums.right : _enums.left : isStartVariation ? _enums.bottom : _enums.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
    }

    var altVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};
exports.default = _default;
},{"../utils/getOppositePlacement.js":"../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js","../utils/getBasePlacement.js":"../node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/getOppositeVariationPlacement.js":"../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js","../utils/detectOverflow.js":"../node_modules/@popperjs/core/lib/utils/detectOverflow.js","../utils/computeAutoPlacement.js":"../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js","../enums.js":"../node_modules/@popperjs/core/lib/enums.js","../utils/getVariation.js":"../node_modules/@popperjs/core/lib/utils/getVariation.js"}],"../node_modules/@popperjs/core/lib/modifiers/hide.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enums = require("../enums.js");

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums.top, _enums.right, _enums.bottom, _enums.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0, _detectOverflow.default)(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0, _detectOverflow.default)(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};
exports.default = _default;
},{"../enums.js":"../node_modules/@popperjs/core/lib/enums.js","../utils/detectOverflow.js":"../node_modules/@popperjs/core/lib/utils/detectOverflow.js"}],"../node_modules/@popperjs/core/lib/modifiers/offset.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distanceAndSkiddingToXY = distanceAndSkiddingToXY;
exports.default = void 0;

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0, _getBasePlacement.default)(placement);
  var invertDistance = [_enums.left, _enums.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums.left, _enums.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;

  var data = _enums.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});

  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};
exports.default = _default;
},{"../utils/getBasePlacement.js":"../node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../enums.js":"../node_modules/@popperjs/core/lib/enums.js"}],"../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _computeOffsets = _interopRequireDefault(require("../utils/computeOffsets.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = (0, _computeOffsets.default)({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};
exports.default = _default;
},{"../utils/computeOffsets.js":"../node_modules/@popperjs/core/lib/utils/computeOffsets.js"}],"../node_modules/@popperjs/core/lib/utils/getAltAxis.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAltAxis;

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
},{}],"../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enums = require("../enums.js");

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));

var _getAltAxis = _interopRequireDefault(require("../utils/getAltAxis.js"));

var _within = _interopRequireDefault(require("../utils/within.js"));

var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

var _getFreshSideObject = _interopRequireDefault(require("../utils/getFreshSideObject.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0, _detectOverflow.default)(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0, _getBasePlacement.default)(state.placement);
  var variation = (0, _getVariation.default)(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0, _getMainAxisFromPlacement.default)(basePlacement);
  var altAxis = (0, _getAltAxis.default)(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? _enums.top : _enums.left;
    var altSide = mainAxis === 'y' ? _enums.bottom : _enums.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0, _getLayoutRect.default)(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0, _getFreshSideObject.default)();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0, _within.default)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParent.default)(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = (0, _within.default)(tether ? (0, _math.min)(min, tetherMin) : min, offset, tether ? (0, _math.max)(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? _enums.top : _enums.left;

      var _altSide = mainAxis === 'x' ? _enums.bottom : _enums.right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = (0, _within.default)(tether ? (0, _math.min)(_min, tetherMin) : _min, _offset, tether ? (0, _math.max)(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};
exports.default = _default;
},{"../enums.js":"../node_modules/@popperjs/core/lib/enums.js","../utils/getBasePlacement.js":"../node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/getMainAxisFromPlacement.js":"../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../utils/getAltAxis.js":"../node_modules/@popperjs/core/lib/utils/getAltAxis.js","../utils/within.js":"../node_modules/@popperjs/core/lib/utils/within.js","../dom-utils/getLayoutRect.js":"../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","../dom-utils/getOffsetParent.js":"../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../utils/detectOverflow.js":"../node_modules/@popperjs/core/lib/utils/detectOverflow.js","../utils/getVariation.js":"../node_modules/@popperjs/core/lib/utils/getVariation.js","../utils/getFreshSideObject.js":"../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js","../utils/math.js":"../node_modules/@popperjs/core/lib/utils/math.js"}],"../node_modules/@popperjs/core/lib/modifiers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "applyStyles", {
  enumerable: true,
  get: function () {
    return _applyStyles.default;
  }
});
Object.defineProperty(exports, "arrow", {
  enumerable: true,
  get: function () {
    return _arrow.default;
  }
});
Object.defineProperty(exports, "computeStyles", {
  enumerable: true,
  get: function () {
    return _computeStyles.default;
  }
});
Object.defineProperty(exports, "eventListeners", {
  enumerable: true,
  get: function () {
    return _eventListeners.default;
  }
});
Object.defineProperty(exports, "flip", {
  enumerable: true,
  get: function () {
    return _flip.default;
  }
});
Object.defineProperty(exports, "hide", {
  enumerable: true,
  get: function () {
    return _hide.default;
  }
});
Object.defineProperty(exports, "offset", {
  enumerable: true,
  get: function () {
    return _offset.default;
  }
});
Object.defineProperty(exports, "popperOffsets", {
  enumerable: true,
  get: function () {
    return _popperOffsets.default;
  }
});
Object.defineProperty(exports, "preventOverflow", {
  enumerable: true,
  get: function () {
    return _preventOverflow.default;
  }
});

var _applyStyles = _interopRequireDefault(require("./applyStyles.js"));

var _arrow = _interopRequireDefault(require("./arrow.js"));

var _computeStyles = _interopRequireDefault(require("./computeStyles.js"));

var _eventListeners = _interopRequireDefault(require("./eventListeners.js"));

var _flip = _interopRequireDefault(require("./flip.js"));

var _hide = _interopRequireDefault(require("./hide.js"));

var _offset = _interopRequireDefault(require("./offset.js"));

var _popperOffsets = _interopRequireDefault(require("./popperOffsets.js"));

var _preventOverflow = _interopRequireDefault(require("./preventOverflow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./applyStyles.js":"../node_modules/@popperjs/core/lib/modifiers/applyStyles.js","./arrow.js":"../node_modules/@popperjs/core/lib/modifiers/arrow.js","./computeStyles.js":"../node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./eventListeners.js":"../node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./flip.js":"../node_modules/@popperjs/core/lib/modifiers/flip.js","./hide.js":"../node_modules/@popperjs/core/lib/modifiers/hide.js","./offset.js":"../node_modules/@popperjs/core/lib/modifiers/offset.js","./popperOffsets.js":"../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./preventOverflow.js":"../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js"}],"../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHTMLElementScroll;

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
},{}],"../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNodeScroll;

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _instanceOf = require("./instanceOf.js");

var _getHTMLElementScroll = _interopRequireDefault(require("./getHTMLElementScroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNodeScroll(node) {
  if (node === (0, _getWindow.default)(node) || !(0, _instanceOf.isHTMLElement)(node)) {
    return (0, _getWindowScroll.default)(node);
  } else {
    return (0, _getHTMLElementScroll.default)(node);
  }
}
},{"./getWindowScroll.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js","./getWindow.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./instanceOf.js":"../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getHTMLElementScroll.js":"../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js"}],"../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCompositeRect;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getNodeScroll = _interopRequireDefault(require("./getNodeScroll.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _instanceOf = require("./instanceOf.js");

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = (0, _getDocumentElement.default)(offsetParent);
  var rect = (0, _getBoundingClientRect.default)(elementOrVirtualElement);
  var isOffsetParentAnElement = (0, _instanceOf.isHTMLElement)(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0, _getNodeName.default)(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0, _isScrollParent.default)(documentElement)) {
      scroll = (0, _getNodeScroll.default)(offsetParent);
    }

    if ((0, _instanceOf.isHTMLElement)(offsetParent)) {
      offsets = (0, _getBoundingClientRect.default)(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0, _getWindowScrollBarX.default)(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
},{"./getBoundingClientRect.js":"../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getNodeScroll.js":"../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js","./getNodeName.js":"../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./instanceOf.js":"../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getWindowScrollBarX.js":"../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js","./getDocumentElement.js":"../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./isScrollParent.js":"../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js"}],"../node_modules/@popperjs/core/lib/utils/orderModifiers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = orderModifiers;

var _enums = require("../enums.js");

// source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
},{"../enums.js":"../node_modules/@popperjs/core/lib/enums.js"}],"../node_modules/@popperjs/core/lib/utils/debounce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
},{}],"../node_modules/@popperjs/core/lib/utils/format.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}
},{}],"../node_modules/@popperjs/core/lib/utils/validateModifiers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateModifiers;

var _format = _interopRequireDefault(require("./format.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];

function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (_enums.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0, _format.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
},{"./format.js":"../node_modules/@popperjs/core/lib/utils/format.js","../enums.js":"../node_modules/@popperjs/core/lib/enums.js"}],"../node_modules/@popperjs/core/lib/utils/uniqueBy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniqueBy;

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
},{}],"../node_modules/@popperjs/core/lib/utils/mergeByName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeByName;

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
},{}],"../node_modules/@popperjs/core/lib/createPopper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popperGenerator = popperGenerator;
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _detectOverflow.default;
  }
});
exports.createPopper = void 0;

var _getCompositeRect = _interopRequireDefault(require("./dom-utils/getCompositeRect.js"));

var _getLayoutRect = _interopRequireDefault(require("./dom-utils/getLayoutRect.js"));

var _listScrollParents = _interopRequireDefault(require("./dom-utils/listScrollParents.js"));

var _getOffsetParent = _interopRequireDefault(require("./dom-utils/getOffsetParent.js"));

var _getComputedStyle2 = _interopRequireDefault(require("./dom-utils/getComputedStyle.js"));

var _orderModifiers = _interopRequireDefault(require("./utils/orderModifiers.js"));

var _debounce = _interopRequireDefault(require("./utils/debounce.js"));

var _validateModifiers = _interopRequireDefault(require("./utils/validateModifiers.js"));

var _uniqueBy = _interopRequireDefault(require("./utils/uniqueBy.js"));

var _getBasePlacement = _interopRequireDefault(require("./utils/getBasePlacement.js"));

var _mergeByName = _interopRequireDefault(require("./utils/mergeByName.js"));

var _detectOverflow = _interopRequireDefault(require("./utils/detectOverflow.js"));

var _instanceOf = require("./dom-utils/instanceOf.js");

var _enums = require("./enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0, _instanceOf.isElement)(reference) ? (0, _listScrollParents.default)(reference) : reference.contextElement ? (0, _listScrollParents.default)(reference.contextElement) : [],
          popper: (0, _listScrollParents.default)(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0, _orderModifiers.default)((0, _mergeByName.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if ("development" !== "production") {
          var modifiers = (0, _uniqueBy.default)([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0, _validateModifiers.default)(modifiers);

          if ((0, _getBasePlacement.default)(state.options.placement) === _enums.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = (0, _getComputedStyle2.default)(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if ("development" !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0, _getCompositeRect.default)(reference, (0, _getOffsetParent.default)(popper), state.options.strategy === 'fixed'),
          popper: (0, _getLayoutRect.default)(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if ("development" !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0, _debounce.default)(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if ("development" !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./dom-utils/getCompositeRect.js":"../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js","./dom-utils/getLayoutRect.js":"../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","./dom-utils/listScrollParents.js":"../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js","./dom-utils/getOffsetParent.js":"../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","./dom-utils/getComputedStyle.js":"../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./utils/orderModifiers.js":"../node_modules/@popperjs/core/lib/utils/orderModifiers.js","./utils/debounce.js":"../node_modules/@popperjs/core/lib/utils/debounce.js","./utils/validateModifiers.js":"../node_modules/@popperjs/core/lib/utils/validateModifiers.js","./utils/uniqueBy.js":"../node_modules/@popperjs/core/lib/utils/uniqueBy.js","./utils/getBasePlacement.js":"../node_modules/@popperjs/core/lib/utils/getBasePlacement.js","./utils/mergeByName.js":"../node_modules/@popperjs/core/lib/utils/mergeByName.js","./utils/detectOverflow.js":"../node_modules/@popperjs/core/lib/utils/detectOverflow.js","./dom-utils/instanceOf.js":"../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./enums.js":"../node_modules/@popperjs/core/lib/enums.js"}],"../node_modules/@popperjs/core/lib/popper-lite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
exports.defaultModifiers = exports.createPopper = void 0;

var _createPopper = require("./createPopper.js");

var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));

var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));

var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));

var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default];
exports.defaultModifiers = defaultModifiers;
var createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./createPopper.js":"../node_modules/@popperjs/core/lib/createPopper.js","./modifiers/eventListeners.js":"../node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./modifiers/popperOffsets.js":"../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./modifiers/computeStyles.js":"../node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./modifiers/applyStyles.js":"../node_modules/@popperjs/core/lib/modifiers/applyStyles.js"}],"../node_modules/@popperjs/core/lib/popper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createPopper: true,
  defaultModifiers: true,
  popperGenerator: true,
  detectOverflow: true,
  createPopperLite: true
};
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "createPopperLite", {
  enumerable: true,
  get: function () {
    return _popperLite.createPopper;
  }
});
exports.defaultModifiers = exports.createPopper = void 0;

var _createPopper = require("./createPopper.js");

var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));

var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));

var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));

var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));

var _offset = _interopRequireDefault(require("./modifiers/offset.js"));

var _flip = _interopRequireDefault(require("./modifiers/flip.js"));

var _preventOverflow = _interopRequireDefault(require("./modifiers/preventOverflow.js"));

var _arrow = _interopRequireDefault(require("./modifiers/arrow.js"));

var _hide = _interopRequireDefault(require("./modifiers/hide.js"));

var _popperLite = require("./popper-lite.js");

var _index = require("./modifiers/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default, _offset.default, _flip.default, _preventOverflow.default, _arrow.default, _hide.default];
exports.defaultModifiers = defaultModifiers;
var createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./createPopper.js":"../node_modules/@popperjs/core/lib/createPopper.js","./modifiers/eventListeners.js":"../node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./modifiers/popperOffsets.js":"../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./modifiers/computeStyles.js":"../node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./modifiers/applyStyles.js":"../node_modules/@popperjs/core/lib/modifiers/applyStyles.js","./modifiers/offset.js":"../node_modules/@popperjs/core/lib/modifiers/offset.js","./modifiers/flip.js":"../node_modules/@popperjs/core/lib/modifiers/flip.js","./modifiers/preventOverflow.js":"../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js","./modifiers/arrow.js":"../node_modules/@popperjs/core/lib/modifiers/arrow.js","./modifiers/hide.js":"../node_modules/@popperjs/core/lib/modifiers/hide.js","./popper-lite.js":"../node_modules/@popperjs/core/lib/popper-lite.js","./modifiers/index.js":"../node_modules/@popperjs/core/lib/modifiers/index.js"}],"../node_modules/@popperjs/core/lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  popperGenerator: true,
  detectOverflow: true,
  createPopperBase: true,
  createPopper: true,
  createPopperLite: true
};
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "createPopperBase", {
  enumerable: true,
  get: function () {
    return _createPopper.createPopper;
  }
});
Object.defineProperty(exports, "createPopper", {
  enumerable: true,
  get: function () {
    return _popper.createPopper;
  }
});
Object.defineProperty(exports, "createPopperLite", {
  enumerable: true,
  get: function () {
    return _popperLite.createPopper;
  }
});

var _enums = require("./enums.js");

Object.keys(_enums).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _enums[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _enums[key];
    }
  });
});

var _index = require("./modifiers/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

var _createPopper = require("./createPopper.js");

var _popper = require("./popper.js");

var _popperLite = require("./popper-lite.js");
},{"./enums.js":"../node_modules/@popperjs/core/lib/enums.js","./modifiers/index.js":"../node_modules/@popperjs/core/lib/modifiers/index.js","./createPopper.js":"../node_modules/@popperjs/core/lib/createPopper.js","./popper.js":"../node_modules/@popperjs/core/lib/popper.js","./popper-lite.js":"../node_modules/@popperjs/core/lib/popper-lite.js"}],"../node_modules/bootstrap/dist/js/bootstrap.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Toast = exports.Tab = exports.ScrollSpy = exports.Popover = exports.Offcanvas = exports.Modal = exports.Dropdown = exports.Collapse = exports.Carousel = exports.Button = exports.Alert = void 0;

var Popper = _interopRequireWildcard(require("@popperjs/core"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*!
  * Bootstrap v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
const NODE_TEXT = 3;
const SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },

  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },

  children(element, selector) {
    return [].concat(...element.children).filter(child => child.matches(selector));
  },

  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
      if (ancestor.matches(selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },

  prev(element, selector) {
    let previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },

  next(element, selector) {
    let next = element.nextElementSibling;

    while (next) {
      if (next.matches(selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

const toType = obj => {
  if (obj === null || obj === undefined) {
    return `${obj}`;
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


const getUID = prefix => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

const getSelector = element => {
  let selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
      return null;
    } // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
      hrefAttr = `#${hrefAttr.split('#')[1]}`;
    }

    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

const getSelectorFromElement = element => {
  const selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

const getElementFromSelector = element => {
  const selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

const getTransitionDurationFromElement = element => {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

const triggerTransitionEnd = element => {
  element.dispatchEvent(new Event(TRANSITION_END));
};

const isElement = obj => {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (typeof obj.jquery !== 'undefined') {
    obj = obj[0];
  }

  return typeof obj.nodeType !== 'undefined';
};

const getElement = obj => {
  if (isElement(obj)) {
    // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
  }

  if (typeof obj === 'string' && obj.length > 0) {
    return SelectorEngine.findOne(obj);
  }

  return null;
};

const emulateTransitionEnd = (element, duration) => {
  let called = false;
  const durationPadding = 5;
  const emulatedDuration = duration + durationPadding;

  function listener() {
    called = true;
    element.removeEventListener(TRANSITION_END, listener);
  }

  element.addEventListener(TRANSITION_END, listener);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(element);
    }
  }, emulatedDuration);
};

const typeCheckConfig = (componentName, config, configTypes) => {
  Object.keys(configTypes).forEach(property => {
    const expectedTypes = configTypes[property];
    const value = config[property];
    const valueType = value && isElement(value) ? 'element' : toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
    }
  });
};

const isVisible = element => {
  if (!element) {
    return false;
  }

  if (element.style && element.parentNode && element.parentNode.style) {
    const elementStyle = getComputedStyle(element);
    const parentNodeStyle = getComputedStyle(element.parentNode);
    return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
  }

  return false;
};

const isDisabled = element => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }

  if (element.classList.contains('disabled')) {
    return true;
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

const findShadowRoot = element => {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return findShadowRoot(element.parentNode);
};

const noop = () => {};

const reflow = element => element.offsetHeight;

const getjQuery = () => {
  const {
    jQuery
  } = window;

  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return jQuery;
  }

  return null;
};

const onDOMContentLoaded = callback => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
};

const isRTL = () => document.documentElement.dir === 'rtl';

const defineJQueryPlugin = plugin => {
  onDOMContentLoaded(() => {
    const $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;

      $.fn[name].noConflict = () => {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};

const execute = callback => {
  if (typeof callback === 'function') {
    callback();
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const elementMap = new Map();
var Data = {
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }

    const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }

    instanceMap.set(key, instance);
  },

  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }

    return null;
  },

  remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }

    const instanceMap = elementMap.get(element);
    instanceMap.delete(key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage

let uidEvent = 1;
const customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
const customEventsRegex = /^(mouseenter|mouseleave)/i;
const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function getUidEvent(element, uid) {
  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}

function getEvent(element) {
  const uid = getUidEvent(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);

    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (let i = domElements.length; i--;) {
        if (domElements[i] === target) {
          event.delegateTarget = target;

          if (handler.oneOff) {
            // eslint-disable-next-line unicorn/consistent-destructuring
            EventHandler.off(element, event.type, selector, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function findHandler(events, handler, delegationSelector = null) {
  const uidEventList = Object.keys(events);

  for (let i = 0, len = uidEventList.length; i < len; i++) {
    const event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function normalizeParams(originalTypeEvent, handler, delegationFn) {
  const delegation = typeof handler === 'string';
  const originalHandler = delegation ? delegationFn : handler;
  let typeEvent = getTypeEvent(originalTypeEvent);
  const isNative = nativeEvents.has(typeEvent);

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does


  if (customEventsRegex.test(originalTypeEvent)) {
    const wrapFn = fn => {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };

    if (delegationFn) {
      delegationFn = wrapFn(delegationFn);
    } else {
      handler = wrapFn(handler);
    }
  }

  const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
  const events = getEvent(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
  const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(handlerKey => {
    if (handlerKey.includes(namespace)) {
      const event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
}

const EventHandler = {
  on(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, false);
  },

  one(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, true);
  },

  off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getEvent(element);
    const isNamespace = originalTypeEvent.startsWith('.');

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(elementEvent => {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(keyHandlers => {
      const handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        const event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },

  trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    const $ = getjQuery();
    const typeEvent = getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    const isNative = nativeEvents.has(typeEvent);
    let jQueryEvent;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    let evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles,
        cancelable: true
      });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(key => {
        Object.defineProperty(evt, key, {
          get() {
            return args[key];
          }

        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const VERSION = '5.0.1';

class BaseComponent {
  constructor(element) {
    element = getElement(element);

    if (!element) {
      return;
    }

    this._element = element;
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }

  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    Object.getOwnPropertyNames(this).forEach(propertyName => {
      this[propertyName] = null;
    });
  }

  _queueCallback(callback, element, isAnimated = true) {
    if (!isAnimated) {
      execute(callback);
      return;
    }

    const transitionDuration = getTransitionDurationFromElement(element);
    EventHandler.one(element, 'transitionend', () => execute(callback));
    emulateTransitionEnd(element, transitionDuration);
  }
  /** Static */


  static getInstance(element) {
    return Data.get(element, this.DATA_KEY);
  }

  static get VERSION() {
    return VERSION;
  }

  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }

  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }

  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const NAME$c = 'alert';
const DATA_KEY$b = 'bs.alert';
const EVENT_KEY$b = `.${DATA_KEY$b}`;
const DATA_API_KEY$8 = '.data-api';
const SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';
const EVENT_CLOSE = `close${EVENT_KEY$b}`;
const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
const EVENT_CLICK_DATA_API$7 = `click${EVENT_KEY$b}${DATA_API_KEY$8}`;
const CLASS_NAME_ALERT = 'alert';
const CLASS_NAME_FADE$6 = 'fade';
const CLASS_NAME_SHOW$9 = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Alert extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$c;
  } // Public


  close(element) {
    const rootElement = element ? this._getRootElement(element) : this._element;

    const customEvent = this._triggerCloseEvent(rootElement);

    if (customEvent === null || customEvent.defaultPrevented) {
      return;
    }

    this._removeElement(rootElement);
  } // Private


  _getRootElement(element) {
    return getElementFromSelector(element) || element.closest(`.${CLASS_NAME_ALERT}`);
  }

  _triggerCloseEvent(element) {
    return EventHandler.trigger(element, EVENT_CLOSE);
  }

  _removeElement(element) {
    element.classList.remove(CLASS_NAME_SHOW$9);
    const isAnimated = element.classList.contains(CLASS_NAME_FADE$6);

    this._queueCallback(() => this._destroyElement(element), element, isAnimated);
  }

  _destroyElement(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }

    EventHandler.trigger(element, EVENT_CLOSED);
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      let data = Data.get(this, DATA_KEY$b);

      if (!data) {
        data = new Alert(this);
      }

      if (config === 'close') {
        data[config](this);
      }
    });
  }

  static handleDismiss(alertInstance) {
    return function (event) {
      if (event) {
        event.preventDefault();
      }

      alertInstance.close(this);
    };
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Alert = Alert;
EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */

defineJQueryPlugin(Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$b = 'button';
const DATA_KEY$a = 'bs.button';
const EVENT_KEY$a = `.${DATA_KEY$a}`;
const DATA_API_KEY$7 = '.data-api';
const CLASS_NAME_ACTIVE$3 = 'active';
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$7}`;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Button extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$b;
  } // Public


  toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      let data = Data.get(this, DATA_KEY$a);

      if (!data) {
        data = new Button(this);
      }

      if (config === 'toggle') {
        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Button = Button;
EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
  event.preventDefault();
  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  let data = Data.get(button, DATA_KEY$a);

  if (!data) {
    data = new Button(button);
  }

  data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */

defineJQueryPlugin(Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
}

const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
  },

  getDataAttributes(element) {
    if (!element) {
      return {};
    }

    const attributes = {};
    Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
      let pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    });
    return attributes;
  },

  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
  },

  offset(element) {
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  },

  position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$a = 'carousel';
const DATA_KEY$9 = 'bs.carousel';
const EVENT_KEY$9 = `.${DATA_KEY$9}`;
const DATA_API_KEY$6 = '.data-api';
const ARROW_LEFT_KEY = 'ArrowLeft';
const ARROW_RIGHT_KEY = 'ArrowRight';
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

const SWIPE_THRESHOLD = 40;
const Default$9 = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
};
const DefaultType$9 = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
};
const ORDER_NEXT = 'next';
const ORDER_PREV = 'prev';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const EVENT_SLIDE = `slide${EVENT_KEY$9}`;
const EVENT_SLID = `slid${EVENT_KEY$9}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$9}`;
const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$9}`;
const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$9}`;
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$9}`;
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$9}${DATA_API_KEY$6}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$9}${DATA_API_KEY$6}`;
const CLASS_NAME_CAROUSEL = 'carousel';
const CLASS_NAME_ACTIVE$2 = 'active';
const CLASS_NAME_SLIDE = 'slide';
const CLASS_NAME_END = 'carousel-item-end';
const CLASS_NAME_START = 'carousel-item-start';
const CLASS_NAME_NEXT = 'carousel-item-next';
const CLASS_NAME_PREV = 'carousel-item-prev';
const CLASS_NAME_POINTER_EVENT = 'pointer-event';
const SELECTOR_ACTIVE$1 = '.active';
const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
const SELECTOR_ITEM = '.carousel-item';
const SELECTOR_ITEM_IMG = '.carousel-item img';
const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
const SELECTOR_INDICATORS = '.carousel-indicators';
const SELECTOR_INDICATOR = '[data-bs-target]';
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const POINTER_TYPE_TOUCH = 'touch';
const POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Carousel extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._items = null;
    this._interval = null;
    this._activeElement = null;
    this._isPaused = false;
    this._isSliding = false;
    this.touchTimeout = null;
    this.touchStartX = 0;
    this.touchDeltaX = 0;
    this._config = this._getConfig(config);
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
    this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    this._pointerEvent = Boolean(window.PointerEvent);

    this._addEventListeners();
  } // Getters


  static get Default() {
    return Default$9;
  }

  static get NAME() {
    return NAME$a;
  } // Public


  next() {
    if (!this._isSliding) {
      this._slide(ORDER_NEXT);
    }
  }

  nextWhenVisible() {
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  }

  prev() {
    if (!this._isSliding) {
      this._slide(ORDER_PREV);
    }
  }

  pause(event) {
    if (!event) {
      this._isPaused = true;
    }

    if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
      triggerTransitionEnd(this._element);
      this.cycle(true);
    }

    clearInterval(this._interval);
    this._interval = null;
  }

  cycle(event) {
    if (!event) {
      this._isPaused = false;
    }

    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }

    if (this._config && this._config.interval && !this._isPaused) {
      this._updateInterval();

      this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
    }
  }

  to(index) {
    this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    const activeIndex = this._getItemIndex(this._activeElement);

    if (index > this._items.length - 1 || index < 0) {
      return;
    }

    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
      return;
    }

    if (activeIndex === index) {
      this.pause();
      this.cycle();
      return;
    }

    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

    this._slide(order, this._items[index]);
  } // Private


  _getConfig(config) {
    config = { ...Default$9,
      ...config
    };
    typeCheckConfig(NAME$a, config, DefaultType$9);
    return config;
  }

  _handleSwipe() {
    const absDeltax = Math.abs(this.touchDeltaX);

    if (absDeltax <= SWIPE_THRESHOLD) {
      return;
    }

    const direction = absDeltax / this.touchDeltaX;
    this.touchDeltaX = 0;

    if (!direction) {
      return;
    }

    this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
  }

  _addEventListeners() {
    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
    }

    if (this._config.pause === 'hover') {
      EventHandler.on(this._element, EVENT_MOUSEENTER, event => this.pause(event));
      EventHandler.on(this._element, EVENT_MOUSELEAVE, event => this.cycle(event));
    }

    if (this._config.touch && this._touchSupported) {
      this._addTouchEventListeners();
    }
  }

  _addTouchEventListeners() {
    const start = event => {
      if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
        this.touchStartX = event.clientX;
      } else if (!this._pointerEvent) {
        this.touchStartX = event.touches[0].clientX;
      }
    };

    const move = event => {
      // ensure swiping with one touch and not pinching
      this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
    };

    const end = event => {
      if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
        this.touchDeltaX = event.clientX - this.touchStartX;
      }

      this._handleSwipe();

      if (this._config.pause === 'hover') {
        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling
        this.pause();

        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }

        this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      }
    };

    SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
      EventHandler.on(itemImg, EVENT_DRAG_START, e => e.preventDefault());
    });

    if (this._pointerEvent) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, event => start(event));
      EventHandler.on(this._element, EVENT_POINTERUP, event => end(event));

      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, event => start(event));
      EventHandler.on(this._element, EVENT_TOUCHMOVE, event => move(event));
      EventHandler.on(this._element, EVENT_TOUCHEND, event => end(event));
    }
  }

  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }

    if (event.key === ARROW_LEFT_KEY) {
      event.preventDefault();

      this._slide(DIRECTION_RIGHT);
    } else if (event.key === ARROW_RIGHT_KEY) {
      event.preventDefault();

      this._slide(DIRECTION_LEFT);
    }
  }

  _getItemIndex(element) {
    this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
    return this._items.indexOf(element);
  }

  _getItemByOrder(order, activeElement) {
    const isNext = order === ORDER_NEXT;
    const isPrev = order === ORDER_PREV;

    const activeIndex = this._getItemIndex(activeElement);

    const lastItemIndex = this._items.length - 1;
    const isGoingToWrap = isPrev && activeIndex === 0 || isNext && activeIndex === lastItemIndex;

    if (isGoingToWrap && !this._config.wrap) {
      return activeElement;
    }

    const delta = isPrev ? -1 : 1;
    const itemIndex = (activeIndex + delta) % this._items.length;
    return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
  }

  _triggerSlideEvent(relatedTarget, eventDirectionName) {
    const targetIndex = this._getItemIndex(relatedTarget);

    const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

    return EventHandler.trigger(this._element, EVENT_SLIDE, {
      relatedTarget,
      direction: eventDirectionName,
      from: fromIndex,
      to: targetIndex
    });
  }

  _setActiveIndicatorElement(element) {
    if (this._indicatorsElement) {
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

      for (let i = 0; i < indicators.length; i++) {
        if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
          indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
          indicators[i].setAttribute('aria-current', 'true');
          break;
        }
      }
    }
  }

  _updateInterval() {
    const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    if (!element) {
      return;
    }

    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

    if (elementInterval) {
      this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
      this._config.interval = elementInterval;
    } else {
      this._config.interval = this._config.defaultInterval || this._config.interval;
    }
  }

  _slide(directionOrOrder, element) {
    const order = this._directionToOrder(directionOrOrder);

    const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    const activeElementIndex = this._getItemIndex(activeElement);

    const nextElement = element || this._getItemByOrder(order, activeElement);

    const nextElementIndex = this._getItemIndex(nextElement);

    const isCycling = Boolean(this._interval);
    const isNext = order === ORDER_NEXT;
    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

    const eventDirectionName = this._orderToDirection(order);

    if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
      this._isSliding = false;
      return;
    }

    const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

    if (slideEvent.defaultPrevented) {
      return;
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      return;
    }

    this._isSliding = true;

    if (isCycling) {
      this.pause();
    }

    this._setActiveIndicatorElement(nextElement);

    this._activeElement = nextElement;

    const triggerSlidEvent = () => {
      EventHandler.trigger(this._element, EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });
    };

    if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);

      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        setTimeout(triggerSlidEvent, 0);
      };

      this._queueCallback(completeCallBack, activeElement, true);
    } else {
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      this._isSliding = false;
      triggerSlidEvent();
    }

    if (isCycling) {
      this.cycle();
    }
  }

  _directionToOrder(direction) {
    if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
      return direction;
    }

    if (isRTL()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
    }

    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
  }

  _orderToDirection(order) {
    if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
      return order;
    }

    if (isRTL()) {
      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }

    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
  } // Static


  static carouselInterface(element, config) {
    let data = Data.get(element, DATA_KEY$9);
    let _config = { ...Default$9,
      ...Manipulator.getDataAttributes(element)
    };

    if (typeof config === 'object') {
      _config = { ..._config,
        ...config
      };
    }

    const action = typeof config === 'string' ? config : _config.slide;

    if (!data) {
      data = new Carousel(element, _config);
    }

    if (typeof config === 'number') {
      data.to(config);
    } else if (typeof action === 'string') {
      if (typeof data[action] === 'undefined') {
        throw new TypeError(`No method named "${action}"`);
      }

      data[action]();
    } else if (_config.interval && _config.ride) {
      data.pause();
      data.cycle();
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      Carousel.carouselInterface(this, config);
    });
  }

  static dataApiClickHandler(event) {
    const target = getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }

    const config = { ...Manipulator.getDataAttributes(target),
      ...Manipulator.getDataAttributes(this)
    };
    const slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
      config.interval = false;
    }

    Carousel.carouselInterface(target, config);

    if (slideIndex) {
      Data.get(target, DATA_KEY$9).to(slideIndex);
    }

    event.preventDefault();
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Carousel = Carousel;
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (let i = 0, len = carousels.length; i < len; i++) {
    Carousel.carouselInterface(carousels[i], Data.get(carousels[i], DATA_KEY$9));
  }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */

defineJQueryPlugin(Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$9 = 'collapse';
const DATA_KEY$8 = 'bs.collapse';
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$5 = '.data-api';
const Default$8 = {
  toggle: true,
  parent: ''
};
const DefaultType$8 = {
  toggle: 'boolean',
  parent: '(string|element)'
};
const EVENT_SHOW$5 = `show${EVENT_KEY$8}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$8}`;
const EVENT_HIDE$5 = `hide${EVENT_KEY$8}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$8}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
const CLASS_NAME_SHOW$8 = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const WIDTH = 'width';
const HEIGHT = 'height';
const SELECTOR_ACTIVES = '.show, .collapsing';
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Collapse extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._isTransitioning = false;
    this._config = this._getConfig(config);
    this._triggerArray = SelectorEngine.find(`${SELECTOR_DATA_TOGGLE$4}[href="#${this._element.id}"],` + `${SELECTOR_DATA_TOGGLE$4}[data-bs-target="#${this._element.id}"]`);
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (let i = 0, len = toggleList.length; i < len; i++) {
      const elem = toggleList[i];
      const selector = getSelectorFromElement(elem);
      const filterElement = SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);

      if (selector !== null && filterElement.length) {
        this._selector = selector;

        this._triggerArray.push(elem);
      }
    }

    this._parent = this._config.parent ? this._getParent() : null;

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._element, this._triggerArray);
    }

    if (this._config.toggle) {
      this.toggle();
    }
  } // Getters


  static get Default() {
    return Default$8;
  }

  static get NAME() {
    return NAME$9;
  } // Public


  toggle() {
    if (this._element.classList.contains(CLASS_NAME_SHOW$8)) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW$8)) {
      return;
    }

    let actives;
    let activesData;

    if (this._parent) {
      actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter(elem => {
        if (typeof this._config.parent === 'string') {
          return elem.getAttribute('data-bs-parent') === this._config.parent;
        }

        return elem.classList.contains(CLASS_NAME_COLLAPSE);
      });

      if (actives.length === 0) {
        actives = null;
      }
    }

    const container = SelectorEngine.findOne(this._selector);

    if (actives) {
      const tempActiveData = actives.find(elem => container !== elem);
      activesData = tempActiveData ? Data.get(tempActiveData, DATA_KEY$8) : null;

      if (activesData && activesData._isTransitioning) {
        return;
      }
    }

    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

    if (startEvent.defaultPrevented) {
      return;
    }

    if (actives) {
      actives.forEach(elemActive => {
        if (container !== elemActive) {
          Collapse.collapseInterface(elemActive, 'hide');
        }

        if (!activesData) {
          Data.set(elemActive, DATA_KEY$8, null);
        }
      });
    }

    const dimension = this._getDimension();

    this._element.classList.remove(CLASS_NAME_COLLAPSE);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.style[dimension] = 0;

    if (this._triggerArray.length) {
      this._triggerArray.forEach(element => {
        element.classList.remove(CLASS_NAME_COLLAPSED);
        element.setAttribute('aria-expanded', true);
      });
    }

    this.setTransitioning(true);

    const complete = () => {
      this._element.classList.remove(CLASS_NAME_COLLAPSING);

      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$8);

      this._element.style[dimension] = '';
      this.setTransitioning(false);
      EventHandler.trigger(this._element, EVENT_SHOWN$5);
    };

    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;

    this._queueCallback(complete, this._element, true);

    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }

  hide() {
    if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW$8)) {
      return;
    }

    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

    if (startEvent.defaultPrevented) {
      return;
    }

    const dimension = this._getDimension();

    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    reflow(this._element);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$8);

    const triggerArrayLength = this._triggerArray.length;

    if (triggerArrayLength > 0) {
      for (let i = 0; i < triggerArrayLength; i++) {
        const trigger = this._triggerArray[i];
        const elem = getElementFromSelector(trigger);

        if (elem && !elem.classList.contains(CLASS_NAME_SHOW$8)) {
          trigger.classList.add(CLASS_NAME_COLLAPSED);
          trigger.setAttribute('aria-expanded', false);
        }
      }
    }

    this.setTransitioning(true);

    const complete = () => {
      this.setTransitioning(false);

      this._element.classList.remove(CLASS_NAME_COLLAPSING);

      this._element.classList.add(CLASS_NAME_COLLAPSE);

      EventHandler.trigger(this._element, EVENT_HIDDEN$5);
    };

    this._element.style[dimension] = '';

    this._queueCallback(complete, this._element, true);
  }

  setTransitioning(isTransitioning) {
    this._isTransitioning = isTransitioning;
  } // Private


  _getConfig(config) {
    config = { ...Default$8,
      ...config
    };
    config.toggle = Boolean(config.toggle); // Coerce string values

    typeCheckConfig(NAME$9, config, DefaultType$8);
    return config;
  }

  _getDimension() {
    return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
  }

  _getParent() {
    let {
      parent
    } = this._config;
    parent = getElement(parent);
    const selector = `${SELECTOR_DATA_TOGGLE$4}[data-bs-parent="${parent}"]`;
    SelectorEngine.find(selector, parent).forEach(element => {
      const selected = getElementFromSelector(element);

      this._addAriaAndCollapsedClass(selected, [element]);
    });
    return parent;
  }

  _addAriaAndCollapsedClass(element, triggerArray) {
    if (!element || !triggerArray.length) {
      return;
    }

    const isOpen = element.classList.contains(CLASS_NAME_SHOW$8);
    triggerArray.forEach(elem => {
      if (isOpen) {
        elem.classList.remove(CLASS_NAME_COLLAPSED);
      } else {
        elem.classList.add(CLASS_NAME_COLLAPSED);
      }

      elem.setAttribute('aria-expanded', isOpen);
    });
  } // Static


  static collapseInterface(element, config) {
    let data = Data.get(element, DATA_KEY$8);
    const _config = { ...Default$8,
      ...Manipulator.getDataAttributes(element),
      ...(typeof config === 'object' && config ? config : {})
    };

    if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
      _config.toggle = false;
    }

    if (!data) {
      data = new Collapse(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      Collapse.collapseInterface(this, config);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Collapse = Collapse;
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }

  const triggerData = Manipulator.getDataAttributes(this);
  const selector = getSelectorFromElement(this);
  const selectorElements = SelectorEngine.find(selector);
  selectorElements.forEach(element => {
    const data = Data.get(element, DATA_KEY$8);
    let config;

    if (data) {
      // update parent attribute
      if (data._parent === null && typeof triggerData.parent === 'string') {
        data._config.parent = triggerData.parent;
        data._parent = data._getParent();
      }

      config = 'toggle';
    } else {
      config = triggerData;
    }

    Collapse.collapseInterface(element, config);
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */

defineJQueryPlugin(Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$8 = 'dropdown';
const DATA_KEY$7 = 'bs.dropdown';
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const DATA_API_KEY$4 = '.data-api';
const ESCAPE_KEY$2 = 'Escape';
const SPACE_KEY = 'Space';
const TAB_KEY = 'Tab';
const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
const EVENT_HIDE$4 = `hide${EVENT_KEY$7}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$7}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$7}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$7}`;
const EVENT_CLICK = `click${EVENT_KEY$7}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$7}${DATA_API_KEY$4}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$7}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$7 = 'show';
const CLASS_NAME_DROPUP = 'dropup';
const CLASS_NAME_DROPEND = 'dropend';
const CLASS_NAME_DROPSTART = 'dropstart';
const CLASS_NAME_NAVBAR = 'navbar';
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
const SELECTOR_MENU = '.dropdown-menu';
const SELECTOR_NAVBAR_NAV = '.navbar-nav';
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
const Default$7 = {
  offset: [0, 2],
  boundary: 'clippingParents',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null,
  autoClose: true
};
const DefaultType$7 = {
  offset: '(array|string|function)',
  boundary: '(string|element)',
  reference: '(string|element|object)',
  display: 'string',
  popperConfig: '(null|object|function)',
  autoClose: '(boolean|string)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Dropdown extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._popper = null;
    this._config = this._getConfig(config);
    this._menu = this._getMenuElement();
    this._inNavbar = this._detectNavbar();

    this._addEventListeners();
  } // Getters


  static get Default() {
    return Default$7;
  }

  static get DefaultType() {
    return DefaultType$7;
  }

  static get NAME() {
    return NAME$8;
  } // Public


  toggle() {
    if (isDisabled(this._element)) {
      return;
    }

    const isActive = this._element.classList.contains(CLASS_NAME_SHOW$7);

    if (isActive) {
      this.hide();
      return;
    }

    this.show();
  }

  show() {
    if (isDisabled(this._element) || this._menu.classList.contains(CLASS_NAME_SHOW$7)) {
      return;
    }

    const parent = Dropdown.getParentFromElement(this._element);
    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

    if (showEvent.defaultPrevented) {
      return;
    } // Totally disable Popper for Dropdowns in Navbar


    if (this._inNavbar) {
      Manipulator.setDataAttribute(this._menu, 'popper', 'none');
    } else {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }

      let referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === 'object') {
        referenceElement = this._config.reference;
      }

      const popperConfig = this._getPopperConfig();

      const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
      this._popper = Popper.createPopper(referenceElement, this._menu, popperConfig);

      if (isDisplayStatic) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static');
      }
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
      [].concat(...document.body.children).forEach(elem => EventHandler.on(elem, 'mouseover', noop));
    }

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    this._menu.classList.toggle(CLASS_NAME_SHOW$7);

    this._element.classList.toggle(CLASS_NAME_SHOW$7);

    EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
  }

  hide() {
    if (isDisabled(this._element) || !this._menu.classList.contains(CLASS_NAME_SHOW$7)) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };

    this._completeHide(relatedTarget);
  }

  dispose() {
    if (this._popper) {
      this._popper.destroy();
    }

    super.dispose();
  }

  update() {
    this._inNavbar = this._detectNavbar();

    if (this._popper) {
      this._popper.update();
    }
  } // Private


  _addEventListeners() {
    EventHandler.on(this._element, EVENT_CLICK, event => {
      event.preventDefault();
      this.toggle();
    });
  }

  _completeHide(relatedTarget) {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

    if (hideEvent.defaultPrevented) {
      return;
    } // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support


    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(elem => EventHandler.off(elem, 'mouseover', noop));
    }

    if (this._popper) {
      this._popper.destroy();
    }

    this._menu.classList.remove(CLASS_NAME_SHOW$7);

    this._element.classList.remove(CLASS_NAME_SHOW$7);

    this._element.setAttribute('aria-expanded', 'false');

    Manipulator.removeDataAttribute(this._menu, 'popper');
    EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
  }

  _getConfig(config) {
    config = { ...this.constructor.Default,
      ...Manipulator.getDataAttributes(this._element),
      ...config
    };
    typeCheckConfig(NAME$8, config, this.constructor.DefaultType);

    if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
      // Popper virtual elements require a getBoundingClientRect method
      throw new TypeError(`${NAME$8.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }

    return config;
  }

  _getMenuElement() {
    return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
  }

  _getPlacement() {
    const parentDropdown = this._element.parentNode;

    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    } // We need to trim the value because custom properties can also include spaces


    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }

    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  }

  _detectNavbar() {
    return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
  }

  _getOffset() {
    const {
      offset
    } = this._config;

    if (typeof offset === 'string') {
      return offset.split(',').map(val => Number.parseInt(val, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }]
    }; // Disable Popper if we have a static display

    if (this._config.display === 'static') {
      defaultBsPopperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
      }];
    }

    return { ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
  }

  _selectMenuItem(event) {
    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

    if (!items.length) {
      return;
    }

    let index = items.indexOf(event.target); // Up

    if (event.key === ARROW_UP_KEY && index > 0) {
      index--;
    } // Down


    if (event.key === ARROW_DOWN_KEY && index < items.length - 1) {
      index++;
    } // index is -1 if the first keydown is an ArrowUp


    index = index === -1 ? 0 : index;
    items[index].focus();
  } // Static


  static dropdownInterface(element, config) {
    let data = Data.get(element, DATA_KEY$7);

    const _config = typeof config === 'object' ? config : null;

    if (!data) {
      data = new Dropdown(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      Dropdown.dropdownInterface(this, config);
    });
  }

  static clearMenus(event) {
    if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) {
      return;
    }

    const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

    for (let i = 0, len = toggles.length; i < len; i++) {
      const context = Data.get(toggles[i], DATA_KEY$7);

      if (!context || context._config.autoClose === false) {
        continue;
      }

      if (!context._element.classList.contains(CLASS_NAME_SHOW$7)) {
        continue;
      }

      const relatedTarget = {
        relatedTarget: context._element
      };

      if (event) {
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }

        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
        }
      }

      context._completeHide(relatedTarget);
    }
  }

  static getParentFromElement(element) {
    return getElementFromSelector(element) || element.parentNode;
  }

  static dataApiKeydownHandler(event) {
    // If not input/textarea:
    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
    // If input/textarea:
    //  - If space key => not a dropdown command
    //  - If key is other than escape
    //    - If key is not up or down => not a dropdown command
    //    - If trigger inside the menu => not a dropdown command
    if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
      return;
    }

    const isActive = this.classList.contains(CLASS_NAME_SHOW$7);

    if (!isActive && event.key === ESCAPE_KEY$2) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (isDisabled(this)) {
      return;
    }

    const getToggleButton = () => this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];

    if (event.key === ESCAPE_KEY$2) {
      getToggleButton().focus();
      Dropdown.clearMenus();
      return;
    }

    if (!isActive && (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY)) {
      getToggleButton().click();
      return;
    }

    if (!isActive || event.key === SPACE_KEY) {
      Dropdown.clearMenus();
      return;
    }

    Dropdown.getInstance(getToggleButton())._selectMenuItem(event);
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Dropdown = Dropdown;
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  Dropdown.dropdownInterface(this);
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */

defineJQueryPlugin(Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const SELECTOR_STICKY_CONTENT = '.sticky-top';

const getWidth = () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
};

const hide = (width = getWidth()) => {
  _disableOverFlow(); // give padding to element to balances the hidden scrollbar width


  _setElementAttributes('body', 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements, to keep shown fullwidth


  _setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);

  _setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
};

const _disableOverFlow = () => {
  const actualValue = document.body.style.overflow;

  if (actualValue) {
    Manipulator.setDataAttribute(document.body, 'overflow', actualValue);
  }

  document.body.style.overflow = 'hidden';
};

const _setElementAttributes = (selector, styleProp, callback) => {
  const scrollbarWidth = getWidth();
  SelectorEngine.find(selector).forEach(element => {
    if (element !== document.body && window.innerWidth > element.clientWidth + scrollbarWidth) {
      return;
    }

    const actualValue = element.style[styleProp];
    const calculatedValue = window.getComputedStyle(element)[styleProp];
    Manipulator.setDataAttribute(element, styleProp, actualValue);
    element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
  });
};

const reset = () => {
  _resetElementAttributes('body', 'overflow');

  _resetElementAttributes('body', 'paddingRight');

  _resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

  _resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
};

const _resetElementAttributes = (selector, styleProp) => {
  SelectorEngine.find(selector).forEach(element => {
    const value = Manipulator.getDataAttribute(element, styleProp);

    if (typeof value === 'undefined') {
      element.style.removeProperty(styleProp);
    } else {
      Manipulator.removeDataAttribute(element, styleProp);
      element.style[styleProp] = value;
    }
  });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */


const Default$6 = {
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: false,
  rootElement: document.body,
  // give the choice to place backdrop under different elements
  clickCallback: null
};
const DefaultType$6 = {
  isVisible: 'boolean',
  isAnimated: 'boolean',
  rootElement: 'element',
  clickCallback: '(function|null)'
};
const NAME$7 = 'backdrop';
const CLASS_NAME_BACKDROP = 'modal-backdrop';
const CLASS_NAME_FADE$5 = 'fade';
const CLASS_NAME_SHOW$6 = 'show';
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$7}`;

class Backdrop {
  constructor(config) {
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }

  show(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }

    this._append();

    if (this._config.isAnimated) {
      reflow(this._getElement());
    }

    this._getElement().classList.add(CLASS_NAME_SHOW$6);

    this._emulateAnimation(() => {
      execute(callback);
    });
  }

  hide(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }

    this._getElement().classList.remove(CLASS_NAME_SHOW$6);

    this._emulateAnimation(() => {
      this.dispose();
      execute(callback);
    });
  } // Private


  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement('div');
      backdrop.className = CLASS_NAME_BACKDROP;

      if (this._config.isAnimated) {
        backdrop.classList.add(CLASS_NAME_FADE$5);
      }

      this._element = backdrop;
    }

    return this._element;
  }

  _getConfig(config) {
    config = { ...Default$6,
      ...(typeof config === 'object' ? config : {})
    };
    config.rootElement = config.rootElement || document.body;
    typeCheckConfig(NAME$7, config, DefaultType$6);
    return config;
  }

  _append() {
    if (this._isAppended) {
      return;
    }

    this._config.rootElement.appendChild(this._getElement());

    EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => {
      execute(this._config.clickCallback);
    });
    this._isAppended = true;
  }

  dispose() {
    if (!this._isAppended) {
      return;
    }

    EventHandler.off(this._element, EVENT_MOUSEDOWN);

    this._getElement().parentNode.removeChild(this._element);

    this._isAppended = false;
  }

  _emulateAnimation(callback) {
    if (!this._config.isAnimated) {
      execute(callback);
      return;
    }

    const backdropTransitionDuration = getTransitionDurationFromElement(this._getElement());
    EventHandler.one(this._getElement(), 'transitionend', () => execute(callback));
    emulateTransitionEnd(this._getElement(), backdropTransitionDuration);
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const NAME$6 = 'modal';
const DATA_KEY$6 = 'bs.modal';
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = '.data-api';
const ESCAPE_KEY$1 = 'Escape';
const Default$5 = {
  backdrop: true,
  keyboard: true,
  focus: true
};
const DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean'
};
const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$6}`;
const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
const EVENT_CLICK_DISMISS$2 = `click.dismiss${EVENT_KEY$6}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$6}`;
const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_OPEN = 'modal-open';
const CLASS_NAME_FADE$4 = 'fade';
const CLASS_NAME_SHOW$5 = 'show';
const CLASS_NAME_STATIC = 'modal-static';
const SELECTOR_DIALOG = '.modal-dialog';
const SELECTOR_MODAL_BODY = '.modal-body';
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const SELECTOR_DATA_DISMISS$2 = '[data-bs-dismiss="modal"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Modal extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._isShown = false;
    this._ignoreBackdropClick = false;
    this._isTransitioning = false;
  } // Getters


  static get Default() {
    return Default$5;
  }

  static get NAME() {
    return NAME$6;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }

    if (this._isAnimated()) {
      this._isTransitioning = true;
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget
    });

    if (this._isShown || showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;
    hide();
    document.body.classList.add(CLASS_NAME_OPEN);

    this._adjustDialog();

    this._setEscapeEvent();

    this._setResizeEvent();

    EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, SELECTOR_DATA_DISMISS$2, event => this.hide(event));
    EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
      EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => {
        if (event.target === this._element) {
          this._ignoreBackdropClick = true;
        }
      });
    });

    this._showBackdrop(() => this._showElement(relatedTarget));
  }

  hide(event) {
    if (event) {
      event.preventDefault();
    }

    if (!this._isShown || this._isTransitioning) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._isShown = false;

    const isAnimated = this._isAnimated();

    if (isAnimated) {
      this._isTransitioning = true;
    }

    this._setEscapeEvent();

    this._setResizeEvent();

    EventHandler.off(document, EVENT_FOCUSIN$2);

    this._element.classList.remove(CLASS_NAME_SHOW$5);

    EventHandler.off(this._element, EVENT_CLICK_DISMISS$2);
    EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

    this._queueCallback(() => this._hideModal(), this._element, isAnimated);
  }

  dispose() {
    [window, this._dialog].forEach(htmlElement => EventHandler.off(htmlElement, EVENT_KEY$6));

    this._backdrop.dispose();

    super.dispose();
    /**
     * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
     * Do not move `document` in `htmlElements` array
     * It will remove `EVENT_CLICK_DATA_API` event that should remain
     */

    EventHandler.off(document, EVENT_FOCUSIN$2);
  }

  handleUpdate() {
    this._adjustDialog();
  } // Private


  _initializeBackDrop() {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value
      isAnimated: this._isAnimated()
    });
  }

  _getConfig(config) {
    config = { ...Default$5,
      ...Manipulator.getDataAttributes(this._element),
      ...config
    };
    typeCheckConfig(NAME$6, config, DefaultType$5);
    return config;
  }

  _showElement(relatedTarget) {
    const isAnimated = this._isAnimated();

    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // Don't move modal's DOM position
      document.body.appendChild(this._element);
    }

    this._element.style.display = 'block';

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.scrollTop = 0;

    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    if (isAnimated) {
      reflow(this._element);
    }

    this._element.classList.add(CLASS_NAME_SHOW$5);

    if (this._config.focus) {
      this._enforceFocus();
    }

    const transitionComplete = () => {
      if (this._config.focus) {
        this._element.focus();
      }

      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN$3, {
        relatedTarget
      });
    };

    this._queueCallback(transitionComplete, this._dialog, isAnimated);
  }

  _enforceFocus() {
    EventHandler.off(document, EVENT_FOCUSIN$2); // guard against infinite focus loop

    EventHandler.on(document, EVENT_FOCUSIN$2, event => {
      if (document !== event.target && this._element !== event.target && !this._element.contains(event.target)) {
        this._element.focus();
      }
    });
  }

  _setEscapeEvent() {
    if (this._isShown) {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
        if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
          event.preventDefault();
          this.hide();
        } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) {
          this._triggerBackdropTransition();
        }
      });
    } else {
      EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
    }
  }

  _setResizeEvent() {
    if (this._isShown) {
      EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
    } else {
      EventHandler.off(window, EVENT_RESIZE);
    }
  }

  _hideModal() {
    this._element.style.display = 'none';

    this._element.setAttribute('aria-hidden', true);

    this._element.removeAttribute('aria-modal');

    this._element.removeAttribute('role');

    this._isTransitioning = false;

    this._backdrop.hide(() => {
      document.body.classList.remove(CLASS_NAME_OPEN);

      this._resetAdjustments();

      reset();
      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
    });
  }

  _showBackdrop(callback) {
    EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, event => {
      if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = false;
        return;
      }

      if (event.target !== event.currentTarget) {
        return;
      }

      if (this._config.backdrop === true) {
        this.hide();
      } else if (this._config.backdrop === 'static') {
        this._triggerBackdropTransition();
      }
    });

    this._backdrop.show(callback);
  }

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE$4);
  }

  _triggerBackdropTransition() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    if (!isModalOverflowing) {
      this._element.style.overflowY = 'hidden';
    }

    this._element.classList.add(CLASS_NAME_STATIC);

    const modalTransitionDuration = getTransitionDurationFromElement(this._dialog);
    EventHandler.off(this._element, 'transitionend');
    EventHandler.one(this._element, 'transitionend', () => {
      this._element.classList.remove(CLASS_NAME_STATIC);

      if (!isModalOverflowing) {
        EventHandler.one(this._element, 'transitionend', () => {
          this._element.style.overflowY = '';
        });
        emulateTransitionEnd(this._element, modalTransitionDuration);
      }
    });
    emulateTransitionEnd(this._element, modalTransitionDuration);

    this._element.focus();
  } // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------


  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const scrollbarWidth = getWidth();
    const isBodyOverflowing = scrollbarWidth > 0;

    if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
      this._element.style.paddingLeft = `${scrollbarWidth}px`;
    }

    if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
      this._element.style.paddingRight = `${scrollbarWidth}px`;
    }
  }

  _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  } // Static


  static jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      const data = Modal.getInstance(this) || new Modal(this, typeof config === 'object' ? config : {});

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](relatedTarget);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Modal = Modal;
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
  const target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  EventHandler.one(target, EVENT_SHOW$3, showEvent => {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$3, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
  });
  const data = Modal.getInstance(target) || new Modal(target);
  data.toggle(this);
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */

defineJQueryPlugin(Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$5 = 'offcanvas';
const DATA_KEY$5 = 'bs.offcanvas';
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const DATA_API_KEY$2 = '.data-api';
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
const ESCAPE_KEY = 'Escape';
const Default$4 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
const DefaultType$4 = {
  backdrop: 'boolean',
  keyboard: 'boolean',
  scroll: 'boolean'
};
const CLASS_NAME_SHOW$4 = 'show';
const OPEN_SELECTOR = '.offcanvas.show';
const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$5}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
const EVENT_CLICK_DISMISS$1 = `click.dismiss${EVENT_KEY$5}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$5}`;
const SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="offcanvas"]';
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Offcanvas extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();

    this._addEventListeners();
  } // Getters


  static get NAME() {
    return NAME$5;
  }

  static get Default() {
    return Default$4;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown) {
      return;
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
      relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;
    this._element.style.visibility = 'visible';

    this._backdrop.show();

    if (!this._config.scroll) {
      hide();

      this._enforceFocusOnElement(this._element);
    }

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.classList.add(CLASS_NAME_SHOW$4);

    const completeCallBack = () => {
      EventHandler.trigger(this._element, EVENT_SHOWN$2, {
        relatedTarget
      });
    };

    this._queueCallback(completeCallBack, this._element, true);
  }

  hide() {
    if (!this._isShown) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

    if (hideEvent.defaultPrevented) {
      return;
    }

    EventHandler.off(document, EVENT_FOCUSIN$1);

    this._element.blur();

    this._isShown = false;

    this._element.classList.remove(CLASS_NAME_SHOW$4);

    this._backdrop.hide();

    const completeCallback = () => {
      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._element.style.visibility = 'hidden';

      if (!this._config.scroll) {
        reset();
      }

      EventHandler.trigger(this._element, EVENT_HIDDEN$2);
    };

    this._queueCallback(completeCallback, this._element, true);
  }

  dispose() {
    this._backdrop.dispose();

    super.dispose();
    EventHandler.off(document, EVENT_FOCUSIN$1);
  } // Private


  _getConfig(config) {
    config = { ...Default$4,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {})
    };
    typeCheckConfig(NAME$5, config, DefaultType$4);
    return config;
  }

  _initializeBackDrop() {
    return new Backdrop({
      isVisible: this._config.backdrop,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: () => this.hide()
    });
  }

  _enforceFocusOnElement(element) {
    EventHandler.off(document, EVENT_FOCUSIN$1); // guard against infinite focus loop

    EventHandler.on(document, EVENT_FOCUSIN$1, event => {
      if (document !== event.target && element !== event.target && !element.contains(event.target)) {
        element.focus();
      }
    });
    element.focus();
  }

  _addEventListeners() {
    EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, () => this.hide());
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
      if (this._config.keyboard && event.key === ESCAPE_KEY) {
        this.hide();
      }
    });
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Data.get(this, DATA_KEY$5) || new Offcanvas(this, typeof config === 'object' ? config : {});

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](this);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Offcanvas = Offcanvas;
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
  const target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  EventHandler.one(target, EVENT_HIDDEN$2, () => {
    // focus on trigger when it is closed
    if (isVisible(this)) {
      this.focus();
    }
  }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

  const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

  if (allReadyOpen && allReadyOpen !== target) {
    Offcanvas.getInstance(allReadyOpen).hide();
  }

  const data = Data.get(target, DATA_KEY$5) || new Offcanvas(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
  SelectorEngine.find(OPEN_SELECTOR).forEach(el => (Data.get(el, DATA_KEY$5) || new Offcanvas(el)).show());
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

const allowedAttribute = (attr, allowedAttributeList) => {
  const attrName = attr.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attrName)) {
    if (uriAttrs.has(attrName)) {
      return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
    }

    return true;
  }

  const regExp = allowedAttributeList.filter(attrRegex => attrRegex instanceof RegExp); // Check if a regular expression validates the attribute.

  for (let i = 0, len = regExp.length; i < len; i++) {
    if (regExp[i].test(attrName)) {
      return true;
    }
  }

  return false;
};

const DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};

function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
  }

  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  const allowlistKeys = Object.keys(allowList);
  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

  for (let i = 0, len = elements.length; i < len; i++) {
    const el = elements[i];
    const elName = el.nodeName.toLowerCase();

    if (!allowlistKeys.includes(elName)) {
      el.parentNode.removeChild(el);
      continue;
    }

    const attributeList = [].concat(...el.attributes);
    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
    attributeList.forEach(attr => {
      if (!allowedAttribute(attr, allowedAttributes)) {
        el.removeAttribute(attr.nodeName);
      }
    });
  }

  return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const NAME$4 = 'tooltip';
const DATA_KEY$4 = 'bs.tooltip';
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const CLASS_PREFIX$1 = 'bs-tooltip';
const BSCLS_PREFIX_REGEX$1 = new RegExp(`(^|\\s)${CLASS_PREFIX$1}\\S+`, 'g');
const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
const DefaultType$3 = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  offset: '(array|string|function)',
  container: '(string|element|boolean)',
  fallbackPlacements: 'array',
  boundary: '(string|element)',
  customClass: '(string|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  allowList: 'object',
  popperConfig: '(null|object|function)'
};
const AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL() ? 'right' : 'left'
};
const Default$3 = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  offset: [0, 0],
  container: false,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  sanitizeFn: null,
  allowList: DefaultAllowlist,
  popperConfig: null
};
const Event$2 = {
  HIDE: `hide${EVENT_KEY$4}`,
  HIDDEN: `hidden${EVENT_KEY$4}`,
  SHOW: `show${EVENT_KEY$4}`,
  SHOWN: `shown${EVENT_KEY$4}`,
  INSERTED: `inserted${EVENT_KEY$4}`,
  CLICK: `click${EVENT_KEY$4}`,
  FOCUSIN: `focusin${EVENT_KEY$4}`,
  FOCUSOUT: `focusout${EVENT_KEY$4}`,
  MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
  MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
};
const CLASS_NAME_FADE$3 = 'fade';
const CLASS_NAME_MODAL = 'modal';
const CLASS_NAME_SHOW$3 = 'show';
const HOVER_STATE_SHOW = 'show';
const HOVER_STATE_OUT = 'out';
const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const TRIGGER_HOVER = 'hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';
const TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Tooltip extends BaseComponent {
  constructor(element, config) {
    if (typeof Popper === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }

    super(element); // private

    this._isEnabled = true;
    this._timeout = 0;
    this._hoverState = '';
    this._activeTrigger = {};
    this._popper = null; // Protected

    this._config = this._getConfig(config);
    this.tip = null;

    this._setListeners();
  } // Getters


  static get Default() {
    return Default$3;
  }

  static get NAME() {
    return NAME$4;
  }

  static get Event() {
    return Event$2;
  }

  static get DefaultType() {
    return DefaultType$3;
  } // Public


  enable() {
    this._isEnabled = true;
  }

  disable() {
    this._isEnabled = false;
  }

  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }

  toggle(event) {
    if (!this._isEnabled) {
      return;
    }

    if (event) {
      const context = this._initializeOnDelegatedTarget(event);

      context._activeTrigger.click = !context._activeTrigger.click;

      if (context._isWithActiveTrigger()) {
        context._enter(null, context);
      } else {
        context._leave(null, context);
      }
    } else {
      if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$3)) {
        this._leave(null, this);

        return;
      }

      this._enter(null, this);
    }
  }

  dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);

    if (this.tip && this.tip.parentNode) {
      this.tip.parentNode.removeChild(this.tip);
    }

    if (this._popper) {
      this._popper.destroy();
    }

    super.dispose();
  }

  show() {
    if (this._element.style.display === 'none') {
      throw new Error('Please use show on visible elements');
    }

    if (!(this.isWithContent() && this._isEnabled)) {
      return;
    }

    const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
    const shadowRoot = findShadowRoot(this._element);
    const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    }

    const tip = this.getTipElement();
    const tipId = getUID(this.constructor.NAME);
    tip.setAttribute('id', tipId);

    this._element.setAttribute('aria-describedby', tipId);

    this.setContent();

    if (this._config.animation) {
      tip.classList.add(CLASS_NAME_FADE$3);
    }

    const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

    const attachment = this._getAttachment(placement);

    this._addAttachmentClass(attachment);

    const {
      container
    } = this._config;
    Data.set(tip, this.constructor.DATA_KEY, this);

    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.appendChild(tip);
      EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
    }

    if (this._popper) {
      this._popper.update();
    } else {
      this._popper = Popper.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }

    tip.classList.add(CLASS_NAME_SHOW$3);
    const customClass = typeof this._config.customClass === 'function' ? this._config.customClass() : this._config.customClass;

    if (customClass) {
      tip.classList.add(...customClass.split(' '));
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(element => {
        EventHandler.on(element, 'mouseover', noop);
      });
    }

    const complete = () => {
      const prevHoverState = this._hoverState;
      this._hoverState = null;
      EventHandler.trigger(this._element, this.constructor.Event.SHOWN);

      if (prevHoverState === HOVER_STATE_OUT) {
        this._leave(null, this);
      }
    };

    const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$3);

    this._queueCallback(complete, this.tip, isAnimated);
  }

  hide() {
    if (!this._popper) {
      return;
    }

    const tip = this.getTipElement();

    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }

      if (this._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
        tip.parentNode.removeChild(tip);
      }

      this._cleanTipClass();

      this._element.removeAttribute('aria-describedby');

      EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);

      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    tip.classList.remove(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support

    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(element => EventHandler.off(element, 'mouseover', noop));
    }

    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;
    const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$3);

    this._queueCallback(complete, this.tip, isAnimated);

    this._hoverState = '';
  }

  update() {
    if (this._popper !== null) {
      this._popper.update();
    }
  } // Protected


  isWithContent() {
    return Boolean(this.getTitle());
  }

  getTipElement() {
    if (this.tip) {
      return this.tip;
    }

    const element = document.createElement('div');
    element.innerHTML = this._config.template;
    this.tip = element.children[0];
    return this.tip;
  }

  setContent() {
    const tip = this.getTipElement();
    this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
    tip.classList.remove(CLASS_NAME_FADE$3, CLASS_NAME_SHOW$3);
  }

  setElementContent(element, content) {
    if (element === null) {
      return;
    }

    if (isElement(content)) {
      content = getElement(content); // content is a DOM node or a jQuery

      if (this._config.html) {
        if (content.parentNode !== element) {
          element.innerHTML = '';
          element.appendChild(content);
        }
      } else {
        element.textContent = content.textContent;
      }

      return;
    }

    if (this._config.html) {
      if (this._config.sanitize) {
        content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
      }

      element.innerHTML = content;
    } else {
      element.textContent = content;
    }
  }

  getTitle() {
    let title = this._element.getAttribute('data-bs-original-title');

    if (!title) {
      title = typeof this._config.title === 'function' ? this._config.title.call(this._element) : this._config.title;
    }

    return title;
  }

  updateAttachment(attachment) {
    if (attachment === 'right') {
      return 'end';
    }

    if (attachment === 'left') {
      return 'start';
    }

    return attachment;
  } // Private


  _initializeOnDelegatedTarget(event, context) {
    const dataKey = this.constructor.DATA_KEY;
    context = context || Data.get(event.delegateTarget, dataKey);

    if (!context) {
      context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
      Data.set(event.delegateTarget, dataKey, context);
    }

    return context;
  }

  _getOffset() {
    const {
      offset
    } = this._config;

    if (typeof offset === 'string') {
      return offset.split(',').map(val => Number.parseInt(val, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: 'flip',
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }, {
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'arrow',
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: 'onChange',
        enabled: true,
        phase: 'afterWrite',
        fn: data => this._handlePopperPlacementChange(data)
      }],
      onFirstUpdate: data => {
        if (data.options.placement !== data.placement) {
          this._handlePopperPlacementChange(data);
        }
      }
    };
    return { ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
  }

  _addAttachmentClass(attachment) {
    this.getTipElement().classList.add(`${CLASS_PREFIX$1}-${this.updateAttachment(attachment)}`);
  }

  _getAttachment(placement) {
    return AttachmentMap[placement.toUpperCase()];
  }

  _setListeners() {
    const triggers = this._config.trigger.split(' ');

    triggers.forEach(trigger => {
      if (trigger === 'click') {
        EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, event => this.toggle(event));
      } else if (trigger !== TRIGGER_MANUAL) {
        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
        EventHandler.on(this._element, eventIn, this._config.selector, event => this._enter(event));
        EventHandler.on(this._element, eventOut, this._config.selector, event => this._leave(event));
      }
    });

    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };

    EventHandler.on(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);

    if (this._config.selector) {
      this._config = { ...this._config,
        trigger: 'manual',
        selector: ''
      };
    } else {
      this._fixTitle();
    }
  }

  _fixTitle() {
    const title = this._element.getAttribute('title');

    const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

    if (title || originalTitleType !== 'string') {
      this._element.setAttribute('data-bs-original-title', title || '');

      if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.setAttribute('title', '');
    }
  }

  _enter(event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
      context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
    }

    if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
      context._hoverState = HOVER_STATE_SHOW;
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_SHOW;

    if (!context._config.delay || !context._config.delay.show) {
      context.show();
      return;
    }

    context._timeout = setTimeout(() => {
      if (context._hoverState === HOVER_STATE_SHOW) {
        context.show();
      }
    }, context._config.delay.show);
  }

  _leave(event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
      context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
    }

    if (context._isWithActiveTrigger()) {
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_OUT;

    if (!context._config.delay || !context._config.delay.hide) {
      context.hide();
      return;
    }

    context._timeout = setTimeout(() => {
      if (context._hoverState === HOVER_STATE_OUT) {
        context.hide();
      }
    }, context._config.delay.hide);
  }

  _isWithActiveTrigger() {
    for (const trigger in this._activeTrigger) {
      if (this._activeTrigger[trigger]) {
        return true;
      }
    }

    return false;
  }

  _getConfig(config) {
    const dataAttributes = Manipulator.getDataAttributes(this._element);
    Object.keys(dataAttributes).forEach(dataAttr => {
      if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
        delete dataAttributes[dataAttr];
      }
    });
    config = { ...this.constructor.Default,
      ...dataAttributes,
      ...(typeof config === 'object' && config ? config : {})
    };
    config.container = config.container === false ? document.body : getElement(config.container);

    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }

    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }

    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }

    typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

    if (config.sanitize) {
      config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
    }

    return config;
  }

  _getDelegateConfig() {
    const config = {};

    if (this._config) {
      for (const key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
          config[key] = this._config[key];
        }
      }
    }

    return config;
  }

  _cleanTipClass() {
    const tip = this.getTipElement();
    const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX$1);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
    }
  }

  _handlePopperPlacementChange(popperData) {
    const {
      state
    } = popperData;

    if (!state) {
      return;
    }

    this.tip = state.elements.popper;

    this._cleanTipClass();

    this._addAttachmentClass(this._getAttachment(state.placement));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      let data = Data.get(this, DATA_KEY$4);

      const _config = typeof config === 'object' && config;

      if (!data && /dispose|hide/.test(config)) {
        return;
      }

      if (!data) {
        data = new Tooltip(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */


exports.Tooltip = Tooltip;
defineJQueryPlugin(Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$3 = 'popover';
const DATA_KEY$3 = 'bs.popover';
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const CLASS_PREFIX = 'bs-popover';
const BSCLS_PREFIX_REGEX = new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`, 'g');
const Default$2 = { ...Tooltip.Default,
  placement: 'right',
  offset: [0, 8],
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
};
const DefaultType$2 = { ...Tooltip.DefaultType,
  content: '(string|element|function)'
};
const Event$1 = {
  HIDE: `hide${EVENT_KEY$3}`,
  HIDDEN: `hidden${EVENT_KEY$3}`,
  SHOW: `show${EVENT_KEY$3}`,
  SHOWN: `shown${EVENT_KEY$3}`,
  INSERTED: `inserted${EVENT_KEY$3}`,
  CLICK: `click${EVENT_KEY$3}`,
  FOCUSIN: `focusin${EVENT_KEY$3}`,
  FOCUSOUT: `focusout${EVENT_KEY$3}`,
  MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
  MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
};
const CLASS_NAME_FADE$2 = 'fade';
const CLASS_NAME_SHOW$2 = 'show';
const SELECTOR_TITLE = '.popover-header';
const SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Popover extends Tooltip {
  // Getters
  static get Default() {
    return Default$2;
  }

  static get NAME() {
    return NAME$3;
  }

  static get Event() {
    return Event$1;
  }

  static get DefaultType() {
    return DefaultType$2;
  } // Overrides


  isWithContent() {
    return this.getTitle() || this._getContent();
  }

  setContent() {
    const tip = this.getTipElement(); // we use append for html objects to maintain js events

    this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());

    let content = this._getContent();

    if (typeof content === 'function') {
      content = content.call(this._element);
    }

    this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
  } // Private


  _addAttachmentClass(attachment) {
    this.getTipElement().classList.add(`${CLASS_PREFIX}-${this.updateAttachment(attachment)}`);
  }

  _getContent() {
    return this._element.getAttribute('data-bs-content') || this._config.content;
  }

  _cleanTipClass() {
    const tip = this.getTipElement();
    const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
    }
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      let data = Data.get(this, DATA_KEY$3);

      const _config = typeof config === 'object' ? config : null;

      if (!data && /dispose|hide/.test(config)) {
        return;
      }

      if (!data) {
        data = new Popover(this, _config);
        Data.set(this, DATA_KEY$3, data);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */


exports.Popover = Popover;
defineJQueryPlugin(Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$2 = 'scrollspy';
const DATA_KEY$2 = 'bs.scrollspy';
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY$1 = '.data-api';
const Default$1 = {
  offset: 10,
  method: 'auto',
  target: ''
};
const DefaultType$1 = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const CLASS_NAME_ACTIVE$1 = 'active';
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
const SELECTOR_NAV_LINKS = '.nav-link';
const SELECTOR_NAV_ITEMS = '.nav-item';
const SELECTOR_LIST_ITEMS = '.list-group-item';
const SELECTOR_DROPDOWN$1 = '.dropdown';
const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const METHOD_OFFSET = 'offset';
const METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class ScrollSpy extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
    this._config = this._getConfig(config);
    this._selector = `${this._config.target} ${SELECTOR_NAV_LINKS}, ${this._config.target} ${SELECTOR_LIST_ITEMS}, ${this._config.target} .${CLASS_NAME_DROPDOWN_ITEM}`;
    this._offsets = [];
    this._targets = [];
    this._activeTarget = null;
    this._scrollHeight = 0;
    EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());
    this.refresh();

    this._process();
  } // Getters


  static get Default() {
    return Default$1;
  }

  static get NAME() {
    return NAME$2;
  } // Public


  refresh() {
    const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
    const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
    const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
    this._offsets = [];
    this._targets = [];
    this._scrollHeight = this._getScrollHeight();
    const targets = SelectorEngine.find(this._selector);
    targets.map(element => {
      const targetSelector = getSelectorFromElement(element);
      const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

      if (target) {
        const targetBCR = target.getBoundingClientRect();

        if (targetBCR.width || targetBCR.height) {
          return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
        }
      }

      return null;
    }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
      this._offsets.push(item[0]);

      this._targets.push(item[1]);
    });
  }

  dispose() {
    EventHandler.off(this._scrollElement, EVENT_KEY$2);
    super.dispose();
  } // Private


  _getConfig(config) {
    config = { ...Default$1,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' && config ? config : {})
    };

    if (typeof config.target !== 'string' && isElement(config.target)) {
      let {
        id
      } = config.target;

      if (!id) {
        id = getUID(NAME$2);
        config.target.id = id;
      }

      config.target = `#${id}`;
    }

    typeCheckConfig(NAME$2, config, DefaultType$1);
    return config;
  }

  _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  }

  _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  }

  _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  }

  _process() {
    const scrollTop = this._getScrollTop() + this._config.offset;

    const scrollHeight = this._getScrollHeight();

    const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

    if (this._scrollHeight !== scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      const target = this._targets[this._targets.length - 1];

      if (this._activeTarget !== target) {
        this._activate(target);
      }

      return;
    }

    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null;

      this._clear();

      return;
    }

    for (let i = this._offsets.length; i--;) {
      const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

      if (isActiveTarget) {
        this._activate(this._targets[i]);
      }
    }
  }

  _activate(target) {
    this._activeTarget = target;

    this._clear();

    const queries = this._selector.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);

    const link = SelectorEngine.findOne(queries.join(','));

    if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
      link.classList.add(CLASS_NAME_ACTIVE$1);
    } else {
      // Set triggered link as active
      link.classList.add(CLASS_NAME_ACTIVE$1);
      SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item

        SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(navItem => {
          SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));
        });
      });
    }

    EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }

  _clear() {
    SelectorEngine.find(this._selector).filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = ScrollSpy.getInstance(this) || new ScrollSpy(this, typeof config === 'object' ? config : {});

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.ScrollSpy = ScrollSpy;
EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(spy => new ScrollSpy(spy));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */

defineJQueryPlugin(ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$1 = 'tab';
const DATA_KEY$1 = 'bs.tab';
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const DATA_API_KEY = '.data-api';
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_FADE$1 = 'fade';
const CLASS_NAME_SHOW$1 = 'show';
const SELECTOR_DROPDOWN = '.dropdown';
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const SELECTOR_ACTIVE = '.active';
const SELECTOR_ACTIVE_UL = ':scope > li > .active';
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Tab extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$1;
  } // Public


  show() {
    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
      return;
    }

    let previous;
    const target = getElementFromSelector(this._element);

    const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

    if (listElement) {
      const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
      previous = SelectorEngine.find(itemSelector, listElement);
      previous = previous[previous.length - 1];
    }

    const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
      relatedTarget: this._element
    }) : null;
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
      relatedTarget: previous
    });

    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
      return;
    }

    this._activate(this._element, listElement);

    const complete = () => {
      EventHandler.trigger(previous, EVENT_HIDDEN$1, {
        relatedTarget: this._element
      });
      EventHandler.trigger(this._element, EVENT_SHOWN$1, {
        relatedTarget: previous
      });
    };

    if (target) {
      this._activate(target, target.parentNode, complete);
    } else {
      complete();
    }
  } // Private


  _activate(element, container, callback) {
    const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
    const active = activeElements[0];
    const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

    const complete = () => this._transitionComplete(element, active, callback);

    if (active && isTransitioning) {
      active.classList.remove(CLASS_NAME_SHOW$1);

      this._queueCallback(complete, element, true);
    } else {
      complete();
    }
  }

  _transitionComplete(element, active, callback) {
    if (active) {
      active.classList.remove(CLASS_NAME_ACTIVE);
      const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

      if (dropdownChild) {
        dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
      }

      if (active.getAttribute('role') === 'tab') {
        active.setAttribute('aria-selected', false);
      }
    }

    element.classList.add(CLASS_NAME_ACTIVE);

    if (element.getAttribute('role') === 'tab') {
      element.setAttribute('aria-selected', true);
    }

    reflow(element);

    if (element.classList.contains(CLASS_NAME_FADE$1)) {
      element.classList.add(CLASS_NAME_SHOW$1);
    }

    let parent = element.parentNode;

    if (parent && parent.nodeName === 'LI') {
      parent = parent.parentNode;
    }

    if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
      const dropdownElement = element.closest(SELECTOR_DROPDOWN);

      if (dropdownElement) {
        SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add(CLASS_NAME_ACTIVE));
      }

      element.setAttribute('aria-expanded', true);
    }

    if (callback) {
      callback();
    }
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Data.get(this, DATA_KEY$1) || new Tab(this);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Tab = Tab;
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  const data = Data.get(this, DATA_KEY$1) || new Tab(this);
  data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */

defineJQueryPlugin(Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'toast';
const DATA_KEY = 'bs.toast';
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_HIDE = 'hide';
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_SHOWING = 'showing';
const DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
const Default = {
  animation: true,
  autohide: true,
  delay: 5000
};
const SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Toast extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;

    this._setListeners();
  } // Getters


  static get DefaultType() {
    return DefaultType;
  }

  static get Default() {
    return Default;
  }

  static get NAME() {
    return NAME;
  } // Public


  show() {
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._clearTimeout();

    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE);
    }

    const complete = () => {
      this._element.classList.remove(CLASS_NAME_SHOWING);

      this._element.classList.add(CLASS_NAME_SHOW);

      EventHandler.trigger(this._element, EVENT_SHOWN);

      this._maybeScheduleHide();
    };

    this._element.classList.remove(CLASS_NAME_HIDE);

    reflow(this._element);

    this._element.classList.add(CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  }

  hide() {
    if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const complete = () => {
      this._element.classList.add(CLASS_NAME_HIDE);

      EventHandler.trigger(this._element, EVENT_HIDDEN);
    };

    this._element.classList.remove(CLASS_NAME_SHOW);

    this._queueCallback(complete, this._element, this._config.animation);
  }

  dispose() {
    this._clearTimeout();

    if (this._element.classList.contains(CLASS_NAME_SHOW)) {
      this._element.classList.remove(CLASS_NAME_SHOW);
    }

    super.dispose();
  } // Private


  _getConfig(config) {
    config = { ...Default,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' && config ? config : {})
    };
    typeCheckConfig(NAME, config, this.constructor.DefaultType);
    return config;
  }

  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return;
    }

    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }

    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }

  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case 'mouseover':
      case 'mouseout':
        this._hasMouseInteraction = isInteracting;
        break;

      case 'focusin':
      case 'focusout':
        this._hasKeyboardInteraction = isInteracting;
        break;
    }

    if (isInteracting) {
      this._clearTimeout();

      return;
    }

    const nextElement = event.relatedTarget;

    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }

    this._maybeScheduleHide();
  }

  _setListeners() {
    EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, () => this.hide());
    EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
    EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
  }

  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      let data = Data.get(this, DATA_KEY);

      const _config = typeof config === 'object' && config;

      if (!data) {
        data = new Toast(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */


exports.Toast = Toast;
defineJQueryPlugin(Toast);
},{"@popperjs/core":"../node_modules/@popperjs/core/lib/index.js"}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/wtf_wikipedia/builds/wtf_wikipedia-client.js":[function(require,module,exports) {
var define;
var global = arguments[3];
var process = require("process");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* wtf_wikipedia 9.0.0 MIT */
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.wtf = factory());
})(this, function () {
  'use strict';

  function require$$0(e, n) {
    return n = n || {}, new Promise(function (t, r) {
      var s = new XMLHttpRequest(),
          o = [],
          u = [],
          i = {},
          a = function a() {
        return {
          ok: 2 == (s.status / 100 | 0),
          statusText: s.statusText,
          status: s.status,
          url: s.responseURL,
          text: function text() {
            return Promise.resolve(s.responseText);
          },
          json: function json() {
            return Promise.resolve(s.responseText).then(JSON.parse);
          },
          blob: function blob() {
            return Promise.resolve(new Blob([s.response]));
          },
          clone: a,
          headers: {
            keys: function keys() {
              return o;
            },
            entries: function entries() {
              return u;
            },
            get: function get(e) {
              return i[e.toLowerCase()];
            },
            has: function has(e) {
              return e.toLowerCase() in i;
            }
          }
        };
      };

      for (var l in s.open(n.method || "get", e, !0), s.onload = function () {
        s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, n, t) {
          o.push(n = n.toLowerCase()), u.push([n, t]), i[n] = i[n] ? i[n] + "," + t : t;
        }), t(a());
      }, s.onerror = r, s.withCredentials = "include" == n.credentials, n.headers) {
        s.setRequestHeader(l, n.headers[l]);
      }

      s.send(n.body || null);
    });
  }

  var browser = self.fetch || (self.fetch = require$$0.default || require$$0);
  /**
   * Parses out the domain and title from a url
   *
   * @private
   * @param {string} url The url that will be parsed
   * @returns {{domain: string, title: string}} The domain and title of a url
   */

  var parseUrl = function parseUrl(url) {
    var parsed = new URL(url);
    var title = parsed.pathname.replace(/^\/(wiki\/)?/, '');
    title = decodeURIComponent(title);
    return {
      domain: parsed.host,
      title: title
    };
  };

  var parseUrl_1 = parseUrl;
  /**
   * capitalizes the input
   * hello -> Hello
   * hello there -> Hello there
   *
   * @private
   * @param {string} [str] the string that will be capitalized
   * @returns {string} the capitalized string
   */

  function capitalise(str) {
    if (str && typeof str === 'string') {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return '';
  }
  /**
   * trim whitespaces of the ends normalize 2 spaces into one and removes whitespaces before commas
   *
   * @private
   * @param {string} [str] the string that will be processed
   * @returns {string} the processed string
   */


  function trim_whitespace$1(str) {
    if (str && typeof str === 'string') {
      str = str.replace(/^\s\s*/, '');
      str = str.replace(/\s\s*$/, '');
      str = str.replace(/ {2}/, ' ');
      str = str.replace(/\s, /, ', ');
      return str;
    }

    return '';
  }
  /**
   * determines if an variable is an array or not
   *
   * @private
   * @param {*} x the variable that needs to be checked
   * @returns {boolean} whether the variable is an array
   */


  function isArray$3(x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  }
  /**
   *  determines if an variable is an object or not
   *
   * @private
   * @param {*} x the variable that needs to be checked
   * @returns {boolean} whether the variable is an object
   */


  function isObject$1(x) {
    return x && Object.prototype.toString.call(x) === '[object Object]';
  }

  var helpers = {
    capitalise: capitalise,
    trim_whitespace: trim_whitespace$1,
    isArray: isArray$3,
    isObject: isObject$1
  };
  var isArray$2 = helpers.isArray;
  var isInterWiki = /(wikibooks|wikidata|wikimedia|wikinews|wikipedia|wikiquote|wikisource|wikispecies|wikiversity|wikivoyage|wiktionary|foundation|meta)\.org/;
  var defaults$c = {
    action: 'query',
    prop: 'revisions|pageprops',
    // we use the 'revisions' api here, instead of the Raw api, for its CORS-rules..
    rvprop: 'content',
    maxlag: 5,
    rvslots: 'main',
    origin: '*',
    format: 'json',
    redirects: 'true'
  };
  /**
   * turns a object into a query string
   * 
   * @private
   * @param {Object<string, string | number | boolean>} obj
   * @returns {string} QueryString
   */

  var toQueryString = function toQueryString(obj) {
    return Object.entries(obj).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
    }).join('&');
  };
  /**
   * cleans and prepares the tile by replacing the spaces with underscores (_) and trimming the white spaces of the ends
   *
   * @private
   * @param {string} page the title that needs cleaning
   * @returns {string} the cleaned title
   */


  var cleanTitle = function cleanTitle(page) {
    return page.replace(/ /g, '_').trim();
  };
  /**
   * generates the url for fetching the pages
   * 
   * @private
   * @param {import('.').fetchDefaults} options
   * @returns {string} the url that can be used to make the fetch
   */


  var makeUrl = function makeUrl(options) {
    var params = Object.assign({}, defaults$c); //default url

    var apiPath = ''; //add support for third party apis

    if (options.domain) {
      //wikimedia is the only api that uses `/w/api` as its path. other wikis use other paths
      var path = isInterWiki.test(options.domain) ? 'w/api.php' : options.path;
      apiPath = "https://".concat(options.domain, "/").concat(path, "?");
    } else if (options.lang && options.wiki) {
      apiPath = "https://".concat(options.lang, ".").concat(options.wiki, ".org/w/api.php?");
    } else {
      return '';
    }

    if (!options.follow_redirects) {
      delete params.redirects;
    } //support numerical ids


    var title = options.title;

    if (typeof title === 'number') {
      //single pageId
      params.pageids = title;
    } else if (typeof title === 'string') {
      //single page title
      params.titles = cleanTitle(title);
    } else if (title !== undefined && isArray$2(title) && typeof title[0] === 'number') {
      //pageid array
      params.pageids = title.join('|');
    } else if (title !== undefined && isArray$2(title) === true && typeof title[0] === 'string') {
      //title array
      params.titles = title.map(cleanTitle).join('|');
    } else {
      return '';
    } //make it!


    return "".concat(apiPath).concat(toQueryString(params));
  };

  var makeUrl_1 = makeUrl;
  /**
   * parses the media wiki api response to something we can use
   *
   * the data-format from mediawiki api is nutso
   *
   * @private
   * @param {object} data
   * @param {object} [options]
   * @returns {*} result
   */

  var getResult = function getResult(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    //get all the pagesIds from the result
    var pages = Object.keys(data.query.pages); // map over the pageIds to parse out all the information

    return pages.map(function (id) {
      // get the page by pageID
      var page = data.query.pages[id] || {}; // if the page is missing or not found than return null

      if (page.hasOwnProperty('missing') || page.hasOwnProperty('invalid')) {
        return null;
      } // get the text from the object


      var text = page.revisions[0]['*']; // if the text is not found in the regular place than it is at the other place

      if (!text && page.revisions[0].slots) {
        text = page.revisions[0].slots.main['*'];
      }

      page.pageprops = page.pageprops || {};
      var domain = options.domain;

      if (!domain && options.wiki) {
        domain = "".concat(options.wiki, ".org");
      }

      var meta = Object.assign({}, options, {
        title: page.title,
        pageID: page.pageid,
        namespace: page.ns,
        domain: domain,
        wikidata: page.pageprops.wikibase_item,
        description: page.pageprops['wikibase-shortdesc']
      });
      return {
        wiki: text,
        meta: meta
      };
    });
  };

  var getResult_1 = getResult;
  /**
   * helper for looping around all sections of a document
   *
   * @private
   * @param {Document} doc the document with the sections
   * @param {string} fn the function name of the function that will be called
   * @param {string | number} [clue] the clue that will be used with the function
   * @returns {Array|*} the array of item at the index of the clue
   */

  var sectionMap = function sectionMap(doc, fn, clue) {
    var arr = [];
    doc.sections().forEach(function (sec) {
      var list = [];

      if (typeof clue === 'string') {
        list = sec[fn](clue);
      } else {
        list = sec[fn]();
      }

      list.forEach(function (t) {
        arr.push(t);
      });
    });

    if (typeof clue === 'number') {
      if (arr[clue] === undefined) {
        return [];
      }

      return [arr[clue]];
    }

    return arr;
  };

  var _sectionMap = sectionMap;
  /**
   * applies the the key values of defaults to options
   *
   * @private
   * @param {object} options the user options
   * @param {object} defaults the defaults
   * @returns {object} the user options with the defaults applied
   */

  var setDefaults = function setDefaults(options, defaults) {
    return Object.assign({}, defaults, options);
  };

  var setDefaults_1 = setDefaults;
  /**
   * @typedef DocumentToJsonOptions
   * @property {boolean | undefined} title
   * @property {boolean | undefined} pageID
   * @property {boolean | undefined} categories
   * @property {boolean | undefined} sections
   * @property {boolean | undefined} coordinates
   * @property {boolean | undefined} infoboxes
   * @property {boolean | undefined} images
   * @property {boolean | undefined} plaintext
   * @property {boolean | undefined} citations
   * @property {boolean | undefined} references
   */

  var defaults$b = {
    title: true,
    sections: true,
    pageID: true,
    categories: true
  };
  /**
   * @typedef documentToJsonReturn
   * @property {string | undefined} title
   * @property {number | null | undefined} pageID
   * @property {string[] | undefined} categories
   * @property {object[] | undefined} sections
   * @property {boolean | undefined} isRedirect
   * @property {object | undefined} redirectTo
   * @property {object[] | undefined} coordinates
   * @property {object[] | undefined} infoboxes
   * @property {Image[] | undefined} images
   * @property {string | undefined} plaintext
   * @property {object[] | undefined} references
   */

  /**
   * an opinionated output of the most-wanted data
   *
   * @private
   * @param {Document} doc
   * @param {DocumentToJsonOptions} options
   * @returns {documentToJsonReturn}
   */

  var toJSON$3 = function toJSON$3(doc, options) {
    options = setDefaults_1(options, defaults$b);
    /**
     * @type {documentToJsonReturn}
     */

    var data = {};

    if (options.title) {
      data.title = doc.title();
    }

    if (options.pageID) {
      data.pageID = doc.pageID();
    }

    if (options.categories) {
      data.categories = doc.categories();
    }

    if (options.sections) {
      data.sections = doc.sections().map(function (i) {
        return i.json(options);
      });
    }

    if (doc.isRedirect() === true) {
      data.isRedirect = true;
      data.redirectTo = doc.redirectTo();
      data.sections = [];
    } //these are default-off


    if (options.coordinates) {
      data.coordinates = doc.coordinates();
    }

    if (options.infoboxes) {
      data.infoboxes = doc.infoboxes().map(function (i) {
        return i.json(options);
      });
    }

    if (options.images) {
      data.images = doc.images().map(function (i) {
        return i.json(options);
      });
    }

    if (options.plaintext) {
      data.plaintext = doc.text(options);
    }

    if (options.citations || options.references) {
      data.references = doc.references();
    }

    return data;
  };

  var toJson$6 = toJSON$3;
  var categories$1 = ['category', //en
  'abdeeling', //	pdc
  'bólkur', //	fo
  'catagóir', //	ga
  'categori', //	cy
  'categoria', 'categoria', //	co
  'categoría', //	es
  'categorîa', //	lij
  'categorìa', //	pms
  'catégorie', 'categorie', 'catègorie', //	frp
  'category', 'categuria', //	lmo
  'catigurìa', //	scn
  'class', //	kw
  'ẹ̀ka', //	yo
  'flocc', 'flocc', //	ang
  'flokkur', 'grup', //	tpi
  'jamii', //	sw
  'kaarangay', //	war
  'kateggoría', //	lad
  'kategooria', //	et
  'kategori', //	da
  'kategorî', //	ku
  'kategoria', //	eu
  'kategória', //	hu
  'kategorie', //de
  'kategoriija', //	se
  'kategorija', //	sl
  'kategorio', //	eo
  'kategoriya', 'kategoriýa', //	tk
  'kategoriye', //	diq
  'kategory', //	fy
  'kategorya', //	tl
  'kateqoriya', //	az
  'katiguriya', //	qu
  'klad', //	vo
  'luokka', 'ñemohenda', //	gn
  'roinn', //-seòrsa	gd
  'ronney', //	gv
  'rummad', //	br
  'setensele', //	nso
  'sokajy', //	mg
  'sumut', // atassuseq	kl
  'thể', // loại	vi
  'turkum', //	uz
  'категорија', 'категория', //	ru
  'категорія', //	uk
  'катэгорыя', 'төркем', //	tt
  'קטגוריה', //	he
  'تصنيف', 'تۈر', //	ug
  'رده', 'श्रेणी', 'श्रेणी', //	hi
  'বিষয়শ্রেণী', //	bn
  'หมวดหมู่', //	th
  '분류', //	ko
  '분류', //ko
  '分类' //	za
  //--
  ];
  var disambig_templates = ['dab', //en
  'disamb', //en
  'disambig', //en
  'disambiguation', //en
  'aðgreining', //is
  'aimai', //ja
  'ałtsʼáʼáztiin', //nv
  'anlam ayrımı', //gag
  'anlam ayrımı', //tr
  'apartigilo', //eo
  'argipen', //eu
  'begriepskloorenge', //stq
  'begriffsklärung', //als
  'begriffsklärung', //de
  'begriffsklärung', //pdc
  'begriffsklearung', //bar
  'bisongidila', //kg
  'bkl', //pfl
  'bokokani', //ln
  'caddayn', //so
  'clerheans', //kw
  'cudakirin', //ku
  'čvor', //bs
  'db', //vls
  'desambig', //nov
  'desambigación', //an
  'desambiguação', //pt
  'desambiguació', //ca
  'desambiguación', //es
  'desambiguáncia', //ext
  'desambiguasion', //lad
  'desambiguassiù', //lmo
  'desambigui', //lfn
  'dezambiguizare', //ro
  'dəqiqləşdirmə', //az
  'disambigua', //it
  'disambigua', //lij
  'disambigua', //nap
  'disambìgua', //sc
  'disambigua', //scn
  'disambiguasi', //id
  'disambiguasi', //su
  'discretiva', //la
  'disheñvelout', //br
  'disingkek', //min
  'dixanbigua', //vec
  'dixebra', //ast
  'diżambigwazzjoni', //mt
  'doorverwijspagina', //nl
  'dp', //nl
  'dp', //zea
  'dubbelsinnig', //af
  'dudalipen', //rmy
  'dv', //nds_nl
  'egyért', //hu
  'fleiri týdningar', //fo
  'fleirtyding', //nn
  'flertydig', //da
  'förgrening', //sv
  'gì-ngiê', //cdo
  'giklaro', //ceb
  'gwahaniaethu', //cy
  'homonimo', //io
  'homónimos', //gl
  'homonymie', //fr
  'huaʻōlelo puana like', //haw
  'idirdhealú', //ga
  'khu-pia̍t', //zh_min_nan
  'kthjellim', //sq
  'kujekesa', //sn
  'maana', //sw
  'maneo bin', //diq
  'mehrdüdig begreep', //nds
  'menm non', //ht
  'muardüüdag artiikel', //frr
  'neibetsjuttings', //fy
  'nozīmju atdalīšana', //lv
  'nuorodinis', //lt
  'nyahkekaburan', //ms
  'omonimeye', //wa
  'omonimia', //oc
  'page dé frouque', //nrm
  'paglilinaw', //tl
  'panangilawlawag', //ilo
  'pansayod', //war
  'pejy mitovy anarana', //mg
  'peker', //no
  'razdvojba', //hr
  'razločitev', //sl
  'razvrstavanje', //sh
  'reddaghey', //gv
  'rozcestník', //cs
  'rozlišovacia stránka', //sk
  'sclerir noziun', //rm
  'selvendyssivu', //olo
  'soilleireachadh', //gd
  'suzmunski', //jbo
  'täpsustuslehekülg', //et
  'täsmennyssivu', //fi
  'telplänov', //vo
  'tlahtolmelahuacatlaliztli', //nah
  'trang định hướng', //vi
  'ujednoznacznienie', //pl
  'verdudeliking', //li
  'wěcejwóznamowosć', //dsb
  'wjacezmyslnosć', //hsb
  'zambiguaçon', //mwl
  'zeimeibu škiršona', //ltg
  'αποσαφήνιση', //el
  'айрық', //kk
  'аҵакырацәа', //ab
  'вишезначна одредница', //sr
  'ибҳомзудоӣ', //tg
  'кёб магъаналы', //krc
  'күп мәгънәләр', //tt
  'күп мәғәнәлелек', //ba
  'мъногосъмꙑслиѥ', //cu
  'неадназначнасць', //be
  'неадназначнасьць', //be_x_old
  'неоднозначность', //ru
  'олон удхатай', //bxr
  'појаснување', //mk
  'пояснение', //bg
  'са шумуд манавал', //lez
  'салаа утгатай', //mn
  'суолталар', //sah
  'текмаанисиздик', //ky
  'цо магіна гуреб', //av
  'чеперушка', //rue
  'чолхалла', //ce
  'шуко ончыктымаш-влак', //mhr
  'მრავალმნიშვნელოვანი', //ka
  'բազմիմաստութիւն', //hyw
  'բազմիմաստություն', //hy
  'באדייטן', //yi
  'פירושונים', //he
  'ابهام‌زدایی', //fa
  'توضيح', //ar
  'توضيح', //arz
  'دقیقلشدیرمه', //azb
  'ڕوونکردنەوە', //ckb
  'سلجهائپ', //sd
  'ضد ابہام', //ur
  'گجگجی بیری', //mzn
  'نامبهمېدنه', //ps
  'መንታ', //am
  'अस्पष्टता', //ne
  'बहुअर्थी', //bh
  'बहुविकल्पी शब्द', //hi
  'দ্ব্যর্থতা নিরসন', //bn
  'ਗੁੰਝਲ-ਖੋਲ੍ਹ', //pa
  'સંદિગ્ધ શીર્ષક', //gu
  'பக்கவழி நெறிப்படுத்தல்', //ta
  'అయోమయ నివృత్తి', //te
  'ದ್ವಂದ್ವ ನಿವಾರಣೆ', //kn
  'വിവക്ഷകൾ', //ml
  'වක්‍රෝත්ති', //si
  'แก้ความกำกวม', //th
  'သံတူကြောင်းကွဲ', //my
  'ណែនាំ', //km
  '동음이의', //ko
  '扤清楚', //gan
  '搞清楚', //zh_yue
  '曖昧さ回避', //ja
  '消歧义', //zh
  '釋義', //zh_classical
  "gestion dj'omònim", //pms
  "sut'ichana qillqa" //qu
  // 'z', //vep
  // 'သဵင်မိူၼ် တူၼ်ႈထႅဝ်ပႅၵ်ႇ', //shn
  ]; // used in titles to denote disambiguation pages
  // see 'Football_(disambiguation)'

  var disambig_titles = ['disambiguation', //en
  'homonymie', //fr
  'توضيح', //ar
  'desambiguação', //pt
  'Begriffsklärung', //de
  'disambigua', //it
  '曖昧さ回避', //ja
  '消歧義', //zh
  '搞清楚', //zh-yue
  'значения', //ru
  'ابهام‌زدایی', //fa
  'د ابہام', //ur
  '동음이의', //ko
  'dubbelsinnig', //af
  'այլ կիրառումներ', //hy
  'ujednoznacznienie' //pl
  ];
  var images = ['file', //en
  'image', //en
  'चित्र', //img
  'archivo', //es
  'attēls', //lv
  'berkas', //id
  'bestand', //nl
  'datei', //de
  'dosiero', //eo
  'dosya', //lad
  'fájl', //hu
  'fasciculus', //la
  'fichier', //fr
  'fil', //da
  'fitxategi', //eu
  'fitxer', //ca
  'gambar', //su
  'imagem', //pt
  'imej', //ms
  'immagine', //it
  'larawan', //tl
  'lêer', //af
  'plik', //pl
  'restr', //br
  'slika', //bs
  'wêne', //ku
  'wobraz', //dsb
  'выява', //be
  'податотека', //mk
  'слика', //sr
  'файл', //ru
  'სურათი', //ka
  'պատկեր', //hy
  'קובץ', //he
  'پرونده', //fa
  'دوتنه', //ps
  'ملف', //ar
  'وێنە', //ckb
  'चित्र', //hi
  'ไฟล์', //th
  '파일', //ko
  'ファイル' //ja
  ];
  var infoboxes = ['infobox', //en
  'anfo', //mwl
  'anuāmapa', //haw
  'bilgi kutusu', //tr
  'bilgi', //tr
  'bilgiquti', //uz
  'boaty', //mg
  'boestkelaouiñ', //br
  'bosca', //ga
  'capsa', //la
  'diehtokássa', //se
  'faktamall', //sv
  'ficha', //es
  'generalni', //hr
  'gwybodlen3', //cy
  'info', //pt
  'infobokis', //tpi
  'infoboks', //da
  'infochascha', //rm
  'infokašćik', //dsb
  'infokast', //et
  'infokutija', //bs
  'infolentelė', //lt
  'infopolje', //sl
  'informkesto', //eo
  'infoskreine', //ltg
  'infotaula', //eu
  'inligtingskas', 'inligtingskas3', //af
  'inligtingskas4', //af
  'kishtey', //gv
  'kotak', //su
  'tertcita', //jbo
  'tietolaatikko', //fi
  'yerleşim bilgi kutusu', 'ynfoboks', //fy
  'πλαίσιο', //el
  'акарточка', //ab
  'аҥа', //mhr
  'инфобокс', //kk
  'инфокутија', //sr
  'инфокутия', //bg
  'інфобокс', //rue
  'канадский', 'картка', //be
  'карточка', //ru
  'карточка2', //mdf
  'карточкарус', //ba
  'картуш', //koi
  'қуттӣ', //tg
  'ინფოდაფა', //ka
  'տեղեկաքարտ', //hy
  'אינפאקעסטל', //yi
  'תבנית', //he
  'بطاقة', //ar
  'ڄاڻخانو', //sd
  'خانہ', //ur
  'لغة', 'ज्ञानसन्दूक', //hi
  'তথ্যছক', //bn
  'ਜਾਣਕਾਰੀਡੱਬਾ', //pa
  'సమాచారపెట్టె', //te
  'තොරතුරුකොටුව', //si
  'กล่องข้อมูล', //th
  'ប្រអប់ព័ត៌មាន', //km
  '정보상자', //ko
  '明細' //zh_yue
  ];
  var redirects$1 = ['adkas', //br
  'aýdaw', 'doorverwijzing', //nl
  'ohjaus', 'patrz', //pl
  'přesměruj', 'redirección', 'redireccion', 'redirección', //es
  'redirecionamento', //pt
  'redirect', //en
  'redirection', 'redirection', //fr
  'rinvia', //it
  'tilvísun', 'uudelleenohjaus', 'weiterleitung', 'weiterleitung', //de
  'yönlendi̇r', 'yönlendirme', 'yönlendi̇rme', //tr
  'ανακατευθυνση', //el
  'айдау', 'перанакіраваньне', 'перенаправлення', //uk
  'пренасочување', //mk
  'преусмери', 'преусмјери', 'تغییر_مسیر', 'تغییرمسیر', 'تغییرمسیر', //fa
  'เปลี่ยนทาง', //th
  'ប្តូរទីតាំងទៅ', //km
  '転送', //ja
  '重定向'];
  var references = ['references', 'reference', 'einzelnachweise', 'referencias', 'références', 'notes et références', '脚注', 'referenser', 'bronnen', 'примечания'];
  /**
   * wikipedia special terms lifted and augmented from parsoid parser april 2015
   * and then manually on March 2020
   *
   * @private
   * @type {{
   *  images: string[],
   *  references: string[],
   *  redirects: string[],
   *  infoboxes: string[],
   *  categories: string[],
   *   disambig: string[]
   * }}
   */

  var i18n = {
    categories: categories$1,
    disambig_templates: disambig_templates,
    disambig_titles: disambig_titles,
    images: images,
    infoboxes: infoboxes,
    redirects: redirects$1,
    references: references //specials: [
    //'спэцыяльныя',
    //'especial',
    //'speciální',
    //'spezial',
    //'special',
    //'ویژه',
    //'toiminnot',
    //'kerfissíða',
    //'arnawlı',
    //'spécial',
    //'speciaal',
    //'посебно',
    //'özel',
    //'特別'
    //],
    //users: [
    //'удзельнік',
    //'usuari',
    //'uživatel',
    //'benutzer',
    //'user',
    //'usuario',
    //'کاربر',
    //'käyttäjä',
    //'notandi',
    //'paydalanıwshı',
    //'utilisateur',
    //'gebruiker',
    //'корисник',
    //'kullanıcı',
    //'利用者'
    //],
    //sources: [
    ////blacklist these headings, as they're not plain-text
    //'references',
    //'see also',
    //'external links',
    //'further reading',
    //'notes et références',
    //'voir aussi',
    //'liens externes',
    //'参考文献', //references (ja)
    //'脚注', //citations (ja)
    //'関連項目', //see also (ja)
    //'外部リンク' //external links (ja)
    //]

  }; //alt disambig-templates en-wikipedia uses

  var d = ' disambiguation';
  var templates$a = ['dab', 'dab', 'disamb', 'disambig', 'geodis', 'hndis', 'setindex', 'ship index', 'split dab', 'sport index', 'wp disambig', 'disambiguation cleanup', 'airport' + d, 'biology' + d, 'call sign' + d, 'caselaw' + d, 'chinese title' + d, 'genus' + d, 'hospital' + d, 'lake index', 'letter' + d, 'letter-number combination' + d, 'mathematical' + d, 'military unit' + d, 'mountainindex', 'number' + d, 'phonetics' + d, 'place name' + d, 'portal' + d, 'road' + d, 'school' + d, 'species latin name abbreviation' + d, 'species latin name' + d, 'station' + d, 'synagogue' + d, 'taxonomic authority' + d, 'taxonomy' + d].reduce(function (h, str) {
    h[str] = true;
    return h;
  }, {});
  var _disambig = templates$a;
  var inTitle = new RegExp('. \\((' + i18n.disambig_titles.join('|') + ')\\)$', 'i');
  var i18n_templates = i18n.disambig_templates.reduce(function (h, str) {
    h[str] = true;
    return h;
  }, {}); // look for '... may refer to'

  var byText = function byText(s) {
    if (!s) {
      return false;
    }

    var txt = s.text();

    if (txt !== null && txt[0]) {
      if (/. may (also)? refer to\b/i.test(txt) === true) {
        return true;
      }
    }

    return false;
  };
  /**
   * Parses the wikitext to find out if this page is a disambiguation
   *
   * @private
   * @param {Document} doc the document that is examined
   * @returns {boolean} an indication if the document is a disambiguation page
   */


  var isDisambig = function isDisambig(doc) {
    // check for a {{disambig}} template
    var templates = doc.templates().map(function (tmpl) {
      return tmpl.json();
    });
    var found = templates.find(function (obj) {
      return _disambig.hasOwnProperty(obj.template) || i18n_templates.hasOwnProperty(obj.template);
    });

    if (found) {
      return true;
    } // check for (disambiguation) in title


    var title = doc.title();

    if (title && inTitle.test(title) === true) {
      return true;
    } //try 'may refer to' on first line for en-wiki?


    if (byText(doc.sentence(0)) === true || byText(doc.sentence(1)) === true) {
      return true;
    }

    return false;
  };

  var isDisambig_1 = isDisambig;
  var defaults$a = {
    caption: true,
    alt: true,
    links: true,
    thumb: true,
    url: true
  }; //

  var toJson$5 = function toJson$5(img, options) {
    options = setDefaults_1(options, defaults$a);
    var json = {
      file: img.file()
    };

    if (options.thumb !== false) {
      json.thumb = img.thumbnail();
    }

    if (options.url !== false) {
      json.url = img.url();
    } //add captions


    if (options.caption !== false && img.data.caption) {
      json.caption = img.caption();

      if (options.links !== false && img.data.caption.links()) {
        json.links = img.links();
      }
    }

    if (options.alt !== false && img.data.alt) {
      json.alt = img.alt();
    }

    return json;
  };

  var toJson_1$3 = toJson$5;
  var server = 'wikipedia.org';

  var encodeTitle = function encodeTitle(file) {
    var title = file.replace(/^(image|file?)\:/i, ''); //titlecase it

    title = title.charAt(0).toUpperCase() + title.substring(1); //spaces to underscores

    title = title.trim().replace(/ /g, '_');
    return title;
  }; //the wikimedia image url is a little silly:


  var makeSrc = function makeSrc(file) {
    var title = encodeTitle(file);
    title = encodeURIComponent(title);
    return title;
  }; //the class for our image generation functions


  var Image = function Image(data) {
    Object.defineProperty(this, 'data', {
      enumerable: false,
      value: data
    });
  };

  var methods$8 = {
    file: function file() {
      return this.data.file || '';
    },
    alt: function alt() {
      var str = this.data.alt || this.data.file || '';
      str = str.replace(/^(file|image):/i, '');
      str = str.replace(/\.(jpg|jpeg|png|gif|svg)/i, '');
      return str.replace(/_/g, ' ');
    },
    caption: function caption() {
      if (this.data.caption) {
        return this.data.caption.text();
      }

      return '';
    },
    links: function links() {
      if (this.data.caption) {
        return this.data.caption.links();
      }

      return [];
    },
    url: function url() {
      // let lang = 'en' //this.language() || 'en' //hmm: get actual language?
      var fileName = makeSrc(this.file());
      var domain = this.data.domain || server;
      var path = "wiki/Special:Redirect/file";
      return "https://".concat(domain, "/").concat(path, "/").concat(fileName);
    },
    thumbnail: function thumbnail(size) {
      size = size || 300;
      return this.url() + '?width=' + size;
    },
    format: function format() {
      var arr = this.file().split('.');

      if (arr[arr.length - 1]) {
        return arr[arr.length - 1].toLowerCase();
      }

      return null;
    },
    json: function json(options) {
      options = options || {};
      return toJson_1$3(this, options);
    },
    text: function text() {
      return '';
    },
    wikitext: function wikitext() {
      return this.data.wiki || '';
    }
  };
  Object.keys(methods$8).forEach(function (k) {
    Image.prototype[k] = methods$8[k];
  });
  Image.prototype.src = Image.prototype.url;
  Image.prototype.thumb = Image.prototype.thumbnail;
  var Image_1 = Image;
  var languages = {
    aa: 'Afar',
    //Afar
    ab: 'Аҧсуа',
    //Abkhazian
    af: 'Afrikaans',
    //Afrikaans
    ak: 'Akana',
    //Akan
    als: 'Alemannisch',
    //Alemannic
    am: 'አማርኛ',
    //Amharic
    an: 'Aragonés',
    //Aragonese
    ang: 'Englisc',
    //Anglo-Saxon
    ar: 'العربية',
    //Arabic
    arc: 'ܣܘܪܬ',
    //Aramaic
    as: 'অসমীয়া',
    //Assamese
    ast: 'Asturianu',
    //Asturian
    av: 'Авар',
    //Avar
    ay: 'Aymar',
    //Aymara
    az: 'Azərbaycanca',
    //Azerbaijani
    ba: 'Башҡорт',
    //Bashkir
    bar: 'Boarisch',
    //Bavarian
    'bat-smg': 'Žemaitėška',
    //Samogitian
    bcl: 'Bikol',
    //Bikol
    be: 'Беларуская',
    //Belarusian
    'be-x-old': 'ltr',
    //Belarusian
    bg: 'Български',
    //Bulgarian
    bh: 'भोजपुरी',
    //Bihari
    bi: 'Bislama',
    //Bislama
    bm: 'Bamanankan',
    //Bambara
    bn: 'বাংলা',
    //Bengali
    bo: 'བོད་ཡིག',
    //Tibetan
    bpy: 'ltr',
    //Bishnupriya
    br: 'Brezhoneg',
    //Breton
    bs: 'Bosanski',
    //Bosnian
    bug: 'ᨅᨔ',
    //Buginese
    bxr: 'ltr',
    //Buriat
    ca: 'Català',
    //Catalan
    cdo: 'Chinese',
    //Min
    ce: 'Нохчийн',
    //Chechen
    ceb: 'Sinugboanong',
    //Cebuano
    ch: 'Chamoru',
    //Chamorro
    cho: 'Choctaw',
    //Choctaw
    chr: 'ᏣᎳᎩ',
    //Cherokee
    chy: 'Tsetsêhestâhese',
    //Cheyenne
    co: 'Corsu',
    //Corsican
    cr: 'Nehiyaw',
    //Cree
    cs: 'Česky',
    //Czech
    csb: 'Kaszëbsczi',
    //Kashubian
    cu: 'Slavonic',
    //Old
    cv: 'Чăваш',
    //Chuvash
    cy: 'Cymraeg',
    //Welsh
    da: 'Dansk',
    //Danish
    de: 'Deutsch',
    //German
    diq: 'Zazaki',
    //Dimli
    dsb: 'ltr',
    //Lower
    dv: 'ދިވެހިބަސް',
    //Divehi
    dz: 'ཇོང་ཁ',
    //Dzongkha
    ee: 'Ɛʋɛ',
    //Ewe
    far: 'فارسی',
    //Farsi
    el: 'Ελληνικά',
    //Greek
    en: 'English',
    //English
    eo: 'Esperanto',
    //Esperanto
    es: 'Español',
    //Spanish
    et: 'Eesti',
    //Estonian
    eu: 'Euskara',
    //Basque
    ext: 'Estremeñu',
    //Extremaduran
    ff: 'Fulfulde',
    //Peul
    fi: 'Suomi',
    //Finnish
    'fiu-vro': 'Võro',
    //Võro
    fj: 'Na',
    //Fijian
    fo: 'Føroyskt',
    //Faroese
    fr: 'Français',
    //French
    frp: 'Arpitan',
    //Arpitan
    fur: 'Furlan',
    //Friulian
    fy: 'ltr',
    //West
    ga: 'Gaeilge',
    //Irish
    gan: 'ltr',
    //Gan
    gd: 'ltr',
    //Scottish
    gil: 'Taetae',
    //Gilbertese
    gl: 'Galego',
    //Galician
    gn: "Avañe'ẽ",
    //Guarani
    got: 'gutisk',
    //Gothic
    gu: 'ગુજરાતી',
    //Gujarati
    gv: 'Gaelg',
    //Manx
    ha: 'هَوُسَ',
    //Hausa
    hak: 'ltr',
    //Hakka
    haw: 'Hawai`i',
    //Hawaiian
    he: 'עברית',
    //Hebrew
    hi: 'हिन्दी',
    //Hindi
    ho: 'ltr',
    //Hiri
    hr: 'Hrvatski',
    //Croatian
    ht: 'Krèyol',
    //Haitian
    hu: 'Magyar',
    //Hungarian
    hy: 'Հայերեն',
    //Armenian
    hz: 'Otsiherero',
    //Herero
    ia: 'Interlingua',
    //Interlingua
    id: 'Bahasa',
    //Indonesian
    ie: 'Interlingue',
    //Interlingue
    ig: 'Igbo',
    //Igbo
    ii: 'ltr',
    //Sichuan
    ik: 'Iñupiak',
    //Inupiak
    ilo: 'Ilokano',
    //Ilokano
    io: 'Ido',
    //Ido
    is: 'Íslenska',
    //Icelandic
    it: 'Italiano',
    //Italian
    iu: 'ᐃᓄᒃᑎᑐᑦ',
    //Inuktitut
    ja: '日本語',
    //Japanese
    jbo: 'Lojban',
    //Lojban
    jv: 'Basa',
    //Javanese
    ka: 'ქართული',
    //Georgian
    kg: 'KiKongo',
    //Kongo
    ki: 'Gĩkũyũ',
    //Kikuyu
    kj: 'Kuanyama',
    //Kuanyama
    kk: 'Қазақша',
    //Kazakh
    kl: 'Kalaallisut',
    //Greenlandic
    km: 'ភាសាខ្មែរ',
    //Cambodian
    kn: 'ಕನ್ನಡ',
    //Kannada
    khw: 'کھوار',
    //Khowar
    ko: '한국어',
    //Korean
    kr: 'Kanuri',
    //Kanuri
    ks: 'कश्मीरी',
    //Kashmiri
    ksh: 'Ripoarisch',
    //Ripuarian
    ku: 'Kurdî',
    //Kurdish
    kv: 'Коми',
    //Komi
    kw: 'Kernewek',
    //Cornish
    ky: 'Kırgızca',
    //Kirghiz
    la: 'Latina',
    //Latin
    lad: 'Dzhudezmo',
    //Ladino
    lan: 'Leb',
    //Lango
    lb: 'Lëtzebuergesch',
    //Luxembourgish
    lg: 'Luganda',
    //Ganda
    li: 'Limburgs',
    //Limburgian
    lij: 'Líguru',
    //Ligurian
    lmo: 'Lumbaart',
    //Lombard
    ln: 'Lingála',
    //Lingala
    lo: 'ລາວ',
    //Laotian
    lt: 'Lietuvių',
    //Lithuanian
    lv: 'Latviešu',
    //Latvian
    'map-bms': 'Basa',
    //Banyumasan
    mg: 'Malagasy',
    //Malagasy
    man: '官話',
    //Mandarin
    mh: 'Kajin',
    //Marshallese
    mi: 'Māori',
    //Maori
    min: 'Minangkabau',
    //Minangkabau
    mk: 'Македонски',
    //Macedonian
    ml: 'മലയാളം',
    //Malayalam
    mn: 'Монгол',
    //Mongolian
    mo: 'Moldovenească',
    //Moldovan
    mr: 'मराठी',
    //Marathi
    ms: 'Bahasa',
    //Malay
    mt: 'bil-Malti',
    //Maltese
    mus: 'Muskogee',
    //Creek
    my: 'Myanmasa',
    //Burmese
    na: 'Dorerin',
    //Nauruan
    nah: 'Nahuatl',
    //Nahuatl
    nap: 'Nnapulitano',
    //Neapolitan
    nd: 'ltr',
    //North
    nds: 'Plattdüütsch',
    //Low German
    'nds-nl': 'Saxon',
    //Dutch
    ne: 'नेपाली',
    //Nepali
    new: 'नेपालभाषा',
    //Newar
    ng: 'Oshiwambo',
    //Ndonga
    nl: 'Nederlands',
    //Dutch
    nn: 'ltr',
    //Norwegian
    no: 'Norsk',
    //Norwegian
    nr: 'ltr',
    //South
    nso: 'ltr',
    //Northern
    nrm: 'Nouormand',
    //Norman
    nv: 'Diné',
    //Navajo
    ny: 'Chi-Chewa',
    //Chichewa
    oc: 'Occitan',
    //Occitan
    oj: 'ᐊᓂᔑᓈᐯᒧᐎᓐ',
    //Ojibwa
    om: 'Oromoo',
    //Oromo
    or: 'ଓଡ଼ିଆ',
    //Oriya
    os: 'Иронау',
    //Ossetian
    pa: 'ਪੰਜਾਬੀ',
    //Panjabi
    pag: 'Pangasinan',
    //Pangasinan
    pam: 'Kapampangan',
    //Kapampangan
    pap: 'Papiamentu',
    //Papiamentu
    pdc: 'ltr',
    //Pennsylvania
    pi: 'Pāli',
    //Pali
    pih: 'Norfuk',
    //Norfolk
    pl: 'Polski',
    //Polish
    pms: 'Piemontèis',
    //Piedmontese
    ps: 'پښتو',
    //Pashto
    pt: 'Português',
    //Portuguese
    qu: 'Runa',
    //Quechua
    rm: 'ltr',
    //Raeto
    rmy: 'Romani',
    //Romani
    rn: 'Kirundi',
    //Kirundi
    ro: 'Română',
    //Romanian
    'roa-rup': 'Armâneashti',
    //Aromanian
    ru: 'Русский',
    //Russian
    rw: 'Kinyarwandi',
    //Rwandi
    sa: 'संस्कृतम्',
    //Sanskrit
    sc: 'Sardu',
    //Sardinian
    scn: 'Sicilianu',
    //Sicilian
    sco: 'Scots',
    //Scots
    sd: 'सिनधि',
    //Sindhi
    se: 'ltr',
    //Northern
    sg: 'Sängö',
    //Sango
    sh: 'Srpskohrvatski',
    //Serbo-Croatian
    si: 'සිංහල',
    //Sinhalese
    simple: 'ltr',
    //Simple
    sk: 'Slovenčina',
    //Slovak
    sl: 'Slovenščina',
    //Slovenian
    sm: 'Gagana',
    //Samoan
    sn: 'chiShona',
    //Shona
    so: 'Soomaaliga',
    //Somalia
    sq: 'Shqip',
    //Albanian
    sr: 'Српски',
    //Serbian
    ss: 'SiSwati',
    //Swati
    st: 'ltr',
    //Southern
    su: 'Basa',
    //Sundanese
    sv: 'Svenska',
    //Swedish
    sw: 'Kiswahili',
    //Swahili
    ta: 'தமிழ்',
    //Tamil
    te: 'తెలుగు',
    //Telugu
    tet: 'Tetun',
    //Tetum
    tg: 'Тоҷикӣ',
    //Tajik
    th: 'ไทย',
    //Thai
    ti: 'ትግርኛ',
    //Tigrinya
    tk: 'Туркмен',
    //Turkmen
    tl: 'Tagalog',
    //Tagalog
    tlh: 'tlhIngan-Hol',
    //Klingon
    tn: 'Setswana',
    //Tswana
    to: 'Lea',
    //Tonga
    tpi: 'ltr',
    //Tok
    tr: 'Türkçe',
    //Turkish
    ts: 'Xitsonga',
    //Tsonga
    tt: 'Tatarça',
    //Tatar
    tum: 'chiTumbuka',
    //Tumbuka
    tw: 'Twi',
    //Twi
    ty: 'Reo',
    //Tahitian
    udm: 'Удмурт',
    //Udmurt
    ug: 'Uyƣurqə',
    //Uyghur
    uk: 'Українська',
    //Ukrainian
    ur: 'اردو',
    //Urdu
    uz: 'Ўзбек',
    //Uzbek
    ve: 'Tshivenḓa',
    //Venda
    vi: 'Việtnam',
    //Vietnamese
    vec: 'Vèneto',
    //Venetian
    vls: 'ltr',
    //West
    vo: 'Volapük',
    //Volapük
    wa: 'Walon',
    //Walloon
    war: 'Winaray',
    //Waray-Waray
    wo: 'Wollof',
    //Wolof
    xal: 'Хальмг',
    //Kalmyk
    xh: 'isiXhosa',
    //Xhosa
    yi: 'ייִדיש',
    //Yiddish
    yo: 'Yorùbá',
    //Yoruba
    za: 'Cuengh',
    //Zhuang
    zh: '中文',
    //Chinese
    'zh-classical': 'ltr',
    //Classical
    'zh-min-nan': 'Bân-lâm-gú',
    //Minnan
    'zh-yue': '粵語',
    //Cantonese
    zu: 'isiZulu' //Zulu

  };
  var wp = '.wikipedia.org/wiki/$1';
  var wm = '.wikimedia.org/wiki/$1';
  var w = 'www.';
  var interwiki$1 = {
    acronym: w + 'acronymfinder.com/$1.html',
    advisory: 'advisory' + wm,
    advogato: w + 'advogato.org/$1',
    aew: 'wiki.arabeyes.org/$1',
    appropedia: w + 'appropedia.org/$1',
    aquariumwiki: w + 'theaquariumwiki.com/$1',
    arborwiki: 'localwiki.org/ann-arbor/$1',
    arxiv: 'arxiv.org/abs/$1',
    atmwiki: w + 'otterstedt.de/wiki/index.php/$1',
    baden: w + 'stadtwiki-baden-baden.de/wiki/$1/',
    battlestarwiki: 'en.battlestarwiki.org/wiki/$1',
    bcnbio: 'historiapolitica.bcn.cl/resenas_parlamentarias/wiki/$1',
    beacha: w + 'beachapedia.org/$1',
    betawiki: 'translatewiki.net/wiki/$1',
    bibcode: 'adsabs.harvard.edu/abs/$1',
    bibliowiki: 'wikilivres.org/wiki/$1',
    bluwiki: 'bluwiki.com/go/$1',
    blw: 'britainloves' + wp,
    botwiki: 'botwiki.sno.cc/wiki/$1',
    boxrec: w + 'boxrec.com/media/index.php?$1',
    brickwiki: w + 'brickwiki.info/wiki/$1',
    bugzilla: 'bugzilla.wikimedia.org/show_bug.cgi?id=$1',
    bulba: 'bulbapedia.bulbagarden.net/wiki/$1',
    c: 'commons' + wm,
    c2: 'c2.com/cgi/wiki?$1',
    c2find: 'c2.com/cgi/wiki?FindPage&value=$1',
    cache: w + 'google.com/search?q=cache:$1',
    ĉej: 'esperanto.blahus.cz/cxej/vikio/index.php/$1',
    cellwiki: 'cell.wikia.com/wiki/$1',
    centralwikia: 'community.wikia.com/wiki/$1',
    chej: 'esperanto.blahus.cz/cxej/vikio/index.php/$1',
    choralwiki: w + 'cpdl.org/wiki/index.php/$1',
    citizendium: 'en.citizendium.org/wiki/$1',
    ckwiss: w + 'ck-wissen.de/ckwiki/index.php?title=$1',
    comixpedia: w + 'comixpedia.org/index.php?title=$1',
    commons: 'commons' + wm,
    communityscheme: 'community.schemewiki.org/?c=s&key=$1',
    communitywiki: 'communitywiki.org/$1',
    comune: 'rete.comuni-italiani.it/wiki/$1',
    creativecommons: 'creativecommons.org/licenses/$1',
    creativecommonswiki: 'wiki.creativecommons.org/$1',
    cxej: 'esperanto.blahus.cz/cxej/vikio/index.php/$1',
    dcc: w + 'dccwiki.com/$1',
    dcdatabase: 'dc.wikia.com/$1',
    dcma: 'christian-morgenstern.de/dcma/index.php?title=$1',
    debian: 'wiki.debian.org/$1',
    delicious: w + 'delicious.com/tag/$1',
    devmo: 'developer.mozilla.org/en/docs/$1',
    dictionary: w + 'dict.org/bin/Dict?Database=*&Form=Dict1&Strategy=*&Query=$1',
    dict: w + 'dict.org/bin/Dict?Database=*&Form=Dict1&Strategy=*&Query=$1',
    disinfopedia: 'sourcewatch.org/index.php/$1',
    distributedproofreaders: w + 'pgdp.net/wiki/$1',
    distributedproofreadersca: w + 'pgdpcanada.net/wiki/index.php/$1',
    dmoz: 'curlie.org/$1',
    dmozs: 'curlie.org/search?q=$1',
    doi: 'doi.org/$1',
    donate: 'donate' + wm,
    doom_wiki: 'doom.wikia.com/wiki/$1',
    download: 'releases.wikimedia.org/$1',
    dbdump: 'dumps.wikimedia.org/$1/latest/',
    dpd: 'lema.rae.es/dpd/?key=$1',
    drae: 'dle.rae.es/?w=$1',
    dreamhost: 'wiki.dreamhost.com/index.php/$1',
    drumcorpswiki: w + 'drumcorpswiki.com/index.php/$1',
    dwjwiki: w + 'suberic.net/cgi-bin/dwj/wiki.cgi?$1',
    eĉei: w + 'ikso.net/cgi-bin/wiki.pl?$1',
    ecoreality: w + 'EcoReality.org/wiki/$1',
    ecxei: w + 'ikso.net/cgi-bin/wiki.pl?$1',
    elibre: 'enciclopedia.us.es/index.php/$1',
    emacswiki: w + 'emacswiki.org/emacs?$1',
    encyc: 'encyc.org/wiki/$1',
    energiewiki: w + 'netzwerk-energieberater.de/wiki/index.php/$1',
    englyphwiki: 'en.glyphwiki.org/wiki/$1',
    enkol: 'enkol.pl/$1',
    eokulturcentro: 'esperanto.toulouse.free.fr/nova/wikini/wakka.php?wiki=$1',
    esolang: 'esolangs.org/wiki/$1',
    etherpad: 'etherpad.wikimedia.org/$1',
    ethnologue: w + 'ethnologue.com/language/$1',
    ethnologuefamily: w + 'ethnologue.com/show_family.asp?subid=$1',
    evowiki: 'wiki.cotch.net/index.php/$1',
    exotica: w + 'exotica.org.uk/wiki/$1',
    fanimutationwiki: 'wiki.animutationportal.com/index.php/$1',
    fedora: 'fedoraproject.org/wiki/$1',
    finalfantasy: 'finalfantasy.wikia.com/wiki/$1',
    finnix: w + 'finnix.org/$1',
    flickruser: w + 'flickr.com/people/$1',
    flickrphoto: w + 'flickr.com/photo.gne?id=$1',
    floralwiki: w + 'floralwiki.co.uk/wiki/$1',
    foldoc: 'foldoc.org/$1',
    foundation: 'foundation' + wm,
    foundationsite: 'wikimediafoundation.org/$1',
    foxwiki: 'fox.wikis.com/wc.dll?Wiki~$1',
    freebio: 'freebiology.org/wiki/$1',
    freebsdman: w + 'FreeBSD.org/cgi/man.cgi?apropos=1&query=$1',
    freeculturewiki: 'wiki.freeculture.org/index.php/$1',
    freedomdefined: 'freedomdefined.org/$1',
    freefeel: 'freefeel.org/wiki/$1',
    freekiwiki: 'wiki.freegeek.org/index.php/$1',
    // freenode: 'irc://irc.freenode.net/$1',
    freesoft: 'directory.fsf.org/wiki/$1',
    ganfyd: 'ganfyd.org/index.php?title=$1',
    gardenology: w + 'gardenology.org/wiki/$1',
    gausswiki: 'gauss.ffii.org/$1',
    gentoo: 'wiki.gentoo.org/wiki/$1',
    genwiki: 'wiki.genealogy.net/index.php/$1',
    gerrit: 'gerrit.wikimedia.org/r/$1',
    git: 'gerrit.wikimedia.org/g/$1',
    google: w + 'google.com/search?q=$1',
    googledefine: w + 'google.com/search?q=define:$1',
    googlegroups: 'groups.google.com/groups?q=$1',
    guildwarswiki: 'wiki.guildwars.com/wiki/$1',
    guildwiki: 'guildwars.wikia.com/wiki/$1',
    guc: 'tools.wmflabs.org/guc/?user=$1',
    gucprefix: 'tools.wmflabs.org/guc/?isPrefixPattern=1&src=rc&user=$1',
    gutenberg: w + 'gutenberg.org/etext/$1',
    gutenbergwiki: w + 'gutenberg.org/wiki/$1',
    hackerspaces: 'hackerspaces.org/wiki/$1',
    h2wiki: 'halowiki.net/p/$1',
    hammondwiki: w + 'dairiki.org/HammondWiki/index.php3?$1',
    hdl: 'hdl.handle.net/$1',
    heraldik: 'heraldik-wiki.de/wiki/$1',
    heroeswiki: 'heroeswiki.com/$1',
    horizonlabs: 'horizon.wikimedia.org/$1',
    hrwiki: w + 'hrwiki.org/index.php/$1',
    hrfwiki: 'fanstuff.hrwiki.org/index.php/$1',
    hupwiki: 'wiki.hup.hu/index.php/$1',
    iarchive: 'archive.org/details/$1',
    imdbname: w + 'imdb.com/name/nm$1/',
    imdbtitle: w + 'imdb.com/title/tt$1/',
    imdbcompany: w + 'imdb.com/company/co$1/',
    imdbcharacter: w + 'imdb.com/character/ch$1/',
    incubator: 'incubator' + wm,
    infosecpedia: 'infosecpedia.org/wiki/$1',
    infosphere: 'theinfosphere.org/$1',
    // irc: 'irc://irc.freenode.net/$1',
    // ircs: 'ircs://irc.freenode.net/$1',
    // ircrc: 'irc://irc.wikimedia.org/$1',
    // rcirc: 'irc://irc.wikimedia.org/$1',
    'iso639-3': 'iso639-3.sil.org/code/$1',
    issn: w + 'worldcat.org/issn/$1',
    iuridictum: 'iuridictum.pecina.cz/w/$1',
    jaglyphwiki: 'glyphwiki.org/wiki/$1',
    jefo: 'esperanto-jeunes.org/wiki/$1',
    jerseydatabase: 'jerseydatabase.com/wiki.php?id=$1',
    jira: 'jira.toolserver.org/browse/$1',
    jspwiki: w + 'ecyrd.com/JSPWiki/Wiki.jsp?page=$1',
    jstor: w + 'jstor.org/journals/$1',
    kamelo: 'kamelopedia.mormo.org/index.php/$1',
    karlsruhe: 'ka.stadtwiki.net/$1',
    kinowiki: 'kino.skripov.com/index.php/$1',
    komicawiki: 'wiki.komica.org/?$1',
    kontuwiki: 'kontu.wiki/$1',
    wikitech: 'wikitech' + wm,
    libreplanet: 'libreplanet.org/wiki/$1',
    linguistlist: 'linguistlist.org/forms/langs/LLDescription.cfm?code=$1',
    linuxwiki: w + 'linuxwiki.de/$1',
    linuxwikide: w + 'linuxwiki.de/$1',
    liswiki: 'liswiki.org/wiki/$1',
    literateprograms: 'en.literateprograms.org/$1',
    livepedia: w + 'livepedia.gr/index.php?title=$1',
    localwiki: 'localwiki.org/$1',
    lojban: 'mw.lojban.org/papri/$1',
    lostpedia: 'lostpedia.wikia.com/wiki/$1',
    lqwiki: 'wiki.linuxquestions.org/wiki/$1',
    luxo: 'tools.wmflabs.org/guc/?user=$1',
    mail: 'lists.wikimedia.org/mailman/listinfo/$1',
    mailarchive: 'lists.wikimedia.org/pipermail/$1',
    mariowiki: w + 'mariowiki.com/$1',
    marveldatabase: w + 'marveldatabase.com/wiki/index.php/$1',
    meatball: 'meatballwiki.org/wiki/$1',
    mw: w + 'mediawiki.org/wiki/$1',
    mediazilla: 'bugzilla.wikimedia.org/$1',
    memoryalpha: 'memory-alpha.fandom.com/wiki/$1',
    metawiki: 'meta' + wm,
    metawikimedia: 'meta' + wm,
    metawikipedia: 'meta' + wm,
    mineralienatlas: w + 'mineralienatlas.de/lexikon/index.php/$1',
    moinmoin: 'moinmo.in/$1',
    monstropedia: w + 'monstropedia.org/?title=$1',
    mosapedia: 'mosapedia.de/wiki/index.php/$1',
    mozcom: 'mozilla.wikia.com/wiki/$1',
    mozillawiki: 'wiki.mozilla.org/$1',
    mozillazinekb: 'kb.mozillazine.org/$1',
    musicbrainz: 'musicbrainz.org/doc/$1',
    mediawikiwiki: w + 'mediawiki.org/wiki/$1',
    mwod: w + 'merriam-webster.com/dictionary/$1',
    mwot: w + 'merriam-webster.com/thesaurus/$1',
    nkcells: w + 'nkcells.info/index.php?title=$1',
    nara: 'catalog.archives.gov/id/$1',
    nosmoke: 'no-smok.net/nsmk/$1',
    nost: 'nostalgia.' + wp,
    nostalgia: 'nostalgia.' + wp,
    oeis: 'oeis.org/$1',
    oldwikisource: 'wikisource.org/wiki/$1',
    olpc: 'wiki.laptop.org/go/$1',
    omegawiki: w + 'omegawiki.org/Expression:$1',
    onelook: w + 'onelook.com/?ls=b&w=$1',
    openlibrary: 'openlibrary.org/$1',
    openstreetmap: 'wiki.openstreetmap.org/wiki/$1',
    openwetware: 'openwetware.org/wiki/$1',
    opera7wiki: 'operawiki.info/$1',
    organicdesign: w + 'organicdesign.co.nz/$1',
    orthodoxwiki: 'orthodoxwiki.org/$1',
    osmwiki: 'wiki.openstreetmap.org/wiki/$1',
    otrs: 'ticket.wikimedia.org/otrs/index.pl?Action=AgentTicketZoom&TicketID=$1',
    otrswiki: 'otrs-wiki' + wm,
    ourmedia: w + 'socialtext.net/ourmedia/index.cgi?$1',
    outreach: 'outreach' + wm,
    outreachwiki: 'outreach' + wm,
    owasp: w + 'owasp.org/index.php/$1',
    panawiki: 'wiki.alairelibre.net/index.php?title=$1',
    patwiki: 'gauss.ffii.org/$1',
    personaltelco: 'personaltelco.net/wiki/$1',
    petscan: 'petscan.wmflabs.org/?psid=$1',
    phab: 'phabricator.wikimedia.org/$1',
    phabricator: 'phabricator.wikimedia.org/$1',
    phwiki: w + 'pocketheaven.com/ph/wiki/index.php?title=$1',
    phpwiki: 'phpwiki.sourceforge.net/phpwiki/index.php?$1',
    planetmath: 'planetmath.org/node/$1',
    pmeg: w + 'bertilow.com/pmeg/$1',
    pmid: w + 'ncbi.nlm.nih.gov/pubmed/$1?dopt=Abstract',
    pokewiki: 'pokewiki.de/$1',
    pokéwiki: 'pokewiki.de/$1',
    policy: 'policy.wikimedia.org/$1',
    proofwiki: w + 'proofwiki.org/wiki/$1',
    pyrev: w + 'mediawiki.org/wiki/Special:Code/pywikipedia/$1',
    pythoninfo: 'wiki.python.org/moin/$1',
    pythonwiki: w + 'pythonwiki.de/$1',
    pywiki: 'c2.com/cgi/wiki?$1',
    psycle: 'psycle.sourceforge.net/wiki/$1',
    quality: 'quality' + wm,
    quarry: 'quarry.wmflabs.org/$1',
    regiowiki: 'regiowiki.at/wiki/$1',
    rev: w + 'mediawiki.org/wiki/Special:Code/MediaWiki/$1',
    revo: 'purl.org/NET/voko/revo/art/$1.html',
    rfc: 'tools.ietf.org/html/rfc$1',
    rheinneckar: 'rhein-neckar-wiki.de/$1',
    robowiki: 'robowiki.net/?$1',
    rodovid: 'en.rodovid.org/wk/$1',
    reuterswiki: 'glossary.reuters.com/index.php/$1',
    rowiki: 'wiki.rennkuckuck.de/index.php/$1',
    rt: 'rt.wikimedia.org/Ticket/Display.html?id=$1',
    // rtfm: 'ftp://rtfm.mit.edu/pub/faqs/$1',
    s23wiki: 's23.org/wiki/$1',
    scholar: 'scholar.google.com/scholar?q=$1',
    schoolswp: 'schools-' + wp,
    scores: 'imslp.org/wiki/$1',
    scoutwiki: 'en.scoutwiki.org/$1',
    scramble: w + 'scramble.nl/wiki/index.php?title=$1',
    seapig: w + 'seapig.org/$1',
    seattlewiki: 'seattle.wikia.com/wiki/$1',
    slwiki: 'wiki.secondlife.com/wiki/$1',
    'semantic-mw': w + 'semantic-mediawiki.org/wiki/$1',
    senseislibrary: 'senseis.xmp.net/?$1',
    sharemap: 'sharemap.org/$1',
    silcode: w + 'sil.org/iso639-3/documentation.asp?id=$1',
    slashdot: 'slashdot.org/article.pl?sid=$1',
    sourceforge: 'sourceforge.net/$1',
    spcom: 'spcom' + wm,
    species: 'species' + wm,
    squeak: 'wiki.squeak.org/squeak/$1',
    stats: 'stats.wikimedia.org/$1',
    stewardry: 'tools.wmflabs.org/meta/stewardry/?wiki=$1',
    strategy: 'strategy' + wm,
    strategywiki: 'strategywiki.org/wiki/$1',
    sulutil: 'meta.wikimedia.org/wiki/Special:CentralAuth/$1',
    swtrain: 'train.spottingworld.com/$1',
    svn: 'svn.wikimedia.org/viewvc/mediawiki/$1?view=log',
    swinbrain: 'swinbrain.ict.swin.edu.au/wiki/$1',
    tabwiki: w + 'tabwiki.com/index.php/$1',
    tclerswiki: 'wiki.tcl.tk/$1',
    technorati: w + 'technorati.com/search/$1',
    tenwiki: 'ten.' + wp,
    testwiki: 'test.' + wp,
    testwikidata: 'test.wikidata.org/wiki/$1',
    test2wiki: 'test2.' + wp,
    tfwiki: 'tfwiki.net/wiki/$1',
    thelemapedia: w + 'thelemapedia.org/index.php/$1',
    theopedia: w + 'theopedia.com/$1',
    thinkwiki: w + 'thinkwiki.org/wiki/$1',
    ticket: 'ticket.wikimedia.org/otrs/index.pl?Action=AgentTicketZoom&TicketNumber=$1',
    tmbw: 'tmbw.net/wiki/$1',
    tmnet: w + 'technomanifestos.net/?$1',
    tmwiki: w + 'EasyTopicMaps.com/?page=$1',
    toolforge: 'tools.wmflabs.org/$1',
    toollabs: 'tools.wmflabs.org/$1',
    tools: 'toolserver.org/$1',
    tswiki: w + 'mediawiki.org/wiki/Toolserver:$1',
    translatewiki: 'translatewiki.net/wiki/$1',
    tviv: 'tviv.org/wiki/$1',
    tvtropes: w + 'tvtropes.org/pmwiki/pmwiki.php/Main/$1',
    twiki: 'twiki.org/cgi-bin/view/$1',
    tyvawiki: w + 'tyvawiki.org/wiki/$1',
    umap: 'umap.openstreetmap.fr/$1',
    uncyclopedia: 'en.uncyclopedia.co/wiki/$1',
    unihan: w + 'unicode.org/cgi-bin/GetUnihanData.pl?codepoint=$1',
    unreal: 'wiki.beyondunreal.com/wiki/$1',
    urbandict: w + 'urbandictionary.com/define.php?term=$1',
    usej: w + 'tejo.org/usej/$1',
    usemod: w + 'usemod.com/cgi-bin/wiki.pl?$1',
    usability: 'usability' + wm,
    utrs: 'utrs.wmflabs.org/appeal.php?id=$1',
    vikidia: 'fr.vikidia.org/wiki/$1',
    vlos: 'tusach.thuvienkhoahoc.com/wiki/$1',
    vkol: 'kol.coldfront.net/thekolwiki/index.php/$1',
    voipinfo: w + 'voip-info.org/wiki/view/$1',
    votewiki: 'vote' + wm,
    werelate: w + 'werelate.org/wiki/$1',
    wg: 'wg-en.' + wp,
    wikia: w + 'wikia.com/wiki/w:c:$1',
    wikiasite: w + 'wikia.com/wiki/w:c:$1',
    wikiapiary: 'wikiapiary.com/wiki/$1',
    wikibooks: 'en.wikibooks.org/wiki/$1',
    wikichristian: w + 'wikichristian.org/index.php?title=$1',
    wikicities: w + 'wikia.com/wiki/w:$1',
    wikicity: w + 'wikia.com/wiki/w:c:$1',
    wikiconference: 'wikiconference.org/wiki/$1',
    wikidata: w + 'wikidata.org/wiki/$1',
    wikif1: w + 'wikif1.org/$1',
    wikifur: 'en.wikifur.com/wiki/$1',
    wikihow: w + 'wikihow.com/$1',
    wikiindex: 'wikiindex.org/$1',
    wikilemon: 'wiki.illemonati.com/$1',
    wikilivres: 'wikilivres.org/wiki/$1',
    wikilivresru: 'wikilivres.ru/$1',
    'wikimac-de': 'apfelwiki.de/wiki/Main/$1',
    wikimedia: 'foundation' + wm,
    wikinews: 'en.wikinews.org/wiki/$1',
    wikinfo: 'wikinfo.org/w/index.php/$1',
    wikinvest: 'meta.wikimedia.org/wiki/Interwiki_map/discontinued#Wikinvest',
    wikiotics: 'wikiotics.org/$1',
    wikipapers: 'wikipapers.referata.com/wiki/$1',
    wikipedia: 'en.' + wp,
    wikipediawikipedia: 'en.wikipedia.org/wiki/Wikipedia:$1',
    wikiquote: 'en.wikiquote.org/wiki/$1',
    wikisophia: 'wikisophia.org/index.php?title=$1',
    wikisource: 'en.wikisource.org/wiki/$1',
    wikispecies: 'species' + wm,
    wikispot: 'wikispot.org/?action=gotowikipage&v=$1',
    wikiskripta: w + 'wikiskripta.eu/index.php/$1',
    labsconsole: 'wikitech' + wm,
    wikiti: 'wikiti.denglend.net/index.php?title=$1',
    wikiversity: 'en.wikiversity.org/wiki/$1',
    wikivoyage: 'en.wikivoyage.org/wiki/$1',
    betawikiversity: 'beta.wikiversity.org/wiki/$1',
    wikiwikiweb: 'c2.com/cgi/wiki?$1',
    wiktionary: 'en.wiktionary.org/wiki/$1',
    wipipedia: 'wipipedia.org/index.php/$1',
    wlug: w + 'wlug.org.nz/$1',
    wmam: 'am' + wm,
    wmar: w + 'wikimedia.org.ar/wiki/$1',
    wmat: 'mitglieder.wikimedia.at/$1',
    wmau: 'wikimedia.org.au/wiki/$1',
    wmbd: 'bd' + wm,
    wmbe: 'be' + wm,
    wmbr: 'br' + wm,
    wmca: 'ca' + wm,
    wmch: w + 'wikimedia.ch/$1',
    wmcl: w + 'wikimediachile.cl/index.php?title=$1',
    wmcn: 'cn' + wm,
    wmco: 'co' + wm,
    wmcz: w + 'wikimedia.cz/web/$1',
    wmdc: 'wikimediadc.org/wiki/$1',
    securewikidc: 'secure.wikidc.org/$1',
    wmde: 'wikimedia.de/wiki/$1',
    wmdk: 'dk' + wm,
    wmee: 'ee' + wm,
    wmec: 'ec' + wm,
    wmes: w + 'wikimedia.es/wiki/$1',
    wmet: 'ee' + wm,
    wmfdashboard: 'outreachdashboard.wmflabs.org/$1',
    wmfi: 'fi' + wm,
    wmfr: 'wikimedia.fr/$1',
    wmge: 'ge' + wm,
    wmhi: 'hi' + wm,
    wmhk: 'meta.wikimedia.org/wiki/Wikimedia_Hong_Kong',
    wmhu: 'wikimedia.hu/wiki/$1',
    wmid: 'id' + wm,
    wmil: w + 'wikimedia.org.il/$1',
    wmin: 'wiki.wikimedia.in/$1',
    wmit: 'wiki.wikimedia.it/wiki/$1',
    wmke: 'meta.wikimedia.org/wiki/Wikimedia_Kenya',
    wmmk: 'mk' + wm,
    wmmx: 'mx' + wm,
    wmnl: 'nl' + wm,
    wmnyc: 'nyc' + wm,
    wmno: 'no' + wm,
    'wmpa-us': 'pa-us' + wm,
    wmph: 'meta.wikimedia.org/wiki/Wikimedia_Philippines',
    wmpl: 'pl' + wm,
    wmpt: 'pt' + wm,
    wmpunjabi: 'punjabi' + wm,
    wmromd: 'romd' + wm,
    wmrs: 'rs' + wm,
    wmru: 'ru' + wm,
    wmse: 'se' + wm,
    wmsk: 'wikimedia.sk/$1',
    wmtr: 'tr' + wm,
    wmtw: 'wikimedia.tw/wiki/index.php5/$1',
    wmua: 'ua' + wm,
    wmuk: 'wikimedia.org.uk/wiki/$1',
    wmve: 'wikimedia.org.ve/wiki/$1',
    wmza: 'wikimedia.org.za/wiki/$1',
    wm2005: 'wikimania2005' + wm,
    wm2006: 'wikimania2006' + wm,
    wm2007: 'wikimania2007' + wm,
    wm2008: 'wikimania2008' + wm,
    wm2009: 'wikimania2009' + wm,
    wm2010: 'wikimania2010' + wm,
    wm2011: 'wikimania2011' + wm,
    wm2012: 'wikimania2012' + wm,
    wm2013: 'wikimania2013' + wm,
    wm2014: 'wikimania2014' + wm,
    wm2015: 'wikimania2015' + wm,
    wm2016: 'wikimania2016' + wm,
    wm2017: 'wikimania2017' + wm,
    wm2018: 'wikimania2018' + wm,
    wmania: 'wikimania' + wm,
    wikimania: 'wikimania' + wm,
    wmteam: 'wikimaniateam' + wm,
    wmf: 'foundation' + wm,
    wmfblog: 'blog.wikimedia.org/$1',
    wmdeblog: 'blog.wikimedia.de/$1',
    wookieepedia: 'starwars.wikia.com/wiki/$1',
    wowwiki: w + 'wowwiki.com/$1',
    wqy: 'wqy.sourceforge.net/cgi-bin/index.cgi?$1',
    wurmpedia: 'wurmpedia.com/index.php/$1',
    viaf: 'viaf.org/viaf/$1',
    zrhwiki: w + 'zrhwiki.ch/wiki/$1',
    zum: 'wiki.zum.de/$1',
    zwiki: w + 'zwiki.org/$1',
    m: 'meta' + wm,
    meta: 'meta' + wm,
    sep11: 'sep11.' + wp,
    d: w + 'wikidata.org/wiki/$1',
    minnan: 'zh-min-nan.' + wp,
    nb: 'no.' + wp,
    'zh-cfr': 'zh-min-nan.' + wp,
    'zh-cn': 'zh.' + wp,
    'zh-tw': 'zh.' + wp,
    nan: 'zh-min-nan.' + wp,
    vro: 'fiu-vro.' + wp,
    cmn: 'zh.' + wp,
    lzh: 'zh-classical.' + wp,
    rup: 'roa-rup.' + wp,
    gsw: 'als.' + wp,
    'be-tarask': 'be-x-old.' + wp,
    sgs: 'bat-smg.' + wp,
    egl: 'eml.' + wp,
    w: 'en.' + wp,
    wikt: 'en.wiktionary.org/wiki/$1',
    q: 'en.wikiquote.org/wiki/$1',
    b: 'en.wikibooks.org/wiki/$1',
    n: 'en.wikinews.org/wiki/$1',
    s: 'en.wikisource.org/wiki/$1',
    chapter: 'en' + wm,
    v: 'en.wikiversity.org/wiki/$1',
    voy: 'en.wikivoyage.org/wiki/$1'
  }; //so we have to whitelist allowable interwiki links
  //add language prefixes too..

  Object.keys(languages).forEach(function (k) {
    interwiki$1[k] = k + '.wikipedia.org/wiki/$1';
  }); //this is predictably very complicated.
  // https://meta.wikimedia.org/wiki/Help:Interwiki_linking

  var parseInterwiki = function parseInterwiki(obj) {
    var str = obj.page || '';

    if (str.indexOf(':') !== -1) {
      var m = str.match(/^(.*):(.*)/);

      if (m === null) {
        return obj;
      }

      var site = m[1] || '';
      site = site.toLowerCase();

      if (site.indexOf(':') !== -1) {
        var _site$match = site.match(/^:?(.*):(.*)/),
            _site$match2 = _slicedToArray(_site$match, 3),
            wiki = _site$match2[1],
            lang = _site$match2[2]; //only allow interwikis to these specific places


        if (interwiki$1.hasOwnProperty(wiki) && languages.hasOwnProperty(lang) === false) {
          return obj;
        }

        obj.wiki = {
          wiki: wiki,
          lang: lang
        };
      } else {
        if (interwiki$1.hasOwnProperty(site) === false) {
          return obj;
        }

        obj.wiki = site;
      }

      obj.page = m[2];
    }

    return obj;
  };

  var interwiki = parseInterwiki;
  var ignore_links = /^:?(category|catégorie|Kategorie|Categoría|Categoria|Categorie|Kategoria|تصنيف|image|file|image|fichier|datei|media):/i;
  var external_link = /\[(https?|news|ftp|mailto|gopher|irc)(:\/\/[^\]\| ]{4,1500})([\| ].*?)?\]/g;
  var link_reg = /\[\[(.{0,160}?)\]\]([a-z]+)?/gi; //allow dangling suffixes - "[[flanders]]s"

  var external_links = function external_links(links, str) {
    str.replace(external_link, function (raw, protocol, link, text) {
      text = text || '';
      links.push({
        type: 'external',
        site: protocol + link,
        text: text.trim(),
        raw: raw
      });
      return text;
    });
    return links;
  };

  var internal_links = function internal_links(links, str) {
    //regular links
    str.replace(link_reg, function (raw, s, suffix) {
      var txt = null; //make a copy of original

      var link = s;

      if (s.match(/\|/)) {
        //replacement link [[link|text]]
        s = s.replace(/\[\[(.{2,100}?)\]\](\w{0,10})/g, '$1$2'); //remove ['s and keep suffix

        link = s.replace(/(.{2,100})\|.{0,200}/, '$1'); //replaced links

        txt = s.replace(/.{2,100}?\|/, ''); //handle funky case of [[toronto|]]

        if (txt === null && link.match(/\|$/)) {
          link = link.replace(/\|$/, '');
          txt = link;
        }
      } //kill off non-wikipedia namespaces


      if (link.match(ignore_links)) {
        return s;
      } //kill off just these just-anchor links [[#history]]
      // if (link.match(/^#/i)) {
      //   console.log(s)
      //   return s
      // }
      //remove anchors from end [[toronto#history]]


      var obj = {
        page: link,
        raw: raw
      };
      obj.page = obj.page.replace(/#(.*)/, function (a, b) {
        obj.anchor = b;
        return '';
      }); //grab any fr:Paris parts

      obj = interwiki(obj);

      if (obj.wiki) {
        obj.type = 'interwiki';
      }

      if (txt !== null && txt !== obj.page) {
        obj.text = txt;
      } //finally, support [[link]]'s apostrophe


      if (suffix) {
        obj.text = obj.text || obj.page;
        obj.text += suffix.trim();
      } //titlecase it, if necessary


      if (obj.page && /^[A-Z]/.test(obj.page) === false) {
        if (!obj.text) {
          obj.text = obj.page;
        }

        obj.page = obj.page;
      }

      links.push(obj);
      return s;
    });
    return links;
  }; //grab an array of internal links in the text


  var parse_links = function parse_links(str) {
    var links = []; //first, parse external links

    links = external_links(links, str); //internal links

    links = internal_links(links, str);

    if (links.length === 0) {
      return undefined;
    }

    return links;
  };

  var parse$8 = parse_links;
  var REDIRECT_REGEX = new RegExp('^[ \n\t]*?#(' + i18n.redirects.join('|') + ') *?(\\[\\[.{2,180}?\\]\\])', 'i');

  var isRedirect = function isRedirect(wiki) {
    //too long to be a redirect?
    if (!wiki || wiki.length > 500) {
      return false;
    }

    return REDIRECT_REGEX.test(wiki);
  };

  var parse$7 = function parse$7(wiki) {
    var m = wiki.match(REDIRECT_REGEX);

    if (m && m[2]) {
      var links = parse$8(m[2]) || [];
      return links[0];
    }

    return {};
  };

  var redirects = {
    isRedirect: isRedirect,
    parse: parse$7
  }; //okay, i know you're not supposed to regex html, but...
  //https://en.wikipedia.org/wiki/Help:HTML_in_wikitext
  //these are things we throw-away
  //these will mess-up if they're nested, but they're not usually.

  var ignore$1 = ['table', 'code', 'score', 'data', 'categorytree', 'charinsert', 'hiero', 'imagemap', 'inputbox', 'nowiki', 'poem', 'references', 'source', 'syntaxhighlight', 'timeline'];
  var openTag = "< ?(".concat(ignore$1.join('|'), ") ?[^>]{0,200}?>");
  var closeTag = "< ?/ ?(".concat(ignore$1.join('|'), ") ?>");
  var anyChar = '\\s\\S'; //including newline

  var noThanks = new RegExp("".concat(openTag, "[").concat(anyChar, "]+?").concat(closeTag), 'ig');

  var kill_xml = function kill_xml(wiki) {
    //(<ref> tags are parsed in Section class) - luckily, refs can't be recursive.
    //types of html/xml that we want to trash completely.
    wiki = wiki.replace(noThanks, ' '); //some xml-like fragments we can also kill

    wiki = wiki.replace(/ ?< ?(span|div|table|data) [a-zA-Z0-9=%\.\-#:;'" ]{2,100}\/? ?> ?/g, ' '); //<ref name="asd">
    //only kill ref tags if they are selfclosing

    wiki = wiki.replace(/ ?< ?(ref) [a-zA-Z0-9=" ]{2,100}\/ ?> ?/g, ' '); //<ref name="asd"/>
    // convert these html tags to known formatting

    wiki = wiki.replace(/<i>(.*?)<\/i>/g, "''$1''");
    wiki = wiki.replace(/<b>(.*?)<\/b>/g, "'''$1'''"); // these are better-handled with templates

    wiki = wiki.replace(/<sub>(.*?)<\/sub>/g, "{{sub|$1}}");
    wiki = wiki.replace(/<sup>(.*?)<\/sup>/g, "{{sup|$1}}"); //some formatting xml, we'll keep their insides though

    wiki = wiki.replace(/ ?<[ \/]?(p|sub|sup|span|nowiki|div|table|br|tr|td|th|pre|pre2|hr)[ \/]?> ?/g, ' '); //<sub>, </sub>

    wiki = wiki.replace(/ ?<[ \/]?(abbr|bdi|bdo|blockquote|cite|del|dfn|em|ins|kbd|mark|q|s|small)[ \/]?> ?/g, ' '); //<abbr>, </abbr>

    wiki = wiki.replace(/ ?<[ \/]?h[0-9][ \/]?> ?/g, ' '); //<h2>, </h2>

    wiki = wiki.replace(/ ?< ?br ?\/> ?/g, '\n'); //<br />

    return wiki.trim();
  };

  var kill_xml_1 = kill_xml;
  /**
   * removes unnecessary strings from the wikitext
   * it is mostly-formatting stuff can be cleaned-up first, to make life easier
   *
   * @private
   * @param {string} wiki the wikitext that needs processing
   * @returns {string} the processed text
   */

  function preProcess(wiki) {
    //remove comments
    wiki = wiki.replace(/<!--[\s\S]{0,2000}?-->/g, '');
    wiki = wiki.replace(/__(NOTOC|NOEDITSECTION|FORCETOC|TOC)__/gi, ''); //signitures

    wiki = wiki.replace(/~~{1,3}/g, ''); //windows newlines

    wiki = wiki.replace(/\r/g, ''); //japanese periods - '。'

    wiki = wiki.replace(/\u3002/g, '. '); //horizontal rule

    wiki = wiki.replace(/----/g, ''); //formatting for templates-in-templates...

    wiki = wiki.replace(/\{\{\}\}/g, ' – ');
    wiki = wiki.replace(/\{\{\\\}\}/g, ' / '); //space

    wiki = wiki.replace(/&nbsp;/g, ' '); //give it the inglorious send-off it deserves..

    wiki = kill_xml_1(wiki); //({{template}},{{template}}) leaves empty parentheses

    wiki = wiki.replace(/\([,;: ]+?\)/g, ''); //these templates just screw things up, too

    wiki = wiki.replace(/{{(baseball|basketball) (primary|secondary) (style|color).*?\}\}/i, '');
    return wiki;
  }

  var preProcess_1 = preProcess; //dumpster-dive throws everything into mongodb  - github.com/spencermountain/dumpster-dive
  //mongo has some opinions about what characters are allowed as keys and ids.
  //https://stackoverflow.com/questions/12397118/mongodb-dot-in-key-name/30254815#30254815

  var specialChar = /[\\\.$]/;
  /**
   * this function encodes a string to make it mongodb compatible.
   * https://stackoverflow.com/questions/12397118/mongodb-dot-in-key-name/30254815#30254815
   * 
   * @param {string} str 
   * @returns {string} the encoded string
   */

  var encodeStr = function encodeStr(str) {
    if (typeof str !== 'string') {
      str = '';
    }

    str = str.replace(/\\/g, '\\\\');
    str = str.replace(/^\$/, "\\u0024");
    str = str.replace(/\./g, "\\u002e");
    return str;
  };

  var encodeObj = function encodeObj() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i += 1) {
      if (specialChar.test(keys[i]) === true) {
        var str = encodeStr(keys[i]);

        if (str !== keys[i]) {
          obj[str] = obj[keys[i]];
          delete obj[keys[i]];
        }
      }
    }

    return obj;
  };

  var encode = {
    encodeObj: encodeObj
  };
  var defaults$9 = {
    headers: true,
    depth: true,
    paragraphs: true,
    images: true,
    tables: true,
    templates: true,
    infoboxes: true,
    lists: true,
    references: true
  };
  /**
   *
   * @param {Section} section
   * @param {sectionToJsonOptions} options
   * @returns {object}
   */

  var toJSON$2 = function toJSON$2(section, options) {
    options = setDefaults_1(options, defaults$9);
    /**
     * @type {object}
     */

    var data = {};

    if (options.headers === true) {
      data.title = section.title();
    }

    if (options.depth === true) {
      data.depth = section.depth();
    } //these return objects


    if (options.paragraphs === true) {
      var paragraphs = section.paragraphs().map(function (p) {
        return p.json(options);
      });

      if (paragraphs.length > 0) {
        data.paragraphs = paragraphs;
      }
    } //image json data


    if (options.images === true) {
      var _images = section.images().map(function (img) {
        return img.json(options);
      });

      if (_images.length > 0) {
        data.images = _images;
      }
    } //table json data


    if (options.tables === true) {
      var tables = section.tables().map(function (t) {
        return t.json(options);
      });

      if (tables.length > 0) {
        data.tables = tables;
      }
    } //template json data


    if (options.templates === true) {
      var _templates = section.templates().map(function (tmpl) {
        return tmpl.json();
      });

      if (_templates.length > 0) {
        data.templates = _templates; //encode them, for mongodb

        if (options.encode === true) {
          data.templates.forEach(function (t) {
            return encode.encodeObj(t);
          });
        }
      }
    } //infobox json data


    if (options.infoboxes === true) {
      var _infoboxes2 = section.infoboxes().map(function (i) {
        return i.json(options);
      });

      if (_infoboxes2.length > 0) {
        data.infoboxes = _infoboxes2;
      }
    } //list json data


    if (options.lists === true) {
      var lists = section.lists().map(function (list) {
        return list.json(options);
      });

      if (lists.length > 0) {
        data.lists = lists;
      }
    } //list references - default true


    if (options.references === true || options.citations === true) {
      var _references = section.references().map(function (ref) {
        return ref.json(options);
      });

      if (_references.length > 0) {
        data.references = _references;
      }
    } //default off


    if (options.sentences === true) {
      data.sentences = section.sentences().map(function (s) {
        return s.json(options);
      });
    }

    return data;
  };

  var toJson$4 = toJSON$2;
  var defaults$8 = {
    type: 'internal'
  };

  var Link = function Link(data) {
    data = data || {};
    data = Object.assign({}, defaults$8, data);
    Object.defineProperty(this, 'data', {
      enumerable: false,
      value: data
    });
  };

  var methods$7 = {
    text: function text(str) {
      if (str !== undefined) {
        this.data.text = str;
      }

      var txt = this.data.text || this.data.page || ''; // remove bold/italics

      txt = txt.replace(/''+/g, '');
      return txt;
    },
    json: function json() {
      var obj = {
        text: this.data.text,
        type: this.type()
      };

      if (obj.type === 'internal') {
        obj.page = this.page();
      } else if (obj.type === 'interwiki') {
        obj.wiki = this.wiki();
      } else {
        obj.site = this.site();
      }

      var anchor = this.anchor();

      if (anchor) {
        obj.anchor = anchor;
      }

      return obj;
    },
    wikitext: function wikitext() {
      var txt = this.data.raw || '';
      return txt;
    },
    page: function page(str) {
      if (str !== undefined) {
        this.data.page = str;
      }

      return this.data.page;
    },
    anchor: function anchor(str) {
      if (str !== undefined) {
        this.data.anchor = str;
      }

      return this.data.anchor || '';
    },
    wiki: function wiki(str) {
      if (str !== undefined) {
        this.data.wiki = str;
      }

      return this.data.wiki;
    },
    type: function type(str) {
      if (str !== undefined) {
        this.data.type = str;
      }

      return this.data.type;
    },
    site: function site(str) {
      if (str !== undefined) {
        this.data.site = str;
      }

      return this.data.site;
    },
    //create a url for any type of link
    href: function href() {
      var type = this.type();

      if (type === 'external') {
        return this.site();
      }

      var page = this.page();
      page = page.replace(/ /g, '_');
      page = encodeURIComponent(page);
      var url = '';

      if (type === 'interwiki') {
        var wiki = this.wiki();
        url = 'https://en.wikipedia.org/wiki/$1';

        if (interwiki$1.hasOwnProperty(wiki)) {
          url = 'http://' + interwiki$1[this.wiki()];
        }

        url = url.replace(/\$1/g, page);
      } else {
        //internal link
        url = "./".concat(this.page());
      } //add anchor on the end


      if (this.anchor()) {
        url += '#' + this.anchor();
      }

      return url;
    }
  };
  Object.keys(methods$7).forEach(function (k) {
    Link.prototype[k] = methods$7[k];
  });
  var Link_1 = Link; // const cat_reg = new RegExp('\\[\\[:?(' + i18n.categories.join('|') + '):[^\\]\\]]{2,80}\\]\\]', 'gi')
  //return only rendered text of wiki links

  var removeLinks = function removeLinks(line) {
    // [[File:with|Size]]
    line = line.replace(/\[\[File:(.{2,80}?)\|([^\]]+?)\]\](\w{0,5})/g, '$1');
    return line;
  };

  var getLinks = function getLinks(data) {
    var wiki = data.text;
    var links = parse$8(wiki) || [];
    data.links = links.map(function (link) {
      wiki = wiki.replace(link.raw, link.text || link.page || ''); // delete link.raw

      return new Link_1(link);
    });
    wiki = removeLinks(wiki);
    data.text = wiki;
  };

  var link = getLinks; //handle the bold/italics

  var formatting = function formatting(obj) {
    var bolds = [];
    var italics = [];
    var wiki = obj.text || ''; //bold and italics combined 5 's

    wiki = wiki.replace(/'''''(.{0,200}?)'''''/g, function (a, b) {
      bolds.push(b);
      italics.push(b);
      return b;
    }); //''''four'''' → bold with quotes

    wiki = wiki.replace(/''''(.{0,200}?)''''/g, function (a, b) {
      bolds.push("'".concat(b, "'"));
      return "'".concat(b, "'");
    }); //'''bold'''

    wiki = wiki.replace(/'''(.{0,200}?)'''/g, function (a, b) {
      bolds.push(b);
      return b;
    }); //''italic''

    wiki = wiki.replace(/''(.{0,200}?)''/g, function (a, b) {
      italics.push(b);
      return b;
    }); //pack it all up..

    obj.text = wiki;

    if (bolds.length > 0) {
      obj.fmt = obj.fmt || {};
      obj.fmt.bold = bolds;
    }

    if (italics.length > 0) {
      obj.fmt = obj.fmt || {};
      obj.fmt.italic = italics;
    }

    return obj;
  };

  var formatting_1 = formatting;
  var isNumber = /^[0-9,.]+$/;
  var defaults$7 = {
    text: true,
    links: true,
    formatting: true,
    numbers: true
  };

  var toJSON$1 = function toJSON$1(s, options) {
    options = setDefaults_1(options, defaults$7);
    var data = {};
    var text = s.text();

    if (options.text === true) {
      data.text = text;
    } //add number field


    if (options.numbers === true && isNumber.test(text)) {
      var num = Number(text.replace(/,/g, ''));

      if (isNaN(num) === false) {
        data.number = num;
      }
    }

    if (options.links && s.links().length > 0) {
      data.links = s.links().map(function (l) {
        return l.json();
      });
    }

    if (options.formatting && s.data.fmt) {
      data.formatting = s.data.fmt;
    }

    return data;
  };

  var toJson$3 = toJSON$1;

  var Sentence = function Sentence() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    Object.defineProperty(this, 'data', {
      enumerable: false,
      value: data
    });
  };

  var methods$6 = {
    links: function links(n) {
      var arr = this.data.links || [];

      if (typeof n === 'string') {
        //grab a link like .links('Fortnight')
        n = n.charAt(0).toUpperCase() + n.substring(1); //titlecase it

        var _link = arr.find(function (o) {
          return o.page === n;
        });

        return _link === undefined ? [] : [_link];
      }

      return arr;
    },
    interwiki: function interwiki() {
      return this.links().filter(function (l) {
        return l.wiki !== undefined;
      });
    },
    bolds: function bolds() {
      if (this.data && this.data.fmt && this.data.fmt.bold) {
        return this.data.fmt.bold || [];
      }

      return [];
    },
    italics: function italics() {
      if (this.data && this.data.fmt && this.data.fmt.italic) {
        return this.data.fmt.italic || [];
      }

      return [];
    },
    text: function text(str) {
      if (str !== undefined && typeof str === 'string') {
        //set the text?
        this.data.text = str;
      }

      return this.data.text || '';
    },
    json: function json(options) {
      return toJson$3(this, options);
    },
    wikitext: function wikitext() {
      return this.data.wiki || '';
    },
    isEmpty: function isEmpty() {
      return this.data.text === '';
    }
  };
  Object.keys(methods$6).forEach(function (k) {
    Sentence.prototype[k] = methods$6[k];
  }); // aliases

  var singular$3 = {
    links: 'link',
    bolds: 'bold',
    italics: 'italic'
  };
  Object.keys(singular$3).forEach(function (k) {
    var sing = singular$3[k];

    Sentence.prototype[sing] = function (clue) {
      var arr = this[k](clue);

      if (typeof clue === 'number') {
        return arr[clue];
      }

      return arr[0];
    };
  });
  Sentence.prototype.plaintext = Sentence.prototype.text;
  var Sentence_1 = Sentence; //these are used for the sentence-splitter

  var _abbreviations = ['ad', 'adj', 'adm', 'adv', 'al', 'alta', 'approx', 'apr', 'apt', 'arc', 'ariz', 'assn', 'asst', 'atty', 'aug', 'ave', 'ba', 'bc', 'bl', 'bldg', 'blvd', 'brig', 'bros', 'ca', 'cal', 'calif', 'capt', 'cca', 'cg', 'cl', 'cm', 'cmdr', 'co', 'col', 'colo', 'comdr', 'conn', 'corp', 'cpl', 'cres', 'ct', 'cyn', 'dak', 'dec', 'def', 'dept', 'det', 'dg', 'dist', 'dl', 'dm', 'dr', 'ea', 'eg', 'eng', 'esp', 'esq', 'est', 'etc', 'ex', 'exp', 'feb', 'fem', 'fig', 'fl oz', 'fl', 'fla', 'fm', 'fr', 'ft', 'fy', 'ga', 'gal', 'gb', 'gen', 'gov', 'hg', 'hon', 'hr', 'hrs', 'hwy', 'hz', 'ia', 'ida', 'ie', 'inc', 'inf', 'jan', 'jd', 'jr', 'jul', 'jun', 'kan', 'kans', 'kb', 'kg', 'km', 'kmph', 'lat', 'lb', 'lit', 'llb', 'lm', 'lng', 'lt', 'ltd', 'lx', 'ma', 'maj', 'mar', 'masc', 'mb', 'md', 'messrs', 'mg', 'mi', 'min', 'minn', 'misc', 'mister', 'ml', 'mlle', 'mm', 'mme', 'mph', 'mps', 'mr', 'mrs', 'ms', 'mstr', 'mt', 'neb', 'nebr', 'nee', 'no', 'nov', 'oct', 'okla', 'ont', 'op', 'ord', 'oz', 'pa', 'pd', 'penn', 'penna', 'phd', 'pl', 'pp', 'pref', 'prob', 'prof', 'pron', 'ps', 'psa', 'pseud', 'pt', 'pvt', 'qt', 'que', 'rb', 'rd', 'rep', 'reps', 'res', 'rev', 'sask', 'sec', 'sen', 'sens', 'sep', 'sept', 'sfc', 'sgt', 'sir', 'situ', 'sq ft', 'sq', 'sr', 'ss', 'st', 'supt', 'surg', 'tb', 'tbl', 'tbsp', 'tce', 'td', 'tel', 'temp', 'tenn', 'tex', 'tsp', 'univ', 'usafa', 'ut', 'va', 'vb', 'ver', 'vet', 'vitro', 'vivo', 'vol', 'vs', 'vt', 'wis', 'wisc', 'wr', 'wy', 'wyo', 'yb', 'µg']; //@spencermountain MIT
  //(Rule-based sentence boundary segmentation) - chop given text into its proper sentences.
  // Ignore periods/questions/exclamations used in acronyms/abbreviations/numbers, etc.
  // @spencermountain 2015 MIT

  var abbreviations = _abbreviations.concat('[^]][^]]');

  var abbrev_reg = new RegExp("(^| |')(" + abbreviations.join('|') + ")[.!?] ?$", 'i');
  var acronym_reg = /[ .'][A-Z].? *?$/i;
  var elipses_reg = /\.\.\.* +?$/;
  var circa_reg = / c\.\s$/;
  var hasWord = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/i; //turn a nested array into one array

  var flatten = function flatten(arr) {
    var all = [];
    arr.forEach(function (a) {
      all = all.concat(a);
    });
    return all;
  };

  var naiive_split = function naiive_split(text) {
    //first, split by newline
    var splits = text.split(/(\n+)/);
    splits = splits.filter(function (s) {
      return s.match(/\S/);
    }); //split by period, question-mark, and exclamation-mark

    splits = splits.map(function (str) {
      return str.split(/(\S.+?[.!?]"?)(?=\s+|$)/g); //\u3002
    });
    return flatten(splits);
  }; // if this looks like a period within a wikipedia link, return false


  var isBalanced = function isBalanced(str) {
    str = str || '';
    var open = str.split(/\[\[/) || [];
    var closed = str.split(/\]\]/) || [];

    if (open.length > closed.length) {
      return false;
    } //make sure quotes are closed too


    var quotes = str.match(/"/g);

    if (quotes && quotes.length % 2 !== 0 && str.length < 900) {
      return false;
    }

    return true;
  };

  var sentence_parser = function sentence_parser(text) {
    var sentences = []; //first do a greedy-split..

    var chunks = []; //ensure it 'smells like' a sentence

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return sentences;
    } // This was the splitter regex updated to fix quoted punctuation marks.
    // let splits = text.split(/(\S.+?[.\?!])(?=\s+|$|")/g);
    // todo: look for side effects in this regex replacement:


    var splits = naiive_split(text); //filter-out the grap ones

    for (var i = 0; i < splits.length; i++) {
      var s = splits[i];

      if (!s || s === '') {
        continue;
      } //this is meaningful whitespace


      if (!s.match(/\S/)) {
        //add it to the last one
        if (chunks[chunks.length - 1]) {
          chunks[chunks.length - 1] += s;
          continue;
        } else if (splits[i + 1]) {
          //add it to the next one
          splits[i + 1] = s + splits[i + 1];
          continue;
        }
      }

      chunks.push(s);
    } //detection of non-sentence chunks


    var isSentence = function isSentence(hmm) {
      if (hmm.match(abbrev_reg) || hmm.match(acronym_reg) || hmm.match(elipses_reg) || hmm.match(circa_reg)) {
        return false;
      } //too short? - no consecutive letters


      if (hasWord.test(hmm) === false) {
        return false;
      }

      if (!isBalanced(hmm)) {
        return false;
      }

      return true;
    }; //loop through these chunks, and join the non-sentence chunks back together..


    for (var _i2 = 0; _i2 < chunks.length; _i2++) {
      //should this chunk be combined with the next one?
      if (chunks[_i2 + 1] && !isSentence(chunks[_i2])) {
        chunks[_i2 + 1] = chunks[_i2] + (chunks[_i2 + 1] || ''); //.replace(/ +/g, ' ');
      } else if (chunks[_i2] && chunks[_i2].length > 0) {
        //this chunk is a proper sentence..
        sentences.push(chunks[_i2]);
        chunks[_i2] = '';
      }
    } //if we never got a sentence, return the given text


    if (sentences.length === 0) {
      return [text];
    }

    return sentences;
  };

  var parse$6 = sentence_parser;
  /**
   * This function removes some final characters from the sentence
   *
   * @private
   * @param {string} line the wiki text for processing
   * @returns {string} the processed string
   */

  function postprocess(line) {
    //remove empty parentheses (sometimes caused by removing templates)
    line = line.replace(/\([,;: ]*\)/g, ''); //these semi-colons in parentheses are particularly troublesome

    line = line.replace(/\( *(; ?)+/g, '('); //dangling punctuation

    line = helpers.trim_whitespace(line);
    line = line.replace(/ +\.$/, '.');
    return line;
  }
  /**
   * returns one sentence object
   *
   * @param {string} str create a object from a sentence
   * @returns {Sentence} the Sentence created from the text
   */


  function fromText(str) {
    var obj = {
      wiki: str,
      text: str
    }; //pull-out the [[links]]

    link(obj);
    obj.text = postprocess(obj.text); //pull-out the bolds and ''italics''

    obj = formatting_1(obj); //pull-out things like {{start date|...}}

    return new Sentence_1(obj);
  } //used for consistency with other class-definitions


  var byParagraph = function byParagraph(paragraph) {
    //array of texts
    var sentences = parse$6(paragraph.wiki); //sentence objects

    sentences = sentences.map(fromText); //remove :indented first line, as it is often a disambiguation

    if (sentences[0] && sentences[0].text() && sentences[0].text()[0] === ':') {
      sentences = sentences.slice(1);
    }

    paragraph.sentences = sentences;
  };

  var _04Sentence = {
    fromText: fromText,
    byParagraph: byParagraph
  };
  /**
   * removes the top and bottom off the template
   * so it removes tje '{{' and '}}'
   *
   * @private
   * @param {string} tmpl the string to be striped
   * @returns {string} the striped string
   */

  var strip = function strip(tmpl) {
    tmpl = tmpl.replace(/^{{/, '');
    tmpl = tmpl.replace(/}}$/, '');
    return tmpl;
  };

  var _strip = strip; //normalize template names

  var fmtName = function fmtName(name) {
    name = (name || '').trim();
    name = name.toLowerCase();
    name = name.replace(/_/g, ' ');
    return name;
  };

  var _fmtName = fmtName;
  /**
   * turn {{name|one|two|three}} into [name, one, two, three]
   *
   * @private
   * @param {string} tmpl the template text
   * @returns {string[]} a array containing all the split parameters
   */

  var pipeSplitter = function pipeSplitter(tmpl) {
    //start with a naive '|' split
    var arr = tmpl.split(/\n?\|/); //we've split by '|', which is pretty lame
    //look for broken-up links and fix them :/

    arr.forEach(function (a, i) {
      if (a === null) {
        return;
      } //has '[[' but no ']]'
      //has equal number of opening and closing tags. handle nested case '[[[[' ']]'


      if (/\[\[[^\]]+$/.test(a) || /{{[^}]+$/.test(a) || a.split('{{').length !== a.split('}}').length || a.split('[[').length !== a.split(']]').length) {
        arr[i + 1] = arr[i] + '|' + arr[i + 1]; //@ts-expect-error we can ignore this error because we filter out all nulls later in

        arr[i] = null;
      }
    }); //cleanup any mistakes we've made

    arr = arr.filter(function (a) {
      return a !== null;
    });
    arr = arr.map(function (a) {
      return (a || '').trim();
    }); //remove empty fields, only at the end:

    for (var i = arr.length - 1; i >= 0; i -= 1) {
      if (arr[i] === '') {
        arr.pop();
      }

      break;
    }

    return arr;
  };

  var _01PipeSplitter = pipeSplitter; //every value in {{tmpl|a|b|c}} needs a name
  //here we come up with names for them

  var hasKey = /^(?:[ '-\)\x2D\.0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])+=/i; //templates with these properties are asking for trouble

  var reserved = {
    template: true,
    list: true,
    prototype: true
  };
  /**
   * @typedef parseKeyReturn
   * @property {string} val
   * @property {string} key
   */

  /**
   * turn 'key=val' into {key:key, val:val}
   *
   * @param {string} str the string that will be parsed
   * @returns {parseKeyReturn} the spit string
   */

  var parseKey = function parseKey(str) {
    var parts = str.split('=');
    var key = parts[0] || '';
    key = key.toLowerCase().trim();
    var val = parts.slice(1).join('='); //don't let it be called 'template'..

    if (reserved.hasOwnProperty(key)) {
      key = '_' + key;
    }

    return {
      key: key,
      val: val.trim()
    };
  };
  /**
   * turn [a, b=v, c] into {'1':a, b:v, '2':c}
   *
   * @private
   * @param {string[]} arr the array of parameters
   * @param {string[]} [order] the order in which the parameters are returned
   * @returns {object} and object with the names as the keys and the values as the values
   */


  var keyMaker = function keyMaker(arr, order) {
    var keyIndex = 0;
    return arr.reduce(function (h) {
      var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      str = str.trim(); //support named keys - 'foo=bar'

      if (hasKey.test(str) === true) {
        var res = parseKey(str);

        if (res.key) {
          h[res.key] = res.val;
          return h;
        }
      } //if the current index is present in the order array then we have a name for the key


      if (order && order[keyIndex]) {
        var key = order[keyIndex];
        h[key] = str;
      } else {
        h.list = h.list || [];
        h.list.push(str);
      }

      keyIndex += 1;
      return h;
    }, {});
  };

  var _02KeyMaker = keyMaker;
  var whoCares = {
    classname: true,
    style: true,
    align: true,
    margin: true,
    left: true,
    break: true,
    boxsize: true,
    framestyle: true,
    item_style: true,
    collapsible: true,
    list_style_type: true,
    'list-style-type': true,
    colwidth: true
  }; //remove wiki-cruft & some styling info from templates

  var cleanup$1 = function cleanup$1(obj) {
    Object.keys(obj).forEach(function (k) {
      if (whoCares[k.toLowerCase()] === true) {
        delete obj[k];
      } //remove empty values, too


      if (obj[k] === null || obj[k] === '') {
        delete obj[k];
      }
    });
    return obj;
  };

  var _03Cleanup = cleanup$1;
  var parseSentence$7 = _04Sentence.fromText;
  /**
   * most templates just want plaintext...
   *
   * @private
   * @param {str} str
   * @param {'json' | 'raw'} [fmt]
   * @returns {string} text
   */

  var makeFormat = function makeFormat(str, fmt) {
    var s = parseSentence$7(str); //support various output formats

    if (fmt === 'json') {
      return s.json();
    } else if (fmt === 'raw') {
      return s;
    } //default to flat text


    return s.text();
  };
  /**
   * parses the parameters of a template to a usable format
   *
   * @private
   * @param {string} tmpl the template text
   * @param {string[]} [order] the order in which the parameters are returned
   * @param {'json' | 'raw'} [fmt] whether you wan to parse the text of the template the raw object or just the text
   * @returns {object} the parameters of the template in a usable format
   */


  var parser = function parser(tmpl) {
    var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var fmt = arguments.length > 2 ? arguments[2] : undefined;
    //remove {{}}'s and split based on pipes
    tmpl = _strip(tmpl || '');

    var arr = _01PipeSplitter(tmpl); //get template name


    var name = arr.shift(); //name each value

    var obj = _02KeyMaker(arr, order); //remove wiki-junk


    obj = _03Cleanup(obj); //is this a infobox/reference?
    //let known = isKnown(obj);
    //using '|1=content' is an escaping-thing..

    if (obj['1'] && order[0] && obj.hasOwnProperty(order[0]) === false) {
      //move it over..
      obj[order[0]] = obj['1'];
      delete obj['1'];
    }

    Object.keys(obj).forEach(function (k) {
      if (k === 'list') {
        obj[k] = obj[k].map(function (v) {
          return makeFormat(v, fmt);
        });
        return;
      }

      obj[k] = makeFormat(obj[k], fmt);
    }); //add the template name

    if (name) {
      obj.template = _fmtName(name);
    }

    return obj;
  };

  var toJSON = parser;

  var Reference = function Reference(data, wiki) {
    Object.defineProperty(this, 'data', {
      enumerable: false,
      value: data
    });
    Object.defineProperty(this, 'wiki', {
      enumerable: false,
      value: wiki
    });
  };

  var methods$5 = {
    title: function title() {
      var data = this.data;
      return data.title || data.encyclopedia || data.author || '';
    },
    links: function links(n) {
      var arr = [];

      if (typeof n === 'number') {
        return arr[n];
      } //grab a specific link..


      if (typeof n === 'number') {
        return arr[n];
      } else if (typeof n === 'string') {
        //grab a link like .links('Fortnight')
        n = n.charAt(0).toUpperCase() + n.substring(1); //titlecase it

        var _link2 = arr.find(function (o) {
          return o.page() === n;
        });

        return _link2 === undefined ? [] : [_link2];
      }

      return arr || [];
    },
    text: function text() {
      return ''; //nah, skip these.
    },
    wikitext: function wikitext() {
      return this.wiki || '';
    },
    json: function json() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var json = this.data || {}; //encode them, for mongodb

      if (options.encode === true) {
        json = Object.assign({}, json);
        json = encode.encodeObj(json);
      }

      return json;
    }
  };
  Object.keys(methods$5).forEach(function (k) {
    Reference.prototype[k] = methods$5[k];
  });
  var Reference_1 = Reference;
  var parseSentence$6 = _04Sentence.fromText; //structured Cite templates - <ref>{{Cite..</ref>

  var hasCitation = function hasCitation(str) {
    return /^ *?\{\{ *?(cite|citation)/i.test(str) && /\}\} *?$/.test(str) && /citation needed/i.test(str) === false;
  };

  var parseCitation = function parseCitation(tmpl) {
    var obj = toJSON(tmpl);
    obj.type = obj.template.replace(/cite /, '');
    obj.template = 'citation';
    return obj;
  }; //handle unstructured ones - <ref>some text</ref>


  var parseInline = function parseInline(str) {
    var obj = parseSentence$6(str) || {};
    return {
      template: 'citation',
      type: 'inline',
      data: {},
      inline: obj
    };
  }; //parse <ref></ref> xml tags


  var parseRefs = function parseRefs(section) {
    var references = [];
    var wiki = section._wiki;
    wiki = wiki.replace(/ ?<ref>([\s\S]{0,1800}?)<\/ref> ?/gi, function (all, tmpl) {
      if (hasCitation(tmpl)) {
        var obj = parseCitation(tmpl);

        if (obj) {
          references.push({
            json: obj,
            wiki: all
          });
        }

        wiki = wiki.replace(tmpl, '');
      } else {
        references.push({
          json: parseInline(tmpl),
          wiki: all
        });
      }

      return ' ';
    }); //<ref name=""/>

    wiki = wiki.replace(/ ?<ref [^>]{0,200}?\/> ?/gi, ' '); //<ref name=""></ref>

    wiki = wiki.replace(/ ?<ref [^>]{0,200}?>([\s\S]{0,1800}?)<\/ref> ?/gi, function (all, tmpl) {
      if (hasCitation(tmpl)) {
        var obj = parseCitation(tmpl);

        if (obj) {
          references.push({
            json: obj,
            wiki: tmpl
          });
        }

        wiki = wiki.replace(tmpl, '');
      } else {
        references.push({
          json: parseInline(tmpl),
          wiki: all
        });
      }

      return ' ';
    }); //now that we're done with xml, do a generic + dangerous xml-tag removal

    wiki = wiki.replace(/ ?<[ \/]?[a-z0-9]{1,8}[a-z0-9=" ]{2,20}[ \/]?> ?/g, ' '); //<samp name="asd">

    section._references = references.map(function (obj) {
      return new Reference_1(obj.json, obj.wiki);
    });
    section._wiki = wiki;
  };

  var reference = parseRefs;
  var trim_whitespace = helpers.trim_whitespace;
  var parseSentence$5 = _04Sentence.fromText;
  var heading_reg = /^(={1,5})(.{1,200}?)={1,5}$/;
  /**
   * @typedef fakeSection
   * @property {string} title
   * @property {null | number} depth
   * @property {string} wiki
   */

  /**
   * estimates the depth of a section and parses the title to a normal format
   *
   * @private
   * @param {fakeSection} section
   * @param {string} str
   * @returns {fakeSection} section the depth in a object
   */

  var parseHeading = function parseHeading(section, str) {
    var m = str.match(heading_reg);

    if (!m) {
      section.title = '';
      section.depth = 0;
      return section;
    }

    var title = m[2] || '';
    title = parseSentence$5(title).text(); //amazingly, you can see inline {{templates}} in this text, too
    //... let's not think about that now.

    title = title.replace(/\{\{.+?\}\}/, ''); //same for references (i know..)

    var obj = {
      _wiki: title
    };
    reference(obj);
    title = obj._wiki; //trim leading/trailing whitespace

    title = trim_whitespace(title);
    var depth = 0;

    if (m[1]) {
      depth = m[1].length - 2;
    }

    section.title = title;
    section.depth = depth;
    return section;
  };

  var heading = parseHeading; //remove top-bottoms

  var cleanup = function cleanup(lines) {
    lines = lines.filter(function (line) {
      //a '|+' row is a 'table caption', remove it.
      return line && /^\|\+/.test(line) !== true;
    });

    if (/^{\|/.test(lines[0]) === true) {
      lines.shift();
    }

    if (/^\|}/.test(lines[lines.length - 1]) === true) {
      lines.pop();
    }

    if (/^\|-/.test(lines[0]) === true) {
      lines.shift();
    }

    return lines;
  }; //turn newline seperated into '|-' seperated


  var findRows = function findRows(lines) {
    var rows = [];
    var row = [];
    lines = cleanup(lines);

    for (var i = 0; i < lines.length; i += 1) {
      var line = lines[i]; //'|-' is a row-seperator

      if (/^\|-/.test(line) === true) {
        //okay, we're done the row
        if (row.length > 0) {
          rows.push(row);
          row = [];
        }
      } else {
        //look for '||' inline row-splitter
        line = line.split(/(?:\|\||!!)/); //support newline -> '||'

        if (!line[0] && line[1]) {
          line.shift();
        }

        line.forEach(function (l) {
          l = l.replace(/^\| */, '');
          l = l.trim();
          row.push(l);
        });
      }
    } //finish the last one


    if (row.length > 0) {
      rows.push(row);
    }

    return rows;
  };

  var _findRows = findRows;
  var getRowSpan = /.*rowspan *?= *?["']?([0-9]+)["']?[ \|]*/;
  var getColSpan = /.*colspan *?= *?["']?([0-9]+)["']?[ \|]*/; //colspans stretch ←left/right→

  var doColSpan = function doColSpan(rows) {
    rows.forEach(function (row) {
      row.forEach(function (str, c) {
        var m = str.match(getColSpan);

        if (m !== null) {
          var num = parseInt(m[1], 10); //...maybe if num is so big, and centered, remove it?
          // if (num > 3) {
          //   rows[r] = []
          //   return
          // }
          //splice-in n empty columns right here

          row[c] = str.replace(getColSpan, '');

          for (var i = 1; i < num; i += 1) {
            row.splice(c + 1, 0, '');
          }
        }
      });
    });
    rows = rows.filter(function (r) {
      return r.length > 0;
    });
    return rows;
  }; //colspans stretch up/down


  var doRowSpan = function doRowSpan(rows) {
    rows.forEach(function (row, r) {
      row.forEach(function (str, c) {
        var m = str.match(getRowSpan);

        if (m !== null) {
          var num = parseInt(m[1], 10); //copy this cell down n rows

          str = str.replace(getRowSpan, '');
          row[c] = str;

          for (var i = r + 1; i < r + num; i += 1) {
            if (!rows[i]) {
              break;
            }

            rows[i].splice(c, 0, str);
          }
        }
      });
    });
    return rows;
  }; //


  var handleSpans = function handleSpans(rows) {
    rows = doColSpan(rows);
    rows = doRowSpan(rows);
    return rows;
  };

  var _spans = handleSpans;
  var parseSentence$4 = _04Sentence.fromText;
  var isHeading = /^!/; //common ones

  var headings$1 = {
    name: true,
    age: true,
    born: true,
    date: true,
    year: true,
    city: true,
    country: true,
    population: true,
    count: true,
    number: true
  }; //additional table-cruft to remove before parseLine method

  var cleanText = function cleanText(str) {
    str = parseSentence$4(str).text(); //anything before a single-pipe is styling, so remove it

    if (str.match(/\|/)) {
      str = str.replace(/.+\| ?/, ''); //class="unsortable"|title
    }

    str = str.replace(/style=['"].*?["']/, ''); //'!' is used as a highlighed-column

    str = str.replace(/^!/, ''); // str = str.replace(/\(.*?\)/, '')

    str = str.trim(); // str = str.toLowerCase()

    return str;
  };

  var skipSpanRow = function skipSpanRow(row) {
    row = row || [];
    var len = row.length;
    var hasTxt = row.filter(function (str) {
      return str;
    }).length; //does it have 3 empty spaces?

    if (len - hasTxt > 3) {
      return true;
    }

    return false;
  }; //remove non-header span rows


  var removeMidSpans = function removeMidSpans(rows) {
    rows = rows.filter(function (row) {
      if (row.length === 1 && row[0] && isHeading.test(row[0]) && /rowspan/i.test(row[0]) === false) {
        return false;
      }

      return true;
    });
    return rows;
  }; //'!' starts a header-row


  var findHeaders = function findHeaders() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var headers = []; // is the first-row just a ton of colspan?

    if (skipSpanRow(rows[0])) {
      rows.shift();
    }

    var first = rows[0];

    if (first && first[0] && first[1] && (/^!/.test(first[0]) || /^!/.test(first[1]))) {
      headers = first.map(function (h) {
        h = h.replace(/^\! */, '');
        h = cleanText(h);
        return h;
      });
      rows.shift();
    } //try the second row, too (overwrite first-row, if it exists)


    first = rows[0];

    if (first && first[0] && first[1] && /^!/.test(first[0]) && /^!/.test(first[1])) {
      first.forEach(function (h, i) {
        h = h.replace(/^\! */, '');
        h = cleanText(h);

        if (Boolean(h) === true) {
          headers[i] = h;
        }
      });
      rows.shift();
    }

    return headers;
  }; //turn headers, array into an object


  var parseRow = function parseRow(arr, headers) {
    var row = {};
    arr.forEach(function (str, i) {
      var h = headers[i] || 'col' + (i + 1);
      var s = parseSentence$4(str);
      s.text(cleanText(s.text()));
      row[h] = s;
    });
    return row;
  }; //should we use the first row as a the headers?


  var firstRowHeader = function firstRowHeader(rows) {
    if (rows.length <= 3) {
      return [];
    }

    var headers = rows[0].slice(0);
    headers = headers.map(function (h) {
      h = h.replace(/^\! */, '');
      h = parseSentence$4(h).text();
      h = cleanText(h);
      h = h.toLowerCase();
      return h;
    });

    for (var i = 0; i < headers.length; i += 1) {
      if (headings$1.hasOwnProperty(headers[i])) {
        rows.shift();
        return headers;
      }
    }

    return [];
  }; //turn a {|...table string into an array of arrays


  var parseTable = function parseTable(wiki) {
    var lines = wiki.replace(/\r/g, '').replace(/\n(\s*[^|!{\s])/g, ' $1') //remove unecessary newlines
    .split(/\n/).map(function (l) {
      return l.trim();
    });

    var rows = _findRows(lines);

    rows = rows.filter(function (r) {
      return r;
    });

    if (rows.length === 0) {
      return [];
    } //remove non-header span rows


    rows = removeMidSpans(rows); //support colspan, rowspan...

    rows = _spans(rows); //grab the header rows

    var headers = findHeaders(rows);

    if (!headers || headers.length <= 1) {
      headers = firstRowHeader(rows);
      var want = rows[rows.length - 1] || []; //try the second row

      if (headers.length <= 1 && want.length > 2) {
        headers = firstRowHeader(rows.slice(1));

        if (headers.length > 0) {
          rows = rows.slice(2); //remove them
        }
      }
    } //index each column by it's header


    var table = rows.map(function (arr) {
      return parseRow(arr, headers);
    });
    return table;
  };

  var parse$5 = parseTable;

  var toJson$2 = function toJson$2(tables, options) {
    return tables.map(function (table) {
      var row = {};
      Object.keys(table).forEach(function (k) {
        row[k] = table[k].json(); //(they're sentence objects)
      }); //encode them, for mongodb

      if (options.encode === true) {
        row = encode.encodeObj(row);
      }

      return row;
    });
  };

  var toJson_1$2 = toJson$2;
  var defaults$6 = {};

  var normalize$1 = function normalize$1() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    key = key.toLowerCase();
    key = key.replace(/[_-]/g, ' ');
    key = key.replace(/\(.*?\)/, '');
    key = key.trim();
    return key;
  };

  var Table = function Table(data) {
    var wiki = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    Object.defineProperty(this, 'data', {
      enumerable: false,
      value: data
    });
    Object.defineProperty(this, '_wiki', {
      enumerable: false,
      value: wiki
    });
  };

  var methods$4 = {
    links: function links(n) {
      var links = [];
      this.data.forEach(function (r) {
        Object.keys(r).forEach(function (k) {
          links = links.concat(r[k].links());
        });
      });

      if (typeof n === 'string') {
        //grab a link like .links('Fortnight')
        n = n.charAt(0).toUpperCase() + n.substring(1); //titlecase it

        var _link3 = links.find(function (o) {
          return o.page() === n;
        });

        return _link3 === undefined ? [] : [_link3];
      }

      return links;
    },
    get: function get(keys) {
      // normalize mappings
      var have = this.data[0] || {};
      var mapping = Object.keys(have).reduce(function (h, k) {
        h[normalize$1(k)] = k;
        return h;
      }, {}); // string gets a flat-list

      if (typeof keys === 'string') {
        var key = normalize$1(keys);
        key = mapping[key] || key;
        return this.data.map(function (row) {
          return row[key] ? row[key].text() : null;
        });
      } // array gets obj-list


      keys = keys.map(normalize$1).map(function (k) {
        return mapping[k] || k;
      });
      return this.data.map(function (row) {
        return keys.reduce(function (h, k) {
          if (row[k]) {
            h[k] = row[k].text();
          } else {
            h[k] = '';
          }

          return h;
        }, {});
      });
    },
    keyValue: function keyValue(options) {
      var rows = this.json(options);
      rows.forEach(function (row) {
        Object.keys(row).forEach(function (k) {
          row[k] = row[k].text;
        });
      });
      return rows;
    },
    json: function json(options) {
      options = setDefaults_1(options, defaults$6);
      return toJson_1$2(this.data, options);
    },
    text: function text() {
      return '';
    },
    wikitext: function wikitext() {
      return this._wiki || '';
    }
  };
  methods$4.keyvalue = methods$4.keyValue;
  methods$4.keyval = methods$4.keyValue;
  Object.keys(methods$4).forEach(function (k) {
    Table.prototype[k] = methods$4[k];
  });
  var Table_1 = Table;
  var openReg = /^\s*{\|/;
  var closeReg = /^\s*\|}/; //tables can be recursive, so looky-here.

  var findTables = function findTables(section) {
    var list = [];
    var wiki = section._wiki;
    var lines = wiki.split('\n');
    var stack = [];

    for (var i = 0; i < lines.length; i += 1) {
      //start a table
      if (openReg.test(lines[i]) === true) {
        stack.push(lines[i]);
        continue;
      } //close a table


      if (closeReg.test(lines[i]) === true) {
        stack[stack.length - 1] += '\n' + lines[i];

        var _table = stack.pop();

        list.push(_table);
        continue;
      } //keep-going on one


      if (stack.length > 0) {
        stack[stack.length - 1] += '\n' + lines[i];
      }
    } //work-em together for a Table class


    var tables = [];
    list.forEach(function (str) {
      if (str) {
        //also re-remove a newline at the end of the table (awkward)
        wiki = wiki.replace(str + '\n', '');
        wiki = wiki.replace(str, '');
        var data = parse$5(str);

        if (data && data.length > 0) {
          tables.push(new Table_1(data, str));
        }
      }
    });

    if (tables.length > 0) {
      section._tables = tables;
    }

    section._wiki = wiki;
  };

  var table = findTables;
  var defaults$5 = {
    sentences: true
  };

  var toJson$1 = function toJson$1(p, options) {
    options = setDefaults_1(options, defaults$5);
    var data = {};

    if (options.sentences === true) {
      data.sentences = p.sentences().map(function (s) {
        return s.json(options);
      });
    }

    return data;
  };

  var toJson_1$1 = toJson$1;
  var defaults$4 = {
    sentences: true,
    lists: true,
    images: true
  };

  var Paragraph = function Paragraph(data) {
    Object.defineProperty(this, 'data', {
      enumerable: false,
      value: data
    });
  };

  var methods$3 = {
    sentences: function sentences() {
      return this.data.sentences || [];
    },
    references: function references() {
      return this.data.references;
    },
    lists: function lists() {
      return this.data.lists;
    },
    images: function images() {
      return this.data.images || [];
    },
    links: function links(clue) {
      var arr = [];
      this.sentences().forEach(function (s) {
        arr = arr.concat(s.links(clue));
      });

      if (typeof clue === 'string') {
        //grab a specific link like .links('Fortnight')
        clue = clue.charAt(0).toUpperCase() + clue.substring(1); //titlecase it

        var _link4 = arr.find(function (o) {
          return o.page() === clue;
        });

        return _link4 === undefined ? [] : [_link4];
      }

      return arr || [];
    },
    interwiki: function interwiki() {
      var arr = [];
      this.sentences().forEach(function (s) {
        arr = arr.concat(s.interwiki());
      });
      return arr || [];
    },
    text: function text(options) {
      options = setDefaults_1(options, defaults$4);
      var str = this.sentences().map(function (s) {
        return s.text(options);
      }).join(' ');
      this.lists().forEach(function (list) {
        str += '\n' + list.text();
      });
      return str;
    },
    json: function json(options) {
      options = setDefaults_1(options, defaults$4);
      return toJson_1$1(this, options);
    },
    wikitext: function wikitext() {
      return this.data.wiki;
    }
  };
  methods$3.citations = methods$3.references;
  Object.keys(methods$3).forEach(function (k) {
    Paragraph.prototype[k] = methods$3[k];
  }); // aliases

  var singular$2 = {
    sentences: 'sentence',
    references: 'reference',
    citation: 'citations',
    lists: 'list',
    images: 'image',
    links: 'link'
  };
  Object.keys(singular$2).forEach(function (k) {
    var sing = singular$2[k];

    Paragraph.prototype[sing] = function (clue) {
      var arr = this[k](clue);

      if (typeof clue === 'number') {
        return arr[clue];
      }

      return arr[0];
    };
  });
  var Paragraph_1 = Paragraph;
  var opener = '[';
  var closer = ']';
  /**
   *
   * find all the pairs of '[[...[[..]]...]]' in the text
   * used to properly root out recursive template calls, [[.. [[...]] ]]
   * basically just adds open tags, and subtracts closing tags
   *
   * @private
   * @param {string} text the text in which is searched in
   * @returns {string[]} all the links in the text
   */

  function nested_find(text) {
    var out = [];
    var last = [];
    var chars = text.split('');
    var open = 0;

    for (var i = 0; i < chars.length; i++) {
      var c = text[i]; //increment open tag

      if (c === opener) {
        open += 1;
      } //decrement close tag
      else if (c === closer) {
          open -= 1;

          if (open < 0) {
            open = 0;
          }
        } else if (last.length === 0) {
          //If we're not inside of a pair of delimiters, we can discard the current letter.
          //The return of this function is only used to extract images.
          continue;
        }

      last.push(c);

      if (open === 0 && last.length > 0) {
        //first, fix botched parse
        var open_count = 0;
        var close_count = 0;

        for (var j = 0; j < last.length; j++) {
          if (last[j] === opener) {
            open_count++;
          } else if (last[j] === closer) {
            close_count++;
          }
        } //is it botched?


        if (open_count > close_count) {
          last.push(closer);
        } //looks good, keep it


        out.push(last.join(''));
        last = [];
      }
    }

    return out;
  }

  var nested_find_1 = nested_find;
  var parseSentence$3 = _04Sentence.fromText; //regexes:

  var isFile = new RegExp('(' + i18n.images.join('|') + '):', 'i');
  var fileNames = "(".concat(i18n.images.join('|'), ")");
  var file_reg = new RegExp(fileNames + ':(.+?)[\\||\\]]', 'iu'); //style directives for Wikipedia:Extended_image_syntax

  var imgLayouts = {
    thumb: true,
    thumbnail: true,
    border: true,
    right: true,
    left: true,
    center: true,
    top: true,
    bottom: true,
    none: true,
    upright: true,
    baseline: true,
    middle: true,
    sub: true,
    super: true
  }; //images are usually [[image:my_pic.jpg]]

  var oneImage = function oneImage(img, doc) {
    var m = img.match(file_reg);

    if (m === null || !m[2]) {
      return null;
    }

    var file = "".concat(m[1], ":").concat(m[2] || '');
    file = file.trim(); //titlecase it

    var title = file.charAt(0).toUpperCase() + file.substring(1); //spaces to underscores

    title = title.replace(/ /g, '_');

    if (title) {
      var obj = {
        file: file,
        lang: doc._lang,
        domain: doc._domain,
        wiki: img
      }; //try to grab other metadata, too

      img = img.replace(/^\[\[/, '');
      img = img.replace(/\]\]$/, ''); //https://en.wikipedia.org/wiki/Wikipedia:Extended_image_syntax
      //- [[File:Name|Type|Border|Location|Alignment|Size|link=Link|alt=Alt|lang=Langtag|Caption]]

      var imgData = toJSON(img);
      var arr = imgData.list || []; //parse-out alt text, if explicitly given

      if (imgData.alt) {
        obj.alt = imgData.alt;
      } //remove 'thumb' and things


      arr = arr.filter(function (str) {
        return imgLayouts.hasOwnProperty(str) === false;
      });

      if (arr[arr.length - 1]) {
        obj.caption = parseSentence$3(arr[arr.length - 1]);
      }

      return new Image_1(obj);
    }

    return null;
  };

  var parseImages = function parseImages(paragraph, doc) {
    var wiki = paragraph.wiki; //parse+remove scary '[[ [[]] ]]' stuff

    var matches = nested_find_1(wiki);
    matches.forEach(function (s) {
      if (isFile.test(s) === true) {
        paragraph.images = paragraph.images || [];
        var img = oneImage(s, doc);

        if (img) {
          paragraph.images.push(img);
        }

        wiki = wiki.replace(s, '');
      }
    });
    paragraph.wiki = wiki;
  };

  var image = parseImages;
  var defaults$3 = {};

  var toText$2 = function toText$2(list, options) {
    return list.map(function (s) {
      var str = s.text(options);
      return ' * ' + str;
    }).join('\n');
  };

  var List = function List(data) {
    var wiki = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    Object.defineProperty(this, 'data', {
      enumerable: false,
      value: data
    });
    Object.defineProperty(this, 'wiki', {
      enumerable: false,
      value: wiki
    });
  };

  var methods$2 = {
    lines: function lines() {
      return this.data;
    },
    links: function links(clue) {
      var links = [];
      this.lines().forEach(function (s) {
        links = links.concat(s.links());
      });

      if (typeof clue === 'string') {
        //grab a link like .links('Fortnight')
        clue = clue.charAt(0).toUpperCase() + clue.substring(1); //titlecase it

        var _link5 = links.find(function (o) {
          return o.page() === clue;
        });

        return _link5 === undefined ? [] : [_link5];
      }

      return links;
    },
    json: function json(options) {
      options = setDefaults_1(options, defaults$3);
      return this.lines().map(function (s) {
        return s.json(options);
      });
    },
    text: function text() {
      return toText$2(this.data);
    },
    wikitext: function wikitext() {
      return this.wiki || '';
    }
  };
  Object.keys(methods$2).forEach(function (k) {
    List.prototype[k] = methods$2[k];
  });
  var List_1 = List;
  var parseSentence$2 = _04Sentence.fromText;
  var list_reg = /^[#\*:;\|]+/;
  var bullet_reg = /^\*+[^:,\|]{4}/;
  var number_reg = /^ ?\#[^:,\|]{4}/;
  var has_word = /[a-z_0-9\]\}]/i; // does it start with a bullet point or something?

  var isList = function isList(line) {
    return list_reg.test(line) || bullet_reg.test(line) || number_reg.test(line);
  }; //make bullets/numbers into human-readable *'s


  var cleanList = function cleanList(list) {
    var number = 1;
    list = list.filter(function (l) {
      return l;
    });

    for (var i = 0; i < list.length; i++) {
      var line = list[i]; //add # numberings formatting

      if (line.match(number_reg)) {
        line = line.replace(/^ ?#*/, number + ') ');
        line = line + '\n';
        number += 1;
      } else if (line.match(list_reg)) {
        number = 1;
        line = line.replace(list_reg, '');
      }

      list[i] = parseSentence$2(line);
    }

    return list;
  };

  var grabList = function grabList(lines, i) {
    var sub = [];

    for (var o = i; o < lines.length; o++) {
      if (isList(lines[o])) {
        sub.push(lines[o]);
      } else {
        break;
      }
    }

    sub = sub.filter(function (a) {
      return a && has_word.test(a);
    });
    sub = cleanList(sub);
    return sub;
  };

  var parseList = function parseList(paragraph) {
    var wiki = paragraph.wiki;
    var lines = wiki.split(/\n/g);
    var lists = [];
    var theRest = [];

    for (var i = 0; i < lines.length; i++) {
      if (isList(lines[i])) {
        var sub = grabList(lines, i);

        if (sub.length > 0) {
          lists.push(sub);
          i += sub.length - 1;
        }
      } else {
        theRest.push(lines[i]);
      }
    }

    paragraph.lists = lists.map(function (l) {
      return new List_1(l, wiki);
    });
    paragraph.wiki = theRest.join('\n');
  };

  var list$1 = parseList;
  var parseSentences = _04Sentence.byParagraph;
  var twoNewLines = /\r?\n\r?\n/;
  var parse$4 = {
    image: image,
    list: list$1
  };

  var parseParagraphs = function parseParagraphs(section, doc) {
    var wiki = section._wiki;
    var paragraphs = wiki.split(twoNewLines); //don't create empty paragraphs

    paragraphs = paragraphs.filter(function (p) {
      return p && p.trim().length > 0;
    });
    paragraphs = paragraphs.map(function (str) {
      var paragraph = {
        wiki: str,
        lists: [],
        sentences: [],
        images: []
      }; //parse the lists

      parse$4.list(paragraph); //parse images

      parse$4.image(paragraph, doc); //parse the sentences

      parseSentences(paragraph);
      return new Paragraph_1(paragraph);
    });
    section._wiki = wiki;
    section._paragraphs = paragraphs;
  };

  var _03Paragraph = parseParagraphs;
  var open = '{';
  var close = '}'; //grab all first-level recursions of '{{...}}'

  var findFlat = function findFlat(wiki) {
    var depth = 0;
    var list = [];
    var carry = [];

    for (var i = wiki.indexOf(open); i !== -1 && i < wiki.length; depth > 0 ? i++ : i = wiki.indexOf(open, i + 1)) {
      var c = wiki[i]; //open it

      if (c === open) {
        depth += 1;
      } //close it


      if (depth > 0) {
        if (c === close) {
          depth -= 1;

          if (depth === 0) {
            carry.push(c);
            var tmpl = carry.join('');
            carry = []; //last check

            if (/\{\{/.test(tmpl) && /\}\}/.test(tmpl)) {
              list.push(tmpl);
            }

            continue;
          }
        } //require two '{{' to open it


        if (depth === 1 && c !== open && c !== close) {
          depth = 0;
          carry = [];
          continue;
        }

        carry.push(c);
      }
    }

    return list;
  };

  var _02Flat = findFlat; //templates are usually '{{name|stuff}}'

  var getName = function getName(tmpl) {
    var name = null; //{{name|foo}}

    if (/^\{\{[^\n]+\|/.test(tmpl)) {
      name = (tmpl.match(/^\{\{(.+?)\|/) || [])[1];
    } else if (tmpl.indexOf('\n') !== -1) {
      // {{name \n...
      name = (tmpl.match(/^\{\{(.+?)\n/) || [])[1];
    } else {
      //{{name here}}
      name = (tmpl.match(/^\{\{(.+?)\}\}$/) || [])[1];
    }

    if (name) {
      name = name.replace(/:.*/, '');
      name = _fmtName(name);
    }

    return name || null;
  };

  var _getName = getName;
  var hasTemplate = /\{\{/;

  var parseTemplate$1 = function parseTemplate$1(tmpl) {
    // this is some unexplained Lua thing
    tmpl = tmpl.replace(/#invoke:/, '');
    return {
      body: tmpl,
      name: _getName(tmpl),
      children: []
    };
  };

  var doEach = function doEach(obj) {
    // peel-off top-level
    var wiki = obj.body.substr(2);
    wiki = wiki.replace(/\}\}$/, ''); // get our child templates

    obj.children = _02Flat(wiki);
    obj.children = obj.children.map(parseTemplate$1);

    if (obj.children.length === 0) {
      return obj;
    } // recurse through children


    obj.children.forEach(function (ch) {
      var inside = ch.body.substr(2);

      if (hasTemplate.test(inside)) {
        return doEach(ch); //keep going
      }

      return null;
    });
    return obj;
  }; // return a nested structure of all templates


  var findTemplates = function findTemplates(wiki) {
    var list = _02Flat(wiki);

    list = list.map(parseTemplate$1);
    list = list.map(doEach);
    return list;
  };

  var _01Nested = findTemplates; //we explicitly ignore these, because they sometimes have resolve some data

  var list = [//https://en.wikipedia.org/wiki/category:templates_with_no_visible_output
  'anchor', 'defaultsort', 'use list-defined references', 'void', //https://en.wikipedia.org/wiki/Category:Protection_templates
  'pp', 'pp-move-indef', 'pp-semi-indef', 'pp-vandalism', //https://en.wikipedia.org/wiki/Template:R
  'r', //out-of-scope still - https://en.wikipedia.org/wiki/Template:Tag
  '#tag', //https://en.wikipedia.org/wiki/Template:Navboxes
  // 'navboxes',
  // 'reflist',
  // 'ref-list',
  'div col', // 'authority control',
  //https://en.wikipedia.org/wiki/Template:Citation_needed
  // 'better source',
  // 'citation needed',
  // 'clarify',
  // 'cite quote',
  // 'dead link',
  // 'by whom',
  // 'dubious',
  // 'when',
  // 'who',
  // 'quantify',
  // 'refimprove',
  // 'weasel inline',
  //https://en.wikipedia.org/wiki/Template:End
  'pope list end', 'shipwreck list end', 'starbox end', 'end box', 'end', 's-end'];
  var ignore = list.reduce(function (h, str) {
    h[str] = true;
    return h;
  }, {});
  var _ignore = ignore;
  var _infoboxes = {
    'gnf protein box': true,
    'automatic taxobox': true,
    'chembox ': true,
    editnotice: true,
    geobox: true,
    hybridbox: true,
    ichnobox: true,
    infraspeciesbox: true,
    mycomorphbox: true,
    oobox: true,
    'paraphyletic group': true,
    speciesbox: true,
    subspeciesbox: true,
    'starbox short': true,
    taxobox: true,
    nhlteamseason: true,
    'asian games bid': true,
    'canadian federal election results': true,
    'dc thomson comic strip': true,
    'daytona 24 races': true,
    edencharacter: true,
    'moldova national football team results': true,
    samurai: true,
    protein: true,
    'sheet authority': true,
    'order-of-approx': true,
    'bacterial labs': true,
    'medical resources': true,
    ordination: true,
    'hockey team coach': true,
    'hockey team gm': true,
    'pro hockey team': true,
    'hockey team player': true,
    'hockey team start': true,
    mlbbioret: true
  };
  var i18nReg = new RegExp('^(subst.)?(' + i18n.infoboxes.join('|') + ')[: \n]', 'i'); //some looser ones

  var startReg = /^infobox /i;
  var endReg = / infobox$/i;
  var yearIn = /$Year in [A-Z]/i; //some known ones from
  //https://en.wikipedia.org/wiki/Wikipedia:List_of_infoboxes
  //and https://en.wikipedia.org/wiki/Category:Infobox_templates

  var isInfobox = function isInfobox(name) {
    //known
    if (_infoboxes.hasOwnProperty(name) === true) {
      return true;
    }

    if (i18nReg.test(name)) {
      return true;
    }

    if (startReg.test(name) || endReg.test(name)) {
      return true;
    } //these are also infoboxes: 'Year in Belarus'


    if (yearIn.test(name)) {
      return true;
    }

    return false;
  }; //turns template data into good infobox data


  var fmtInfobox = function fmtInfobox() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var m = obj.template.match(i18nReg);
    var type = obj.template;

    if (m && m[0]) {
      type = type.replace(m[0], '');
    }

    type = type.trim();
    var infobox = {
      template: 'infobox',
      type: type,
      data: obj
    };
    delete infobox.data.template; //already have this.

    delete infobox.data.list; //just in case!

    return infobox;
  };

  var _infobox = {
    isInfobox: isInfobox,
    format: fmtInfobox
  };
  var aliases = {
    imdb: 'imdb name',
    'imdb episodess': 'imdb episode',
    localday: 'currentday',
    localdayname: 'currentdayname',
    localyear: 'currentyear',
    'birth date based on age at death': 'birth based on age as of date',
    'bare anchored list': 'anchored list',
    cvt: 'convert',
    cricon: 'flagicon',
    sfrac: 'frac',
    sqrt: 'radic',
    'unreferenced section': 'unreferenced',
    redir: 'redirect',
    sisterlinks: 'sister project links',
    'main article': 'main'
  }; //multiple aliases

  var multi = {
    date: ['byline', 'dateline'],
    //wikinews
    citation: ['cite', 'source', 'source-pr', 'source-science'],
    flagcountry: ['cr', 'cr-rt'],
    trunc: ['str left', 'str crop'],
    percentage: ['pct', 'percentage'],
    rnd: ['rndfrac', 'rndnear'],
    abbr: ['tooltip', 'abbrv', 'define'],
    sfn: ['sfnref', 'harvid', 'harvnb'],
    'birth date and age': ['death date and age', 'bda'],
    currentmonth: ['localmonth', 'currentmonthname', 'currentmonthabbrev'],
    currency: ['monnaie', 'unité', 'nombre', 'nb', 'iso4217'],
    coord: ['coor', 'coor title dms', 'coor title dec', 'coor dms', 'coor dm', 'coor dec'],
    'columns-list': ['cmn', 'col-list', 'columnslist', 'collist'],
    nihongo: ['nihongo2', 'nihongo3', 'nihongo-s', 'nihongo foot'],
    plainlist: ['flatlist', 'ublist', 'plain list'],
    'winning percentage': ['winpct', 'winperc'],
    'collapsible list': ['unbulleted list', 'ubl'],
    'election box begin': ['election box begin no change', 'election box begin no party', 'election box begin no party no change', 'election box inline begin', 'election box inline begin no change'],
    'election box candidate': ['election box candidate for alliance', 'election box candidate minor party', 'election box candidate no party link no change', 'election box candidate with party link', 'election box candidate with party link coalition 1918', 'election box candidate with party link no change', 'election box inline candidate', 'election box inline candidate no change', 'election box inline candidate with party link', 'election box inline candidate with party link no change', 'election box inline incumbent'],
    '4teambracket': ['2teambracket', '4team2elimbracket', '8teambracket', '16teambracket', '32teambracket', '4roundbracket-byes', 'cwsbracket', 'nhlbracket', 'nhlbracket-reseed', '4teambracket-nhl', '4teambracket-ncaa', '4teambracket-mma', '4teambracket-mlb', '16teambracket-two-reseeds', '8teambracket-nhl', '8teambracket-mlb', '8teambracket-ncaa', '8teambracket-afc', '8teambracket-afl', '8teambracket-tennis3', '8teambracket-tennis5', '16teambracket-nhl', '16teambracket-nhl divisional', '16teambracket-nhl-reseed', '16teambracket-nba', '16teambracket-swtc', '16teambracket-afc', '16teambracket-tennis3', '16teambracket-tennis5'],
    start: ['end', 'birth', 'death', 'start date', 'end date', 'birth date', 'death date', 'start date and age', 'end date and age', 'dob'],
    'start-date': ['end-date', 'birth-date', 'death-date', 'birth-date and age', 'birth-date and given age', 'death-date and age', 'death-date and given age'],
    tl: ['lts', 't', 'tfd links', 'tiw', 'tltt', 'tetl', 'tsetl', 'ti', 'tic', 'tiw', 'tlt', 'ttl', 'twlh', 'tl2', 'tlu', 'demo', 'hatnote', 'xpd', 'para', 'elc', 'xtag', 'mli', 'mlix', '#invoke', 'url' //https://en.wikipedia.org/wiki/Template:URL
    ]
  }; // - other languages -
  // Polish, {{IPAc-pl}}	{{IPAc-pl|'|sz|cz|e|ć|i|n}} → [ˈʂt͡ʂɛt͡ɕin]
  // Portuguese, {{IPAc-pt}}	{{IPAc-pt|p|o|<|r|t|u|'|g|a|l|lang=pt}} and {{IPAc-pt|b|r|a|'|s|i|l|lang=br}} → [puɾtuˈɣaɫ] and [bɾaˈsiw]

  Object.keys(languages).forEach(function (lang) {
    aliases['ipa-' + lang] = 'ipa';
    aliases['ipac-' + lang] = 'ipac';
  }); // add each alias in

  Object.keys(multi).forEach(function (k) {
    multi[k].forEach(function (str) {
      aliases[str] = k;
    });
  });
  var aliases_1 = aliases;
  var hardcoded = {
    '·': '·',
    dot: '·',
    middot: '·',
    '•': ' • ',
    ',': ',',
    '1/2': '1⁄2',
    '1/3': '1⁄3',
    '2/3': '2⁄3',
    '1/4': '1⁄4',
    '3/4': '3⁄4',
    '–': '–',
    ndash: '–',
    'en dash': '–',
    'spaced ndash': ' – ',
    '—': '—',
    mdash: '—',
    'em dash': '—',
    'number sign': '#',
    ibeam: 'I',
    '&': '&',
    ';': ';',
    ampersand: '&',
    snds: ' – ',
    snd: ' – ',
    '^': ' ',
    '!': '|',
    '\\': ' /',
    '`': '`',
    '=': '=',
    bracket: '[',
    '[': '[',
    '*': '*',
    asterisk: '*',
    'long dash': '———',
    clear: '\n\n',
    'h.': 'ḥ',
    profit: '▲',
    loss: '▼',
    gain: '▲'
  };
  var templates$9 = {
    p1: 0,
    p2: 1,
    p3: 2,
    resize: 1,
    //https://en.wikipedia.org/wiki/Template:Resize
    lang: 1,
    'rtl-lang': 1,
    l: 2,
    h: 1,
    //https://en.wikipedia.org/wiki/Template:Hover_title
    sort: 1 //https://en.wikipedia.org/wiki/Template:Sort

  }; //templates that we simply grab their insides as plaintext

  var zeros = ['defn', 'lino', //https://en.wikipedia.org/wiki/Template:Linum
  'finedetail', //https://en.wikipedia.org/wiki/Template:Finedetail
  'nobold', 'noitalic', 'nocaps', 'vanchor', //https://en.wikipedia.org/wiki/Template:Visible_anchor
  'rnd', 'date', //Explictly-set dates - https://en.wikipedia.org/wiki/Template:Date
  'taste', 'monthname', 'baseball secondary style', 'lang-de', 'nowrap', 'nobr', 'big', 'cquote', 'pull quote', 'small', 'smaller', 'midsize', 'larger', 'big', 'kbd', 'bigger', 'large', 'mono', 'strongbad', 'stronggood', 'huge', 'xt', 'xt2', '!xt', 'xtn', 'xtd', 'dc', 'dcr', 'mxt', '!mxt', 'mxtn', 'mxtd', 'bxt', '!bxt', 'bxtn', 'bxtd', 'delink', //https://en.wikipedia.org/wiki/Template:Delink
  'pre', 'var', 'mvar', 'pre2', 'code'];
  zeros.forEach(function (k) {
    templates$9[k] = 0;
  }); //https://en.wikipedia.org/wiki/Category:Lang-x_templates

  Object.keys(languages).forEach(function (k) {
    templates$9['lang-' + k] = 0;
  });
  var shorthand$1 = templates$9;

  var percentage = function percentage(obj) {
    if (!obj.numerator && !obj.denominator) {
      return null;
    }

    var perc = Number(obj.numerator) / Number(obj.denominator);
    perc *= 100;
    var dec = Number(obj.decimals);

    if (isNaN(dec)) {
      dec = 1;
    }

    perc = perc.toFixed(dec);
    return Number(perc);
  };

  var toNumber = function toNumber() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (typeof str === 'number') {
      return str;
    }

    str = str.replace(/,/g, '');
    str = str.replace(/−/g, '-');
    var num = Number(str);

    if (isNaN(num)) {
      return str;
    }

    return num;
  };

  var getLang = function getLang(name) {
    //grab the language from the template name - 'ipa-de'
    var lang = name.match(/ipac?-(.+)/);

    if (lang !== null) {
      if (languages.hasOwnProperty(lang[1]) === true) {
        return languages[lang[1]].english_title;
      }

      return lang[1];
    }

    return null;
  };

  var titlecase$1 = function titlecase$1(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  };

  var sisterProjects = {
    wikt: 'wiktionary',
    commons: 'commons',
    c: 'commons',
    commonscat: 'commonscat',
    n: 'wikinews',
    q: 'wikiquote',
    s: 'wikisource',
    a: 'wikiauthor',
    b: 'wikibooks',
    voy: 'wikivoyage',
    v: 'wikiversity',
    d: 'wikidata',
    species: 'wikispecies',
    m: 'meta',
    mw: 'mediawiki'
  };
  var _lib$3 = {
    titlecase: titlecase$1,
    sisterProjects: sisterProjects,
    getLang: getLang,
    percentage: percentage,
    toNumber: toNumber
  };
  var functions$2 = {
    //https://en.wikipedia.org/wiki/Template:Ra
    ra: function ra(tmpl) {
      var obj = toJSON(tmpl, ['hours', 'minutes', 'seconds']);
      return [obj.hours || 0, obj.minutes || 0, obj.seconds || 0].join(':');
    },
    //https://en.wikipedia.org/wiki/Template:Deg2HMS
    deg2hms: function deg2hms(tmpl) {
      //this template should do the conversion
      var obj = toJSON(tmpl, ['degrees']);
      return (obj.degrees || '') + '°';
    },
    hms2deg: function hms2deg(tmpl) {
      //this template should do the conversion too
      var obj = toJSON(tmpl, ['hours', 'minutes', 'seconds']);
      return [obj.hours || 0, obj.minutes || 0, obj.seconds || 0].join(':');
    },
    decdeg: function decdeg(tmpl) {
      //this template should do the conversion too
      var obj = toJSON(tmpl, ['deg', 'min', 'sec', 'hem', 'rnd']);
      return (obj.deg || obj.degrees) + '°';
    },
    //https://en.wikipedia.org/wiki/Template:Sortname
    sortname: function sortname(tmpl) {
      var order = ['first', 'last', 'target', 'sort'];
      var obj = toJSON(tmpl, order);
      var name = "".concat(obj.first || '', " ").concat(obj.last || '');
      name = name.trim();

      if (obj.nolink) {
        return obj.target || name;
      }

      if (obj.dab) {
        name += " (".concat(obj.dab, ")");

        if (obj.target) {
          obj.target += " (".concat(obj.dab, ")");
        }
      }

      if (obj.target) {
        return "[[".concat(obj.target, "|").concat(name, "]]");
      }

      return "[[".concat(name, "]]");
    },
    // https://en.wikipedia.org/wiki/Template:First_word
    'first word': function firstWord(tmpl) {
      var obj = toJSON(tmpl, ['text']);
      var str = obj.text;

      if (obj.sep) {
        return str.split(obj.sep)[0];
      }

      return str.split(' ')[0];
    },
    trunc: function trunc(tmpl) {
      var order = ['str', 'len'];
      var obj = toJSON(tmpl, order);
      return obj.str.substr(0, obj.len);
    },
    'str mid': function strMid(tmpl) {
      var order = ['str', 'start', 'end'];
      var obj = toJSON(tmpl, order);
      var start = parseInt(obj.start, 10) - 1;
      var end = parseInt(obj.end, 10);
      return obj.str.substr(start, end);
    },
    reign: function reign(tmpl) {
      var order = ['start', 'end'];
      var obj = toJSON(tmpl, order);
      return "(r. ".concat(obj.start, " \u2013 ").concat(obj.end, ")");
    },
    circa: function circa(tmpl) {
      var obj = toJSON(tmpl, ['year']);
      return "c.\u2009".concat(obj.year);
    },
    // https://en.wikipedia.org/wiki/Template:Decade_link
    'decade link': function decadeLink(tmpl) {
      var obj = toJSON(tmpl, ['year']);
      return "".concat(obj.year, "|").concat(obj.year, "s");
    },
    // https://en.wikipedia.org/wiki/Template:Decade
    decade: function decade(tmpl) {
      var obj = toJSON(tmpl, ['year']);
      var year = Number(obj.year);
      year = parseInt(year / 10, 10) * 10; // round to decade

      return "".concat(year, "s");
    },
    // https://en.wikipedia.org/wiki/Template:Century
    century: function century(tmpl) {
      var obj = toJSON(tmpl, ['year']);
      var year = Number(obj.year);
      year = parseInt(year / 100, 10) + 1;
      return "".concat(year);
    },
    //https://en.wikipedia.org/wiki/Template:Radic
    radic: function radic(tmpl) {
      var order = ['after', 'before'];
      var obj = toJSON(tmpl, order);
      return "".concat(obj.before || '', "\u221A").concat(obj.after || '');
    },
    'medical cases chart/row': function medicalCasesChartRow(tmpl) {
      // Deprecated template; we keep it.
      return tmpl;
    },
    //https://en.wikipedia.org/wiki/Template:OldStyleDate
    oldstyledate: function oldstyledate(tmpl) {
      var order = ['date', 'year'];
      var obj = toJSON(tmpl, order);
      return obj.year ? obj.date + ' ' + obj.year : obj.date;
    },
    //formatting things - https://en.wikipedia.org/wiki/Template:Nobold
    braces: function braces(tmpl) {
      var obj = toJSON(tmpl, ['text']);
      var attrs = '';

      if (obj.list) {
        attrs = '|' + obj.list.join('|');
      }

      return '{{' + (obj.text || '') + attrs + '}}';
    },
    hlist: function hlist(tmpl) {
      var obj = toJSON(tmpl);
      obj.list = obj.list || [];
      return obj.list.join(' · ');
    },
    pagelist: function pagelist(tmpl) {
      var arr = toJSON(tmpl).list || [];
      return arr.join(', ');
    },
    //actually rendering these links removes the text.
    //https://en.wikipedia.org/wiki/Template:Catlist
    catlist: function catlist(tmpl) {
      var arr = toJSON(tmpl).list || [];
      return arr.join(', ');
    },
    //https://en.wikipedia.org/wiki/Template:Br_separated_entries
    'br separated entries': function brSeparatedEntries(tmpl) {
      var arr = toJSON(tmpl).list || [];
      return arr.join('\n\n');
    },
    'comma separated entries': function commaSeparatedEntries(tmpl) {
      var arr = toJSON(tmpl).list || [];
      return arr.join(', ');
    },
    //https://en.wikipedia.org/wiki/Template:Bare_anchored_list
    'anchored list': function anchoredList(tmpl) {
      var arr = toJSON(tmpl).list || [];
      arr = arr.map(function (str, i) {
        return "".concat(i + 1, ". ").concat(str);
      });
      return arr.join('\n\n');
    },
    'bulleted list': function bulletedList(tmpl) {
      var arr = toJSON(tmpl).list || [];
      arr = arr.filter(function (f) {
        return f;
      });
      arr = arr.map(function (str) {
        return '• ' + str;
      });
      return arr.join('\n\n');
    },
    //a strange, newline-based list - https://en.wikipedia.org/wiki/Template:Plainlist
    plainlist: function plainlist(tmpl) {
      tmpl = _strip(tmpl);
      var arr = tmpl.split('|').slice(1); //remove the title

      arr = arr.join('|').split(/\n ?\* ?/); //split on newline

      arr = arr.filter(function (s) {
        return s;
      });
      return arr.join('\n\n');
    },
    //https://en.wikipedia.org/wiki/Template:Term
    term: function term(tmpl) {
      var obj = toJSON(tmpl, ['term']);
      return "".concat(obj.term, ":");
    },
    linum: function linum(tmpl) {
      var obj = toJSON(tmpl, ['num', 'text']);
      return "".concat(obj.num, ". ").concat(obj.text);
    },
    'block indent': function blockIndent(tmpl) {
      var obj = toJSON(tmpl);

      if (obj['1']) {
        return '\n' + obj['1'] + '\n';
      }

      return '';
    },
    //https://en.wikipedia.org/wiki/Template:Lbs
    lbs: function lbs(tmpl) {
      var obj = toJSON(tmpl, ['text']);
      return "[[".concat(obj.text, " Lifeboat Station|").concat(obj.text, "]]");
    },
    //Foo-class
    lbc: function lbc(tmpl) {
      var obj = toJSON(tmpl, ['text']);
      return "[[".concat(obj.text, "-class lifeboat|").concat(obj.text, "-class]]");
    },
    lbb: function lbb(tmpl) {
      var obj = toJSON(tmpl, ['text']);
      return "[[".concat(obj.text, "-class lifeboat|").concat(obj.text, "]]");
    },
    //https://www.mediawiki.org/wiki/Help:Magic_words#Formatting
    '#dateformat': function dateformat(tmpl) {
      tmpl = tmpl.replace(/:/, '|');
      var obj = toJSON(tmpl, ['date', 'format']);
      return obj.date;
    },
    //https://www.mediawiki.org/wiki/Help:Magic_words#Formatting
    lc: function lc(tmpl) {
      tmpl = tmpl.replace(/:/, '|');
      var obj = toJSON(tmpl, ['text']);
      return (obj.text || '').toLowerCase();
    },
    //https://www.mediawiki.org/wiki/Help:Magic_words#Formatting
    uc: function uc(tmpl) {
      tmpl = tmpl.replace(/:/, '|');
      var obj = toJSON(tmpl, ['text']);
      return (obj.text || '').toUpperCase();
    },
    lcfirst: function lcfirst(tmpl) {
      tmpl = tmpl.replace(/:/, '|');
      var text = toJSON(tmpl, ['text']).text;

      if (!text) {
        return '';
      }

      return text[0].toLowerCase() + text.substr(1);
    },
    ucfirst: function ucfirst(tmpl) {
      tmpl = tmpl.replace(/:/, '|');
      var text = toJSON(tmpl, ['text']).text;

      if (!text) {
        return '';
      }

      return text[0].toUpperCase() + text.substr(1);
    },
    padleft: function padleft(tmpl) {
      tmpl = tmpl.replace(/:/, '|');
      var obj = toJSON(tmpl, ['text', 'num']);
      var text = obj.text || '';
      return text.padStart(obj.num, obj.str || '0');
    },
    padright: function padright(tmpl) {
      tmpl = tmpl.replace(/:/, '|');
      var obj = toJSON(tmpl, ['text', 'num']);
      var text = obj.text || '';
      return text.padEnd(obj.num, obj.str || '0');
    },
    //https://en.wikipedia.org/wiki/Template:Abbrlink
    abbrlink: function abbrlink(tmpl) {
      var obj = toJSON(tmpl, ['abbr', 'page']);

      if (obj.page) {
        return "[[".concat(obj.page, "|").concat(obj.abbr, "]]");
      }

      return "[[".concat(obj.abbr, "]]");
    },
    // https://en.wikipedia.org/wiki/Template:Own
    own: function own(tmpl) {
      var obj = toJSON(tmpl, ['author']);
      var str = 'Own work';

      if (obj.author) {
        str += ' by ' + obj.author;
      }

      return str;
    },
    //https://www.mediawiki.org/wiki/Help:Magic_words#Formatting
    formatnum: function formatnum(tmpl) {
      tmpl = tmpl.replace(/:/, '|');
      var obj = toJSON(tmpl, ['number']);
      var str = obj.number || '';
      str = str.replace(/,/g, '');
      var num = Number(str);
      return num.toLocaleString() || '';
    },
    //https://en.wikipedia.org/wiki/Template:Frac
    frac: function frac(tmpl) {
      var order = ['a', 'b', 'c'];
      var obj = toJSON(tmpl, order);

      if (obj.c) {
        return "".concat(obj.a, " ").concat(obj.b, "/").concat(obj.c);
      }

      if (obj.b) {
        return "".concat(obj.a, "/").concat(obj.b);
      }

      return "1/".concat(obj.b);
    },
    //https://en.wikipedia.org/wiki/Template:Convert#Ranges_of_values
    convert: function convert(tmpl) {
      var order = ['num', 'two', 'three', 'four'];
      var obj = toJSON(tmpl, order); //todo: support plural units

      if (obj.two === '-' || obj.two === 'to' || obj.two === 'and') {
        if (obj.four) {
          return "".concat(obj.num, " ").concat(obj.two, " ").concat(obj.three, " ").concat(obj.four);
        }

        return "".concat(obj.num, " ").concat(obj.two, " ").concat(obj.three);
      }

      return "".concat(obj.num, " ").concat(obj.two);
    },
    // Large number of aliases - https://en.wikipedia.org/wiki/Template:Tl
    tl: function tl(tmpl) {
      var order = ['first', 'second'];
      var obj = toJSON(tmpl, order);
      return obj.second || obj.first;
    },
    //this one's a little different
    won: function won(tmpl) {
      var data = toJSON(tmpl, ['text']);
      return data.place || data.text || _lib$3.titlecase(data.template);
    },
    //a convulated way to make a xml tag - https://en.wikipedia.org/wiki/Template:Tag
    tag: function tag(tmpl) {
      var obj = toJSON(tmpl, ['tag', 'open']);
      var ignore = {
        span: true,
        div: true,
        p: true
      }; //pair, empty, close, single

      if (!obj.open || obj.open === 'pair') {
        //just skip generating spans and things..
        if (ignore[obj.tag]) {
          return obj.content || '';
        }

        return "<".concat(obj.tag, " ").concat(obj.attribs || '', ">").concat(obj.content || '', "</").concat(obj.tag, ">");
      }

      return '';
    },
    //dumb inflector - https://en.wikipedia.org/wiki/Template:Plural
    plural: function plural(tmpl) {
      tmpl = tmpl.replace(/plural:/, 'plural|');
      var order = ['num', 'word'];
      var obj = toJSON(tmpl, order);
      var num = Number(obj.num);
      var word = obj.word;

      if (num !== 1) {
        if (/.y$/.test(word)) {
          word = word.replace(/y$/, 'ies');
        } else {
          word += 's';
        }
      }

      return num + ' ' + word;
    },
    //https://en.wikipedia.org/wiki/Template:DEC
    dec: function dec(tmpl) {
      var obj = toJSON(tmpl, ['degrees', 'minutes', 'seconds']);
      var str = (obj.degrees || 0) + '°';

      if (obj.minutes) {
        str += obj.minutes + "\u2032";
      }

      if (obj.seconds) {
        str += obj.seconds + '″';
      }

      return str;
    },
    //https://en.wikipedia.org/wiki/Template:Val
    val: function val(tmpl) {
      var obj = toJSON(tmpl, ['number', 'uncertainty']);
      var num = obj.number;

      if (num && Number(num)) {
        num = Number(num).toLocaleString();
      }

      var str = num || ''; //prefix/suffix

      if (obj.p) {
        str = obj.p + str;
      }

      if (obj.s) {
        str = obj.s + str;
      } //add units, too


      if (obj.u || obj.ul || obj.upl) {
        str = str + ' ' + (obj.u || obj.ul || obj.upl);
      }

      return str;
    },
    //{{percentage | numerator | denominator | decimals to round to (zero or greater) }}
    percentage: function percentage(tmpl) {
      var obj = toJSON(tmpl, ['numerator', 'denominator', 'decimals']);

      var num = _lib$3.percentage(obj);

      if (num === null) {
        return '';
      }

      return num + '%';
    },
    // {{Percent-done|done=N|total=N|digits=N}}
    'percent-done': function percentDone(tmpl) {
      var obj = toJSON(tmpl, ['done', 'total', 'digits']);

      var num = _lib$3.percentage({
        numerator: obj.done,
        denominator: obj.total,
        decimals: obj.digits
      });

      if (num === null) {
        return '';
      }

      return "".concat(obj.done, " (").concat(num, "%) done");
    }
  };
  var flags = [['🇦🇩', 'and', 'andorra'], ['🇦🇪', 'are', 'united arab emirates'], ['🇦🇫', 'afg', 'afghanistan'], ['🇦🇬', 'atg', 'antigua and barbuda'], ['🇦🇮', 'aia', 'anguilla'], ['🇦🇱', 'alb', 'albania'], ['🇦🇲', 'arm', 'armenia'], ['🇦🇴', 'ago', 'angola'], ['🇦🇶', 'ata', 'antarctica'], ['🇦🇷', 'arg', 'argentina'], ['🇦🇸', 'asm', 'american samoa'], ['🇦🇹', 'aut', 'austria'], ['🇦🇺', 'aus', 'australia'], ['🇦🇼', 'abw', 'aruba'], ['🇦🇽', 'ala', 'åland islands'], ['🇦🇿', 'aze', 'azerbaijan'], ['🇧🇦', 'bih', 'bosnia and herzegovina'], ['🇧🇧', 'brb', 'barbados'], ['🇧🇩', 'bgd', 'bangladesh'], ['🇧🇪', 'bel', 'belgium'], ['🇧🇫', 'bfa', 'burkina faso'], ['🇧🇬', 'bgr', 'bulgaria'], ['🇧🇬', 'bul', 'bulgaria'], //dupe
  ['🇧🇭', 'bhr', 'bahrain'], ['🇧🇮', 'bdi', 'burundi'], ['🇧🇯', 'ben', 'benin'], ['🇧🇱', 'blm', 'saint barthélemy'], ['🇧🇲', 'bmu', 'bermuda'], ['🇧🇳', 'brn', 'brunei darussalam'], ['🇧🇴', 'bol', 'bolivia'], ['🇧🇶', 'bes', 'bonaire, sint eustatius and saba'], ['🇧🇷', 'bra', 'brazil'], ['🇧🇸', 'bhs', 'bahamas'], ['🇧🇹', 'btn', 'bhutan'], ['🇧🇻', 'bvt', 'bouvet island'], ['🇧🇼', 'bwa', 'botswana'], ['🇧🇾', 'blr', 'belarus'], ['🇧🇿', 'blz', 'belize'], ['🇨🇦', 'can', 'canada'], ['🇨🇨', 'cck', 'cocos (keeling) islands'], ['🇨🇩', 'cod', 'congo'], ['🇨🇫', 'caf', 'central african republic'], ['🇨🇬', 'cog', 'congo'], ['🇨🇭', 'che', 'switzerland'], ['🇨🇮', 'civ', 'côte d\'ivoire'], ['🇨🇰', 'cok', 'cook islands'], ['🇨🇱', 'chl', 'chile'], ['🇨🇲', 'cmr', 'cameroon'], ['🇨🇳', 'chn', 'china'], ['🇨🇴', 'col', 'colombia'], ['🇨🇷', 'cri', 'costa rica'], ['🇨🇺', 'cub', 'cuba'], ['🇨🇻', 'cpv', 'cape verde'], ['🇨🇼', 'cuw', 'curaçao'], ['🇨🇽', 'cxr', 'christmas island'], ['🇨🇾', 'cyp', 'cyprus'], ['🇨🇿', 'cze', 'czech republic'], ['🇩🇪', 'deu', 'germany'], ['🇩🇪', 'ger', 'germany'], //alias
  ['🇩🇯', 'dji', 'djibouti'], ['🇩🇰', 'dnk', 'denmark'], ['🇩🇲', 'dma', 'dominica'], ['🇩🇴', 'dom', 'dominican republic'], ['🇩🇿', 'dza', 'algeria'], ['🇪🇨', 'ecu', 'ecuador'], ['🇪🇪', 'est', 'estonia'], ['🇪🇬', 'egy', 'egypt'], ['🇪🇭', 'esh', 'western sahara'], ['🇪🇷', 'eri', 'eritrea'], ['🇪🇸', 'esp', 'spain'], ['🇪🇹', 'eth', 'ethiopia'], ['🇫🇮', 'fin', 'finland'], ['🇫🇯', 'fji', 'fiji'], ['🇫🇰', 'flk', 'falkland islands (malvinas)'], ['🇫🇲', 'fsm', 'micronesia'], ['🇫🇴', 'fro', 'faroe islands'], ['🇫🇷', 'fra', 'france'], ['🇬🇦', 'gab', 'gabon'], ['🇬🇧', 'gbr', 'united kingdom'], ['🇬🇩', 'grd', 'grenada'], //['🇬🇪', 'geo', 'georgia'],
  ['🇬🇫', 'guf', 'french guiana'], ['🇬🇬', 'ggy', 'guernsey'], ['🇬🇭', 'gha', 'ghana'], ['🇬🇮', 'gib', 'gibraltar'], ['🇬🇱', 'grl', 'greenland'], ['🇬🇲', 'gmb', 'gambia'], ['🇬🇳', 'gin', 'guinea'], ['🇬🇵', 'glp', 'guadeloupe'], ['🇬🇶', 'gnq', 'equatorial guinea'], ['🇬🇷', 'grc', 'greece'], ['🇬🇸', 'sgs', 'south georgia'], ['🇬🇹', 'gtm', 'guatemala'], ['🇬🇺', 'gum', 'guam'], ['🇬🇼', 'gnb', 'guinea-bissau'], ['🇬🇾', 'guy', 'guyana'], ['🇭🇰', 'hkg', 'hong kong'], ['🇭🇲', 'hmd', 'heard island and mcdonald islands'], ['🇭🇳', 'hnd', 'honduras'], ['🇭🇷', 'hrv', 'croatia'], ['🇭🇹', 'hti', 'haiti'], ['🇭🇺', 'hun', 'hungary'], ['🇮🇩', 'idn', 'indonesia'], ['🇮🇪', 'irl', 'ireland'], ['🇮🇱', 'isr', 'israel'], ['🇮🇲', 'imn', 'isle of man'], ['🇮🇳', 'ind', 'india'], ['🇮🇴', 'iot', 'british indian ocean territory'], ['🇮🇶', 'irq', 'iraq'], ['🇮🇷', 'irn', 'iran'], ['🇮🇸', 'isl', 'iceland'], ['🇮🇹', 'ita', 'italy'], ['🇯🇪', 'jey', 'jersey'], ['🇯🇲', 'jam', 'jamaica'], ['🇯🇴', 'jor', 'jordan'], ['🇯🇵', 'jpn', 'japan'], ['🇰🇪', 'ken', 'kenya'], ['🇰🇬', 'kgz', 'kyrgyzstan'], ['🇰🇭', 'khm', 'cambodia'], ['🇰🇮', 'kir', 'kiribati'], ['🇰🇲', 'com', 'comoros'], ['🇰🇳', 'kna', 'saint kitts and nevis'], ['🇰🇵', 'prk', 'north korea'], ['🇰🇷', 'kor', 'south korea'], ['🇰🇼', 'kwt', 'kuwait'], ['🇰🇾', 'cym', 'cayman islands'], ['🇰🇿', 'kaz', 'kazakhstan'], ['🇱🇦', 'lao', 'lao people\'s democratic republic'], ['🇱🇧', 'lbn', 'lebanon'], ['🇱🇨', 'lca', 'saint lucia'], ['🇱🇮', 'lie', 'liechtenstein'], ['🇱🇰', 'lka', 'sri lanka'], ['🇱🇷', 'lbr', 'liberia'], ['🇱🇸', 'lso', 'lesotho'], ['🇱🇹', 'ltu', 'lithuania'], ['🇱🇺', 'lux', 'luxembourg'], ['🇱🇻', 'lva', 'latvia'], ['🇱🇾', 'lby', 'libya'], ['🇲🇦', 'mar', 'morocco'], ['🇲🇨', 'mco', 'monaco'], ['🇲🇩', 'mda', 'moldova'], ['🇲🇪', 'mne', 'montenegro'], ['🇲🇫', 'maf', 'saint martin (french part)'], ['🇲🇬', 'mdg', 'madagascar'], ['🇲🇭', 'mhl', 'marshall islands'], ['🇲🇰', 'mkd', 'macedonia'], ['🇲🇱', 'mli', 'mali'], ['🇲🇲', 'mmr', 'myanmar'], ['🇲🇳', 'mng', 'mongolia'], ['🇲🇴', 'mac', 'macao'], ['🇲🇵', 'mnp', 'northern mariana islands'], ['🇲🇶', 'mtq', 'martinique'], ['🇲🇷', 'mrt', 'mauritania'], ['🇲🇸', 'msr', 'montserrat'], ['🇲🇹', 'mlt', 'malta'], ['🇲🇺', 'mus', 'mauritius'], ['🇲🇻', 'mdv', 'maldives'], ['🇲🇼', 'mwi', 'malawi'], ['🇲🇽', 'mex', 'mexico'], ['🇲🇾', 'mys', 'malaysia'], ['🇲🇿', 'moz', 'mozambique'], ['🇳🇦', 'nam', 'namibia'], ['🇳🇨', 'ncl', 'new caledonia'], ['🇳🇪', 'ner', 'niger'], ['🇳🇫', 'nfk', 'norfolk island'], ['🇳🇬', 'nga', 'nigeria'], ['🇳🇮', 'nic', 'nicaragua'], ['🇳🇱', 'nld', 'netherlands'], ['🇳🇴', 'nor', 'norway'], ['🇳🇵', 'npl', 'nepal'], ['🇳🇷', 'nru', 'nauru'], ['🇳🇺', 'niu', 'niue'], ['🇳🇿', 'nzl', 'new zealand'], ['🇴🇲', 'omn', 'oman'], ['🇵🇦', 'pan', 'panama'], ['🇵🇪', 'per', 'peru'], ['🇵🇫', 'pyf', 'french polynesia'], ['🇵🇬', 'png', 'papua new guinea'], ['🇵🇭', 'phl', 'philippines'], ['🇵🇰', 'pak', 'pakistan'], ['🇵🇱', 'pol', 'poland'], ['🇵🇲', 'spm', 'saint pierre and miquelon'], ['🇵🇳', 'pcn', 'pitcairn'], ['🇵🇷', 'pri', 'puerto rico'], ['🇵🇸', 'pse', 'palestinian territory'], ['🇵🇹', 'prt', 'portugal'], ['🇵🇼', 'plw', 'palau'], ['🇵🇾', 'pry', 'paraguay'], ['🇶🇦', 'qat', 'qatar'], ['🇷🇪', 'reu', 'réunion'], ['🇷🇴', 'rou', 'romania'], ['🇷🇸', 'srb', 'serbia'], ['🇷🇺', 'rus', 'russia'], ['🇷🇼', 'rwa', 'rwanda'], ['🇸🇦', 'sau', 'saudi arabia'], ['🇸🇧', 'slb', 'solomon islands'], ['🇸🇨', 'syc', 'seychelles'], ['🇸🇩', 'sdn', 'sudan'], ['🇸🇪', 'swe', 'sweden'], ['🇸🇬', 'sgp', 'singapore'], ['🇸🇭', 'shn', 'saint helena, ascension and tristan da cunha'], ['🇸🇮', 'svn', 'slovenia'], ['🇸🇯', 'sjm', 'svalbard and jan mayen'], ['🇸🇰', 'svk', 'slovakia'], ['🇸🇱', 'sle', 'sierra leone'], ['🇸🇲', 'smr', 'san marino'], ['🇸🇳', 'sen', 'senegal'], ['🇸🇴', 'som', 'somalia'], ['🇸🇷', 'sur', 'suriname'], ['🇸🇸', 'ssd', 'south sudan'], ['🇸🇹', 'stp', 'sao tome and principe'], ['🇸🇻', 'slv', 'el salvador'], ['🇸🇽', 'sxm', 'sint maarten (dutch part)'], ['🇸🇾', 'syr', 'syrian arab republic'], ['🇸🇿', 'swz', 'swaziland'], ['🇹🇨', 'tca', 'turks and caicos islands'], ['🇹🇩', 'tcd', 'chad'], ['🇹🇫', 'atf', 'french southern territories'], ['🇹🇬', 'tgo', 'togo'], ['🇹🇭', 'tha', 'thailand'], ['🇹🇯', 'tjk', 'tajikistan'], ['🇹🇰', 'tkl', 'tokelau'], ['🇹🇱', 'tls', 'timor-leste'], ['🇹🇲', 'tkm', 'turkmenistan'], ['🇹🇳', 'tun', 'tunisia'], ['🇹🇴', 'ton', 'tonga'], ['🇹🇷', 'tur', 'turkey'], ['🇹🇹', 'tto', 'trinidad and tobago'], ['🇹🇻', 'tuv', 'tuvalu'], ['🇹🇼', 'twn', 'taiwan'], ['🇹🇿', 'tza', 'tanzania'], ['🇺🇦', 'ukr', 'ukraine'], ['🇺🇬', 'uga', 'uganda'], ['🇺🇲', 'umi', 'united states minor outlying islands'], ['🇺🇸', 'us', 'united states'], //alias
  ['🇺🇸', 'usa', 'united states'], ['🇺🇾', 'ury', 'uruguay'], ['🇺🇿', 'uzb', 'uzbekistan'], ['🇻🇦', 'vat', 'vatican city'], ['🇻🇨', 'vct', 'saint vincent and the grenadines'], ['🇻🇪', 'ven', 'venezuela'], ['🇻🇬', 'vgb', 'virgin islands, british'], ['🇻🇮', 'vir', 'virgin islands, u.s.'], ['🇻🇳', 'vnm', 'viet nam'], ['🇻🇺', 'vut', 'vanuatu'], ['🇼🇫', 'wlf', 'wallis and futuna'], ['🇼🇸', 'wsm', 'samoa'], ['🇾🇪', 'yem', 'yemen'], ['🇾🇹', 'myt', 'mayotte'], ['🇿🇦', 'zaf', 'south africa'], ['🇿🇲', 'zmb', 'zambia'], ['🇿🇼 ', 'zwe', 'zimbabwe'], //others (later unicode versions)
  ['🇺🇳', 'un', 'united nations'], ['🏴󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿', 'eng', 'england'], ['🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'sct', 'scotland'], ['🏴󠁧󠁢󠁷󠁬󠁳󠁿', 'wal', 'wales'], ['🇪🇺', 'eu', 'european union']];
  var templates$8 = {
    //https://en.wikipedia.org/wiki/Template:Flag
    // {{flag|USA}} →  USA
    flag: function flag(tmpl) {
      var order = ['flag', 'variant'];
      var obj = toJSON(tmpl, order);
      var name = obj.flag || '';
      obj.flag = (obj.flag || '').toLowerCase();
      var found = flags.find(function (a) {
        return obj.flag === a[1] || obj.flag === a[2];
      }) || [];
      var flag = found[0] || '';
      return "".concat(flag, " [[").concat(found[2], "|").concat(name, "]]");
    },
    // {{flagcountry|USA}} →  United States
    flagcountry: function flagcountry(tmpl) {
      var order = ['flag', 'variant'];
      var obj = toJSON(tmpl, order);
      obj.flag = (obj.flag || '').toLowerCase();
      var found = flags.find(function (a) {
        return obj.flag === a[1] || obj.flag === a[2];
      }) || [];
      var flag = found[0] || '';
      return "".concat(flag, " [[").concat(found[2], "]]");
    },
    // (unlinked flag-country)
    flagcu: function flagcu(tmpl) {
      var order = ['flag', 'variant'];
      var obj = toJSON(tmpl, order);
      obj.flag = (obj.flag || '').toLowerCase();
      var found = flags.find(function (a) {
        return obj.flag === a[1] || obj.flag === a[2];
      }) || [];
      var flag = found[0] || '';
      return "".concat(flag, " ").concat(found[2]);
    },
    //https://en.wikipedia.org/wiki/Template:Flagicon
    // {{flagicon|USA}} → United States
    flagicon: function flagicon(tmpl) {
      var order = ['flag', 'variant'];
      var obj = toJSON(tmpl, order);
      obj.flag = (obj.flag || '').toLowerCase();
      var found = flags.find(function (a) {
        return obj.flag === a[1] || obj.flag === a[2];
      });

      if (!found) {
        return '';
      }

      return "[[".concat(found[2], "|").concat(found[0], "]]");
    },
    //unlinked flagicon
    flagdeco: function flagdeco(tmpl) {
      var order = ['flag', 'variant'];
      var obj = toJSON(tmpl, order);
      obj.flag = (obj.flag || '').toLowerCase();
      var found = flags.find(function (a) {
        return obj.flag === a[1] || obj.flag === a[2];
      }) || [];
      return found[0] || '';
    },
    //same, but a soccer team
    fb: function fb(tmpl) {
      var order = ['flag', 'variant'];
      var obj = toJSON(tmpl, order);
      obj.flag = (obj.flag || '').toLowerCase();
      var found = flags.find(function (a) {
        return obj.flag === a[1] || obj.flag === a[2];
      });

      if (!found) {
        return '';
      }

      return "".concat(found[0], " [[").concat(found[2], " national football team|").concat(found[2], "]]");
    },
    fbicon: function fbicon(tmpl) {
      var order = ['flag', 'variant'];
      var obj = toJSON(tmpl, order);
      obj.flag = (obj.flag || '').toLowerCase();
      var found = flags.find(function (a) {
        return obj.flag === a[1] || obj.flag === a[2];
      });

      if (!found) {
        return '';
      }

      return " [[".concat(found[2], " national football team|").concat(found[0], "]]");
    },
    flagathlete: function flagathlete(tmpl) {
      var order = ['name', 'flag', 'variant'];
      var obj = toJSON(tmpl, order);
      obj.flag = (obj.flag || '').toLowerCase();
      var found = flags.find(function (a) {
        return obj.flag === a[1] || obj.flag === a[2];
      });

      if (!found) {
        return "[[".concat(obj.name || '', "]]");
      }

      return "".concat(found[0], " [[").concat(obj.name || '', "]] (").concat(found[1].toUpperCase(), ")");
    }
  }; //support {{can}}

  flags.forEach(function (a) {
    templates$8[a[1]] = function () {
      return a[0];
    };
  });
  var flags_1 = templates$8;
  var titlecase = _lib$3.titlecase; //https://en.wikipedia.org/wiki/Template:Yes

  var templates$7 = {};
  var cells = ['rh', 'rh2', 'yes', 'no', 'maybe', 'eliminated', 'lost', 'safe', 'active', 'site active', 'coming soon', 'good', 'won', 'nom', 'sho', 'longlisted', 'tba', 'success', 'operational', 'failure', 'partial', 'regional', 'maybecheck', 'partial success', 'partial failure', 'okay', 'yes-no', 'some', 'nonpartisan', 'pending', 'unofficial', 'unofficial2', 'usually', 'rarely', 'sometimes', 'any', 'varies', 'black', 'non-album single', 'unreleased', 'unknown', 'perhaps', 'depends', 'included', 'dropped', 'terminated', 'beta', 'table-experimental', 'free', 'proprietary', 'nonfree', 'needs', 'nightly', 'release-candidate', 'planned', 'scheduled', 'incorrect', 'no result', 'cmain', 'calso starring', 'crecurring', 'cguest', 'not yet', 'optional'];
  cells.forEach(function (str) {
    templates$7[str] = function (tmpl) {
      var data = toJSON(tmpl, ['text']);
      return data.text || titlecase(data.template);
    };
  }); //these ones have a text result

  var moreCells = [['active fire', 'Active'], ['site active', 'Active'], ['site inactive', 'Inactive'], ['yes2', ''], ['no2', ''], ['ya', '✅'], ['na', '❌'], ['nom', 'Nominated'], ['sho', 'Shortlisted'], ['tba', 'TBA'], ['maybecheck', '✔️'], ['okay', 'Neutral'], ['n/a', 'N/A'], ['sdash', '—'], ['dunno', '?'], ['draw', ''], ['cnone', ''], ['nocontest', '']];
  moreCells.forEach(function (a) {
    templates$7[a[0]] = function (tmpl) {
      var data = toJSON(tmpl, ['text']);
      return data.text || a[1];
    };
  });
  var tableCell = templates$7;
  var textOnly = Object.assign({}, hardcoded, shorthand$1, functions$2, flags_1, tableCell);
  var templates$6 = {}; // these all have ['id', 'name']

  var idName = ['goodreads author', 'twitter', 'facebook', 'instagram', 'tumblr', 'pinterest', 'espn nfl', 'espn nhl', 'espn fc', 'hockeydb', 'fifa player', 'worldcat', 'worldcat id', 'nfl player', 'ted speaker', 'playmate'];
  idName.forEach(function (name) {
    templates$6[name] = ['id', 'name'];
  });
  var idName_1 = templates$6;
  var templates$5 = {}; // these all have ['id', 'title', 'description', 'section']

  var idTitle = ['imdb title', //https://en.wikipedia.org/wiki/Template:IMDb_title
  'imdb name', 'imdb episode', 'imdb event', 'afi film', 'allmovie title', 'allgame', 'tcmdb title', 'discogs artist', 'discogs label', 'discogs release', 'discogs master', 'librivox author', 'musicbrainz artist', 'musicbrainz label', 'musicbrainz recording', 'musicbrainz release', 'musicbrainz work', 'youtube', 'goodreads book', 'dmoz' //https://en.wikipedia.org/wiki/Template:DMOZ
  ];
  idTitle.forEach(function (name) {
    templates$5[name] = ['id', 'title', 'description', 'section'];
  });
  var idTitle_1 = templates$5;
  var functions$1 = {
    // https://en.wikipedia.org/wiki/Template:IPA
    ipa: function ipa(tmpl, list) {
      var obj = toJSON(tmpl, ['transcription', 'lang', 'audio']);
      obj.lang = _lib$3.getLang(obj.template);
      obj.template = 'ipa';
      list.push(obj);
      return '';
    },
    //https://en.wikipedia.org/wiki/Template:IPAc-en
    ipac: function ipac(tmpl, list) {
      var obj = toJSON(tmpl);
      obj.transcription = (obj.list || []).join(',');
      delete obj.list;
      obj.lang = _lib$3.getLang(obj.template);
      obj.template = 'ipac';
      list.push(obj);
      return '';
    },
    quote: function quote(tmpl, list) {
      var order = ['text', 'author'];
      var obj = toJSON(tmpl, order);
      list.push(obj); //create plaintext version

      if (obj.text) {
        var str = "\"".concat(obj.text, "\"");

        if (obj.author) {
          str += '\n\n';
          str += "    - ".concat(obj.author);
        }

        return str + '\n';
      }

      return '';
    },
    //this one sucks - https://en.wikipedia.org/wiki/Template:GNIS
    'cite gnis': function citeGnis(tmpl, list) {
      var order = ['id', 'name', 'type'];
      var obj = toJSON(tmpl, order);
      obj.type = 'gnis';
      obj.template = 'citation';
      list.push(obj);
      return '';
    },
    'spoken wikipedia': function spokenWikipedia(tmpl, list) {
      var order = ['file', 'date'];
      var obj = toJSON(tmpl, order);
      obj.template = 'audio';
      list.push(obj);
      return '';
    },
    //yellow card
    yel: function yel(tmpl, list) {
      var obj = toJSON(tmpl, ['min']);
      list.push(obj);

      if (obj.min) {
        return "yellow: ".concat(obj.min || '', "'"); //no yellow-card emoji
      }

      return '';
    },
    subon: function subon(tmpl, list) {
      var obj = toJSON(tmpl, ['min']);
      list.push(obj);

      if (obj.min) {
        return "sub on: ".concat(obj.min || '', "'"); //no yellow-card emoji
      }

      return '';
    },
    suboff: function suboff(tmpl, list) {
      var obj = toJSON(tmpl, ['min']);
      list.push(obj);

      if (obj.min) {
        return "sub off: ".concat(obj.min || '', "'"); //no yellow-card emoji
      }

      return '';
    },
    //https://en.wikipedia.org/wiki/Template:Sfn
    sfn: function sfn(tmpl, list, parser, alias) {
      var order = ['author', 'year', 'location'];
      var obj = toJSON(tmpl, order);

      if (alias) {
        obj.name = obj.template;
        obj.teplate = alias;
      }

      list.push(obj);
      return '';
    },
    //https://en.wikipedia.org/wiki/Template:Redirect
    redirect: function redirect(tmpl, list) {
      var data = toJSON(tmpl, ['redirect']);
      var lines = data.list || [];
      var links = [];

      for (var i = 0; i < lines.length; i += 2) {
        links.push({
          page: lines[i + 1],
          desc: lines[i]
        });
      }

      var obj = {
        template: 'redirect',
        redirect: data.redirect,
        links: links
      };
      list.push(obj);
      return '';
    },
    //https://en.wikipedia.org/wiki/Template:Sister_project_links
    'sister project links': function sisterProjectLinks(tmpl, list) {
      var data = toJSON(tmpl); //rename 'wd' to 'wikidata'

      var links = {};
      Object.keys(_lib$3.sisterProjects).forEach(function (k) {
        if (data.hasOwnProperty(k) === true) {
          links[_lib$3.sisterProjects[k]] = data[k]; //.text();
        }
      });
      var obj = {
        template: 'sister project links',
        links: links
      };
      list.push(obj);
      return '';
    },
    //https://en.wikipedia.org/wiki/Template:Subject_bar
    'subject bar': function subjectBar(tmpl, list) {
      var data = toJSON(tmpl);
      Object.keys(data).forEach(function (k) {
        //rename 'voy' to 'wikivoyage'
        if (_lib$3.sisterProjects.hasOwnProperty(k)) {
          data[_lib$3.sisterProjects[k]] = data[k];
          delete data[k];
        }
      });
      var obj = {
        template: 'subject bar',
        links: data
      };
      list.push(obj);
      return '';
    },
    //amazingly, this one does not obey any known patterns
    //https://en.wikipedia.org/wiki/Template:Gallery
    gallery: function gallery(tmpl, list) {
      var obj = toJSON(tmpl);
      var images = (obj.list || []).filter(function (line) {
        return /^ *File ?:/.test(line);
      });
      images = images.map(function (file) {
        var img = {
          file: file
        }; // todo: add lang and domain information

        return new Image_1(img).json();
      });
      obj = {
        template: 'gallery',
        images: images
      };
      list.push(obj);
      return '';
    },
    //https://en.wikipedia.org/wiki/Template:Sky
    sky: function sky(tmpl, list) {
      var obj = toJSON(tmpl, ['asc_hours', 'asc_minutes', 'asc_seconds', 'dec_sign', 'dec_degrees', 'dec_minutes', 'dec_seconds', 'distance']);
      var template = {
        template: 'sky',
        ascension: {
          hours: obj.asc_hours,
          minutes: obj.asc_minutes,
          seconds: obj.asc_seconds
        },
        declination: {
          sign: obj.dec_sign,
          degrees: obj.dec_degrees,
          minutes: obj.dec_minutes,
          seconds: obj.dec_seconds
        },
        distance: obj.distance
      };
      list.push(template);
      return '';
    },
    // Parse https://en.wikipedia.org/wiki/Template:Medical_cases_chart -- see
    // https://en.wikipedia.org/wiki/Module:Medical_cases_chart for the original
    // parsing code.
    'medical cases chart': function medicalCasesChart(tmpl, list) {
      var order = ['date', 'deathsExpr', 'recoveriesExpr', 'casesExpr', '4thExpr', '5thExpr', 'col1', 'col1Change', 'col2', 'col2Change'];
      var obj = toJSON(tmpl);
      obj.data = obj.data || '';
      var rows = obj.data.split('\n'); // Mimic row parsing in _buildBars in the Lua source, from the following
      // line on:
      //
      //     for parameter in mw.text.gsplit(line, ';') do

      var dataArray = rows.map(function (row) {
        var parameters = row.split(';');
        var rowObject = {
          options: new Map()
        };
        var positionalIndex = 0;

        for (var i = 0; i < parameters.length; i++) {
          var parameter = parameters[i].trim();

          if (parameter.match(/^[a-zA-Z_]/)) {
            // Named argument
            var _parameter$split = parameter.split('='),
                _parameter$split2 = _slicedToArray(_parameter$split, 2),
                key = _parameter$split2[0],
                value = _parameter$split2[1]; // At this point, the Lua code evaluates alttot1 and alttot2 values as
            // #expr expressions, but we just pass them through. See also:
            // https://www.mediawiki.org/wiki/Help:Extension:ParserFunctions##expr


            if (value === undefined) {
              value = null;
            }

            rowObject.options.set(key, value);
          } else {
            // Positional argument
            // Here again, the Lua code evaluates arguments at index 1 through 5
            // as #expr expressions, but we just pass them through.
            if (positionalIndex < order.length) {
              rowObject[order[positionalIndex]] = parameter;
            }

            positionalIndex++;
          }
        }

        for (; positionalIndex < order.length; positionalIndex++) {
          rowObject[order[positionalIndex]] = null;
        }

        return rowObject;
      });
      obj.data = dataArray;
      list.push(obj);
      return '';
    },
    graph: function graph(tmpl, list) {
      var data = toJSON(tmpl);

      if (data.x) {
        data.x = data.x.split(',').map(function (str) {
          return str.trim();
        });
      }

      if (data.y) {
        data.y = data.y.split(',').map(function (str) {
          return str.trim();
        });
      }

      var y = 1;

      while (data['y' + y]) {
        data['y' + y] = data['y' + y].split(',').map(function (str) {
          return str.trim();
        });
        y += 1;
      }

      list.push(data);
      return '';
    },
    //https://en.wikipedia.org/wiki/Template:Historical_populations
    'historical populations': function historicalPopulations(tmpl, list) {
      var data = toJSON(tmpl);
      data.list = data.list || [];
      var years = [];

      for (var i = 0; i < data.list.length; i += 2) {
        var num = data.list[i + 1];
        years.push({
          year: data.list[i],
          val: Number(num) || num
        });
      }

      data.data = years;
      delete data.list;
      list.push(data);
      return '';
    },
    // this one is a handful!
    //https://en.wikipedia.org/wiki/Template:Weather_box
    'weather box': function weatherBox(tmpl, list) {
      var hasMonth = /^jan /i;
      var isYear = /^year /i;
      var obj = toJSON(tmpl);
      var monthList = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
      var byMonth = {};
      var properties = Object.keys(obj).filter(function (k) {
        return hasMonth.test(k);
      });
      properties = properties.map(function (k) {
        return k.replace(hasMonth, '');
      });
      properties.forEach(function (prop) {
        byMonth[prop] = [];
        monthList.forEach(function (m) {
          var key = "".concat(m, " ").concat(prop);

          if (obj.hasOwnProperty(key)) {
            var num = _lib$3.toNumber(obj[key]);

            delete obj[key];
            byMonth[prop].push(num);
          }
        });
      }); //add these to original

      obj.byMonth = byMonth; //collect year-based data

      var byYear = {};
      Object.keys(obj).forEach(function (k) {
        if (isYear.test(k)) {
          var prop = k.replace(isYear, '');
          byYear[prop] = obj[k];
          delete obj[k];
        }
      });
      obj.byYear = byYear;
      list.push(obj);
      return '';
    },
    //The 36 parameters are: 12 monthly highs (C), 12 lows (total 24) plus an optional 12 monthly rain/precipitation
    //https://en.wikipedia.org/wiki/Template:Weather_box/concise_C
    'weather box/concise c': function weatherBoxConciseC(tmpl, list) {
      var obj = toJSON(tmpl);
      obj.list = obj.list.map(function (s) {
        return _lib$3.toNumber(s);
      });
      obj.byMonth = {
        'high c': obj.list.slice(0, 12),
        'low c': obj.list.slice(12, 24),
        'rain mm': obj.list.slice(24, 36)
      };
      delete obj.list;
      obj.template = 'weather box';
      list.push(obj);
      return '';
    },
    'weather box/concise f': function weatherBoxConciseF(tmpl, list) {
      var obj = toJSON(tmpl);
      obj.list = obj.list.map(function (s) {
        return _lib$3.toNumber(s);
      });
      obj.byMonth = {
        'high f': obj.list.slice(0, 12),
        'low f': obj.list.slice(12, 24),
        'rain inch': obj.list.slice(24, 36)
      };
      delete obj.list;
      obj.template = 'weather box';
      list.push(obj);
      return '';
    },
    //https://en.wikipedia.org/wiki/Template:Climate_chart
    'climate chart': function climateChart(tmpl, list) {
      var lines = toJSON(tmpl).list || [];
      var title = lines[0];
      var source = lines[38];
      lines = lines.slice(1); //amazingly, they use '−' symbol here instead of negatives...

      lines = lines.map(function (str) {
        if (str && str[0] === '−') {
          str = str.replace(/−/, '-');
        }

        return str;
      });
      var months = []; //groups of three, for 12 months

      for (var i = 0; i < 36; i += 3) {
        months.push({
          low: _lib$3.toNumber(lines[i]),
          high: _lib$3.toNumber(lines[i + 1]),
          precip: _lib$3.toNumber(lines[i + 2])
        });
      }

      var obj = {
        template: 'climate chart',
        data: {
          title: title,
          source: source,
          months: months
        }
      };
      list.push(obj);
      return '';
    }
  };
  var templates$4 = {
    //https://en.wikipedia.org/wiki/Category:External_link_templates
    'find a grave': ['id', 'name', 'work', 'last', 'first', 'date', 'accessdate'],
    congbio: ['id', 'name', 'date'],
    'hollywood walk of fame': ['name'],
    'wide image': ['file', 'width', 'caption'],
    audio: ['file', 'text', 'type'],
    rp: ['page'],
    'short description': ['description'],
    'coord missing': ['region'],
    unreferenced: ['date'],
    'taxon info': ['taxon', 'item'],
    //https://en.wikipedia.org/wiki/Template:Taxon_info
    'portuguese name': ['first', 'second', 'suffix'],
    // https://en.wikipedia.org/wiki/Template:Portuguese_name
    geo: ['lat', 'lon', 'zoom'] //https://en.wikivoyage.org/wiki/Template:Geo

  };
  templates$4 = Object.assign(templates$4, idName_1, idTitle_1, functions$1);
  var dataOnly = templates$4;
  var shorthand = {
    mlbplayer: {
      props: ['number', 'name', 'il'],
      out: 'name'
    },
    syntaxhighlight: {
      props: [],
      out: 'code'
    },
    samp: {
      props: ['1'],
      out: '1'
    },
    //https://en.wikipedia.org/wiki/Template:Sub
    sub: {
      props: ['text'],
      out: 'text'
    },
    //https://en.wikipedia.org/wiki/Template:Sup
    sup: {
      props: ['text'],
      out: 'text'
    },
    //https://en.wikipedia.org/wiki/Template:Chem2
    chem2: {
      props: ['equation'],
      out: 'equation'
    },
    //https://en.wikipedia.org/wiki/Template:Interlanguage_link
    ill: {
      props: ['text', 'lan1', 'text1', 'lan2', 'text2'],
      out: 'text'
    },
    //https://en.wikipedia.org/wiki/Template:Abbr
    abbr: {
      props: ['abbr', 'meaning', 'ipa'],
      out: 'abbr'
    } // name: {
    //   props: [],
    //   out: '',
    // },

  };
  var templates$3 = {
    // https://en.wikipedia.org/wiki/Template:Math
    math: function math(tmpl, list) {
      var obj = toJSON(tmpl, ['formula']);
      list.push(obj);
      return '\n\n' + (obj.formula || '') + '\n\n';
    },
    isbn: function isbn(tmpl, list) {
      var order = ['id', 'id2', 'id3'];
      var obj = toJSON(tmpl, order);
      list.push(obj);
      return 'ISBN: ' + (obj.id || '');
    },
    //https://en.wikipedia.org/wiki/Template:Based_on
    'based on': function basedOn(tmpl, list) {
      var obj = toJSON(tmpl, ['title', 'author']);
      list.push(obj);
      return "".concat(obj.title, " by ").concat(obj.author || '');
    },
    //barrels of oil https://en.wikipedia.org/wiki/Template:Bbl_to_t
    'bbl to t': function bblToT(tmpl, list) {
      var obj = toJSON(tmpl, ['barrels']);
      list.push(obj);

      if (obj.barrels === '0') {
        return obj.barrels + ' barrel';
      }

      return obj.barrels + ' barrels';
    },
    //minor planet - https://en.wikipedia.org/wiki/Template:MPC
    mpc: function mpc(tmpl, list) {
      var obj = toJSON(tmpl, ['number', 'text']);
      list.push(obj);
      return "[https://minorplanetcenter.net/db_search/show_object?object_id=P/2011+NO1 ".concat(obj.text || obj.number, "]");
    },
    pengoal: function pengoal(tmpl, list) {
      list.push({
        template: 'pengoal'
      });
      return '✅';
    },
    penmiss: function penmiss(tmpl, list) {
      list.push({
        template: 'penmiss'
      });
      return '❌';
    },
    // https://en.wikipedia.org/wiki/Template:Ordered_list
    'ordered list': function orderedList(tmpl, list) {
      var obj = toJSON(tmpl);
      list.push(obj);
      obj.list = obj.list || [];
      var lines = obj.list.map(function (str, i) {
        return "".concat(i + 1, ". ").concat(str);
      });
      return lines.join('\n\n');
    },
    // https://en.wikipedia.org/wiki/Template:Title_year
    'title year': function titleYear(tmpl, _list, _alias, _parse, doc) {
      var obj = toJSON(tmpl, ['match', 'nomatch', 'page']);
      var title = obj.page || doc.title();

      if (title) {
        var m = title.match(/\b[0-9]{4}\b/); //parse the year out of the title's name

        if (m) {
          return m[0];
        }
      }

      return obj.nomatch || ''; //use default response
    },
    // https://en.wikipedia.org/wiki/Template:Title_century
    'title century': function titleCentury(tmpl, _list, _alias, _parse, doc) {
      var obj = toJSON(tmpl, ['match', 'nomatch', 'page']);
      var title = obj.page || doc.title();

      if (title) {
        var m = title.match(/\b([0-9]+)(st|nd|rd|th)\b/); //parse the century out of the title's name

        if (m) {
          return m[1] || '';
        }
      }

      return obj.nomatch || ''; //use default response
    },
    // https://en.wikipedia.org/wiki/Template:Title_decade
    'title decade': function titleDecade(tmpl, _list, _alias, _parse, doc) {
      var obj = toJSON(tmpl, ['match', 'nomatch', 'page']);
      var title = obj.page || doc.title();

      if (title) {
        var m = title.match(/\b([0-9]+)s\b/); //parse the decade out of the title's name

        if (m) {
          return m[1] || '';
        }
      }

      return obj.nomatch || ''; //use default response
    },
    //https://en.wikipedia.org/wiki/Template:Nihongo
    nihongo: function nihongo(tmpl, list) {
      var obj = toJSON(tmpl, ['english', 'kanji', 'romaji', 'extra']);
      list.push(obj);
      var str = obj.english || obj.romaji || '';

      if (obj.kanji) {
        str += " (".concat(obj.kanji, ")");
      }

      return str;
    },
    //https://en.wikipedia.org/wiki/Template:Marriage
    //this one creates a template, and an inline response
    marriage: function marriage(tmpl, list) {
      var data = toJSON(tmpl, ['spouse', 'from', 'to', 'end']);
      list.push(data);
      var str = data.spouse || '';

      if (data.from) {
        if (data.to) {
          str += " (m. ".concat(data.from, "-").concat(data.to, ")");
        } else {
          str += " (m. ".concat(data.from, ")");
        }
      }

      return str;
    },
    //'red' card - {{sent off|cards|min1|min2}}
    'sent off': function sentOff(tmpl, list) {
      var obj = toJSON(tmpl, ['cards']);
      var result = {
        template: 'sent off',
        cards: obj.cards,
        minutes: obj.list || []
      };
      list.push(result);
      var mins = result.minutes.map(function (m) {
        return m + "'";
      }).join(', ');
      return 'sent off: ' + mins;
    },
    transl: function transl(tmpl, list) {
      var obj = toJSON(tmpl, ['lang', 'text', 'text2']); // support 3-param

      if (obj.text2) {
        obj.iso = obj.text;
        obj.text = obj.text2;
        delete obj.text2;
      }

      list.push(obj);
      return obj.text || '';
    },
    //show/hide: https://en.wikipedia.org/wiki/Template:Collapsible_list
    'collapsible list': function collapsibleList(tmpl, list) {
      var obj = toJSON(tmpl);
      list.push(obj);
      var str = '';

      if (obj.title) {
        str += "'''".concat(obj.title, "'''") + '\n\n';
      }

      if (!obj.list) {
        obj.list = [];

        for (var i = 1; i < 10; i += 1) {
          if (obj[i]) {
            obj.list.push(obj[i]);
            delete obj[i];
          }
        }
      }

      obj.list = obj.list.filter(function (s) {
        return s;
      });
      str += obj.list.join('\n\n');
      return str;
    },
    //https://en.wikipedia.org/wiki/Template:Columns-list
    'columns-list': function columnsList(tmpl, list) {
      var arr = toJSON(tmpl).list || [];
      var str = arr[0] || '';
      var lines = str.split(/\n/).filter(function (f) {
        return f;
      });
      lines = lines.map(function (s) {
        return s.replace(/\*/, '');
      });
      list.push({
        template: 'columns-list',
        list: lines
      });
      lines = lines.map(function (s) {
        return '• ' + s;
      });
      return lines.join('\n\n');
    },
    //https://en.wikipedia.org/wiki/Template:Height - {{height|ft=6|in=1}}
    height: function height(tmpl, list) {
      var obj = toJSON(tmpl);
      list.push(obj);
      var result = [];
      var units = ['m', 'cm', 'ft', 'in']; //order matters

      units.forEach(function (unit) {
        if (obj.hasOwnProperty(unit) === true) {
          result.push(obj[unit] + unit);
        }
      });
      return result.join(' ');
    },
    //https://en.wikipedia.org/wiki/Template:Sic
    sic: function sic(tmpl, list) {
      var obj = toJSON(tmpl, ['one', 'two', 'three']);
      var word = (obj.one || '') + (obj.two || ''); //support '[sic?]'

      if (obj.one === '?') {
        word = (obj.two || '') + (obj.three || '');
      }

      list.push({
        template: 'sic',
        word: word
      });

      if (obj.nolink === 'y') {
        return word;
      }

      return "".concat(word, " [sic]");
    },
    //
    inrconvert: function inrconvert(tmpl, list) {
      var o = toJSON(tmpl, ['rupee_value', 'currency_formatting']);
      list.push(o);
      var mults = {
        k: 1000,
        m: 1000000,
        b: 1000000000,
        t: 1000000000000,
        l: 100000,
        c: 10000000,
        lc: 1000000000000
      };

      if (o.currency_formatting) {
        var multiplier = mults[o.currency_formatting] || 1;
        o.rupee_value = o.rupee_value * multiplier;
      }

      return "inr ".concat(o.rupee_value || '');
    },
    //fraction - https://en.wikipedia.org/wiki/Template:Sfrac
    frac: function frac(tmpl, list) {
      var order = ['a', 'b', 'c'];
      var obj = toJSON(tmpl, order);
      var data = {
        template: 'sfrac'
      };

      if (obj.c) {
        data.integer = obj.a;
        data.numerator = obj.b;
        data.denominator = obj.c;
      } else if (obj.b) {
        data.numerator = obj.a;
        data.denominator = obj.b;
      } else {
        data.numerator = 1;
        data.denominator = obj.a;
      }

      list.push(data);

      if (data.integer) {
        return "".concat(data.integer, " ").concat(data.numerator, "\u2044").concat(data.denominator);
      }

      return "".concat(data.numerator, "\u2044").concat(data.denominator);
    },
    'winning percentage': function winningPercentage(tmpl, list) {
      var obj = toJSON(tmpl, ['wins', 'losses', 'ties']);
      list.push(obj);
      var wins = Number(obj.wins);
      var losses = Number(obj.losses);
      var ties = Number(obj.ties) || 0;
      var games = wins + losses + ties;

      if (obj.ignore_ties === 'y') {
        ties = 0;
      }

      if (ties) {
        wins += ties / 2;
      }

      var num = _lib$3.percentage({
        numerator: wins,
        denominator: games,
        decimals: 1
      });

      if (num === null) {
        return '';
      }

      return ".".concat(num * 10);
    },
    winlosspct: function winlosspct(tmpl, list) {
      var obj = toJSON(tmpl, ['wins', 'losses']);
      list.push(obj);
      var wins = Number(obj.wins);
      var losses = Number(obj.losses);

      var num = _lib$3.percentage({
        numerator: wins,
        denominator: wins + losses,
        decimals: 1
      });

      if (num === null) {
        return '';
      }

      num = ".".concat(num * 10);
      return "".concat(wins || 0, " || ").concat(losses || 0, " || ").concat(num || '-');
    },
    //https://en.wikipedia.org/wiki/Template:Video_game_release
    'video game release': function videoGameRelease(tmpl, list) {
      var order = ['region', 'date', 'region2', 'date2', 'region3', 'date3', 'region4', 'date4'];
      var obj = toJSON(tmpl, order);
      var template = {
        template: 'video game release',
        releases: []
      };

      for (var i = 0; i < order.length; i += 2) {
        if (obj[order[i]]) {
          template.releases.push({
            region: obj[order[i]],
            date: obj[order[i + 1]]
          });
        }
      }

      list.push(template);
      var str = template.releases.map(function (o) {
        return "".concat(o.region, ": ").concat(o.date || '');
      }).join('\n\n');
      return '\n' + str + '\n';
    },
    // https://en.m.wikipedia.org/wiki/Template:USS
    uss: function uss(tmpl, list) {
      var obj = toJSON(tmpl, ['name', 'id']);
      list.push(obj);

      if (obj.id) {
        return "[[USS ".concat(obj.name, " (").concat(obj.id, ")|USS ''").concat(obj.name, "'' (").concat(obj.id, ")]]");
      }

      return "[[USS ".concat(obj.name, "|USS ''").concat(obj.name, "'']]");
    }
  };
  var functions = templates$3;
  var codes$1 = {
    '£': 'GB£',
    // https://en.wikipedia.org/wiki/Template:GBP
    '¥': '¥',
    // https://en.wikipedia.org/wiki/Template:JPY
    '৳': '৳',
    // https://en.wikipedia.org/wiki/Template:BDT
    '₩': '₩',
    // https://en.wikipedia.org/wiki/Template:SK_won
    '€': '€',
    // https://en.wikipedia.org/wiki/Template:€
    '₱': '₱',
    // https://en.wikipedia.org/wiki/Template:Philippine_peso
    '₹': '₹',
    // https://en.wikipedia.org/wiki/Template:Indian_Rupee
    '₽': '₽',
    // https://en.wikipedia.org/wiki/Template:RUB
    'cn¥': 'CN¥',
    // https://en.wikipedia.org/wiki/Template:CNY
    'gb£': 'GB£',
    // https://en.wikipedia.org/wiki/Template:GBP
    'india rs': '₹',
    // https://en.wikipedia.org/wiki/Template:Indian_Rupee
    'indian rupee symbol': '₹',
    // https://en.wikipedia.org/wiki/Template:Indian_Rupee
    'indian rupee': '₹',
    // https://en.wikipedia.org/wiki/Template:Indian_Rupee
    'indian rupees': '₹',
    // https://en.wikipedia.org/wiki/Template:Indian_Rupee
    'philippine peso': '₱',
    // https://en.wikipedia.org/wiki/Template:Philippine_peso
    'russian ruble': '₽',
    // https://en.wikipedia.org/wiki/Template:Russian_ruble
    'SK won': '₩',
    // https://en.wikipedia.org/wiki/Template:SK_won
    'turkish lira': 'TRY',
    //https://en.wikipedia.org/wiki/Template:Turkish_lira
    a$: 'A$',
    // https://en.wikipedia.org/wiki/Template:AUD
    au$: 'A$',
    //https://en.wikipedia.org/wiki/Template:AUD
    aud: 'A$',
    //https://en.wikipedia.org/wiki/Template:AUD
    bdt: 'BDT',
    //https://en.wikipedia.org/wiki/Template:BDT
    brl: 'BRL',
    //https://en.wikipedia.org/wiki/Template:BRL
    ca$: 'CA$',
    // https://en.wikipedia.org/wiki/Template:CAD
    cad: 'CA$',
    // https://en.wikipedia.org/wiki/Template:CAD
    chf: 'CHF',
    // https://en.wikipedia.org/wiki/Template:CHF
    cny: 'CN¥',
    // https://en.wikipedia.org/wiki/Template:CNY
    czk: 'czk',
    // https://en.wikipedia.org/wiki/Template:CZK
    dkk: 'dkk',
    // https://en.wikipedia.org/wiki/Template:DKK
    dkk2: 'dkk',
    // https://en.wikipedia.org/wiki/Template:DKK
    euro: '€',
    // https://en.wikipedia.org/wiki/Template:€
    gbp: 'GB£',
    // https://en.wikipedia.org/wiki/Template:GBP
    hk$: 'HK$',
    // https://en.wikipedia.org/wiki/Template:HKD
    hkd: 'HK$',
    // https://en.wikipedia.org/wiki/Template:HKD
    ils: 'ILS',
    // https://en.wikipedia.org/wiki/Template:ILS
    inr: '₹',
    // https://en.wikipedia.org/wiki/Template:Indian_Rupee
    jpy: '¥',
    // https://en.wikipedia.org/wiki/Template:JPY
    myr: 'MYR',
    // https://en.wikipedia.org/wiki/Template:MYR
    nis: 'ILS',
    // https://en.wikipedia.org/wiki/Template:ILS
    nok: 'NOK',
    //https://en.wikipedia.org/wiki/Template:NOK
    nok2: 'NOK',
    //https://en.wikipedia.org/wiki/Template:NOK
    nz$: 'NZ$',
    //https://en.wikipedia.org/wiki/Template:NZD
    nzd: 'NZ$',
    //https://en.wikipedia.org/wiki/Template:NZD
    peso: 'peso',
    //https://en.wikipedia.org/wiki/Template:Peso
    pkr: '₨',
    // https://en.wikipedia.org/wiki/Template:Pakistani_Rupee
    r$: 'BRL',
    //https://en.wikipedia.org/wiki/Template:BRL
    rmb: 'CN¥',
    // https://en.wikipedia.org/wiki/Template:CNY
    rub: '₽',
    // https://en.wikipedia.org/wiki/Template:RUB
    ruble: '₽',
    // https://en.wikipedia.org/wiki/Template:Ruble
    rupee: '₹',
    // https://en.wikipedia.org/wiki/Template:Rupee
    s$: 'sgd',
    // https://en.wikipedia.org/wiki/Template:SGD
    sek: 'SEK',
    // https://en.wikipedia.org/wiki/Template:SEK
    sek2: 'SEK',
    // https://en.wikipedia.org/wiki/Template:SEK
    sfr: 'CHF',
    // https://en.wikipedia.org/wiki/Template:CHF
    sgd: 'sgd',
    // https://en.wikipedia.org/wiki/Template:SGD
    shekel: 'ILS',
    // https://en.wikipedia.org/wiki/Template:ILS
    sheqel: 'ILS',
    // https://en.wikipedia.org/wiki/Template:ILS
    ttd: 'TTD',
    //https://en.wikipedia.org/wiki/Template:TTD
    us$: 'US$',
    // https://en.wikipedia.org/wiki/Template:US$
    usd: 'US$',
    // https://en.wikipedia.org/wiki/Template:US$
    yen: '¥',
    // https://en.wikipedia.org/wiki/Template:JPY
    zar: 'R' //https://en.wikipedia.org/wiki/Template:ZAR

  };

  var parseCurrency = function parseCurrency(tmpl, list) {
    var o = toJSON(tmpl, ['amount', 'code']);
    list.push(o);
    var code = o.template || '';

    if (code === 'currency') {
      code = o.code;

      if (!code) {
        o.code = code = 'usd'; //Special case when currency template has no code argument
      }
    } else if (code === '' || code === 'monnaie' || code === 'unité' || code === 'nombre' || code === 'nb') {
      code = o.code;
    }

    code = (code || '').toLowerCase();

    if (code === 'us') {
      o.code = code = 'usd';
    } else if (code === 'uk') {
      o.code = code = 'gbp';
    }

    var str = "".concat(codes$1[code] || '').concat(o.amount || ''); //support unknown currencies after the number - like '5 BTC'

    if (o.code && !codes$1[o.code.toLowerCase()]) {
      str += ' ' + o.code;
    }

    return str;
  };

  var templates$2 = {
    currency: parseCurrency
  }; //and the others fit the same pattern

  Object.keys(codes$1).forEach(function (k) {
    templates$2[k] = parseCurrency;
  });
  var currency = templates$2;

  var toOrdinal = function toOrdinal(i) {
    var j = i % 10;
    var k = i % 100;

    if (j === 1 && k !== 11) {
      return i + 'st';
    }

    if (j === 2 && k !== 12) {
      return i + 'nd';
    }

    if (j === 3 && k !== 13) {
      return i + 'rd';
    }

    return i + 'th';
  }; //this is allowed to be rough


  var day = 1000 * 60 * 60 * 24;
  var month = day * 30;
  var year = day * 365;

  var getEpoch = function getEpoch(obj) {
    return new Date("".concat(obj.year, "-").concat(obj.month || 0, "-").concat(obj.date || 1)).getTime();
  }; //very rough!


  var delta$1 = function delta$1(from, to) {
    from = getEpoch(from);
    to = getEpoch(to);
    var diff = to - from;
    var obj = {}; //get years

    var years = Math.floor(diff / year, 10);

    if (years > 0) {
      obj.years = years;
      diff -= obj.years * year;
    } //get months


    var monthCount = Math.floor(diff / month, 10);

    if (monthCount > 0) {
      obj.months = monthCount;
      diff -= obj.months * month;
    } //get days


    var days = Math.floor(diff / day, 10);

    if (days > 0) {
      obj.days = days; // diff -= (obj.days * day);
    }

    return obj;
  }; //not all too fancy - used in {{timesince}}


  var timeSince = function timeSince(str) {
    var d = new Date(str);

    if (isNaN(d.getTime())) {
      return '';
    }

    var now = new Date();
    var delt = now.getTime() - d.getTime();
    var predicate = 'ago';

    if (delt < 0) {
      predicate = 'from now';
      delt = Math.abs(delt);
    } //figure out units


    var hours = delt / 1000 / 60 / 60;
    var days = hours / 24;

    if (days < 365) {
      return parseInt(days, 10) + ' days ' + predicate;
    }

    var years = days / 365;
    return parseInt(years, 10) + ' years ' + predicate;
  };

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var _lib$2 = {
    days: days,
    timeSince: timeSince,
    delta: delta$1,
    toOrdinal: toOrdinal
  }; //assorted parsing methods for date/time templates

  var months$1 = [undefined, //1-based months.. :/
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthName = months$1.reduce(function (h, str, i) {
    if (i === 0) {
      return h;
    }

    h[str.toLowerCase()] = i;
    return h;
  }, {}); //parse year|month|date numbers

  var ymd = function ymd(arr) {
    var obj = {};
    var units = ['year', 'month', 'date', 'hour', 'minute', 'second']; //parse each unit in sequence..

    for (var i = 0; i < units.length; i += 1) {
      //skip it
      if (!arr[i] && arr[1] !== 0) {
        continue;
      }

      var num = parseInt(arr[i], 10);

      if (isNaN(num) === false) {
        obj[units[i]] = num; //we good.
      } else if (units[i] === 'month' && monthName.hasOwnProperty(arr[i])) {
        //try for month-name, like 'january
        var _month = monthName[arr[i]];
        obj[units[i]] = _month;
      } else {
        //we dead. so skip this unit
        delete obj[units[i]];
      }
    } //try for timezone,too ftw


    var last = arr[arr.length - 1] || '';
    last = String(last);

    if (last.toLowerCase() === 'z') {
      obj.tz = 'UTC';
    } else if (/[+-][0-9]+:[0-9]/.test(last)) {
      obj.tz = arr[6];
    }

    return obj;
  }; //zero-pad a number


  var pad = function pad(num) {
    if (num < 10) {
      return '0' + num;
    }

    return String(num);
  };

  var toText$1 = function toText$1(date) {
    //eg '1995'
    var str = String(date.year || '');

    if (date.month !== undefined && months$1.hasOwnProperty(date.month) === true) {
      if (date.date === undefined) {
        //January 1995
        str = "".concat(months$1[date.month], " ").concat(date.year);
      } else {
        //January 5, 1995
        str = "".concat(months$1[date.month], " ").concat(date.date, ", ").concat(date.year); //add times, if available

        if (date.hour !== undefined && date.minute !== undefined) {
          var time = "".concat(pad(date.hour), ":").concat(pad(date.minute));

          if (date.second !== undefined) {
            time = time + ':' + pad(date.second);
          }

          str = time + ', ' + str; //add timezone, if there, at the end in brackets
        }

        if (date.tz) {
          str += " (".concat(date.tz, ")");
        }
      }
    }

    return str;
  };

  var _format = {
    toText: toText$1,
    ymd: ymd
  }; // console.log(toText(ymd([2018, 3, 28])));

  var delta = _lib$2.delta; //wrap it up as a template

  var template$1 = function template$1(date) {
    return {
      template: 'date',
      data: date
    };
  };

  var getBoth = function getBoth(tmpl) {
    tmpl = _strip(tmpl);
    var arr = tmpl.split('|');

    var from = _format.ymd(arr.slice(1, 4));

    var to = arr.slice(4, 7); //assume now, if 'to' is empty

    if (to.length === 0) {
      var _d2 = new Date();

      to = [_d2.getFullYear(), _d2.getMonth(), _d2.getDate()];
    }

    to = _format.ymd(to);
    return {
      from: from,
      to: to
    };
  };

  var parsers = {
    //generic {{date|year|month|date}} template
    date: function date(tmpl, list) {
      var order = ['year', 'month', 'date', 'hour', 'minute', 'second', 'timezone'];
      var obj = toJSON(tmpl, order);

      var data = _format.ymd([obj.year, obj.month, obj.date || obj.day]);

      obj.text = _format.toText(data); //make the replacement string

      if (obj.timezone) {
        if (obj.timezone === 'Z') {
          obj.timezone = 'UTC';
        }

        obj.text += " (".concat(obj.timezone, ")");
      }

      if (obj.hour && obj.minute) {
        if (obj.second) {
          obj.text = "".concat(obj.hour, ":").concat(obj.minute, ":").concat(obj.second, ", ") + obj.text;
        } else {
          obj.text = "".concat(obj.hour, ":").concat(obj.minute, ", ") + obj.text;
        }
      }

      if (obj.text) {
        list.push(template$1(obj));
      }

      return obj.text;
    },
    //support parsing of 'February 10, 1992'
    natural_date: function natural_date(tmpl, list) {
      var order = ['text'];
      var obj = toJSON(tmpl, order);
      var str = obj.text || ''; // - just a year

      var date = {};

      if (/^[0-9]{4}$/.test(str)) {
        date.year = parseInt(str, 10);
      } else {
        //parse the date, using the js date object (for now?)
        var txt = str.replace(/[a-z]+\/[a-z]+/i, '');
        txt = txt.replace(/[0-9]+:[0-9]+(am|pm)?/i, '');

        var _d3 = new Date(txt);

        if (isNaN(_d3.getTime()) === false) {
          date.year = _d3.getFullYear();
          date.month = _d3.getMonth() + 1;
          date.date = _d3.getDate();
        }
      }

      list.push(template$1(date));
      return str.trim();
    },
    //just grab the first value, and assume it's a year
    one_year: function one_year(tmpl, list) {
      var order = ['year'];
      var obj = toJSON(tmpl, order);
      var year = Number(obj.year);
      list.push(template$1({
        year: year
      }));
      return String(year);
    },
    //assume 'y|m|d' | 'y|m|d' // {{BirthDeathAge|B|1976|6|6|1990|8|8}}
    two_dates: function two_dates(tmpl, list) {
      var order = ['b', 'birth_year', 'birth_month', 'birth_date', 'death_year', 'death_month', 'death_date'];
      var obj = toJSON(tmpl, order); //'b' means show birth-date, otherwise show death-date

      if (obj.b && obj.b.toLowerCase() === 'b') {
        var _date = _format.ymd([obj.birth_year, obj.birth_month, obj.birth_date]);

        list.push(template$1(_date));
        return _format.toText(_date);
      }

      var date = _format.ymd([obj.death_year, obj.death_month, obj.death_date]);

      list.push(template$1(date));
      return _format.toText(date);
    },
    age: function age(tmpl) {
      var d = getBoth(tmpl);
      var diff = delta(d.from, d.to);
      return diff.years || 0;
    },
    'diff-y': function diffY(tmpl) {
      var d = getBoth(tmpl);
      var diff = delta(d.from, d.to);

      if (diff.years === 1) {
        return diff.years + ' year';
      }

      return (diff.years || 0) + ' years';
    },
    'diff-ym': function diffYm(tmpl) {
      var d = getBoth(tmpl);
      var diff = delta(d.from, d.to);
      var arr = [];

      if (diff.years === 1) {
        arr.push(diff.years + ' year');
      } else if (diff.years && diff.years !== 0) {
        arr.push(diff.years + ' years');
      }

      if (diff.months === 1) {
        arr.push('1 month');
      } else if (diff.months && diff.months !== 0) {
        arr.push(diff.months + ' months');
      }

      return arr.join(', ');
    },
    'diff-ymd': function diffYmd(tmpl) {
      var d = getBoth(tmpl);
      var diff = delta(d.from, d.to);
      var arr = [];

      if (diff.years === 1) {
        arr.push(diff.years + ' year');
      } else if (diff.years && diff.years !== 0) {
        arr.push(diff.years + ' years');
      }

      if (diff.months === 1) {
        arr.push('1 month');
      } else if (diff.months && diff.months !== 0) {
        arr.push(diff.months + ' months');
      }

      if (diff.days === 1) {
        arr.push('1 day');
      } else if (diff.days && diff.days !== 0) {
        arr.push(diff.days + ' days');
      }

      return arr.join(', ');
    },
    'diff-yd': function diffYd(tmpl) {
      var d = getBoth(tmpl);
      var diff = delta(d.from, d.to);
      var arr = [];

      if (diff.years === 1) {
        arr.push(diff.years + ' year');
      } else if (diff.years && diff.years !== 0) {
        arr.push(diff.years + ' years');
      } //ergh...


      diff.days += (diff.months || 0) * 30;

      if (diff.days === 1) {
        arr.push('1 day');
      } else if (diff.days && diff.days !== 0) {
        arr.push(diff.days + ' days');
      }

      return arr.join(', ');
    },
    'diff-d': function diffD(tmpl) {
      var d = getBoth(tmpl);
      var diff = delta(d.from, d.to);
      var arr = []; //ergh...

      diff.days += (diff.years || 0) * 365;
      diff.days += (diff.months || 0) * 30;

      if (diff.days === 1) {
        arr.push('1 day');
      } else if (diff.days && diff.days !== 0) {
        arr.push(diff.days + ' days');
      }

      return arr.join(', ');
    }
  };
  var _parsers = parsers;
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; //date- templates we support

  var dates = {
    currentday: function currentday() {
      var d = new Date();
      return String(d.getDate());
    },
    currentdayname: function currentdayname() {
      var d = new Date();
      return _lib$2.days[d.getDay()];
    },
    currentmonth: function currentmonth() {
      var d = new Date();
      return months[d.getMonth()];
    },
    currentyear: function currentyear() {
      var d = new Date();
      return String(d.getFullYear());
    },
    monthyear: function monthyear() {
      var d = new Date();
      return months[d.getMonth()] + ' ' + d.getFullYear();
    },
    'monthyear-1': function monthyear1() {
      var d = new Date();
      d.setMonth(d.getMonth() - 1);
      return months[d.getMonth()] + ' ' + d.getFullYear();
    },
    'monthyear+1': function monthyear1() {
      var d = new Date();
      d.setMonth(d.getMonth() + 1);
      return months[d.getMonth()] + ' ' + d.getFullYear();
    },
    'time ago': function timeAgo(tmpl) {
      var order = ['date', 'fmt'];
      var time = toJSON(tmpl, order).date;
      return _lib$2.timeSince(time);
    },
    //https://en.wikipedia.org/wiki/Template:Birth_date_and_age
    'birth date and age': function birthDateAndAge(tmpl, list) {
      var order = ['year', 'month', 'day'];
      var obj = toJSON(tmpl, order); //support 'one property' version

      if (obj.year && /[a-z]/i.test(obj.year)) {
        return _parsers.natural_date(tmpl, list);
      }

      list.push(obj);
      obj = _format.ymd([obj.year, obj.month, obj.day]);
      return _format.toText(obj);
    },
    'birth year and age': function birthYearAndAge(tmpl, list) {
      var order = ['birth_year', 'birth_month'];
      var obj = toJSON(tmpl, order); //support 'one property' version

      if (obj.death_year && /[a-z]/i.test(obj.death_year)) {
        return _parsers.natural_date(tmpl, list);
      }

      list.push(obj);
      var age = new Date().getFullYear() - parseInt(obj.birth_year, 10);
      obj = _format.ymd([obj.birth_year, obj.birth_month]);

      var str = _format.toText(obj);

      if (age) {
        str += " (age ".concat(age, ")");
      }

      return str;
    },
    'death year and age': function deathYearAndAge(tmpl, list) {
      var order = ['death_year', 'birth_year', 'death_month'];
      var obj = toJSON(tmpl, order); //support 'one property' version

      if (obj.death_year && /[a-z]/i.test(obj.death_year)) {
        return _parsers.natural_date(tmpl, list);
      }

      list.push(obj);
      obj = _format.ymd([obj.death_year, obj.death_month]);
      return _format.toText(obj);
    },
    //https://en.wikipedia.org/wiki/Template:Birth_date_and_age2
    'birth date and age2': function birthDateAndAge2(tmpl, list) {
      var order = ['at_year', 'at_month', 'at_day', 'birth_year', 'birth_month', 'birth_day'];
      var obj = toJSON(tmpl, order);
      list.push(obj);
      obj = _format.ymd([obj.birth_year, obj.birth_month, obj.birth_day]);
      return _format.toText(obj);
    },
    //https://en.wikipedia.org/wiki/Template:Birth_based_on_age_as_of_date
    'birth based on age as of date': function birthBasedOnAgeAsOfDate(tmpl, list) {
      var order = ['age', 'year', 'month', 'day'];
      var obj = toJSON(tmpl, order);
      list.push(obj);
      var age = parseInt(obj.age, 10);
      var year = parseInt(obj.year, 10);
      var born = year - age;

      if (born && age) {
        return "".concat(born, " (age ").concat(obj.age, ")");
      }

      return "(age ".concat(obj.age, ")");
    },
    //https://en.wikipedia.org/wiki/Template:Death_date_and_given_age
    'death date and given age': function deathDateAndGivenAge(tmpl, list) {
      var order = ['year', 'month', 'day', 'age'];
      var obj = toJSON(tmpl, order);
      list.push(obj);
      obj = _format.ymd([obj.year, obj.month, obj.day]);

      var str = _format.toText(obj);

      if (obj.age) {
        str += " (age ".concat(obj.age, ")");
      }

      return str;
    },
    //sortable dates -
    dts: function dts(tmpl) {
      //remove formatting stuff, ewww
      tmpl = tmpl.replace(/\|format=[ymd]+/i, '');
      tmpl = tmpl.replace(/\|abbr=(on|off)/i, '');
      var order = ['year', 'month', 'date', 'bc'];
      var obj = toJSON(tmpl, order);

      if (obj.date && obj.month && obj.year) {
        //render 'june 5 2018'
        if (/[a-z]/.test(obj.month) === true) {
          return [obj.month, obj.date, obj.year].join(' ');
        }

        return [obj.year, obj.month, obj.date].join('-');
      }

      if (obj.month && obj.year) {
        return [obj.year, obj.month].join('-');
      }

      if (obj.year) {
        if (obj.year < 0) {
          obj.year = Math.abs(obj.year) + ' BC';
        }

        return obj.year;
      }

      return '';
    },
    //we can't do timezones, so fake this one a little bit
    //https://en.wikipedia.org/wiki/Template:Time
    time: function time() {
      var d = new Date();

      var obj = _format.ymd([d.getFullYear(), d.getMonth(), d.getDate()]);

      return _format.toText(obj);
    },
    // https://en.wikipedia.org/wiki/Template:MILLENNIUM
    millennium: function millennium(tmpl) {
      var obj = toJSON(tmpl, ['year']);
      var year = Number(obj.year);
      year = parseInt(year / 1000, 10) + 1;

      if (obj.abbr && obj.abbr === 'y') {
        if (year < 0) {
          return "".concat(_lib$2.toOrdinal(Math.abs(year)), " BC");
        }

        return "".concat(_lib$2.toOrdinal(year));
      }

      return "".concat(_lib$2.toOrdinal(year), " millennium");
    },
    //date/age/time templates
    start: _parsers.date,
    'start-date': _parsers.natural_date,
    birthdeathage: _parsers.two_dates,
    age: _parsers.age,
    'age nts': _parsers.age,
    'age in years': _parsers['diff-y'],
    'age in years and months': _parsers['diff-ym'],
    'age in years, months and days': _parsers['diff-ymd'],
    'age in years and days': _parsers['diff-yd'],
    'age in days': _parsers['diff-d'] // 'birth date and age2': date,
    // 'age in years, months, weeks and days': true,
    // 'age as of date': true,

  };
  /**
   * converts DMS (decimal-minute-second) geo format to lat/lng format.
   * major thank you to https://github.com/gmaclennan/parse-dms and https://github.com/WSDOT-GIS/dms-js 👏
   **/

  function parseDMS(arr) {
    var hemisphere = arr.pop();
    var degrees = Number(arr[0] || 0);
    var minutes = Number(arr[1] || 0);
    var seconds = Number(arr[2] || 0);

    if (typeof hemisphere !== 'string' || isNaN(degrees)) {
      return null;
    }

    var sign = 1;

    if (/[SW]/i.test(hemisphere)) {
      sign = -1;
    }

    return sign * (degrees + minutes / 60 + seconds / 3600);
  }

  var round = function round(num) {
    if (typeof num !== 'number') {
      return num;
    }

    var places = 100000;
    return Math.round(num * places) / places;
  }; //these hemispheres mean negative decimals


  var negative = {
    s: true,
    w: true
  };

  var findLatLng = function findLatLng(arr) {
    var types = arr.map(function (s) {
      return _typeof(s);
    }).join('|'); //support {{lat|lng}}

    if (arr.length === 2 && types === 'number|number') {
      return {
        lat: arr[0],
        lon: arr[1]
      };
    } //support {{dd|N/S|dd|E/W}}


    if (arr.length === 4 && types === 'number|string|number|string') {
      if (negative[arr[1].toLowerCase()]) {
        arr[0] *= -1;
      }

      if (arr[3].toLowerCase() === 'w') {
        arr[2] *= -1;
      }

      return {
        lat: arr[0],
        lon: arr[2]
      };
    } //support {{dd|mm|N/S|dd|mm|E/W}}


    if (arr.length === 6) {
      return {
        lat: parseDMS(arr.slice(0, 3)),
        lon: parseDMS(arr.slice(3))
      };
    } //support {{dd|mm|ss|N/S|dd|mm|ss|E/W}}


    if (arr.length === 8) {
      return {
        lat: parseDMS(arr.slice(0, 4)),
        lon: parseDMS(arr.slice(4))
      };
    }

    return {};
  };

  var parseParams = function parseParams(obj) {
    obj.list = obj.list || [];
    obj.list = obj.list.map(function (str) {
      var num = Number(str);

      if (!isNaN(num)) {
        return num;
      } //these are weird


      var split = str.split(/:/);

      if (split.length > 1) {
        obj.props = obj.props || {};
        obj.props[split[0]] = split.slice(1).join(':');
        return null;
      }

      return str;
    });
    obj.list = obj.list.filter(function (s) {
      return s !== null;
    });
    return obj;
  };

  var parseCoor = function parseCoor(tmpl) {
    var obj = toJSON(tmpl);
    obj = parseParams(obj);
    var tmp = findLatLng(obj.list);
    obj.lat = round(tmp.lat);
    obj.lon = round(tmp.lon);
    obj.template = 'coord';
    delete obj.list;
    return obj;
  }; //console.log(parseDms([57, 18, 22, 'N']));
  //console.log(parseDms([4, 27, 32, 'W']));


  var _lib$1 = parseCoor; // {{Coor title dms|dd|mm|ss|N/S|dd|mm|ss|E/W|template parameters}}

  var templates$1 = {
    coord: function coord(tmpl, list) {
      var obj = _lib$1(tmpl);

      list.push(obj); //display inline, by default

      if (!obj.display || obj.display.indexOf('inline') !== -1) {
        return "".concat(obj.lat || '', "\xB0N, ").concat(obj.lon || '', "\xB0W");
      }

      return '';
    }
  }; //{{coord|latitude|longitude|coordinate parameters|template parameters}}
  //{{coord|dd|N/S|dd|E/W|coordinate parameters|template parameters}}
  //{{coord|dd|mm|N/S|dd|mm|E/W|coordinate parameters|template parameters}}
  //{{coord|dd|mm|ss|N/S|dd|mm|ss|E/W|coordinate parameters|template parameters}}

  var geo = templates$1;

  var generic = function generic(tmpl, list, _parser, alias) {
    var obj = toJSON(tmpl);

    if (alias) {
      obj.name = obj.template;
      obj.template = alias;
    }

    list.push(obj);
    return '';
  }; // it may seem redundant,
  // but we need these templates for our i18n mappings


  var misc = {
    persondata: generic,
    taxobox: generic,
    citation: generic,
    portal: generic,
    reflist: generic,
    'cite book': generic,
    'cite journal': generic,
    'cite web': generic,
    'commons cat': generic,
    'election box candidate': generic,
    'election box begin': generic,
    main: generic
  };
  var misc_1 = misc;
  var codes = {
    adx: 'adx',
    //https://en.wikipedia.org/wiki/Template:Abu_Dhabi_Securities_Exchange
    aim: 'aim',
    //https://en.wikipedia.org/wiki/Template:Alternative_Investment_Market
    amex: 'amex',
    //https://en.wikipedia.org/wiki/Template:NYSE_American
    asx: 'asx',
    //https://en.wikipedia.org/wiki/Template:Australian_Securities_Exchange
    athex: 'athex',
    //https://en.wikipedia.org/wiki/Template:Athens_Exchange
    b3: 'b3',
    //https://en.wikipedia.org/wiki/Template:BM%26F_Bovespa (redirects to B3 (stock exchange))
    'B3 (stock exchange)': 'B3 (stock exchange)',
    //https://en.wikipedia.org/wiki/Template:B3_(stock_exchange)
    barbadosse: 'barbadosse',
    //https://en.wikipedia.org/wiki/Template:Barbados_Stock_Exchange
    bbv: 'bbv',
    //https://en.wikipedia.org/wiki/Template:La_Paz_Stock_Exchange
    bcba: 'bcba',
    //https://en.wikipedia.org/wiki/Template:Buenos_Aires_Stock_Exchange
    bcs: 'bcs',
    //https://en.wikipedia.org/wiki/Template:Santiago_Stock_Exchange
    bhse: 'bhse',
    //https://en.wikipedia.org/wiki/Template:Bahrain_Bourse
    bist: 'bist',
    //https://en.wikipedia.org/wiki/Template:Borsa_Istanbul
    bit: 'bit',
    //https://en.wikipedia.org/wiki/Template:Borsa_Italiana
    'bm&f bovespa': 'b3',
    //https://en.wikipedia.org/wiki/Template:BM%26F_Bovespa
    'bm&f': 'b3',
    //https://en.wikipedia.org/wiki/Template:BM%26F_Bovespa
    bmad: 'bmad',
    //https://en.wikipedia.org/wiki/Template:Bolsa_de_Madrid
    bmv: 'bmv',
    //https://en.wikipedia.org/wiki/Template:Mexican_Stock_Exchange
    'bombay stock exchange': 'bombay stock exchange',
    //https://en.wikipedia.org/wiki/Template:Bombay_Stock_Exchange
    'botswana stock exchange': 'botswana stock exchange',
    //https://en.wikipedia.org/wiki/Template:BM%26F_Bovespa
    bpse: 'bpse',
    //https://en.wikipedia.org/wiki/Template:Budapest_Stock_Exchange
    bse: 'bse',
    //https://en.wikipedia.org/wiki/Template:Bombay_Stock_Exchange
    bsx: 'bsx',
    //https://en.wikipedia.org/wiki/Template:Bermuda_Stock_Exchange
    bvb: 'bvb',
    //https://en.wikipedia.org/wiki/Template:Bucharest_Stock_Exchange
    bvc: 'bvc',
    //https://en.wikipedia.org/wiki/Template:Colombian_Securities_Exchange
    bvl: 'bvl',
    //https://en.wikipedia.org/wiki/Template:Lima_Stock_Exchange
    bvpasa: 'bvpasa',
    //https://en.wikipedia.org/wiki/Template:BVPASA
    bwse: 'bwse',
    //https://en.wikipedia.org/wiki/Template:Botswana_Stock_Exchange
    'canadian securities exchange': 'canadian securities exchange',
    //https://en.wikipedia.org/wiki/Template:Canadian_Securities_Exchange
    cse: 'cse',
    //https://en.wikipedia.org/wiki/Template:Chittagong_Stock_Exchange
    darse: 'darse',
    //https://en.wikipedia.org/wiki/Template:Dar_es_Salaam_Stock_Exchange
    dfm: 'dfm',
    //https://en.wikipedia.org/wiki/Template:Dubai_Financial_Market
    dse: 'dse',
    //https://en.wikipedia.org/wiki/Template:Dhaka_Stock_Exchange
    euronext: 'euronext',
    //https://en.wikipedia.org/wiki/Template:Euronext
    euronextparis: 'euronextparis',
    //https://en.wikipedia.org/wiki/Template:EuronextParis
    fse: 'fse',
    //https://en.wikipedia.org/wiki/Template:Fukuoka_Stock_Exchange
    fwb: 'fwb',
    //https://en.wikipedia.org/wiki/Template:Frankfurt_Stock_Exchange
    gse: 'gse',
    //https://en.wikipedia.org/wiki/Template:Ghana_Stock_Exchange
    gtsm: 'gtsm',
    //https://en.wikipedia.org/wiki/Template:Gre_Tai_Securities_Market
    idx: 'idx',
    //https://en.wikipedia.org/wiki/Template:Indonesia_Stock_Exchange
    ise: 'ise',
    //https://en.wikipedia.org/wiki/Template:Irish_Stock_Exchange
    iseq: 'iseq',
    //https://en.wikipedia.org/wiki/Template:Irish_Stock_Exchange
    isin: 'isin',
    //https://en.wikipedia.org/wiki/Template:ISIN
    jasdaq: 'jasdaq',
    //https://en.wikipedia.org/wiki/Template:JASDAQ
    jse: 'jse',
    //https://en.wikipedia.org/wiki/Template:Johannesburg_Stock_Exchange
    kase: 'kase',
    //https://en.wikipedia.org/wiki/Template:Kazakhstan_Stock_Exchange
    kn: 'kn',
    //https://en.wikipedia.org/wiki/Template:Nairobi_Securities_Exchange
    krx: 'krx',
    //https://en.wikipedia.org/wiki/Template:Korea_Exchange
    lse: 'lse',
    //https://en.wikipedia.org/wiki/Template:London_Stock_Exchange
    luxse: 'luxse',
    //https://en.wikipedia.org/wiki/Template:Luxembourg_Stock_Exchange
    'malta stock exchange': 'malta stock exchange',
    //https://en.wikipedia.org/wiki/Template:Malta_Stock_Exchange
    mai: 'mai',
    //https://en.wikipedia.org/wiki/Template:Market_for_Alternative_Investment
    mcx: 'mcx',
    //https://en.wikipedia.org/wiki/Template:Moscow_Exchange
    mutf: 'mutf',
    //https://en.wikipedia.org/wiki/Template:Mutual_fund
    myx: 'myx',
    //https://en.wikipedia.org/wiki/Template:Bursa_Malaysia
    nag: 'nag',
    //https://en.wikipedia.org/wiki/Template:Nagoya_Stock_Exchange
    'nasdaq dubai': 'nasdaq dubai',
    //https://en.wikipedia.org/wiki/Template:NASDAQ_Dubai
    nasdaq: 'nasdaq',
    //https://en.wikipedia.org/wiki/Template:NASDAQ
    neeq: 'neeq',
    //https://en.wikipedia.org/wiki/Template:NEEQ
    nepse: 'nepse',
    //https://en.wikipedia.org/wiki/Template:Nepal_Stock_Exchange
    nex: 'nex',
    //https://en.wikipedia.org/wiki/Template:TSXV_NEX
    nse: 'nse',
    //https://en.wikipedia.org/wiki/Template:National_Stock_Exchange_of_India
    newconnect: 'newconnect',
    //https://en.wikipedia.org/wiki/Template:NewConnect
    'nyse arca': 'nyse arca',
    //https://en.wikipedia.org/wiki/Template:NYSE_Arca
    nyse: 'nyse',
    //https://en.wikipedia.org/wiki/Template:New_York_Stock_Exchange
    nzx: 'nzx',
    //https://en.wikipedia.org/wiki/Template:New_Zealand_Exchange
    'omx baltic': 'omx baltic',
    //https://en.wikipedia.org/wiki/Template:OMX_Baltic
    omx: 'omx',
    //https://en.wikipedia.org/wiki/Template:OMX
    ose: 'ose',
    //https://en.wikipedia.org/wiki/Template:Oslo_Stock_Exchange
    'otc expert': 'otc expert',
    //https://en.wikipedia.org/wiki/Template:OTC_Expert
    'otc grey': 'otc grey',
    //https://en.wikipedia.org/wiki/template:grey_market
    'otc pink': 'otc pink',
    //https://en.wikipedia.org/wiki/Template:OTC_Pink
    otcqb: 'otcqb',
    //https://en.wikipedia.org/wiki/Template:OTCQB
    otcqx: 'otcqx',
    //https://en.wikipedia.org/wiki/Template:OTCQX
    'pfts ukraine stock exchange': 'pfts ukraine stock exchange',
    //https://en.wikipedia.org/wiki/Template:PFTS_Ukraine_Stock_Exchange
    'philippine stock exchange': 'philippine stock exchange',
    //https://en.wikipedia.org/wiki/Template:Philippine_Stock_Exchange
    prse: 'prse',
    //https://en.wikipedia.org/wiki/Template:Prague_Stock_Exchange
    psx: 'psx',
    //https://en.wikipedia.org/wiki/Template:Pakistan_Stock_Exchange
    karse: 'karse',
    //https://en.wikipedia.org/w/index.php?title=Template:Karse&redirect=no (redirects to psx)
    qe: 'qe',
    //https://en.wikipedia.org/wiki/Template:Qatar_Stock_Exchange
    'saudi stock exchange': 'saudi stock exchange',
    //https://en.wikipedia.org/wiki/Template:Saudi_Stock_Exchange
    sehk: 'sehk',
    //https://en.wikipedia.org/wiki/Template:Hong_Kong_Stock_Exchange
    'Stock Exchange of Thailand': 'Stock Exchange of Thailand',
    //https://en.wikipedia.org/wiki/Template:Stock_Exchange_of_Thailand (alternative for SET)
    set: 'set',
    //https://en.wikipedia.org/wiki/Template:Stock_Exchange_of_Thailand
    sgx: 'sgx',
    //https://en.wikipedia.org/wiki/Template:Singapore_Exchange
    sse: 'sse',
    //https://en.wikipedia.org/wiki/Template:Shanghai_Stock_Exchange
    swx: 'swx',
    //https://en.wikipedia.org/wiki/Template:SIX_Swiss_Exchange
    szse: 'szse',
    //https://en.wikipedia.org/wiki/Template:Shenzhen_Stock_Exchange
    tase: 'tase',
    //https://en.wikipedia.org/wiki/Template:Tel_Aviv_Stock_Exchange
    'tsx-v': 'tsx-v',
    //https://en.wikipedia.org/wiki/Template:TSX_Venture_Exchange
    tsx: 'tsx',
    //https://en.wikipedia.org/wiki/Template:Toronto_Stock_Exchange
    tsxv: 'tsxv',
    //https://en.wikipedia.org/wiki/Template:TSX_Venture_Exchange
    ttse: 'ttse',
    //https://en.wikipedia.org/wiki/Template:Trinidad_and_Tobago_Stock_Exchange
    twse: 'twse',
    //https://en.wikipedia.org/wiki/Template:Taiwan_Stock_Exchange
    tyo: 'tyo',
    //https://en.wikipedia.org/wiki/Template:Tokyo_Stock_Exchange
    wbag: 'wbag',
    //https://en.wikipedia.org/wiki/Template:Wiener_B%C3%B6rse
    wse: 'wse',
    //https://en.wikipedia.org/wiki/Template:Warsaw_Stock_Exchange
    'zagreb stock exchange': 'zagreb stock exchange',
    //https://en.wikipedia.org/wiki/Template:Zagreb_Stock_Exchange
    'zimbabwe stock exchange': 'zimbabwe stock exchange',
    //https://en.wikipedia.org/wiki/Template:Zimbabwe_Stock_Exchange
    zse: 'zse' //https://en.wikipedia.org/wiki/Template:Zagreb_Stock_Exchange

  };

  var parseStockExchange = function parseStockExchange(tmpl, list) {
    var o = toJSON(tmpl, ['ticketnumber', 'code']);
    list.push(o);
    var code = o.template || '';

    if (code === '') {
      code = o.code;
    }

    code = (code || '').toLowerCase();
    var str = codes[code] || '';

    if (o.ticketnumber) {
      str = "".concat(str, ": ").concat(o.ticketnumber);
    }

    if (o.code && !codes[o.code.toLowerCase()]) {
      str += ' ' + o.code;
    }

    return str;
  };

  var exchanges = {}; //the others fit the same pattern..

  Object.keys(codes).forEach(function (k) {
    exchanges[k] = parseStockExchange;
  });
  var stockExchanges = exchanges;

  var zeroPad = function zeroPad(num) {
    num = String(num);

    if (num.length === 1) {
      num = '0' + num;
    }

    return num;
  };

  var parseTeam = function parseTeam(obj, round, team) {
    if (obj["rd".concat(round, "-team").concat(zeroPad(team))]) {
      team = zeroPad(team);
    }

    var score = obj["rd".concat(round, "-score").concat(team)];
    var num = Number(score);

    if (isNaN(num) === false) {
      score = num;
    }

    return {
      team: obj["rd".concat(round, "-team").concat(team)],
      score: score,
      seed: obj["rd".concat(round, "-seed").concat(team)]
    };
  }; // https://en.wikipedia.org/wiki/Category:Tournament_bracket_templates
  //these are weird.


  var playoffBracket = function playoffBracket(tmpl) {
    var rounds = [];
    var obj = toJSON(tmpl); //try some rounds

    for (var i = 1; i < 7; i += 1) {
      var _round = [];

      for (var t = 1; t < 16; t += 2) {
        var key = "rd".concat(i, "-team");

        if (obj[key + t] || obj[key + zeroPad(t)]) {
          var one = parseTeam(obj, i, t);
          var two = parseTeam(obj, i, t + 1);

          _round.push([one, two]);
        } else {
          break;
        }
      }

      if (_round.length > 0) {
        rounds.push(_round);
      }
    }

    return {
      template: 'playoffbracket',
      rounds: rounds
    };
  };

  var _lib = playoffBracket;
  var sports = {
    //playoff brackets
    '4teambracket': function teambracket(tmpl, list) {
      var obj = _lib(tmpl);

      list.push(obj);
      return '';
    },
    player: function player(tmpl, list) {
      var res = toJSON(tmpl, ['number', 'country', 'name', 'dl']);
      list.push(res);
      var str = "[[".concat(res.name, "]]");

      if (res.country) {
        var country = (res.country || '').toLowerCase();
        var flag = flags.find(function (a) {
          return country === a[1] || country === a[2];
        }) || [];

        if (flag && flag[0]) {
          str = flag[0] + '  ' + str;
        }
      }

      if (res.number) {
        str = res.number + ' ' + str;
      }

      return str;
    },
    //https://en.wikipedia.org/wiki/Template:Goal
    goal: function goal(tmpl, list) {
      var res = toJSON(tmpl);
      var obj = {
        template: 'goal',
        data: []
      };
      var arr = res.list || [];

      for (var i = 0; i < arr.length; i += 2) {
        obj.data.push({
          min: arr[i],
          note: arr[i + 1] || ''
        });
      }

      list.push(obj); //generate a little text summary

      var summary = '⚽ ';
      summary += obj.data.map(function (o) {
        var note = o.note;

        if (note) {
          note = " (".concat(note, ")");
        }

        return o.min + "'" + note;
      }).join(', ');
      return summary;
    },
    //a transcluded sports module - https://en.m.wikipedia.org/w/index.php?title=Special:WhatLinksHere/Module:Sports_table
    // https://en.wikipedia.org/wiki/Template:2020–21_NHL_North_Division_standings
    'sports table': function sportsTable(tmpl, list) {
      var obj = toJSON(tmpl);
      var byTeam = {};
      var teams = Object.keys(obj).filter(function (k) {
        return /^team[0-9]/.test(k);
      }).map(function (k) {
        return obj[k].toLowerCase();
      });
      teams.forEach(function (team) {
        byTeam[team] = {
          name: obj["name_".concat(team)],
          win: Number(obj["win_".concat(team)]) || 0,
          loss: Number(obj["loss_".concat(team)]) || 0,
          tie: Number(obj["tie_".concat(team)]) || 0,
          otloss: Number(obj["otloss_".concat(team)]) || 0,
          goals_for: Number(obj["gf_".concat(team)]) || 0,
          goals_against: Number(obj["ga_".concat(team)]) || 0
        };
      });
      var res = {
        date: obj.update,
        header: obj.table_header,
        teams: byTeam
      };
      list.push(res);
    }
  };
  var sports_1 = sports;
  var textAndData = Object.assign({}, shorthand, functions, currency, dates, geo, misc_1, stockExchanges, _lib, sports_1, _lib, sports_1);
  var templates = Object.assign({}, textOnly, dataOnly, textAndData);
  Object.keys(aliases_1).forEach(function (k) {
    // if (templates[aliases[k]] === undefined) {
    //   console.error(`Missing template: '${aliases[k]}'`)
    // }
    templates[k] = templates[aliases_1[k]];
  });
  var custom = templates; // console.log(Object.keys(templates).length)

  var isArray$1 = helpers.isArray,
      isObject = helpers.isObject;
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //this gets all the {{template}} objects and decides how to parse them

  var parseTemplate = function parseTemplate(tmpl, doc) {
    var name = tmpl.name; // dont bother with some junk templates

    if (_ignore.hasOwnProperty(name) === true) {
      return [''];
    } //{{infobox settlement...}}


    if (_infobox.isInfobox(name) === true) {
      var obj = toJSON(tmpl.body, [], 'raw'); // list.push(infobox.format(obj))

      return ['', _infobox.format(obj)];
    } //cite book, cite arxiv...


    if (/^cite [a-z]/.test(name) === true) {
      var _obj = toJSON(tmpl.body);

      _obj.type = _obj.template;
      _obj.template = 'citation'; // list.push(obj)

      return ['', _obj];
    } // ok, here we go!
    //parse some known templates


    if (custom.hasOwnProperty(name) === true) {
      //handle number-syntax
      if (typeof custom[name] === 'number') {
        var _obj2 = toJSON(tmpl.body, nums);

        var key = String(custom[name]);
        return [_obj2[key] || ''];
      } //handle string-syntax


      if (typeof custom[name] === 'string') {
        return [custom[name]];
      } //handle array sytax


      if (isArray$1(custom[name]) === true) {
        var _obj3 = toJSON(tmpl.body, custom[name]); // list.push(obj)


        return ['', _obj3];
      } //handle object sytax


      if (isObject(custom[name]) === true) {
        var _obj4 = toJSON(tmpl.body, custom[name].props); // list.push(obj)


        return [_obj4[custom[name].out], _obj4];
      } //handle function syntax


      if (typeof custom[name] === 'function') {
        // let json = toJSON(tmpl.body)
        //(tmpl, list, alias, doc)
        var arr = [];
        var txt = custom[name](tmpl.body, arr, toJSON, null, doc);
        return [txt, arr[0]];
      }
    } //an unknown template with data, so just keep it.


    var json = toJSON(tmpl.body);

    if (Object.keys(json).length === 0) {
      // list.push(json)
      json = null;
    } //..then remove it


    return ['', json];
  };

  var parse$3 = parseTemplate;

  var toJson = function toJson(infobox, options) {
    var json = Object.keys(infobox.data).reduce(function (h, k) {
      if (infobox.data[k]) {
        h[k] = infobox.data[k].json();
      }

      return h;
    }, {}); //support mongo-encoding keys

    if (options.encode === true) {
      json = encode.encodeObj(json);
    }

    return json;
  };

  var toJson_1 = toJson;
  var isArray = helpers.isArray;

  var normalize = function normalize() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    str = str.toLowerCase();
    str = str.replace(/[-_]/g, ' ');
    return str.trim();
  }; //a formal key-value data table about a topic


  var Infobox = function Infobox(obj, wiki) {
    this._type = obj.type;
    this.domain = obj.domain;
    Object.defineProperty(this, 'data', {
      enumerable: false,
      value: obj.data
    });
    Object.defineProperty(this, 'wiki', {
      enumerable: false,
      value: wiki
    });
  };

  var methods$1 = {
    type: function type() {
      return this._type;
    },
    links: function links(n) {
      var _this = this;

      var arr = [];
      Object.keys(this.data).forEach(function (k) {
        _this.data[k].links().forEach(function (l) {
          return arr.push(l);
        });
      });

      if (typeof n === 'string') {
        //grab a link like .links('Fortnight')
        n = n.charAt(0).toUpperCase() + n.substring(1); //titlecase it

        var _link6 = arr.find(function (o) {
          return o.page() === n;
        });

        return _link6 === undefined ? [] : [_link6];
      }

      return arr;
    },
    image: function image() {
      var s = this.data.image || this.data.image2 || this.data.logo || this.data.image_skyline || this.data.image_flag;

      if (!s) {
        return null;
      }

      var obj = s.json();
      obj.file = obj.text;
      obj.text = '';
      obj.domain = this.domain; // add domain information for image

      return new Image_1(obj);
    },
    get: function get(keys) {
      var _this2 = this;

      var allKeys = Object.keys(this.data);

      if (typeof keys === 'string') {
        var key = normalize(keys);

        for (var i = 0; i < allKeys.length; i += 1) {
          var tmp = normalize(allKeys[i]);

          if (key === tmp) {
            return this.data[allKeys[i]];
          }
        }

        return new Sentence_1();
      }

      if (isArray(keys)) {
        // support array-input
        keys = keys.map(normalize);
        return keys.map(function (k) {
          for (var _i3 = 0; _i3 < allKeys.length; _i3 += 1) {
            var _tmp = normalize(allKeys[_i3]);

            if (k === _tmp) {
              return _this2.data[allKeys[_i3]];
            }
          }

          return new Sentence_1();
        });
      }

      return new Sentence_1();
    },
    text: function text() {
      return '';
    },
    json: function json(options) {
      options = options || {};
      return toJson_1(this, options);
    },
    wikitext: function wikitext() {
      return this.wiki || '';
    },
    keyValue: function keyValue() {
      var _this3 = this;

      return Object.keys(this.data).reduce(function (h, k) {
        if (_this3.data[k]) {
          h[k] = _this3.data[k].text();
        }

        return h;
      }, {});
    }
  }; //aliases

  Object.keys(methods$1).forEach(function (k) {
    Infobox.prototype[k] = methods$1[k];
  });
  Infobox.prototype.data = Infobox.prototype.keyValue;
  Infobox.prototype.template = Infobox.prototype.type;
  Infobox.prototype.images = Infobox.prototype.image;
  var Infobox_1 = Infobox;
  var toText = _04Sentence.fromText;
  var methods = {
    text: function text() {
      var str = this._text || '';
      return toText(str).text();
    },
    json: function json() {
      return this.data || {};
    },
    wikitext: function wikitext() {
      return this.wiki || '';
    }
  };

  var Template = function Template(data) {
    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var wiki = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    Object.defineProperty(this, 'data', {
      enumerable: false,
      value: data
    });
    Object.defineProperty(this, '_text', {
      enumerable: false,
      value: text
    });
    Object.defineProperty(this, 'wiki', {
      enumerable: false,
      value: wiki
    });
  };

  Object.keys(methods).forEach(function (k) {
    Template.prototype[k] = methods[k];
  });
  var Template_1 = Template;
  var isCitation = /^(cite |citation)/i;
  var referenceTypes = {
    citation: true,
    refn: true,
    harvnb: true,
    source: true //wikinews

  }; // split Infoboxes from templates and references

  var sortOut = function sortOut(list, domain) {
    var res = {
      infoboxes: [],
      templates: [],
      references: []
    }; //remove references and infoboxes from our list

    list.forEach(function (obj) {
      var json = obj.json;
      var kind = json.template || json.type || json.name; // is it a Reference?

      if (referenceTypes[kind] === true || isCitation.test(kind) === true) {
        res.references.push(new Reference_1(json, obj.wiki));
        return;
      } // is it an Infobox?


      if (json.template === 'infobox' && json.subbox !== 'yes') {
        json.domain = domain; //infoboxes need this for images, i guess

        json.data = json.data || {}; //validate it a little

        res.infoboxes.push(new Infobox_1(json, obj.wiki));
        return;
      } // otherwise, it's just a template


      res.templates.push(new Template_1(json, obj.text, obj.wiki));
    });
    return res;
  };

  var sortOut_1 = sortOut;

  var allTemplates = function allTemplates(wiki, doc) {
    var list = []; //nested data-structure of templates

    var nested = _01Nested(wiki); //recursive template-parser


    var parseNested = function parseNested(obj, parent) {
      obj.parent = parent; //do tail-first recursion

      if (obj.children && obj.children.length > 0) {
        obj.children.forEach(function (ch) {
          return parseNested(ch, obj);
        });
      } //parse template into json, return replacement wikitext


      var _parse$ = parse$3(obj, doc),
          _parse$2 = _slicedToArray(_parse$, 2),
          text = _parse$2[0],
          json = _parse$2[1];

      obj.wiki = text;

      if (json) {
        list.push({
          name: obj.name,
          wiki: obj.body,
          text: text,
          json: json
        });
      } //remove the text from every parent


      var removeIt = function removeIt(node, body, out) {
        if (node.parent) {
          node.parent.body = node.parent.body.replace(body, out);
          removeIt(node.parent, body, out);
        }
      };

      removeIt(obj, obj.body, obj.wiki);
      wiki = wiki.replace(obj.body, obj.wiki);
    }; //kick it off


    nested.forEach(function (node) {
      return parseNested(node, null);
    }); //remove the templates from our wiki text

    nested.forEach(function (node) {
      wiki = wiki.replace(node.body, node.wiki);
    });
    return {
      list: list,
      wiki: wiki
    };
  }; //find + parse all templates in the section


  var process = function process(section, doc) {
    // find+parse them all
    var _allTemplates = allTemplates(section._wiki, doc),
        list = _allTemplates.list,
        wiki = _allTemplates.wiki; // split-out references and infoboxes


    var domain = doc ? doc._domain : null;

    var _sortOut_ = sortOut_1(list, domain),
        infoboxes = _sortOut_.infoboxes,
        references = _sortOut_.references,
        templates = _sortOut_.templates; //sort-out the templates we decide to keep


    section._infoboxes = section._infoboxes || [];
    section._references = section._references || [];
    section._templates = section._templates || [];
    section._infoboxes = section._infoboxes.concat(infoboxes);
    section._references = section._references.concat(references);
    section._templates = section._templates.concat(templates);
    section._wiki = wiki;
  };

  var template = process;
  var parseSentence$1 = _04Sentence.fromText; //okay, <gallery> is a xml-tag, with newline-separated data, somehow pivoted by '|'...
  //all deities help us. truly -> https://en.wikipedia.org/wiki/Help:Gallery_tag
  //- not to be confused with https://en.wikipedia.org/wiki/Template:Gallery...

  /**
   *
   * @private
   * @param {object} catcher
   * @param {Document} doc
   * @param {Section} section
   */

  var parseGallery = function parseGallery(catcher, doc, section) {
    catcher.text = catcher.text.replace(/<gallery([^>]*?)>([\s\S]+?)<\/gallery>/g, function (_, attrs, inside) {
      var images = inside.split(/\n/g);
      images = images.filter(function (str) {
        return str && str.trim() !== '';
      }); //parse the line, which has an image and sometimes a caption

      images = images.map(function (str) {
        var arr = str.split(/\|/);
        var obj = {
          file: arr[0].trim(),
          lang: doc.lang(),
          domain: doc.domain()
        };
        var img = new Image_1(obj).json();
        var caption = arr.slice(1).join('|');

        if (caption !== '') {
          img.caption = parseSentence$1(caption);
        }

        return img;
      }); //add it to our templates list

      if (images.length > 0) {
        catcher.templates.push({
          template: 'gallery',
          images: images,
          pos: section.title
        });
      } //return empty string to remove the template from the wiki text


      return '';
    });
  };

  var gallery = parseGallery;
  /**
   * parses out the `Election_box` template from the wiki text
   *
   * this is a non-traditional template, for some reason
   * https://en.wikipedia.org/wiki/Template:Election_box
   *
   * @private
   * @param {object} catcher an object to provide and catch data
   */

  var parseElection = function parseElection(catcher) {
    catcher.text = catcher.text.replace(/\{\{election box begin([\s\S]+?)\{\{election box end\}\}/gi, function (tmpl) {
      var data = {
        _wiki: tmpl,
        _templates: []
      }; //put it through our full template parser..

      template(data); //okay, pull it apart into something sensible..

      var templates = data._templates.map(function (t) {
        return t.json();
      });

      var start = templates.find(function (t) {
        return t.template === 'election box';
      }) || {};
      var candidates = templates.filter(function (t) {
        return t.template === 'election box candidate';
      });
      var summary = templates.find(function (t) {
        return t.template === 'election box gain' || t.template === 'election box hold';
      }) || {};

      if (candidates.length > 0 || summary) {
        catcher.templates.push({
          template: 'election box',
          title: start.title,
          candidates: candidates,
          summary: summary.data
        });
      } //return empty string to remove the template from the wiki text


      return '';
    });
  };

  var election = parseElection;
  var keys = {
    coach: ['team', 'year', 'g', 'w', 'l', 'w-l%', 'finish', 'pg', 'pw', 'pl', 'pw-l%'],
    player: ['year', 'team', 'gp', 'gs', 'mpg', 'fg%', '3p%', 'ft%', 'rpg', 'apg', 'spg', 'bpg', 'ppg'],
    roster: ['player', 'gp', 'gs', 'mpg', 'fg%', '3fg%', 'ft%', 'rpg', 'apg', 'spg', 'bpg', 'ppg']
  };
  /**
   * https://en.wikipedia.org/wiki/Template:NBA_player_statistics_start
   *
   * @private
   * @param {object} catcher
   */

  var parseNBA = function parseNBA(catcher) {
    catcher.text = catcher.text.replace(/\{\{nba (coach|player|roster) statistics start([\s\S]+?)\{\{s-end\}\}/gi, function (tmpl, name) {
      tmpl = tmpl.replace(/^\{\{.*?\}\}/, '');
      tmpl = tmpl.replace(/\{\{s-end\}\}/, '');
      name = name.toLowerCase().trim();
      var headers = '! ' + keys[name].join(' !! ');
      var table = '{|\n' + headers + '\n' + tmpl + '\n|}';
      var rows = parse$5(table);
      rows = rows.map(function (row) {
        Object.keys(row).forEach(function (k) {
          row[k] = row[k].text();
        });
        return row;
      });
      catcher.templates.push({
        template: 'NBA ' + name + ' statistics',
        data: rows
      }); //return empty string to remove the template from the wiki text

      return '';
    });
  };

  var nba = parseNBA; //this is pretty nuts

  var whichHeadings = function whichHeadings(tmpl) {
    var headings = ['#', 'date', 'opponent', 'score', 'win', 'loss', 'save', 'attendance', 'record'];

    if (/\|stadium=y/i.test(tmpl) === true) {
      headings.splice(7, 0, 'stadium'); //save, stadium, attendance
    }

    if (/\|time=y/i.test(tmpl) === true) {
      headings.splice(7, 0, 'time'); //save, time, stadium, attendance
    }

    if (/\|box=y/i.test(tmpl) === true) {
      headings.push('box'); //record, box
    }

    return headings;
  };
  /**
   *
   * @private
   * @param {object} catcher
   */


  var parseMlb = function parseMlb(catcher) {
    catcher.text = catcher.text.replace(/\{\{mlb game log (section|month)[\s\S]+?\{\{mlb game log (section|month) end\}\}/gi, function (tmpl) {
      var headings = whichHeadings(tmpl);
      tmpl = tmpl.replace(/^\{\{.*?\}\}/, '');
      tmpl = tmpl.replace(/\{\{mlb game log (section|month) end\}\}/i, '');
      var headers = '! ' + headings.join(' !! ');
      var table = '{|\n' + headers + '\n' + tmpl + '\n|}';
      var rows = parse$5(table);
      rows = rows.map(function (row) {
        Object.keys(row).forEach(function (k) {
          row[k] = row[k].text();
        });
        return row;
      });
      catcher.templates.push({
        template: 'mlb game log section',
        data: rows
      }); //return empty string to remove the template from the wiki text

      return '';
    });
  };

  var mlb = parseMlb;
  var headings = ['res', 'record', 'opponent', 'method', 'event', 'date', 'round', 'time', 'location', 'notes'];
  /**
   *
   * https://en.wikipedia.org/wiki/Template:MMA_record_start
   *
   * @private
   * @param {object} catcher
   */

  var parseMMA = function parseMMA(catcher) {
    catcher.text = catcher.text.replace(/\{\{mma record start[\s\S]+?\{\{end\}\}/gi, function (tmpl) {
      tmpl = tmpl.replace(/^\{\{.*?\}\}/, '');
      tmpl = tmpl.replace(/\{\{end\}\}/i, '');
      var headers = '! ' + headings.join(' !! ');
      var table = '{|\n' + headers + '\n' + tmpl + '\n|}';
      var rows = parse$5(table);
      rows = rows.map(function (row) {
        Object.keys(row).forEach(function (k) {
          row[k] = row[k].text();
        });
        return row;
      });
      catcher.templates.push({
        template: 'mma record start',
        data: rows
      }); //return empty string to remove the template from the wiki text

      return '';
    });
  };

  var mma = parseMMA;
  var parseSentence = _04Sentence.fromText;
  /**
   * try to parse out the math and chem templates
   *
   * xml <math>y=mx+b</math> support
   * https://en.wikipedia.org/wiki/Help:Displaying_a_formula
   *
   * @private
   * @param {object} catcher
   */

  var parseMath = function parseMath(catcher) {
    catcher.text = catcher.text.replace(/<math([^>]*?)>([\s\S]+?)<\/math>/g, function (_, attrs, inside) {
      //clean it up a little?
      var formula = parseSentence(inside).text();
      catcher.templates.push({
        template: 'math',
        formula: formula,
        raw: inside
      }); //should we at least try to render it in plaintext? :/

      if (formula && formula.length < 12) {
        return formula;
      } //return empty string to remove the template from the wiki text


      return '';
    }); //try chemistry version too

    catcher.text = catcher.text.replace(/<chem([^>]*?)>([\s\S]+?)<\/chem>/g, function (_, attrs, inside) {
      catcher.templates.push({
        template: 'chem',
        data: inside
      }); //return empty string to remove the template from the wiki text

      return '';
    });
  };

  var math = parseMath;
  /**
   * parses out non standard templates
   *
   * Most templates are '{{template}}',
   * but then, some are '<template></template>' others are {{start}}...{{end}}
   * -> the templates here are of the second type.
   *
   * @private
   * @param {Section} section
   * @param {Document} doc
   * @returns {Object} wikitext
   */

  var xmlTemplates = function xmlTemplates(section, doc) {
    var res = {
      templates: [],
      text: section._wiki
    };
    election(res);
    gallery(res, doc, section);
    math(res);
    mlb(res);
    mma(res);
    nba(res); // turn them into Template objects

    res.templates = res.templates.map(function (obj) {
      return new Template_1(obj);
    });
    return res;
  };

  var startToEnd = xmlTemplates;
  var parse$2 = {
    heading: heading,
    table: table,
    paragraphs: _03Paragraph,
    templates: template,
    references: reference,
    startEndTemplates: startToEnd
  };
  var defaults$2 = {
    tables: true,
    references: true,
    paragraphs: true,
    templates: true,
    infoboxes: true
  };
  /**
   * the Section class represents the different sections of the article.
   * we look for the == title == syntax and split and parse the sections from there
   *
   * @class
   */

  var Section = /*#__PURE__*/function () {
    /**
     * the stuff between headings - 'History' section for example
     *
     * @param {object} data the data already gathered about the section
     * @param {Document} doc the document that this section belongs to
     */
    function Section(data, doc) {
      var _this4 = this;

      _classCallCheck(this, Section);

      var props = {
        doc: doc,
        title: data.title || '',
        depth: data.depth,
        wiki: data.wiki || '',
        templates: [],
        tables: [],
        infoboxes: [],
        references: [],
        paragraphs: []
      };
      Object.keys(props).forEach(function (k) {
        Object.defineProperty(_this4, '_' + k, {
          enumerable: false,
          writable: true,
          value: props[k]
        });
      }); //parse-out <template></template>' and {{start}}...{{end}} templates

      var startEndTemplates = parse$2.startEndTemplates(this, doc);
      this._wiki = startEndTemplates.text;
      this._templates = this._templates.concat(startEndTemplates.templates); //parse-out the <ref></ref> tags

      parse$2.references(this); //parse-out all {{templates}}

      parse$2.templates(this, doc); //parse the tables

      parse$2.table(this); //now parse all double-newlines

      parse$2.paragraphs(this, doc);
    }
    /**
     * returns the title of a section. if no title is available then it returns empty string
     *
     * @returns {string} the title of the section
     */


    _createClass(Section, [{
      key: "title",
      value: function title() {
        return this._title || '';
      }
      /**
       * returns the index of the current section in the document
       *
       * @returns {number | null} the index of the current section in the document
       */

    }, {
      key: "index",
      value: function index() {
        if (!this._doc) {
          return null;
        }

        var index = this._doc.sections().indexOf(this);

        if (index === -1) {
          return null;
        }

        return index;
      }
      /**
       * returns the depth (or indentation) of the section
       * aka how many levels deep is this section located
       *
       * @returns {number} the depth of the section
       */

    }, {
      key: "depth",
      value: function depth() {
        return this._depth;
      }
      /**
       * returns the depth (or indentation) of the section
       * aka how many levels deep is this section located
       *
       * @returns {number} the depth of the section
       */

    }, {
      key: "indentation",
      value: function indentation() {
        return this.depth();
      }
      /**
       * returns all sentences in the section
       * if an clue is provided then it returns the sentence at clue-th index
       *
       * @returns {object | object[]} all sentences in an array or the clue-th sentence
       */

    }, {
      key: "sentences",
      value: function sentences() {
        return this.paragraphs().reduce(function (list, p) {
          return list.concat(p.sentences());
        }, []);
      }
      /**
       * returns all paragraphs in the section
       * if an clue is provided then it returns the paragraph at clue-th index
       *
       * @returns {object | object[]} all paragraphs in an array or the clue-th paragraph
       */

    }, {
      key: "paragraphs",
      value: function paragraphs() {
        return this._paragraphs || [];
      }
      /**
       * returns all links in the section
       * if an clue is provided and it is a number then it returns the link at clue-th index
       * if an clue is provided and it is a string then it returns the link at the that content
       *
       * @param {number| string} [clue] the clue for selecting the link
       * @returns {object | object[]} all links in an array or the clue-th link or the link with the content of clue
       */

    }, {
      key: "links",
      value: function links(clue) {
        var arr = [];
        this.infoboxes().forEach(function (templ) {
          arr.push(templ.links());
        });
        this.sentences().forEach(function (s) {
          arr.push(s.links());
        });
        this.tables().forEach(function (t) {
          arr.push(t.links());
        });
        this.lists().forEach(function (list) {
          arr.push(list.links());
        });
        arr = arr.reduce(function (acc, val) {
          return acc.concat(val);
        }, []) //flatten the array
        .filter(function (val) {
          return val !== undefined;
        }); //filter out all the undefined from the flattened empty arrays

        if (typeof clue === 'string') {
          var _link7 = arr.find(function (o) {
            return o.page().toLowerCase() === clue.toLowerCase();
          });

          return _link7 === undefined ? [] : [_link7];
        }

        return arr;
      }
      /**
       * returns all tables in the section
       * if an clue is provided then it returns the table at clue-th index
       *
       * @returns {object | object[]} all tables in an array or the clue-th infobox
       */

    }, {
      key: "tables",
      value: function tables() {
        return this._tables || [];
      }
      /**
       * returns all templates in the section
       * if an clue is provided and clue is a number then it returns the template at clue-th index
       * if an clue is provided and clue is a string then it returns all template with that name
       *
       * @param {number|string} [clue] the clue for selecting the template
       * @returns {object | object[]} all templates in an array or the clue-th template or all template name `clue`
       */

    }, {
      key: "templates",
      value: function templates(clue) {
        var arr = this._templates || []; // arr = arr.map((t) => t.json())

        if (typeof clue === 'string') {
          clue = clue.toLowerCase();
          return arr.filter(function (o) {
            return o.data.template === clue || o.data.name === clue;
          });
        }

        return arr;
      }
      /**
       * returns all infoboxes in the section
       * if an clue is provided then it returns the infobox at clue-th index
       *
       * @param {number|string} [clue] the clue for selecting the infobox
       * @returns {object | object[]} all infoboxes in an array or the clue-th infobox
       */

    }, {
      key: "infoboxes",
      value: function infoboxes(clue) {
        var arr = this._infoboxes || [];

        if (typeof clue === 'string') {
          clue = clue.replace(/^infobox /i, '');
          clue = clue.trim().toLowerCase();
          return arr.filter(function (info) {
            return info._type === clue;
          });
        }

        return arr;
      }
      /**
       * returns all lists in the section
       * if an clue is provided then it returns the list at clue-th index
       *
       * @returns {object | object[]} all lists in an array or the clue-th list
       */

    }, {
      key: "coordinates",
      value: function coordinates() {
        var arr = [].concat(_toConsumableArray(this.templates('coord')), _toConsumableArray(this.templates('coor')));
        return arr.map(function (tmpl) {
          return tmpl.json();
        });
      }
      /**
       * returns all lists in the section
       * if an clue is provided then it returns the list at clue-th index
       *
       * @returns {object | object[]} all lists in an array or the clue-th list
       */

    }, {
      key: "lists",
      value: function lists() {
        var arr = [];
        this.paragraphs().forEach(function (p) {
          arr = arr.concat(p.lists());
        });
        return arr;
      }
      /**
       * returns all interwiki links in the section
       * if an clue is provided then it returns the interwiki link at clue-th index
       *
       * @returns {object | object[]} all interwiki links in an array or the clue-th interwiki link
       */

    }, {
      key: "interwiki",
      value: function interwiki() {
        var arr = [];
        this.paragraphs().forEach(function (p) {
          arr = arr.concat(p.interwiki());
        });
        return arr;
      }
      /**
       * returns all images in the section
       * if an clue is provided then it returns the image at clue-th index
       *
       * @returns {Image | Image[]} all images in an array or the clue-th image
       */

    }, {
      key: "images",
      value: function images() {
        var arr = [];
        this.paragraphs().forEach(function (p) {
          arr = arr.concat(p.images());
        });
        return arr;
      }
      /**
       * returns all references in the section
       * if an clue is provided then it returns the reference at clue-th index
       *
       * @returns {object | object[]} all references in an array or the clue-th reference
       */

    }, {
      key: "references",
      value: function references() {
        return this._references || [];
      } //transformations

      /**
       * Removes the section from the document
       *
       * @returns {null|Document} the document without this section. or null if there is no document
       */

    }, {
      key: "remove",
      value: function remove() {
        if (!this._doc) {
          return null;
        }

        var bads = {};
        bads[this.title()] = true; //remove children too

        this.children().forEach(function (sec) {
          return bads[sec.title()] = true;
        });

        var sections = this._doc.sections();

        sections = sections.filter(function (sec) {
          return bads.hasOwnProperty(sec.title()) !== true;
        });
        sections = sections.filter(function (sec) {
          return bads.hasOwnProperty(sec.title()) !== true;
        });
        this._doc._sections = sections;
        return this._doc;
      } //move-around sections like in jquery

      /**
       * returns the next sibling of this section
       * if it can find one then it returns null
       *
       * @returns {Section|null} the next sibling
       */

    }, {
      key: "nextSibling",
      value: function nextSibling() {
        //if this section is not part of a document then we can go to the next part of the document
        if (!this._doc) {
          return null;
        } //first we get the a list of sections and our own position in this list


        var sections = this._doc.sections();

        var index = this.index() || 0; //then we look trough the list looking for the next sibling
        //aka we look the next item at the same depth as us
        //so we start the loop at the next section in the list and go till the length of the list

        for (var i = index + 1; i < sections.length; i++) {
          //if the depth is smaller then the current depth then there is no next sibling
          //aka the depth of the section at position i a level higher then this section then this section is the last section at this depth
          if (sections[i].depth() < this.depth()) {
            return null;
          } //if the section has the same depth as the current section then it is the next sibling


          if (sections[i].depth() === this.depth()) {
            return sections[i];
          }
        } //if the loop has no results then there is no next sibling and we are at the end of the file


        return null;
      }
      /**
       * returns the next sibling of this section
       * if it can find one then it returns null
       *
       * @returns {Section|null} the next sibling
       */

    }, {
      key: "next",
      value: function next() {
        return this.nextSibling();
      }
      /**
       * returns the previous section
       *
       * @returns {Section|null} the previous section
       */

    }, {
      key: "lastSibling",
      value: function lastSibling() {
        if (!this._doc) {
          return null;
        }

        var sections = this._doc.sections();

        var index = this.index() || 0;
        return sections[index - 1] || null;
      }
      /**
       * returns the previous section
       *
       * @returns {Section|null} the previous section
       */

    }, {
      key: "last",
      value: function last() {
        return this.lastSibling();
      }
      /**
       * returns the previous section
       *
       * @returns {Section|null} the previous section
       */

    }, {
      key: "previousSibling",
      value: function previousSibling() {
        return this.lastSibling();
      }
      /**
       * returns the previous section
       *
       * @returns {Section|null} the previous section
       */

    }, {
      key: "previous",
      value: function previous() {
        return this.lastSibling();
      }
      /**
       * returns all the children of a section
       *
       * If the clue is a string then it will return the child with that exact title
       * Else if the clue is a number then it returns the child at that index
       * Else it returns all the children
       *
       * @param {number | string} [clue] A title of a section or a index of a wanted section
       * @returns {Section | Section[] | null} A section or a array of sections
       */

    }, {
      key: "children",
      value: function children(clue) {
        if (!this._doc) {
          return null;
        }

        var sections = this._doc.sections();

        var index = this.index() || 0;
        var children = []; //(immediately preceding sections with higher depth)

        if (sections[index + 1] && sections[index + 1].depth() > this.depth()) {
          for (var i = index + 1; i < sections.length; i += 1) {
            if (sections[i].depth() > this.depth()) {
              children.push(sections[i]);
            } else {
              break;
            }
          }
        }

        if (typeof clue === 'string') {
          return children.find(function (s) {
            return s.title().toLowerCase() === clue.toLowerCase();
          });
        }

        return children;
      }
      /**
       * returns all the children of a section
       *
       * If the clue is a string then it will return the child with that exact title
       * Else if the clue is a number then it returns the child at that index
       * Else it returns all the children
       *
       * @param {number | string} [clue] A title of a section or a index of a wanted section
       * @returns {Section | Section[] | null} A section or a array of sections
       */

    }, {
      key: "sections",
      value: function sections(clue) {
        return this.children(clue);
      }
      /**
       * returns all the parent of a section
       *
       * @returns {Section | null} A section that is the parent of a section
       */

    }, {
      key: "parent",
      value: function parent() {
        if (!this._doc) {
          return null;
        }

        var sections = this._doc.sections();

        var index = this.index() || 0;

        for (var i = index; i >= 0; i -= 1) {
          if (sections[i] && sections[i].depth() < this.depth()) {
            return sections[i];
          }
        }

        return null;
      } //outputs

      /**
       * returns a plaintext version of the section
       *
       * @param {object} options options for the text transformation
       * @returns {string} the section in text
       */

    }, {
      key: "text",
      value: function text(options) {
        options = setDefaults_1(options, defaults$2);
        return this.paragraphs().map(function (p) {
          return p.text(options);
        }).join('\n\n');
      }
      /**
       * returns original wiki markup
       *
       * @returns {string} the original markup
       */

    }, {
      key: "wikitext",
      value: function wikitext() {
        return this._wiki;
      }
      /**
       * returns a json version of the section
       *
       * @param {object} options keys to include in the resulting json
       * @returns {object} the section in json
       */

    }, {
      key: "json",
      value: function json(options) {
        options = setDefaults_1(options, defaults$2);
        return toJson$4(this, options);
      }
    }]);

    return Section;
  }();

  Section.prototype.citations = Section.prototype.references; // aliases

  var singular$1 = {
    sentences: 'sentence',
    paragraphs: 'paragraph',
    links: 'link',
    tables: 'table',
    templates: 'template',
    infoboxes: 'infobox',
    coordinates: 'coordinate',
    lists: 'list',
    images: 'image',
    references: 'reference',
    citations: 'citation'
  };
  Object.keys(singular$1).forEach(function (k) {
    var sing = singular$1[k];

    Section.prototype[sing] = function (clue) {
      var arr = this[k](clue);

      if (typeof clue === 'number') {
        return arr[clue];
      }

      return arr[0] || null;
    };
  });
  var Section_1 = Section;
  var isReference = new RegExp('^(' + i18n.references.join('|') + '):?', 'i');
  var section_reg = /(?:\n|^)(={2,5}.{1,200}?={2,5})/g; //interpret ==heading== lines

  var parse$1 = {
    heading: heading
  };
  /**
   * filters out the reference section and empty sections and
   *
   * @param {Section[]} sections
   * @returns {Section[]} all the section
   */

  var removeReferenceSection = function removeReferenceSection(sections) {
    return sections.filter(function (s, i) {
      if (isReference.test(s.title()) === true) {
        if (s.paragraphs().length > 0) {
          return true;
        } //does it have some wacky templates?


        if (s.templates().length > 0) {
          return true;
        } //what it has children? awkward


        if (sections[i + 1] && sections[i + 1].depth() > s.depth()) {
          sections[i + 1]._depth -= 1; //move it up a level?...
        }

        return false;
      }

      return true;
    });
  };
  /**
   * this function splits the wiki texts on '=' and puts every part in a Section Object
   * it also pre processes the section text for the Section object
   * then it filters out the reference section
   *
   * @private
   * @param {Document} doc the document that contains the wiki text
   * @returns {Section[]} the sections that are parsed out
   */


  var parseSections = function parseSections(doc) {
    var sections = [];

    var splits = doc._wiki.split(section_reg);

    for (var i = 0; i < splits.length; i += 2) {
      var _heading = splits[i - 1] || '';

      var wiki = splits[i] || '';

      if (wiki === '' && _heading === '') {
        //usually an empty 'intro' section
        continue;
      }

      var data = {
        title: '',
        depth: null,
        wiki: wiki
      }; //figure-out title and depth

      parse$1.heading(data, _heading);
      sections.push(new Section_1(data, doc));
    } //remove empty references section


    return removeReferenceSection(sections);
  };

  var _02Section = parseSections;
  var cat_reg = new RegExp('\\[\\[:?(' + i18n.categories.join('|') + '):(.{2,178}?)]](w{0,10})', 'ig');
  var cat_remove_reg = new RegExp('^\\[\\[:?(' + i18n.categories.join('|') + '):', 'ig');

  var parse_categories = function parse_categories(wiki) {
    var categories = [];
    var tmp = wiki.match(cat_reg); //regular links

    if (tmp) {
      tmp.forEach(function (c) {
        c = c.replace(cat_remove_reg, '');
        c = c.replace(/\|?[ \*]?\]\]$/i, ''); //parse fancy ones..

        c = c.replace(/\|.*/, ''); //everything after the '|' is metadata

        if (c && !c.match(/[\[\]]/)) {
          categories.push(c.trim());
        }
      });
    }

    var newWiki = wiki.replace(cat_reg, '');
    return [categories, newWiki];
  };

  var categories = parse_categories;
  var parse = {
    section: _02Section,
    categories: categories
  };
  var defaults$1 = {
    tables: true,
    lists: true,
    paragraphs: true
  };
  /**
   * The document class is the main entry point of wtf_wikipedia.
   * this class represents an article of wikipedia.
   * from here you can go to the infoboxes or paragraphs
   *
   * @class
   */

  var Document = /*#__PURE__*/function () {
    /**
     * The constructor for the document class
     * This function starts parsing the wiki text and sets the options in the class
     *
     * @param {string} [wiki] The wiki text
     * @param {object} [options] The options for the parser
     */
    function Document(wiki, options) {
      var _this5 = this;

      _classCallCheck(this, Document);

      options = options || {};
      var props = {
        pageID: options.pageID || options.id || null,
        namespace: options.namespace || options.ns || null,
        lang: options.lang || options.language || null,
        domain: options.domain || null,
        title: options.title || null,
        type: 'page',
        redirectTo: null,
        wikidata: options.wikidata || null,
        wiki: wiki || '',
        categories: [],
        sections: [],
        coordinates: []
      }; // this._missing_templates = {} //for stats+debugging purposes

      Object.keys(props).forEach(function (k) {
        Object.defineProperty(_this5, '_' + k, {
          enumerable: false,
          writable: true,
          value: props[k]
        });
      }); //detect if page is just redirect, and return it

      if (redirects.isRedirect(this._wiki) === true) {
        this._type = 'redirect';
        this._redirectTo = redirects.parse(this._wiki);

        var _parse$categories = parse.categories(this._wiki),
            _parse$categories2 = _slicedToArray(_parse$categories, 2),
            _categories = _parse$categories2[0],
            _newWiki = _parse$categories2[1];

        this._categories = _categories;
        this._wiki = _newWiki;
        return;
      } //give ourselves a little head-start


      this._wiki = preProcess_1(this._wiki); //pull-out [[category:whatevers]]

      var _parse$categories3 = parse.categories(this._wiki),
          _parse$categories4 = _slicedToArray(_parse$categories3, 2),
          categories = _parse$categories4[0],
          newWiki = _parse$categories4[1];

      this._categories = categories;
      this._wiki = newWiki; //parse all the headings, and their texts/sentences

      this._sections = parse.section(this);
    }
    /**
     * Getter and setter for the tile.
     * If string is given then this function is a setter and sets the variable and returns the set value
     * If the string is not given then it will check if the title is available
     * If it is available it returns the title.
     * Else it will look if the first sentence contains a bolded phrase and assumes that's the title and returns it
     *
     * @param {string} [str] The title that will be set
     * @returns {null|string} The title found or given
     */


    _createClass(Document, [{
      key: "title",
      value: function title(str) {
        //use like a setter
        if (str !== undefined) {
          this._title = str;
          return str;
        } //if we have it already


        if (this._title) {
          return this._title;
        } //guess the title of this page from first sentence bolding


        var guess = null;
        var sen = this.sentence();

        if (sen) {
          guess = sen.bold();
        }

        return guess;
      }
      /**
       * If an pageID is given then it sets the pageID and returns the given pageID
       * Else if the pageID is already set it returns the pageID
       *
       * @param {number} [id] The pageID that will be set
       * @returns {number|null} The given or found pageID
       */

    }, {
      key: "pageID",
      value: function pageID(id) {
        if (id !== undefined) {
          this._pageID = id;
        }

        return this._pageID || null;
      }
      /**
       * If an WikidataID is given then it sets the WikidataID and returns the given WikidataID
       * Else if the WikidataID is already set it returns the WikidataID
       *
       * @param {string} [id] The WikidataID that will be set
       * @returns {string|null} The given or found WikidataID
       */

    }, {
      key: "wikidata",
      value: function wikidata(id) {
        if (id !== undefined) {
          this._wikidata = id;
        }

        return this._wikidata || null;
      }
      /**
       * If an domain is given then it sets the domain and returns the given domain
       * Else if the domain is already set it returns the domain
       *
       * @param {string} [str] The domain that will be set
       * @returns {string|null} The given or found domain
       */

    }, {
      key: "domain",
      value: function domain(str) {
        if (str !== undefined) {
          this._domain = str;
        }

        return this._domain || null;
      }
      /**
       * If an language is given then it sets the language and returns the given language
       * Else if the language is already set it returns the language
       *
       * @param {string} [lang] The language that will be set
       * @returns {string|null} The given or found language
       */

    }, {
      key: "language",
      value: function language(lang) {
        if (lang !== undefined) {
          this._lang = lang;
        }

        return this._lang || null;
      }
      /**
       * Gets the url of the page
       * If the language or domain is not available we substitute 'en' and 'wikipedia.org'
       * Then we use the template of `https://${lang}.${domain}/wiki/${title}` to make the url
       *
       * @returns {string|null} The url of the page
       */

    }, {
      key: "url",
      value: function url() {
        var title = this.title();

        if (!title) {
          return null;
        }

        var lang = this.language() || 'en';
        var domain = this.domain() || 'wikipedia.org'; //replace blank to underscore

        title = title.replace(/ /g, '_');
        title = encodeURIComponent(title);
        return "https://".concat(lang, ".").concat(domain, "/wiki/").concat(title);
      }
      /**
       * If an namespace is given then it sets the namespace and returns the given namespace
       * Else if the namespace is already set it returns the namespace
       *
       * @param {string} [ns] The namespace that will be set
       * @returns {string|null} The given or found namespace
       */

    }, {
      key: "namespace",
      value: function namespace(ns) {
        if (ns !== undefined) {
          this._namespace = ns;
        }

        return this._namespace || null;
      }
      /**
       * Returns if the page is a redirect
       *
       * @returns {boolean} Is the page a redirect
       */

    }, {
      key: "isRedirect",
      value: function isRedirect() {
        return this._type === 'redirect';
      }
      /**
       * Returns information about the page this page redirects to
       *
       * @returns {null|object} The redirected page
       */

    }, {
      key: "redirectTo",
      value: function redirectTo() {
        return this._redirectTo;
      }
      /**
       * This function finds out if a page is a disambiguation page
       *
       * @returns {boolean} Whether the page is a disambiguation page
       */

    }, {
      key: "isDisambiguation",
      value: function isDisambiguation() {
        return isDisambig_1(this);
      }
      /**
       * If a clue is available return the category at that index
       * Else return all categories
       *
       * @returns {string | string[]} The category at the provided index or all categories
       */

    }, {
      key: "categories",
      value: function categories(clue) {
        var arr = this._categories || [];

        if (typeof clue === 'number') {
          return [arr[clue]];
        }

        return arr;
      }
      /**
       * returns the sections of the document
       *
       * If the clue is a string then it will return the section with that exact title
       * Else if the clue is a number then it returns the section at that index
       * Else it returns all the sections
       *
       * @param {number | string} [clue] A title of a section or a index of a wanted section
       * @returns {object | object[]} A section or a array of sections
       */

    }, {
      key: "sections",
      value: function sections(clue) {
        var _this6 = this;

        var arr = this._sections || [];
        arr.forEach(function (sec) {
          // link-up parent and child
          sec._doc = _this6;
        }); //grab a specific section, by its title

        if (typeof clue === 'string') {
          var str = clue.toLowerCase().trim();
          return arr.filter(function (s) {
            return s.title().toLowerCase() === str;
          });
        } else if (typeof clue === 'number') {
          return [arr[clue]];
        }

        return arr;
      }
      /**
       * Returns the paragraphs in the document
       *
       * If the clue is a number then it returns the paragraph at that index
       * Else it returns all paragraphs in an array
       * @param {number | string} [clue] given index of a paragraph
       * @returns {object | object[]} the selected paragraph or an array of all paragraphs
       */

    }, {
      key: "paragraphs",
      value: function paragraphs(clue) {
        var arr = [];
        this.sections().forEach(function (s) {
          arr = arr.concat(s.paragraphs());
        });

        if (typeof clue === 'number') {
          return [arr[clue]];
        }

        return arr;
      }
      /**
       * if no clue is provided, it compiles an array of sentences in the wiki text.
       * if the clue is provided it return the sentence at the provided index
       * @param {number | string} [clue] given index of a sentence
       * @returns {object[]|object} an array of sentences or a single sentence
       */

    }, {
      key: "sentences",
      value: function sentences(clue) {
        var arr = [];
        this.sections().forEach(function (sec) {
          arr = arr.concat(sec.sentences());
        });

        if (typeof clue === 'number') {
          return [arr[clue]];
        }

        return arr;
      }
      /**
       * This function search the whole page, including the infobox and image gallery templates for images
       * and then returns them in an array if no clue is provided.
       * if an clue is profieded then it returns the image at the clue-th index
       *
       * @returns {Image[]|Image} a single image or an array of images
       */

    }, {
      key: "images",
      value: function images(clue) {
        var _this7 = this;

        var arr = _sectionMap(this, 'images', null); //grab image from infobox, first


        this.infoboxes().forEach(function (info) {
          var img = info.image();

          if (img) {
            arr.unshift(img); //put it at the top
          }
        }); //look for 'gallery' templates, too

        this.templates().forEach(function (obj) {
          if (obj.data.template === 'gallery') {
            obj.data.images = obj.data.images || [];
            obj.data.images.forEach(function (img) {
              if (!(img instanceof Image_1)) {
                img.language = _this7.language();
                img.domain = _this7.domain();
                img = new Image_1(img);
              }

              arr.push(img);
            });
          }
        });

        if (typeof clue === 'number') {
          return [arr[clue]];
        }

        return arr;
      }
      /**
       * Return all links or if a clue is provided only the link at that index
       *
       * @param {number} [clue] the index of the wanted link
       * @returns {string[]|string} all the links or the selected link
       */

    }, {
      key: "links",
      value: function links(clue) {
        return _sectionMap(this, 'links', clue);
      }
      /**
       * Return all inter wiki links or if a clue is provided only the inter wiki link at that index
       *
       * @param {number} [clue] the index of the wanted inter wiki link
       * @returns {string[]|string} all the inter wiki links or the selected inter wiki link
       */

    }, {
      key: "interwiki",
      value: function interwiki(clue) {
        return _sectionMap(this, 'interwiki', clue);
      }
      /**
       * If a clue is available return the list at that index
       * Else return all lists
       *
       * @param {number} [clue] The index of the wanted list
       * @returns {object | object[]} The list at the provided index or all lists
       */

    }, {
      key: "lists",
      value: function lists(clue) {
        return _sectionMap(this, 'lists', clue);
      }
      /**
       * If a clue is available return the tables at that index
       * Else return all tables
       *
       * @param {number} [clue] The index of the wanted table
       * @returns {object | object[]} The table at the provided index or all tables
       */

    }, {
      key: "tables",
      value: function tables(clue) {
        return _sectionMap(this, 'tables', clue);
      }
      /**
       * If a clue is available return the template at that index
       * Else return all templates
       *
       * @param {number} [clue] The index of the wanted template
       * @returns {object | object[]} The category at the provided index or all categories
       */

    }, {
      key: "templates",
      value: function templates(clue) {
        return _sectionMap(this, 'templates', clue);
      }
      /**
       * If a clue is available return the references at that index
       * Else return all references
       *
       * @param {number} [clue] The index of the wanted references
       * @returns {object | object[]} The category at the provided index or all references
       */

    }, {
      key: "references",
      value: function references(clue) {
        return _sectionMap(this, 'references', clue);
      }
      /**
       * Returns the 0th or clue-th reference
       *
       * @param {number} [clue] The index of the wanted reference
       * @returns {object|string|number} The reference at the provided index
       */

    }, {
      key: "citations",
      value: function citations(clue) {
        return this.references(clue);
      }
      /**
       * finds and returns all coordinates
       * or if an clue is given, the coordinate at the index
       *
       * @param {number} [clue] the index of the coordinate returned
       * @returns {object[]|object|null} if a clue is given, the coordinate of null, else an array of coordinates
       */

    }, {
      key: "coordinates",
      value: function coordinates(clue) {
        return _sectionMap(this, 'coordinates', clue);
      }
      /**
       * If clue is unidentified then it returns all infoboxes
       * If clue is a number then it returns the infobox at that index
       * It always sorts the infoboxes by size
       *
       * @param {number} [clue] the index of the infobox you want to select
       * @returns {object | object[]} the selected infobox or an array of infoboxes
       */

    }, {
      key: "infoboxes",
      value: function infoboxes(clue) {
        var arr = _sectionMap(this, 'infoboxes', clue); //sort them by biggest-first


        arr = arr.sort(function (a, b) {
          if (Object.keys(a.data).length > Object.keys(b.data).length) {
            return -1;
          }

          return 1;
        });
        return arr;
      }
      /**
       * return a plain text version of the wiki article
       *
       * @param {object} [options] the options for the parser
       * @returns {string} the plain text version of the article
       */

    }, {
      key: "text",
      value: function text(options) {
        options = setDefaults_1(options, defaults$1); //nah, skip these.

        if (this.isRedirect() === true) {
          return '';
        }

        var arr = this.sections().map(function (sec) {
          return sec.text(options);
        });
        return arr.join('\n\n');
      }
      /**
       * return a json version of the Document class
       *
       * @param {object} [options] options for the rendering
       * @returns {object} this document as json
       */

    }, {
      key: "json",
      value: function json(options) {
        options = setDefaults_1(options, defaults$1);
        return toJson$6(this, options);
      }
      /**
       * return original wiki markup
       *
       * @returns {string} markup text
       */

    }, {
      key: "wikitext",
      value: function wikitext() {
        return this._wiki || '';
      }
      /**
       * prints the title of every section
       *
       * @returns {Document} the document itself
       */

    }, {
      key: "debug",
      value: function debug() {
        console.log('\n');
        this.sections().forEach(function (sec) {
          var indent = ' - ';

          for (var i = 0; i < sec.depth(); i += 1) {
            indent = ' -' + indent;
          }

          console.log(indent + (sec.title() || '(Intro)'));
        });
        return this;
      }
    }]);

    return Document;
  }(); // aliases


  var singular = {
    categories: 'category',
    sections: 'section',
    paragraphs: 'paragraph',
    sentences: 'sentence',
    images: 'image',
    links: 'link',
    // interwiki
    lists: 'list',
    tables: 'table',
    templates: 'template',
    references: 'reference',
    citations: 'citation',
    coordinates: 'coordinate',
    infoboxes: 'infobox'
  };
  Object.keys(singular).forEach(function (k) {
    var sing = singular[k];

    Document.prototype[sing] = function (clue) {
      var arr = this[k](clue);
      return arr[0] || null;
    };
  });
  Document.prototype.lang = Document.prototype.language;
  Document.prototype.ns = Document.prototype.namespace;
  Document.prototype.plaintext = Document.prototype.text;
  Document.prototype.isDisambig = Document.prototype.isDisambiguation;
  Document.prototype.citations = Document.prototype.references;
  Document.prototype.redirectsTo = Document.prototype.redirectTo;
  Document.prototype.redirect = Document.prototype.redirectTo;
  Document.prototype.redirects = Document.prototype.redirectTo;
  var Document_1 = Document;
  /**
   * this function puts all responses into proper Document objects
   *
   * @private
   * @param {Array} res
   * @returns {null| Document | Document[]} null if there are no results or Document if there is one responses and Document array if there are multiple responses
   */

  var parseDoc = function parseDoc(res) {
    // filter out undefined
    res = res.filter(function (o) {
      return o;
    }); // put all the responses into Document formats

    var docs = res.map(function (o) {
      return new Document_1(o.wiki, o.meta);
    }); // if the list is empty than there are no results

    if (docs.length === 0) {
      return null;
    } // if there is only one response then we can get it out of the array


    if (docs.length === 1) {
      return docs[0];
    }

    return docs;
  };

  var parseDoc_1 = parseDoc;
  /**
   * factory for header options
   *
   * @private
   * @param {object} options
   * @returns {object} the generated options
   */

  var makeHeaders = function makeHeaders(options) {
    var agent = options.userAgent || options['User-Agent'] || options['Api-User-Agent'] || 'User of the wtf_wikipedia library';
    var origin;

    if (options.noOrigin) {
      origin = '';
    } else {
      origin = options.origin || options.Origin || '*';
    }

    return {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Api-User-Agent': agent,
        'User-Agent': agent,
        Origin: origin,
        'Accept-Encoding': 'gzip'
      },
      redirect: 'follow'
    };
  };

  var _headers = makeHeaders;
  var isUrl = /^https?:\/\//;
  /**
   * @typedef fetchDefaults
   * @property {string | undefined} [path]
   * @property {string | undefined} [wiki]
   * @property {string | undefined} [domain]
   * @property {boolean | undefined} [follow_redirects]
   * @property {string | undefined} [lang]
   * @property {string | number | Array<string> | Array<number> | undefined} [title]
   * @property {string | undefined} [Api-User-Agent]
   */

  /**
   * @type {fetchDefaults}
   */

  var defaults = {
    lang: 'en',
    wiki: 'wikipedia',
    domain: undefined,
    follow_redirects: true,
    path: 'api.php' //some 3rd party sites use a weird path

  };
  /**
   * @callback fetchCallback
   * @param {Object} error
   * @param {(null | Document | Document[])} response
   */

  /**
   *  fetches the page from the wiki and returns a Promise with the parsed wiki text
   *
   * @param {string | number | Array<number> | Array<string>} title the title, PageID, URL or an array of all three of the page(s) you want to fetch
   * @param {fetchDefaults} [options] the options for the fetch or the language of the wiki for the article
   * @param {fetchCallback} [callback] the callback function for the call
   * @returns {Promise<null | Document | Document[]>} either null if the pages is not found, Document if you asked for one result, and a array of Documents if you asked for multiple pages
   */

  var fetch$1 = function fetch$1(title, options, callback) {
    // support lang as 2nd param
    if (typeof options === 'string') {
      options = {
        lang: options
      };
    }

    options = _objectSpread(_objectSpread({}, defaults), options);
    options.title = title; //parse url input

    if (typeof title === 'string' && isUrl.test(title)) {
      options = _objectSpread(_objectSpread({}, options), parseUrl_1(title));
    }

    var url = makeUrl_1(options);

    var headers = _headers(options);

    return browser(url, headers).then(function (res) {
      return res.json();
    }).then(function (res) {
      var data = getResult_1(res, options);
      data = parseDoc_1(data);

      if (callback) {
        callback(null, data);
      }

      return data;
    }).catch(function (e) {
      console.error(e);

      if (callback) {
        callback(e, null);
      }

      return null;
    });
  };

  var _fetch = fetch$1;
  var _version = '9.0.0';
  /**
   * use the native client-side fetch function
   *
   * @private
   * @param {string} url the url that well be fetched
   * @param {RequestInit} opts the options for fetch
   * @returns {Promise<any>} the response from fetch
   */

  var request = function request(url, opts) {
    return browser(url, opts).then(function (res) {
      return res.json();
    });
  };

  var fetch = request;

  var wtf = function wtf(wiki, options) {
    return new Document_1(wiki, options);
  }; //export classes for plugin development


  var models = {
    Doc: Document_1,
    Section: Section_1,
    Paragraph: Paragraph_1,
    Sentence: Sentence_1,
    Image: Image_1,
    Infobox: Infobox_1,
    Link: Link_1,
    List: List_1,
    Reference: Reference_1,
    Table: Table_1,
    Template: Template_1,
    http: fetch,
    wtf: wtf
  };

  wtf.fetch = function (title, lang, options, cb) {
    return _fetch(title, lang, options);
  };

  wtf.extend = function (fn) {
    fn(models, custom, _infoboxes);
    return this;
  };

  wtf.plugin = wtf.extend;
  wtf.version = _version;
  var src = wtf;
  return src;
});
},{"process":"../node_modules/process/browser.js"}],"../assets/icon-chevron.svg":[function(require,module,exports) {
module.exports = "/icon-chevron.6a58cf62.svg";
},{}],"../assets/icon-hamburger.svg":[function(require,module,exports) {
module.exports = "/icon-hamburger.22461109.svg";
},{}],"../assets/icon-source.svg":[function(require,module,exports) {
module.exports = "/icon-source.1426cf6d.svg";
},{}],"../assets/planet-earth-atmosphere.svg":[function(require,module,exports) {
module.exports = "/planet-earth-atmosphere.f3aad5dd.svg";
},{}],"../assets/planet-earth-internal.svg":[function(require,module,exports) {
module.exports = "/planet-earth-internal.7443e0a1.svg";
},{}],"../assets/planet-earth.svg":[function(require,module,exports) {
module.exports = "/planet-earth.9997cbe3.svg";
},{}],"../assets/planet-jupiter-atmosphere.svg":[function(require,module,exports) {
module.exports = "/planet-jupiter-atmosphere.726d7bd6.svg";
},{}],"../assets/planet-jupiter-internal.svg":[function(require,module,exports) {
module.exports = "/planet-jupiter-internal.01ddbee7.svg";
},{}],"../assets/planet-jupiter.svg":[function(require,module,exports) {
module.exports = "/planet-jupiter.3271910b.svg";
},{}],"../assets/planet-mars-internal.svg":[function(require,module,exports) {
module.exports = "/planet-mars-internal.5c68b70b.svg";
},{}],"../assets/planet-mars-atmosphere.svg":[function(require,module,exports) {
module.exports = "/planet-mars-atmosphere.865165ac.svg";
},{}],"../assets/planet-mars.svg":[function(require,module,exports) {
module.exports = "/planet-mars.9a367409.svg";
},{}],"../assets/planet-mercury-atmosphere.svg":[function(require,module,exports) {
module.exports = "/planet-mercury-atmosphere.5e38a157.svg";
},{}],"../assets/planet-mercury-internal.svg":[function(require,module,exports) {
module.exports = "/planet-mercury-internal.b863a259.svg";
},{}],"../assets/planet-mercury.svg":[function(require,module,exports) {
module.exports = "/planet-mercury.c3bda687.svg";
},{}],"../assets/planet-neptune-atmosphere.svg":[function(require,module,exports) {
module.exports = "/planet-neptune-atmosphere.19b5ea83.svg";
},{}],"../assets/planet-neptune-internal.svg":[function(require,module,exports) {
module.exports = "/planet-neptune-internal.2479d561.svg";
},{}],"../assets/planet-neptune.svg":[function(require,module,exports) {
module.exports = "/planet-neptune.83cfdeaf.svg";
},{}],"../assets/planet-saturn-atmosphere.svg":[function(require,module,exports) {
module.exports = "/planet-saturn-atmosphere.88af81bf.svg";
},{}],"../assets/planet-saturn-internal.svg":[function(require,module,exports) {
module.exports = "/planet-saturn-internal.a2c572de.svg";
},{}],"../assets/planet-saturn.svg":[function(require,module,exports) {
module.exports = "/planet-saturn.ee3b416a.svg";
},{}],"../assets/planet-uranus-atmosphere.svg":[function(require,module,exports) {
module.exports = "/planet-uranus-atmosphere.6d5519bf.svg";
},{}],"../assets/planet-uranus-internal.svg":[function(require,module,exports) {
module.exports = "/planet-uranus-internal.3fdfe820.svg";
},{}],"../assets/planet-uranus.svg":[function(require,module,exports) {
module.exports = "/planet-uranus.2c56909d.svg";
},{}],"../assets/planet-venus-atmosphere.svg":[function(require,module,exports) {
module.exports = "/planet-venus-atmosphere.19bc1530.svg";
},{}],"../assets/planet-venus-internal.svg":[function(require,module,exports) {
module.exports = "/planet-venus-internal.070667b6.svg";
},{}],"../assets/planet-venus.svg":[function(require,module,exports) {
module.exports = "/planet-venus.fab210c3.svg";
},{}],"../assets/*.svg":[function(require,module,exports) {
module.exports = {
  "icon-chevron": require("./icon-chevron.svg"),
  "icon-hamburger": require("./icon-hamburger.svg"),
  "icon-source": require("./icon-source.svg"),
  "planet-earth-atmosphere": require("./planet-earth-atmosphere.svg"),
  "planet-earth-internal": require("./planet-earth-internal.svg"),
  "planet-earth": require("./planet-earth.svg"),
  "planet-jupiter-atmosphere": require("./planet-jupiter-atmosphere.svg"),
  "planet-jupiter-internal": require("./planet-jupiter-internal.svg"),
  "planet-jupiter": require("./planet-jupiter.svg"),
  "planet-mars-internal": require("./planet-mars-internal.svg"),
  "planet-mars-atmosphere": require("./planet-mars-atmosphere.svg"),
  "planet-mars": require("./planet-mars.svg"),
  "planet-mercury-atmosphere": require("./planet-mercury-atmosphere.svg"),
  "planet-mercury-internal": require("./planet-mercury-internal.svg"),
  "planet-mercury": require("./planet-mercury.svg"),
  "planet-neptune-atmosphere": require("./planet-neptune-atmosphere.svg"),
  "planet-neptune-internal": require("./planet-neptune-internal.svg"),
  "planet-neptune": require("./planet-neptune.svg"),
  "planet-saturn-atmosphere": require("./planet-saturn-atmosphere.svg"),
  "planet-saturn-internal": require("./planet-saturn-internal.svg"),
  "planet-saturn": require("./planet-saturn.svg"),
  "planet-uranus-atmosphere": require("./planet-uranus-atmosphere.svg"),
  "planet-uranus-internal": require("./planet-uranus-internal.svg"),
  "planet-uranus": require("./planet-uranus.svg"),
  "planet-venus-atmosphere": require("./planet-venus-atmosphere.svg"),
  "planet-venus-internal": require("./planet-venus-internal.svg"),
  "planet-venus": require("./planet-venus.svg")
};
},{"./icon-chevron.svg":"../assets/icon-chevron.svg","./icon-hamburger.svg":"../assets/icon-hamburger.svg","./icon-source.svg":"../assets/icon-source.svg","./planet-earth-atmosphere.svg":"../assets/planet-earth-atmosphere.svg","./planet-earth-internal.svg":"../assets/planet-earth-internal.svg","./planet-earth.svg":"../assets/planet-earth.svg","./planet-jupiter-atmosphere.svg":"../assets/planet-jupiter-atmosphere.svg","./planet-jupiter-internal.svg":"../assets/planet-jupiter-internal.svg","./planet-jupiter.svg":"../assets/planet-jupiter.svg","./planet-mars-internal.svg":"../assets/planet-mars-internal.svg","./planet-mars-atmosphere.svg":"../assets/planet-mars-atmosphere.svg","./planet-mars.svg":"../assets/planet-mars.svg","./planet-mercury-atmosphere.svg":"../assets/planet-mercury-atmosphere.svg","./planet-mercury-internal.svg":"../assets/planet-mercury-internal.svg","./planet-mercury.svg":"../assets/planet-mercury.svg","./planet-neptune-atmosphere.svg":"../assets/planet-neptune-atmosphere.svg","./planet-neptune-internal.svg":"../assets/planet-neptune-internal.svg","./planet-neptune.svg":"../assets/planet-neptune.svg","./planet-saturn-atmosphere.svg":"../assets/planet-saturn-atmosphere.svg","./planet-saturn-internal.svg":"../assets/planet-saturn-internal.svg","./planet-saturn.svg":"../assets/planet-saturn.svg","./planet-uranus-atmosphere.svg":"../assets/planet-uranus-atmosphere.svg","./planet-uranus-internal.svg":"../assets/planet-uranus-internal.svg","./planet-uranus.svg":"../assets/planet-uranus.svg","./planet-venus-atmosphere.svg":"../assets/planet-venus-atmosphere.svg","./planet-venus-internal.svg":"../assets/planet-venus-internal.svg","./planet-venus.svg":"../assets/planet-venus.svg"}],"index.js":[function(require,module,exports) {
"use strict";

var bootstrap = _interopRequireWildcard(require("bootstrap"));

var _ = _interopRequireDefault(require("../assets/*.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var wtf = require("wtf_wikipedia");

var optionButtons = document.querySelectorAll(".btn-option");
var planetDetail = document.querySelectorAll(".planet-detail__value");
var planetSummaryContent = document.querySelector(".planet-summary__content");
var planetSummarySource = document.querySelector(".planet-summary__source-link");
var planetSummaryTitle = document.querySelector(".planet-summary__title");
var navLinks = document.querySelectorAll(".nav-link");
var planetImage = document.querySelector(".planet-summary__img");
var planetSummarySection = document.querySelector(".planet-summary");
var planetDetailSection = document.querySelector(".planet-detail");
var loader = document.querySelector(".loader"); // let isLoading = true;
// const planetDetailUrl =
//   "https://api.le-systeme-solaire.net/rest.php/bodies/earth";

var initialActiveLink = "Earth";

var getInitialActiveLink = _toConsumableArray(navLinks).find(function (link) {
  return link.innerHTML === initialActiveLink;
});

var planetValues = {
  Summary: "",
  InternalStructure: "",
  Atmosphere: ""
};
var currentPlanet = "Earth";
var currentOption = "Overview";
var colors = {
  Mercury: "rgba(65, 158, 187, 1)",
  Venus: "rgba(237, 162, 73, 1)",
  Earth: "rgba(109, 46, 213, 1)",
  Mars: "rgba(209, 76, 50, 1)",
  Jupiter: "rgba(216, 58, 52, 1)",
  Saturn: "rgba(205, 81, 32, 1)",
  Uranus: "rgba(30, 193, 162, 1)",
  Neptune: "rgba(45, 104, 240, 1)"
};
handleClickNavLink(getInitialActiveLink);

function changeContentByPlanet(planet) {
  optionButtons.forEach(function (btn) {
    btn.style.backgroundColor = "transparent";

    if (btn.classList.contains("active")) {
      btn.style.backgroundColor = "".concat(colors[planet]);
      btn.style.border = "1px solid rgb(56, 56, 79)";
    }
  });
  planetSummaryTitle.innerHTML = planet;
}

function toggleActiveNavLink(v) {
  navLinks.forEach(function (v) {
    v.classList.remove("active");
  });
  v.classList.add("active");
}

function handleClickNavLink(v) {
  loader.classList.add("active");
  document.body.classList.add("loader-active");
  planetSummarySection.style.display = "none";
  planetDetailSection.style.display = "none";
  var planet = v.innerHTML;
  currentPlanet = planet;

  var _planet = planet === "Mercury" ? "Mercury_(planet)" : planet;

  toggleActiveNavLink(v);
  fetch("https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=".concat(_planet, "&prop=sections&disabletoc=1") // fetch sections to get indexes
  ).then(function (data) {
    return data.json();
  }).then(function (data) {
    var _internalStructureIndex = data.parse.sections.find(function (one) {
      return one.line.toLowerCase().includes("internal");
    }).index;
    var _atmosphereIndex = data.parse.sections.find(function (one) {
      return one.line.toLowerCase().includes("atmosphere") || one.line.toLowerCase().includes("sphere");
    }).index;
    var urls = ["https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=info|extracts&inprop=url&generator=search&formatversion=2&exsentences=3&exlimit=1&exintro=1&explaintext=1&gsrsearch=intitle:planet%20".concat(_planet, "&gsrlimit=1"), "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=".concat(_planet, "&prop=wikitext&section=").concat(_internalStructureIndex, "&disabletoc=1"), "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=".concat(_planet, "&prop=wikitext&section=").concat(_atmosphereIndex, "&disabletoc=1"), "https://api.le-systeme-solaire.net/rest.php/bodies/".concat(planet)];
    var requests = urls.map(function (url) {
      return fetch(url);
    });
    return Promise.all(requests);
  }).then(function (res) {
    return Promise.all(res.map(function (r) {
      return r.json();
    }));
  }).then(function (data) {
    // console.log(data);
    // console.log(data[3]);
    var summary = data[0].query.pages[0].extract;
    var internalStructureText = wtf(Object.values(data[1].parse.wikitext)[0]).text();
    var atmosphereText = wtf(Object.values(data[2].parse.wikitext)[0]).text(); // loaders.forEach((loader) => {
    //   loader.classList.add("remove");
    // });

    planetSummarySource.href = data[0].query.pages[0].fullurl;
    document.body.classList.remove("loader-active");
    loader.classList.remove("active");
    planetSummarySection.style.display = "block";
    planetDetailSection.style.display = "block";
    planetValues.Summary = summary;
    planetValues.InternalStructure = internalStructureText;
    planetValues.Atmosphere = atmosphereText;
    changePlanetDetailByPlanet(data[3]);
    checkWhichOptionClicked(currentOption);
    changeContentByPlanet(planet);
  }).catch(function (err) {
    return console.log(err);
  });
}

function changePlanetDetailByPlanet(data) {
  // const allowed = ["aphelion", "sideralRotation", "avgTemp", "meanRadius"];
  // console.log(data.sideralRotation);
  data.sideralRotation = Math.abs(data.sideralRotation);
  var values = [data.aphelion > 1000000000 ? "".concat((data.aphelion / 1000000000).toFixed(2), " bil km") : "".concat((data.aphelion / 1000000).toFixed(1), "mil km"), "".concat(Math.floor(data.sideralRotation / 24), "d ").concat(Math.floor(data.sideralRotation % 24), "hr ").concat(Math.floor(60 * (data.sideralRotation % 24 - Math.floor(data.sideralRotation % 24))), "m"), "".concat(data.avgTemp - 273.5, " &deg;C"), "".concat(data.meanRadius.toFixed(1).toLocaleString(), " KM")]; // var hours = Math.floor(num / 60);
  // var minutes = num % 60;
  // return hours + ":" + minutes;
  // const awayFromSun = `${data.aphelion / 10000000} million km`;
  // const avgTemp = data.avgTemp;
  // const rotationTime = data.sideralRotation;
  // const size = data.meanRadius;
  //  K - 273.15 = C
  // const filteredValues = Object.keys(data)
  //   .filter((key) => allowed.includes(key))
  //   .reduce((obj, key) => {
  //     obj[key] = data[key];
  //     return obj;
  //   }, {});
  // console.log(filteredValues[0]);
  // console.log(rotationTime);
  // const [awayFromSun, rotationtime, avgTemp, size] = data;
  // awayFromSun;

  planetDetail.forEach(function (detail, i) {
    detail.innerHTML = values[i];
  });
}

function toggleActiveOptionBtn(v) {
  optionButtons.forEach(function (btn) {
    btn.classList.remove("active");
  });
  v.classList.add("active");
}

function handleChangeOption(v) {
  // console.log(v.dataset.value);
  var _currentOption = v.dataset.value; // console.log(currentOption);

  currentOption = _currentOption;
  toggleActiveOptionBtn(v);
  changeContentByPlanet(currentPlanet);
  checkWhichOptionClicked(_currentOption);
}

function checkWhichOptionClicked(value) {
  value = value.toLowerCase();
  console.log(value);

  var _currentPlanet = currentPlanet.toLowerCase();

  if (value === "overview") {
    handleClickOverviewOption(_currentPlanet);
  } else if (value === "internal-structure") {
    handleClickInternalOption(_currentPlanet);
  } else {
    handleClickAtmosphereOption(_currentPlanet);
  }
}

function handleClickOverviewOption(_currentPlanet) {
  planetImage.src = _.default["planet-".concat(_currentPlanet)];
  planetSummaryContent.innerHTML = planetValues.Summary;
}

function handleClickInternalOption(_currentPlanet) {
  // console.log("internal");
  planetImage.src = _.default["planet-".concat(_currentPlanet, "-internal")];
  planetSummaryContent.innerHTML = planetValues.InternalStructure.length > 350 ? planetValues.InternalStructure.substring(0, 350).concat(" ...") : planetValues.InternalStructure;
}

function handleClickAtmosphereOption(_currentPlanet) {
  // console.log("atmosphere");
  planetImage.src = _.default["planet-".concat(_currentPlanet, "-atmosphere")];
  planetSummaryContent.innerHTML = planetValues.Atmosphere.length > 350 ? planetValues.Atmosphere.substring(0, 350).concat(" ...") : planetValues.Atmosphere;
}

function handleResizeDocument() {
  if (window.innerWidth <= 768) {
    optionButtons[0].innerHTML = "Overview";
    optionButtons[1].innerHTML = "Structure";
    optionButtons[2].innerHTML = "Atmosphere";
  } else {
    optionButtons[0].innerHTML = "01: Overview";
    optionButtons[1].innerHTML = "02: Internal Structure";
    optionButtons[2].innerHTML = "03: Atmosphere";
  }
}

(function initForCss() {
  return handleResizeDocument();
})();

navLinks.forEach(function (v) {
  v.addEventListener("click", function () {
    return handleClickNavLink(v);
  });
});
optionButtons.forEach(function (v) {
  v.addEventListener("click", function () {
    return handleChangeOption(v);
  });
});
window.addEventListener("resize", handleResizeDocument, true);
},{"bootstrap":"../node_modules/bootstrap/dist/js/bootstrap.esm.js","wtf_wikipedia":"../node_modules/wtf_wikipedia/builds/wtf_wikipedia-client.js","../assets/*.svg":"../assets/*.svg"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52225" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map