"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _reactDnd = require("react-dnd");

var _formElements = _interopRequireDefault(require("../form-elements"));

var _ItemTypes = _interopRequireDefault(require("../ItemTypes"));

var _customElement = _interopRequireDefault(require("../form-elements/custom-element"));

var _registry = _interopRequireDefault(require("../stores/registry"));

var _excluded = ["draggedItem", "parentIndex", "canDrop", "isOver", "isOverCurrent", "connectDropTarget", "items", "col", "getDataById"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getCustomElement(item, props) {
  if (!item.component || typeof item.component !== 'function') {
    item.component = _registry["default"].get(item.key);

    if (!item.component) {
      console.error("".concat(item.element, " was not registered"));
    }
  }

  return /*#__PURE__*/_react["default"].createElement(_customElement["default"], (0, _extends2["default"])({}, props, {
    mutable: false,
    key: "form_".concat(item.id),
    data: item
  }));
}

function getElement(item, props) {
  if (!item) return null;
  var Element = item.custom ? function () {
    return getCustomElement(item, props);
  } : _formElements["default"][item.element || item.key];
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(Element, (0, _extends2["default"])({}, props, {
    key: "form_".concat(item.id),
    data: item
  })));
}

function getStyle(backgroundColor) {
  return {
    border: '1px solid rgba(0,0,0,0.2)',
    minHeight: '2rem',
    minWidth: '12rem',
    width: '100%',
    backgroundColor: backgroundColor,
    padding: 0,
    "float": 'left'
  };
}

function isContainer(item) {
  if (item.itemType !== _ItemTypes["default"].CARD) {
    var data = item.data;

    if (data) {
      if (data.isContainer) {
        return true;
      }

      if (data.field_name) {
        return data.field_name.indexOf('_col_row') > -1;
      }
    }
  }

  return false;
}

var Dustbin = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var draggedItem = _ref.draggedItem,
      parentIndex = _ref.parentIndex,
      canDrop = _ref.canDrop,
      isOver = _ref.isOver,
      isOverCurrent = _ref.isOverCurrent,
      connectDropTarget = _ref.connectDropTarget,
      items = _ref.items,
      col = _ref.col,
      getDataById = _ref.getDataById,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var item = getDataById(items[col]);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      onDrop: function
        /* dropped */
      onDrop() {// const { data } = dropped;
        // console.log('onDrop', data);
      }
    };
  }, []);
  var element = getElement(item, rest);
  var sameCard = draggedItem ? draggedItem.index === parentIndex : false; // console.log('dragIndex:',draggedItem?.index)
  // console.log('HoverIndex:',parentIndex)
  // console.log('SameCard:',sameCard)

  var backgroundColor = 'rgba(0, 0, 0, .03)';

  if (!sameCard && isOver && canDrop && !draggedItem.data.isContainer) {
    backgroundColor = '#F7F589';
  } // console.log('accepts, canDrop', accepts, canDrop);


  return connectDropTarget( /*#__PURE__*/_react["default"].createElement("div", {
    style: !sameCard ? getStyle(backgroundColor) : getStyle('rgba(0, 0, 0, .03')
  }, element));
});

var _default = (0, _reactDnd.DropTarget)(function (props) {
  return props.accepts;
}, {
  drop: function drop(props, monitor, component) {
    if (!component) {
      return;
    } // //Do nothing whith busy dustbin
    // if(props.items[props.col]) return;
    // Allow swap column if target and source are in same multi column row


    var isBusy = !!props.items[props.col];
    var item = monitor.getItem(); // Do nothing when moving the box inside the same column

    if (props.col === item.col && props.items[props.col] === item.id) return;

    if (!isContainer(item)) {
      component.onDrop(item);

      if (item.data && typeof props.setAsChild === 'function') {
        var isNew = !item.data.id;
        var data = isNew ? item.onCreate(item.data) : item.data;
        props.setAsChild(props.data, data, props.col, isBusy);
      }
    }
  }
}, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    draggedItem: monitor.getItem() ? monitor.getItem() : null,
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({
      shallow: true
    }),
    canDrop: monitor.canDrop()
  };
})(Dustbin);

exports["default"] = _default;