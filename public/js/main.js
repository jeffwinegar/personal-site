(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mobileMenuButton = exports.mobileMenuButton = function mobileMenuButton() {
  var selector = arguments.length <= 0 || arguments[0] === undefined ? '.mobile-menu-button' : arguments[0];

  var button = document.querySelector(selector);
  var body = document.body;
  button.onclick = function () {
    body.classList.toggle('js-menu-expanded');
  };
};

exports.default = {
  mobileMenuButton: mobileMenuButton
};

},{}],2:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers.js');

(0, _helpers.mobileMenuButton)();

},{"./helpers.js":1}]},{},[2]);

//# sourceMappingURL=main.js.map
