"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDnd = require("react-dnd");

var _ItemTypes = _interopRequireDefault(require("../ItemTypes"));

var _componentDragPreview = require("./component-drag-preview");

var layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};

function getItemStyles(props) {
  var initialOffset = props.initialOffset,
      currentOffset = props.currentOffset;

  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    };
  }

  var x = currentOffset.x,
      y = currentOffset.y;
  var transform = "translate(".concat(x, "px, ").concat(y, "px)");
  return {
    transform: transform,
    WebkitTransform: transform
  };
}

var CustomDragLayer = function CustomDragLayer(props) {
  var item = props.item,
      itemType = props.itemType,
      isDragging = props.isDragging;

  function renderItem() {
    switch (itemType) {
      case _ItemTypes["default"].BOX:
        return /*#__PURE__*/_react["default"].createElement(_componentDragPreview.BoxDragPreview, {
          item: item
        });

      default:
        return null;
    }
  }

  if (!isDragging) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: layerStyles
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: getItemStyles(props)
  }, renderItem()));
};

var _default = (0, _reactDnd.DragLayer)(function (monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
})(CustomDragLayer);

exports["default"] = _default;