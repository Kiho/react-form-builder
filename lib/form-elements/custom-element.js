"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _componentHeader = _interopRequireDefault(require("./component-header"));

var _componentLabel = _interopRequireDefault(require("./component-label"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CustomElement = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CustomElement, _Component);

  var _super = _createSuper(CustomElement);

  function CustomElement(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CustomElement);
    _this = _super.call(this, props);
    _this.inputField = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(CustomElement, [{
    key: "render",
    value: function render() {
      var bare = this.props.data.bare;
      var props = {};
      props.name = this.props.data.field_name;
      props.defaultValue = this.props.defaultValue;

      if (this.props.mutable && this.props.data.forwardRef) {
        props.ref = this.inputField;
      }

      if (this.props.read_only) {
        props.disabled = 'disabled';
      } // Return if component is invalid.


      if (!this.props.data.component) return null;
      var Element = this.props.data.component;
      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), bare ? /*#__PURE__*/_react["default"].createElement(Element, (0, _extends2["default"])({
        data: this.props.data
      }, this.props.data.props, props)) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], (0, _extends2["default"])({
        className: "form-label"
      }, this.props)), /*#__PURE__*/_react["default"].createElement(Element, (0, _extends2["default"])({
        data: this.props.data
      }, this.props.data.props, props))));
    }
  }]);
  return CustomElement;
}(_react.Component);

CustomElement.propTypes = {};
var _default = CustomElement;
exports["default"] = _default;