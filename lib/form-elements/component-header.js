"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _headerBar = _interopRequireDefault(require("./header-bar"));

var ComponentHeader = function ComponentHeader(props) {
  if (props.mutable) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", null, props.data.pageBreakBefore && /*#__PURE__*/_react["default"].createElement("div", {
    className: "preview-page-break"
  }, "Page Break"), /*#__PURE__*/_react["default"].createElement(_headerBar["default"], {
    parent: props.parent,
    editModeOn: props.editModeOn,
    data: props.data,
    index: props.index,
    setAsChild: props.setAsChild,
    onDestroy: props._onDestroy,
    onEdit: props.onEdit,
    "static": props.data["static"],
    required: props.data.required
  }));
};

var _default = ComponentHeader;
exports["default"] = _default;