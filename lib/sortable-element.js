"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var _reactDnd = require("react-dnd");

var _ItemTypes = _interopRequireDefault(require("./ItemTypes"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'pointer'
};
var cardSource = {
  beginDrag: function beginDrag(props) {
    return {
      itemType: _ItemTypes["default"].CARD,
      id: props.id,
      index: props.index
    };
  }
};
var cardTarget = {
  drop: function drop(props, monitor, component) {
    if (!component) {
      return;
    }

    var item = monitor.getItem();
    var hoverIndex = props.index;
    var dragIndex = item.index;

    if (props.data && props.data.isContainer || item.itemType === _ItemTypes["default"].CARD) {
      // console.log('cardTarget -  Drop', item.itemType);
      return;
    }

    if (item.data && typeof item.setAsChild === 'function') {
      // console.log('BOX', item);
      if (dragIndex === -1) {
        props.insertCard(item, hoverIndex, item.id);
      }
    }
  },
  hover: function hover(props, monitor, component) {
    var _props$data, _item$data;

    var item = monitor.getItem();
    if (item.itemType === _ItemTypes["default"].BOX && item.index === -1) return; // Don't replace multi-column component unless both drag & hover are multi-column

    if ((_props$data = props.data) !== null && _props$data !== void 0 && _props$data.isContainer && !((_item$data = item.data) !== null && _item$data !== void 0 && _item$data.isContainer)) return;
    var dragIndex = item.index;
    var hoverIndex = props.index; // Don't replace items with themselves

    if (dragIndex === hoverIndex) {
      return;
    }

    if (dragIndex === -1) {
      if (props.data && props.data.isContainer) {
        return;
      } // console.log('CARD', item);


      item.index = hoverIndex;
      props.insertCard(item.onCreate(item.data), hoverIndex);
    } // Determine rectangle on screen


    var hoverBoundingRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect(); // Get vertical middle

    var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // Determine mouse position

    var clientOffset = monitor.getClientOffset(); // Get pixels to the top

    var hoverClientY = clientOffset.y - hoverBoundingRect.top; // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    } // Dragging upwards


    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    } // Time to actually perform the action


    props.moveCard(dragIndex, hoverIndex); // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    // if (item.itemType == ItemTypes.BOX) item.cardIndex = hoverIndex;
    // else

    item.index = hoverIndex;
  }
}; // eslint-disable-next-line no-unused-vars

function _default(ComposedComponent) {
  var Card = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(Card, _Component);

    var _super = _createSuper(Card);

    function Card() {
      (0, _classCallCheck2["default"])(this, Card);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(Card, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            isDragging = _this$props.isDragging,
            connectDragPreview = _this$props.connectDragPreview,
            connectDropTarget = _this$props.connectDropTarget;
        var opacity = isDragging ? 0 : 1;
        return connectDragPreview(connectDropTarget( /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComposedComponent, (0, _extends2["default"])({}, this.props, {
          style: _objectSpread(_objectSpread({}, style), {}, {
            opacity: opacity
          })
        })))));
      }
    }]);
    return Card;
  }(_react.Component);

  (0, _defineProperty2["default"])(Card, "propTypes", {
    connectDragSource: _propTypes["default"].func,
    connectDragPreview: _propTypes["default"].func,
    connectDropTarget: _propTypes["default"].func,
    index: _propTypes["default"].number.isRequired,
    isDragging: _propTypes["default"].bool,
    id: _propTypes["default"].any.isRequired,
    // text: PropTypes.string.isRequired,
    moveCard: _propTypes["default"].func.isRequired,
    seq: _propTypes["default"].number
  });
  (0, _defineProperty2["default"])(Card, "defaultProps", {
    seq: -1
  });
  var x = (0, _reactDnd.DropTarget)([_ItemTypes["default"].CARD, _ItemTypes["default"].BOX], cardTarget, function (connect) {
    return {
      connectDropTarget: connect.dropTarget()
    };
  })(Card);
  return (0, _reactDnd.DragSource)(_ItemTypes["default"].CARD, cardSource, function (connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging()
    };
  })(x);
}