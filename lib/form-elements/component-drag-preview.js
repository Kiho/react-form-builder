"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxDragPreview = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var boxStyles = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move'
};
var styles = {
  display: 'inline-block',
  transform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)'
};

var Box = function Box(_ref) {
  var title = _ref.title,
      color = _ref.color;
  var backgroundColor = color ? '#059862' : 'white';
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, boxStyles), {}, {
      backgroundColor: backgroundColor
    })
  }, title);
};

var BoxDragPreview = function BoxDragPreview(_ref2) {
  var item = _ref2.item;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      tickTock = _useState2[0],
      setTickTock = _useState2[1];

  var text = item.data.content ? item.data.content : item.data.label ? item.data.label : item.data.text;
  var isLongText = text.length > 20;
  var previewText = isLongText ? "".concat(text.slice(0, 20), "...") : text; // useEffect(function subscribeToIntervalTick() {
  //     const interval = setInterval(() => {
  //         setTickTock(!tickTock);
  //     }, 500);
  //     return () => clearInterval(interval);
  // }, [tickTock]);

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles,
    role: "BoxPreview"
  }, /*#__PURE__*/_react["default"].createElement(Box, {
    title: previewText,
    color: tickTock
  }));
};

exports.BoxDragPreview = BoxDragPreview;