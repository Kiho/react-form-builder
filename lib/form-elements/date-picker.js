"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _dateFns = require("date-fns");

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _componentHeader = _interopRequireDefault(require("./component-header"));

var _componentLabel = _interopRequireDefault(require("./component-label"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DatePicker = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DatePicker, _React$Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    (0, _classCallCheck2.default)(this, DatePicker);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (dt) {
      var placeholder;
      var formatMask = _this.state.formatMask;

      if (dt && dt.target) {
        placeholder = dt && dt.target && dt.target.value === '' ? formatMask.toLowerCase() : '';
        var formattedDate = dt.target.value ? (0, _dateFns.format)(dt.target.value, formatMask) : '';

        _this.setState({
          value: formattedDate,
          internalValue: formattedDate,
          placeholder: placeholder
        });
      } else {
        _this.setState({
          value: dt ? (0, _dateFns.format)(dt, formatMask) : '',
          internalValue: dt,
          placeholder: placeholder
        });
      }
    });
    _this.inputField = /*#__PURE__*/_react.default.createRef();

    var _DatePicker$updateFor = DatePicker.updateFormat(props, null),
        _formatMask = _DatePicker$updateFor.formatMask;

    _this.state = DatePicker.updateDateTime(props, {
      formatMask: _formatMask
    }, _formatMask);
    return _this;
  } // formatMask = '';


  (0, _createClass2.default)(DatePicker, [{
    key: "render",
    value: function render() {
      var _this$props$data = this.props.data,
          showTimeSelect = _this$props$data.showTimeSelect,
          showTimeSelectOnly = _this$props$data.showTimeSelectOnly,
          showTimeInput = _this$props$data.showTimeInput;
      var props = {};
      props.type = 'date';
      props.className = 'form-control';
      props.name = this.props.data.field_name;
      var readOnly = this.props.data.readOnly || this.props.read_only;
      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      var placeholderText = this.state.formatMask.toLowerCase();

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: baseClasses,
        style: _objectSpread({}, this.props.style)
      }, /*#__PURE__*/_react.default.createElement(_componentHeader.default, this.props), /*#__PURE__*/_react.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react.default.createElement(_componentLabel.default, this.props), /*#__PURE__*/_react.default.createElement("div", null, readOnly && /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        name: props.name,
        ref: props.ref,
        readOnly: readOnly,
        placeholder: this.state.placeholder,
        value: this.state.value,
        className: "form-control"
      }), !readOnly && /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
        name: props.name,
        ref: props.ref,
        onChange: this.handleChange,
        selected: this.state.internalValue,
        todayButton: 'Today',
        className: "form-control",
        isClearable: true,
        showTimeSelect: showTimeSelect,
        showTimeSelectOnly: showTimeSelectOnly,
        showTimeInput: showTimeInput,
        dateFormat: this.state.formatMask,
        portalId: "root-portal",
        autoComplete: "off",
        placeholderText: placeholderText
      }))));
    }
  }], [{
    key: "updateFormat",
    value: function updateFormat(props, oldFormatMask) {
      var _props$data = props.data,
          showTimeSelect = _props$data.showTimeSelect,
          showTimeSelectOnly = _props$data.showTimeSelectOnly,
          showTimeInput = _props$data.showTimeInput;
      var dateFormat = showTimeSelect && showTimeSelectOnly ? '' : props.data.dateFormat;
      var timeFormat = showTimeSelect || showTimeInput ? props.data.timeFormat : '';
      var formatMask = "".concat(dateFormat, " ").concat(timeFormat).trim();
      var updated = formatMask !== oldFormatMask;
      return {
        updated: updated,
        formatMask: formatMask
      };
    }
  }, {
    key: "updateDateTime",
    value: function updateDateTime(props, state, formatMask) {
      var value;
      var internalValue;
      var defaultToday = props.data.defaultToday;

      if (defaultToday && (props.defaultValue === '' || props.defaultValue === undefined)) {
        value = (0, _dateFns.format)(new Date(), formatMask);
        internalValue = new Date();
      } else {
        value = props.defaultValue;

        if (value === '' || value === undefined) {
          internalValue = undefined;
        } else {
          internalValue = (0, _dateFns.parse)(value, state.formatMask, new Date());
        }
      }

      return {
        value: value,
        internalValue: internalValue,
        placeholder: formatMask.toLowerCase(),
        defaultToday: defaultToday,
        formatMask: state.formatMask
      };
    } // componentWillReceiveProps(props) {
    //   const formatUpdated = this.updateFormat(props);
    //   if ((props.data.defaultToday !== !this.state.defaultToday) || formatUpdated) {
    //     const state = this.updateDateTime(props, this.formatMask);
    //     this.setState(state);
    //   }
    // }

  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var _DatePicker$updateFor2 = DatePicker.updateFormat(props, state.formatMask),
          updated = _DatePicker$updateFor2.updated,
          formatMask = _DatePicker$updateFor2.formatMask;

      if (props.data.defaultToday !== state.defaultToday || updated) {
        var newState = DatePicker.updateDateTime(props, state, formatMask);
        return newState;
      }

      return null;
    }
  }]);
  return DatePicker;
}(_react.default.Component);

var _default = DatePicker;
exports.default = _default;