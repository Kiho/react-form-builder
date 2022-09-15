"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

var _fileSaver = require("file-saver");

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _reactSignatureCanvas = _interopRequireDefault(require("react-signature-canvas"));

var _reactBootstrapSlider = _interopRequireDefault(require("react-bootstrap-slider"));

var _starRating = _interopRequireDefault(require("./star-rating"));

var _datePicker = _interopRequireDefault(require("./date-picker"));

var _componentHeader = _interopRequireDefault(require("./component-header"));

var _componentLabel = _interopRequireDefault(require("./component-label"));

var _myxss = _interopRequireDefault(require("./myxss"));

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FormElements = {};

var Header = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    (0, _classCallCheck2["default"])(this, Header);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Header, [{
    key: "render",
    value: function render() {
      // const headerClasses = `dynamic-input ${this.props.data.element}-input`;
      var classNames = 'static';

      if (this.props.data.bold) {
        classNames += ' bold';
      }

      if (this.props.data.italic) {
        classNames += ' italic';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("h3", {
        className: classNames,
        dangerouslySetInnerHTML: {
          __html: _myxss["default"].process(this.props.data.content)
        }
      }));
    }
  }]);
  return Header;
}(_react["default"].Component);

var Paragraph = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(Paragraph, _React$Component2);

  var _super2 = _createSuper(Paragraph);

  function Paragraph() {
    (0, _classCallCheck2["default"])(this, Paragraph);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2["default"])(Paragraph, [{
    key: "render",
    value: function render() {
      var classNames = 'static';

      if (this.props.data.bold) {
        classNames += ' bold';
      }

      if (this.props.data.italic) {
        classNames += ' italic';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("p", {
        className: classNames,
        dangerouslySetInnerHTML: {
          __html: _myxss["default"].process(this.props.data.content)
        }
      }));
    }
  }]);
  return Paragraph;
}(_react["default"].Component);

var Label = /*#__PURE__*/function (_React$Component3) {
  (0, _inherits2["default"])(Label, _React$Component3);

  var _super3 = _createSuper(Label);

  function Label() {
    (0, _classCallCheck2["default"])(this, Label);
    return _super3.apply(this, arguments);
  }

  (0, _createClass2["default"])(Label, [{
    key: "render",
    value: function render() {
      var classNames = 'static';

      if (this.props.data.bold) {
        classNames += ' bold';
      }

      if (this.props.data.italic) {
        classNames += ' italic';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("label", {
        className: classNames,
        dangerouslySetInnerHTML: {
          __html: _myxss["default"].process(this.props.data.content)
        }
      }));
    }
  }]);
  return Label;
}(_react["default"].Component);

var LineBreak = /*#__PURE__*/function (_React$Component4) {
  (0, _inherits2["default"])(LineBreak, _React$Component4);

  var _super4 = _createSuper(LineBreak);

  function LineBreak() {
    (0, _classCallCheck2["default"])(this, LineBreak);
    return _super4.apply(this, arguments);
  }

  (0, _createClass2["default"])(LineBreak, [{
    key: "render",
    value: function render() {
      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("hr", null));
    }
  }]);
  return LineBreak;
}(_react["default"].Component);

var TextInput = /*#__PURE__*/function (_React$Component5) {
  (0, _inherits2["default"])(TextInput, _React$Component5);

  var _super5 = _createSuper(TextInput);

  function TextInput(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TextInput);
    _this = _super5.call(this, props);
    _this.inputField = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(TextInput, [{
    key: "render",
    value: function render() {
      var props = {};
      props.type = 'text';
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], this.props), /*#__PURE__*/_react["default"].createElement("input", props)));
    }
  }]);
  return TextInput;
}(_react["default"].Component);

var EmailInput = /*#__PURE__*/function (_React$Component6) {
  (0, _inherits2["default"])(EmailInput, _React$Component6);

  var _super6 = _createSuper(EmailInput);

  function EmailInput(props) {
    var _this2;

    (0, _classCallCheck2["default"])(this, EmailInput);
    _this2 = _super6.call(this, props);
    _this2.inputField = /*#__PURE__*/_react["default"].createRef();
    return _this2;
  }

  (0, _createClass2["default"])(EmailInput, [{
    key: "render",
    value: function render() {
      var props = {};
      props.type = 'text';
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], this.props), /*#__PURE__*/_react["default"].createElement("input", props)));
    }
  }]);
  return EmailInput;
}(_react["default"].Component);

var PhoneNumber = /*#__PURE__*/function (_React$Component7) {
  (0, _inherits2["default"])(PhoneNumber, _React$Component7);

  var _super7 = _createSuper(PhoneNumber);

  function PhoneNumber(props) {
    var _this3;

    (0, _classCallCheck2["default"])(this, PhoneNumber);
    _this3 = _super7.call(this, props);
    _this3.inputField = /*#__PURE__*/_react["default"].createRef();
    return _this3;
  }

  (0, _createClass2["default"])(PhoneNumber, [{
    key: "render",
    value: function render() {
      var props = {};
      props.type = 'tel';
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], this.props), /*#__PURE__*/_react["default"].createElement(_reactInputMask["default"], {
        mask: '(99) 999 99 99',
        maskPlaceholder: null
      }, function (inputProps) {
        return /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({}, inputProps, props));
      })));
    }
  }]);
  return PhoneNumber;
}(_react["default"].Component);

var NumberInput = /*#__PURE__*/function (_React$Component8) {
  (0, _inherits2["default"])(NumberInput, _React$Component8);

  var _super8 = _createSuper(NumberInput);

  function NumberInput(props) {
    var _this4;

    (0, _classCallCheck2["default"])(this, NumberInput);
    _this4 = _super8.call(this, props);
    _this4.inputField = /*#__PURE__*/_react["default"].createRef();
    return _this4;
  }

  (0, _createClass2["default"])(NumberInput, [{
    key: "render",
    value: function render() {
      var props = {};
      props.type = 'number';
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], this.props), /*#__PURE__*/_react["default"].createElement("input", props)));
    }
  }]);
  return NumberInput;
}(_react["default"].Component);

var TextArea = /*#__PURE__*/function (_React$Component9) {
  (0, _inherits2["default"])(TextArea, _React$Component9);

  var _super9 = _createSuper(TextArea);

  function TextArea(props) {
    var _this5;

    (0, _classCallCheck2["default"])(this, TextArea);
    _this5 = _super9.call(this, props);
    _this5.inputField = /*#__PURE__*/_react["default"].createRef();
    return _this5;
  }

  (0, _createClass2["default"])(TextArea, [{
    key: "render",
    value: function render() {
      var props = {};
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], this.props), /*#__PURE__*/_react["default"].createElement("textarea", props)));
    }
  }]);
  return TextArea;
}(_react["default"].Component);

var Dropdown = /*#__PURE__*/function (_React$Component10) {
  (0, _inherits2["default"])(Dropdown, _React$Component10);

  var _super10 = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this6;

    (0, _classCallCheck2["default"])(this, Dropdown);
    _this6 = _super10.call(this, props);
    _this6.inputField = /*#__PURE__*/_react["default"].createRef();
    return _this6;
  }

  (0, _createClass2["default"])(Dropdown, [{
    key: "render",
    value: function render() {
      var props = {};
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], this.props), /*#__PURE__*/_react["default"].createElement("select", props, this.props.data.options.map(function (option) {
        var this_key = "preview_".concat(option.key);
        return /*#__PURE__*/_react["default"].createElement("option", {
          value: option.value,
          key: this_key
        }, option.text);
      }))));
    }
  }]);
  return Dropdown;
}(_react["default"].Component);

var Signature = /*#__PURE__*/function (_React$Component11) {
  (0, _inherits2["default"])(Signature, _React$Component11);

  var _super11 = _createSuper(Signature);

  function Signature(props) {
    var _this7;

    (0, _classCallCheck2["default"])(this, Signature);
    _this7 = _super11.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this7), "clear", function () {
      if (_this7.state.defaultValue) {
        _this7.setState({
          defaultValue: ''
        });
      } else if (_this7.canvas.current) {
        _this7.canvas.current.clear();
      }
    });
    _this7.state = {
      defaultValue: props.defaultValue
    };
    _this7.inputField = /*#__PURE__*/_react["default"].createRef();
    _this7.canvas = /*#__PURE__*/_react["default"].createRef();
    return _this7;
  }

  (0, _createClass2["default"])(Signature, [{
    key: "render",
    value: function render() {
      var defaultValue = this.state.defaultValue;
      var canClear = !!defaultValue;
      var props = {};
      props.type = 'hidden';
      props.name = this.props.data.field_name;

      if (this.props.mutable) {
        props.defaultValue = defaultValue;
        props.ref = this.inputField;
      }

      var pad_props = {}; // umd requires canvasProps={{ width: 400, height: 150 }}

      if (this.props.mutable) {
        pad_props.defaultValue = defaultValue;
        pad_props.ref = this.canvas;
        canClear = !this.props.read_only;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      var sourceDataURL;

      if (defaultValue && defaultValue.length > 0) {
        sourceDataURL = "data:image/png;base64,".concat(defaultValue);
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], this.props), this.props.read_only === true || !!sourceDataURL ? /*#__PURE__*/_react["default"].createElement("img", {
        src: sourceDataURL
      }) : /*#__PURE__*/_react["default"].createElement(_reactSignatureCanvas["default"], pad_props), canClear && /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-times clear-signature",
        onClick: this.clear,
        title: "Clear Signature"
      }), /*#__PURE__*/_react["default"].createElement("input", props)));
    }
  }]);
  return Signature;
}(_react["default"].Component);

var Tags = /*#__PURE__*/function (_React$Component12) {
  (0, _inherits2["default"])(Tags, _React$Component12);

  var _super12 = _createSuper(Tags);

  function Tags(props) {
    var _this8;

    (0, _classCallCheck2["default"])(this, Tags);
    _this8 = _super12.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this8), "handleChange", function (e) {
      _this8.setState({
        value: e || []
      });
    });
    _this8.inputField = /*#__PURE__*/_react["default"].createRef();
    var defaultValue = props.defaultValue,
        data = props.data;
    _this8.state = {
      value: _this8.getDefaultValue(defaultValue, data.options)
    };
    return _this8;
  }

  (0, _createClass2["default"])(Tags, [{
    key: "getDefaultValue",
    value: function getDefaultValue(defaultValue, options) {
      if (defaultValue) {
        if (typeof defaultValue === 'string') {
          var vals = defaultValue.split(',').map(function (x) {
            return x.trim();
          });
          return options.filter(function (x) {
            return vals.indexOf(x.value) > -1;
          });
        }

        return options.filter(function (x) {
          return defaultValue.indexOf(x.value) > -1;
        });
      }

      return [];
    } // state = { value: this.props.defaultValue !== undefined ? this.props.defaultValue.split(',') : [] };

  }, {
    key: "render",
    value: function render() {
      var options = this.props.data.options.map(function (option) {
        option.label = option.text;
        return option;
      });
      var props = {};
      props.isMulti = true;
      props.name = this.props.data.field_name;
      props.onChange = this.handleChange;
      props.options = options;

      if (!this.props.mutable) {
        props.value = options[0].text;
      } // to show a sample of what tags looks like


      if (this.props.mutable) {
        props.isDisabled = this.props.read_only;
        props.value = this.state.value;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], this.props), /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], props)));
    }
  }]);
  return Tags;
}(_react["default"].Component);

var Checkboxes = /*#__PURE__*/function (_React$Component13) {
  (0, _inherits2["default"])(Checkboxes, _React$Component13);

  var _super13 = _createSuper(Checkboxes);

  function Checkboxes(props) {
    var _this9;

    (0, _classCallCheck2["default"])(this, Checkboxes);
    _this9 = _super13.call(this, props);
    _this9.options = {};
    return _this9;
  }

  (0, _createClass2["default"])(Checkboxes, [{
    key: "render",
    value: function render() {
      var _this10 = this;

      var self = this;
      var classNames = 'custom-control custom-checkbox';

      if (this.props.data.inline) {
        classNames += ' option-inline';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], (0, _extends2["default"])({
        className: "form-label"
      }, this.props)), this.props.data.options.map(function (option) {
        var this_key = "preview_".concat(option.key);
        var props = {};
        props.name = "option_".concat(option.key);
        props.type = 'checkbox';
        props.value = option.value;

        if (self.props.mutable) {
          props.defaultChecked = self.props.defaultValue !== undefined && self.props.defaultValue.indexOf(option.key) > -1;
        }

        if (_this10.props.read_only) {
          props.disabled = 'disabled';
        }

        return /*#__PURE__*/_react["default"].createElement("div", {
          className: classNames,
          key: this_key
        }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
          id: "fid_".concat(this_key),
          className: "custom-control-input",
          ref: function ref(c) {
            if (c && self.props.mutable) {
              self.options["child_ref_".concat(option.key)] = c;
            }
          }
        }, props)), /*#__PURE__*/_react["default"].createElement("label", {
          className: "custom-control-label",
          htmlFor: "fid_".concat(this_key)
        }, option.text));
      })));
    }
  }]);
  return Checkboxes;
}(_react["default"].Component);

var RadioButtons = /*#__PURE__*/function (_React$Component14) {
  (0, _inherits2["default"])(RadioButtons, _React$Component14);

  var _super14 = _createSuper(RadioButtons);

  function RadioButtons(props) {
    var _this11;

    (0, _classCallCheck2["default"])(this, RadioButtons);
    _this11 = _super14.call(this, props);
    _this11.options = {};
    return _this11;
  }

  (0, _createClass2["default"])(RadioButtons, [{
    key: "render",
    value: function render() {
      var _this12 = this;

      var self = this;
      var classNames = 'custom-control custom-radio';

      if (this.props.data.inline) {
        classNames += ' option-inline';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], (0, _extends2["default"])({
        className: "form-label"
      }, this.props)), this.props.data.options.map(function (option) {
        var this_key = "preview_".concat(option.key);
        var props = {};
        props.name = self.props.data.field_name;
        props.type = 'radio';
        props.value = option.value;

        if (self.props.mutable) {
          props.defaultChecked = self.props.defaultValue !== undefined && (self.props.defaultValue.indexOf(option.key) > -1 || self.props.defaultValue.indexOf(option.value) > -1);
        }

        if (_this12.props.read_only) {
          props.disabled = 'disabled';
        }

        return /*#__PURE__*/_react["default"].createElement("div", {
          className: classNames,
          key: this_key
        }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
          id: "fid_".concat(this_key),
          className: "custom-control-input",
          ref: function ref(c) {
            if (c && self.props.mutable) {
              self.options["child_ref_".concat(option.key)] = c;
            }
          }
        }, props)), /*#__PURE__*/_react["default"].createElement("label", {
          className: "custom-control-label",
          htmlFor: "fid_".concat(this_key)
        }, option.text));
      })));
    }
  }]);
  return RadioButtons;
}(_react["default"].Component);

var Image = /*#__PURE__*/function (_React$Component15) {
  (0, _inherits2["default"])(Image, _React$Component15);

  var _super15 = _createSuper(Image);

  function Image() {
    (0, _classCallCheck2["default"])(this, Image);
    return _super15.apply(this, arguments);
  }

  (0, _createClass2["default"])(Image, [{
    key: "render",
    value: function render() {
      var style = this.props.data.center ? {
        textAlign: 'center'
      } : null;
      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread(_objectSpread({}, this.props.style), {}, {
          style: style
        }),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), this.props.data.src && /*#__PURE__*/_react["default"].createElement("img", {
        src: this.props.data.src,
        width: this.props.data.width,
        height: this.props.data.height
      }), !this.props.data.src && /*#__PURE__*/_react["default"].createElement("div", {
        className: "no-image"
      }, "No Image"));
    }
  }]);
  return Image;
}(_react["default"].Component);

var Rating = /*#__PURE__*/function (_React$Component16) {
  (0, _inherits2["default"])(Rating, _React$Component16);

  var _super16 = _createSuper(Rating);

  function Rating(props) {
    var _this13;

    (0, _classCallCheck2["default"])(this, Rating);
    _this13 = _super16.call(this, props);
    _this13.inputField = /*#__PURE__*/_react["default"].createRef();
    return _this13;
  }

  (0, _createClass2["default"])(Rating, [{
    key: "render",
    value: function render() {
      var props = {};
      props.name = this.props.data.field_name;
      props.ratingAmount = 5;

      if (this.props.mutable) {
        props.rating = this.props.defaultValue !== undefined ? parseFloat(this.props.defaultValue, 10) : 0;
        props.editing = true;
        props.disabled = this.props.read_only;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], this.props), /*#__PURE__*/_react["default"].createElement(_starRating["default"], props)));
    }
  }]);
  return Rating;
}(_react["default"].Component);

var HyperLink = /*#__PURE__*/function (_React$Component17) {
  (0, _inherits2["default"])(HyperLink, _React$Component17);

  var _super17 = _createSuper(HyperLink);

  function HyperLink() {
    (0, _classCallCheck2["default"])(this, HyperLink);
    return _super17.apply(this, arguments);
  }

  (0, _createClass2["default"])(HyperLink, [{
    key: "render",
    value: function render() {
      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        target: "_blank",
        href: this.props.data.href
      }, this.props.data.content)));
    }
  }]);
  return HyperLink;
}(_react["default"].Component);

var Download = /*#__PURE__*/function (_React$Component18) {
  (0, _inherits2["default"])(Download, _React$Component18);

  var _super18 = _createSuper(Download);

  function Download() {
    (0, _classCallCheck2["default"])(this, Download);
    return _super18.apply(this, arguments);
  }

  (0, _createClass2["default"])(Download, [{
    key: "render",
    value: function render() {
      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "".concat(this.props.download_path, "?id=").concat(this.props.data.file_path)
      }, this.props.data.content)));
    }
  }]);
  return Download;
}(_react["default"].Component);

var Camera = /*#__PURE__*/function (_React$Component19) {
  (0, _inherits2["default"])(Camera, _React$Component19);

  var _super19 = _createSuper(Camera);

  function Camera(props) {
    var _this14;

    (0, _classCallCheck2["default"])(this, Camera);
    _this14 = _super19.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this14), "displayImage", function (e) {
      var self = (0, _assertThisInitialized2["default"])(_this14);
      var target = e.target;

      if (target.files && target.files.length) {
        self.setState({
          img: target.files[0],
          previewImg: URL.createObjectURL(target.files[0])
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this14), "clearImage", function () {
      _this14.setState({
        img: null,
        previewImg: null
      });
    });
    _this14.state = {
      img: null,
      previewImg: null
    };
    return _this14;
  }

  (0, _createClass2["default"])(Camera, [{
    key: "getImageSizeProps",
    value: function getImageSizeProps(_ref) {
      var width = _ref.width,
          height = _ref.height;
      var imgProps = {
        width: '100%'
      };

      if (width) {
        imgProps.width = width < window.innerWidth ? width : 0.9 * window.innerWidth;
      }

      if (height) {
        imgProps.height = height;
      }

      return imgProps;
    }
  }, {
    key: "render",
    value: function render() {
      var _this15 = this;

      var imageStyle = {
        objectFit: 'scale-down',
        objectPosition: this.props.data.center ? 'center' : 'left'
      };
      var baseClasses = 'SortableItem rfb-item';
      var name = this.props.data.field_name;
      var fileInputStyle = this.state.img ? {
        display: 'none'
      } : null;

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      var sourceDataURL;

      if (this.props.read_only === true && this.props.defaultValue && this.props.defaultValue.length > 0) {
        if (this.props.defaultValue.indexOf(name > -1)) {
          sourceDataURL = this.props.defaultValue;
        } else {
          sourceDataURL = "data:image/png;base64,".concat(this.props.defaultValue);
        }
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], this.props), this.props.read_only === true && this.props.defaultValue && this.props.defaultValue.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", (0, _extends2["default"])({
        style: imageStyle,
        src: sourceDataURL
      }, this.getImageSizeProps(this.props.data)))) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "image-upload-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: fileInputStyle
      }, /*#__PURE__*/_react["default"].createElement("input", {
        name: name,
        type: "file",
        accept: "image/*",
        capture: "camera",
        className: "image-upload",
        onChange: this.displayImage
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "image-upload-control"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "btn btn-default"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-camera"
      }), " Upload Photo"), /*#__PURE__*/_react["default"].createElement("p", null, "Select an image from your computer or device."))), this.state.img && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
        onLoad: function onLoad() {
          return URL.revokeObjectURL(_this15.state.previewImg);
        },
        src: this.state.previewImg,
        height: "100",
        className: "image-upload-preview"
      }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "btn btn-image-clear",
        onClick: this.clearImage
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-times"
      }), " Clear Photo")))));
    }
  }]);
  return Camera;
}(_react["default"].Component);

var FileUpload = /*#__PURE__*/function (_React$Component20) {
  (0, _inherits2["default"])(FileUpload, _React$Component20);

  var _super20 = _createSuper(FileUpload);

  function FileUpload(props) {
    var _this16;

    (0, _classCallCheck2["default"])(this, FileUpload);
    _this16 = _super20.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this16), "displayFileUpload", function (e) {
      var self = (0, _assertThisInitialized2["default"])(_this16);
      var target = e.target;
      var file;

      if (target.files && target.files.length > 0) {
        file = target.files[0];
        self.setState({
          fileUpload: file
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this16), "clearFileUpload", function () {
      _this16.setState({
        fileUpload: null
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this16), "saveFile", /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
        var sourceUrl, response, dispositionHeader, resBlob, blob, fileName, _fileName;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                sourceUrl = _this16.props.defaultValue;
                _context.next = 4;
                return (0, _isomorphicFetch["default"])(sourceUrl, {
                  method: 'GET',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                  },
                  responseType: 'blob'
                });

              case 4:
                response = _context.sent;
                dispositionHeader = response.headers.get('Content-Disposition');
                _context.next = 8;
                return response.blob();

              case 8:
                resBlob = _context.sent;
                // eslint-disable-next-line no-undef
                blob = new Blob([resBlob], {
                  type: _this16.props.data.fileType || response.headers.get('Content-Type')
                });

                if (dispositionHeader && dispositionHeader.indexOf(';filename=') > -1) {
                  fileName = dispositionHeader.split(';filename=')[1];
                  (0, _fileSaver.saveAs)(blob, fileName);
                } else {
                  _fileName = sourceUrl.substring(sourceUrl.lastIndexOf('/') + 1);
                  (0, _fileSaver.saveAs)(response.url, _fileName);
                }

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    _this16.state = {
      fileUpload: null
    };
    return _this16;
  }

  (0, _createClass2["default"])(FileUpload, [{
    key: "render",
    value: function render() {
      var baseClasses = 'SortableItem rfb-item';
      var name = this.props.data.field_name;
      var fileInputStyle = this.state.fileUpload ? {
        display: 'none'
      } : null;

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], this.props), this.props.read_only === true && this.props.defaultValue && this.props.defaultValue.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-default",
        onClick: this.saveFile
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-download"
      }), " Download File")) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "image-upload-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: fileInputStyle
      }, /*#__PURE__*/_react["default"].createElement("input", {
        name: name,
        type: "file",
        accept: this.props.data.fileType || '*',
        className: "image-upload",
        onChange: this.displayFileUpload
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "image-upload-control"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "btn btn-default"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-file"
      }), " Upload File"), /*#__PURE__*/_react["default"].createElement("p", null, "Select a file from your computer or device."))), this.state.fileUpload && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "file-upload-preview"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'inline-block',
          marginRight: '5px'
        }
      }, "Name: ".concat(this.state.fileUpload.name)), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'inline-block',
          marginLeft: '5px'
        }
      }, this.state.fileUpload.size.length > 6 ? "Size:  ".concat(Math.ceil(this.state.fileUpload.size / (1024 * 1024)), " mb") : "Size:  ".concat(Math.ceil(this.state.fileUpload.size / 1024), " kb"))), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "btn btn-file-upload-clear",
        onClick: this.clearFileUpload
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-times"
      }), " Clear File")))));
    }
  }]);
  return FileUpload;
}(_react["default"].Component);

var Range = /*#__PURE__*/function (_React$Component21) {
  (0, _inherits2["default"])(Range, _React$Component21);

  var _super21 = _createSuper(Range);

  function Range(props) {
    var _this17;

    (0, _classCallCheck2["default"])(this, Range);
    _this17 = _super21.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this17), "changeValue", function (e) {
      var target = e.target;

      _this17.setState({
        value: target.value
      });
    });
    _this17.inputField = /*#__PURE__*/_react["default"].createRef();
    _this17.state = {
      value: props.defaultValue !== undefined ? parseInt(props.defaultValue, 10) : parseInt(props.data.default_value, 10)
    };
    return _this17;
  }

  (0, _createClass2["default"])(Range, [{
    key: "render",
    value: function render() {
      var props = {};
      var name = this.props.data.field_name;
      props.type = 'range';
      props.list = "tickmarks_".concat(name);
      props.min = this.props.data.min_value;
      props.max = this.props.data.max_value;
      props.step = this.props.data.step;
      props.value = this.state.value;
      props.change = this.changeValue;

      if (this.props.mutable) {
        props.ref = this.inputField;
      }

      var datalist = [];

      for (var i = parseInt(props.min_value, 10); i <= parseInt(props.max_value, 10); i += parseInt(props.step, 10)) {
        datalist.push(i);
      }

      var oneBig = 100 / (datalist.length - 1);

      var _datalist = datalist.map(function (d, idx) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: "".concat(props.list, "_").concat(idx)
        }, d);
      });

      var visible_marks = datalist.map(function (d, idx) {
        var option_props = {};
        var w = oneBig;

        if (idx === 0 || idx === datalist.length - 1) {
          w = oneBig / 2;
        }

        option_props.key = "".concat(props.list, "_label_").concat(idx);
        option_props.style = {
          width: "".concat(w, "%")
        };

        if (idx === datalist.length - 1) {
          option_props.style = {
            width: "".concat(w, "%"),
            textAlign: 'right'
          };
        }

        return /*#__PURE__*/_react["default"].createElement("label", option_props, d);
      });
      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, this.props.style),
        className: baseClasses
      }, /*#__PURE__*/_react["default"].createElement(_componentHeader["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_componentLabel["default"], this.props), /*#__PURE__*/_react["default"].createElement("div", {
        className: "range"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "clearfix"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "float-left"
      }, this.props.data.min_label), /*#__PURE__*/_react["default"].createElement("span", {
        className: "float-right"
      }, this.props.data.max_label)), /*#__PURE__*/_react["default"].createElement(_reactBootstrapSlider["default"], props)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "visible_marks"
      }, visible_marks), /*#__PURE__*/_react["default"].createElement("input", {
        name: name,
        value: this.state.value,
        type: "hidden"
      }), /*#__PURE__*/_react["default"].createElement("datalist", {
        id: props.list
      }, _datalist)));
    }
  }]);
  return Range;
}(_react["default"].Component);

FormElements.Header = Header;
FormElements.Paragraph = Paragraph;
FormElements.Label = Label;
FormElements.LineBreak = LineBreak;
FormElements.TextInput = TextInput;
FormElements.EmailInput = EmailInput;
FormElements.PhoneNumber = PhoneNumber;
FormElements.NumberInput = NumberInput;
FormElements.TextArea = TextArea;
FormElements.Dropdown = Dropdown;
FormElements.Signature = Signature;
FormElements.Checkboxes = Checkboxes;
FormElements.DatePicker = _datePicker["default"];
FormElements.RadioButtons = RadioButtons;
FormElements.Image = Image;
FormElements.Rating = Rating;
FormElements.Tags = Tags;
FormElements.HyperLink = HyperLink;
FormElements.Download = Download;
FormElements.Camera = Camera;
FormElements.FileUpload = FileUpload;
FormElements.Range = Range;
var _default = FormElements;
exports["default"] = _default;