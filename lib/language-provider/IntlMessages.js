"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var InjectMassage = function InjectMassage(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, props);
};

var _default = (0, _reactIntl.injectIntl)(InjectMassage, {
  withRef: false
});

exports["default"] = _default;