"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwoColumnRow = exports.ThreeColumnRow = exports.FourColumnRow = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _componentHeader = _interopRequireDefault(require("../form-elements/component-header"));

var _componentLabel = _interopRequireDefault(require("../form-elements/component-label"));

var _dustbin = _interopRequireDefault(require("./dustbin"));

var _ItemTypes = _interopRequireDefault(require("../ItemTypes"));

var _excluded = ["data", "class_name"],
    _excluded2 = ["data", "class_name"],
    _excluded3 = ["data", "class_name"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var accepts = [_ItemTypes.default.BOX, _ItemTypes.default.CARD];

var MultiColumnRow = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MultiColumnRow, _React$Component);

  var _super = _createSuper(MultiColumnRow);

  function MultiColumnRow() {
    (0, _classCallCheck2.default)(this, MultiColumnRow);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(MultiColumnRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          controls = _this$props.controls,
          data = _this$props.data,
          editModeOn = _this$props.editModeOn,
          getDataById = _this$props.getDataById,
          setAsChild = _this$props.setAsChild,
          removeChild = _this$props.removeChild,
          seq = _this$props.seq,
          className = _this$props.className,
          index = _this$props.index;
      var childItems = data.childItems,
          pageBreakBefore = data.pageBreakBefore;
      var baseClasses = 'SortableItem rfb-item';

      if (pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react.default.createElement(_componentHeader.default, this.props), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_componentLabel.default, this.props), /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, childItems.map(function (x, i) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: "".concat(i, "_").concat(x || '_'),
          className: className
        }, controls ? controls[i] : /*#__PURE__*/_react.default.createElement(_dustbin.default, {
          style: {
            width: '100%'
          },
          data: data,
          accepts: accepts,
          items: childItems,
          col: i,
          parentIndex: index,
          editModeOn: editModeOn,
          _onDestroy: function _onDestroy() {
            return removeChild(data, i);
          },
          getDataById: getDataById,
          setAsChild: setAsChild,
          seq: seq
        }));
      }))));
    }
  }]);
  return MultiColumnRow;
}(_react.default.Component);

var TwoColumnRow = function TwoColumnRow(_ref) {
  var data = _ref.data,
      class_name = _ref.class_name,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var className = class_name || 'col-md-6';

  if (!data.childItems) {
    // eslint-disable-next-line no-param-reassign
    data.childItems = [null, null];
    data.isContainer = true;
  }

  return /*#__PURE__*/_react.default.createElement(MultiColumnRow, (0, _extends2.default)({}, rest, {
    className: className,
    data: data
  }));
};

exports.TwoColumnRow = TwoColumnRow;

var ThreeColumnRow = function ThreeColumnRow(_ref2) {
  var data = _ref2.data,
      class_name = _ref2.class_name,
      rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  var className = class_name || 'col-md-4';

  if (!data.childItems) {
    // eslint-disable-next-line no-param-reassign
    data.childItems = [null, null, null];
    data.isContainer = true;
  }

  return /*#__PURE__*/_react.default.createElement(MultiColumnRow, (0, _extends2.default)({}, rest, {
    className: className,
    data: data
  }));
};

exports.ThreeColumnRow = ThreeColumnRow;

var FourColumnRow = function FourColumnRow(_ref3) {
  var data = _ref3.data,
      class_name = _ref3.class_name,
      rest = (0, _objectWithoutProperties2.default)(_ref3, _excluded3);
  var className = class_name || 'col-md-3';

  if (!data.childItems) {
    // eslint-disable-next-line no-param-reassign
    data.childItems = [null, null, null, null];
    data.isContainer = true;
  }

  return /*#__PURE__*/_react.default.createElement(MultiColumnRow, (0, _extends2.default)({}, rest, {
    className: className,
    data: data
  }));
};

exports.FourColumnRow = FourColumnRow;