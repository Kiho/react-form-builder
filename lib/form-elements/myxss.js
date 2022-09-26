"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _xss = _interopRequireDefault(require("xss"));

var myxss = new _xss["default"].FilterXSS({
  whiteList: {
    a: ['href', 'title', 'target'],
    u: [],
    br: [],
    b: [],
    i: [],
    ol: ['style'],
    ul: ['style'],
    li: [],
    p: ['style'],
    sub: [],
    sup: [],
    div: ['style'],
    em: [],
    strong: [],
    span: ['style'],
    ins: []
  }
});
var _default = myxss;
exports["default"] = _default;