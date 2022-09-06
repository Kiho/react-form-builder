"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraftJs = void 0;
Object.defineProperty(exports, "Editor", {
  enumerable: true,
  get: function get() {
    return _reactDraftWysiwyg.Editor;
  }
});
exports.generateUUID = exports.draftToHtml = exports.TextAreaAutosize = void 0;

var _react = _interopRequireDefault(require("react"));

var PkgTextAreaAutosize = _interopRequireWildcard(require("react-textarea-autosize"));

var DraftJs = _interopRequireWildcard(require("draft-js"));

exports.DraftJs = DraftJs;

var draftToHtml = _interopRequireWildcard(require("draftjs-to-html"));

exports.draftToHtml = draftToHtml;

var _reactDraftWysiwyg = require("react-draft-wysiwyg");

var _UUID = _interopRequireDefault(require("../UUID"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var generateUUID = function generateUUID() {
  return _UUID["default"].uuid();
};

exports.generateUUID = generateUUID;

var TextAreaAutosize = function TextAreaAutosize(props) {
  return /*#__PURE__*/_react["default"].createElement(PkgTextAreaAutosize, props);
};

exports.TextAreaAutosize = TextAreaAutosize;