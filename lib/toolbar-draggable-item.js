"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _reactDnd = require("react-dnd");

var _ItemTypes = _interopRequireDefault(require("./ItemTypes"));

var _UUID = _interopRequireDefault(require("./UUID"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cardSource = {
  beginDrag: function beginDrag(props) {
    return {
      id: _UUID["default"].uuid(),
      index: -1,
      data: props.data,
      onCreate: props.onCreate
    };
  }
};

var ToolbarItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ToolbarItem, _React$Component);

  var _super = _createSuper(ToolbarItem);

  function ToolbarItem() {
    (0, _classCallCheck2["default"])(this, ToolbarItem);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ToolbarItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          connectDragSource = _this$props.connectDragSource,
          data = _this$props.data,
          onClick = _this$props.onClick;
      if (!connectDragSource) return null;
      return connectDragSource( /*#__PURE__*/_react["default"].createElement("li", {
        onClick: onClick
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: data.icon
      }), data.name));
    }
  }]);
  return ToolbarItem;
}(_react["default"].Component);

var _default = (0, _reactDnd.DragSource)(_ItemTypes["default"].CARD, cardSource, function (connect) {
  return {
    connectDragSource: connect.dragSource()
  };
})(ToolbarItem);

exports["default"] = _default;