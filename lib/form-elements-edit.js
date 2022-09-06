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

var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));

var _draftJs = require("draft-js");

var _draftjsToHtml = _interopRequireDefault(require("draftjs-to-html"));

var _reactDraftWysiwyg = require("react-draft-wysiwyg");

var _dynamicOptionList = _interopRequireDefault(require("./dynamic-option-list"));

var _requests = require("./stores/requests");

var _UUID = _interopRequireDefault(require("./UUID"));

var _IntlMessages = _interopRequireDefault(require("./language-provider/IntlMessages"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var toolbar = {
  options: ['inline', 'list', 'textAlign', 'fontSize', 'link', 'history'],
  inline: {
    inDropdown: false,
    className: undefined,
    options: ['bold', 'italic', 'underline', 'superscript', 'subscript']
  }
};

var FormElementsEdit = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(FormElementsEdit, _React$Component);

  var _super = _createSuper(FormElementsEdit);

  function FormElementsEdit(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, FormElementsEdit);
    _this = _super.call(this, props);
    _this.state = {
      element: _this.props.element,
      data: _this.props.data,
      dirty: false
    };
    return _this;
  }

  (0, _createClass2["default"])(FormElementsEdit, [{
    key: "toggleRequired",
    value: function toggleRequired() {// const this_element = this.state.element;
    }
  }, {
    key: "editElementProp",
    value: function editElementProp(elemProperty, targProperty, e) {
      var _this2 = this;

      // elemProperty could be content or label
      // targProperty could be value or checked
      var this_element = this.state.element;
      this_element[elemProperty] = e.target[targProperty];
      this.setState({
        element: this_element,
        dirty: true
      }, function () {
        if (targProperty === 'checked') {
          _this2.updateElement();
        }
      });
    }
  }, {
    key: "onEditorStateChange",
    value: function onEditorStateChange(index, property, editorContent) {
      // const html = draftToHtml(convertToRaw(editorContent.getCurrentContent())).replace(/<p>/g, '<div>').replace(/<\/p>/g, '</div>');
      var html = (0, _draftjsToHtml["default"])((0, _draftJs.convertToRaw)(editorContent.getCurrentContent())).replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, ' ').replace(/(?:\r\n|\r|\n)/g, ' ');
      var this_element = this.state.element;
      this_element[property] = html;
      this.setState({
        element: this_element,
        dirty: true
      });
    }
  }, {
    key: "updateElement",
    value: function updateElement() {
      var this_element = this.state.element; // to prevent ajax calls with no change

      if (this.state.dirty) {
        this.props.updateElement.call(this.props.preview, this_element);
        this.setState({
          dirty: false
        });
      }
    }
  }, {
    key: "convertFromHTML",
    value: function convertFromHTML(content) {
      var newContent = (0, _draftJs.convertFromHTML)(content);

      if (!newContent.contentBlocks || !newContent.contentBlocks.length) {
        // to prevent crash when no contents in editor
        return _draftJs.EditorState.createEmpty();
      }

      var contentState = _draftJs.ContentState.createFromBlockArray(newContent);

      return _draftJs.EditorState.createWithContent(contentState);
    }
  }, {
    key: "addOptions",
    value: function addOptions() {
      var _this3 = this;

      var optionsApiUrl = document.getElementById('optionsApiUrl').value;

      if (optionsApiUrl) {
        (0, _requests.get)(optionsApiUrl).then(function (data) {
          _this3.props.element.options = [];
          var options = _this3.props.element.options;
          data.forEach(function (x) {
            // eslint-disable-next-line no-param-reassign
            x.key = _UUID["default"].uuid();
            options.push(x);
          });
          var this_element = _this3.state.element;

          _this3.setState({
            element: this_element,
            dirty: true
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.dirty) {
        this.props.element.dirty = true;
      }

      var this_checked = this.props.element.hasOwnProperty('required') ? this.props.element.required : false;
      var this_read_only = this.props.element.hasOwnProperty('readOnly') ? this.props.element.readOnly : false;
      var this_default_today = this.props.element.hasOwnProperty('defaultToday') ? this.props.element.defaultToday : false;
      var this_show_time_select = this.props.element.hasOwnProperty('showTimeSelect') ? this.props.element.showTimeSelect : false;
      var this_show_time_select_only = this.props.element.hasOwnProperty('showTimeSelectOnly') ? this.props.element.showTimeSelectOnly : false;
      var this_show_time_input = this.props.element.hasOwnProperty('showTimeInput') ? this.props.element.showTimeInput : false;
      var this_checked_inline = this.props.element.hasOwnProperty('inline') ? this.props.element.inline : false;
      var this_checked_bold = this.props.element.hasOwnProperty('bold') ? this.props.element.bold : false;
      var this_checked_italic = this.props.element.hasOwnProperty('italic') ? this.props.element.italic : false;
      var this_checked_center = this.props.element.hasOwnProperty('center') ? this.props.element.center : false;
      var this_checked_page_break = this.props.element.hasOwnProperty('pageBreakBefore') ? this.props.element.pageBreakBefore : false;
      var this_checked_alternate_form = this.props.element.hasOwnProperty('alternateForm') ? this.props.element.alternateForm : false;
      var _this$props$element = this.props.element,
          canHavePageBreakBefore = _this$props$element.canHavePageBreakBefore,
          canHaveAlternateForm = _this$props$element.canHaveAlternateForm,
          canHaveDisplayHorizontal = _this$props$element.canHaveDisplayHorizontal,
          canHaveOptionCorrect = _this$props$element.canHaveOptionCorrect,
          canHaveOptionValue = _this$props$element.canHaveOptionValue;
      var canHaveImageSize = this.state.element.element === 'Image' || this.state.element.element === 'Camera';
      var this_files = this.props.files.length ? this.props.files : [];

      if (this_files.length < 1 || this_files.length > 0 && this_files[0].id !== '') {
        this_files.unshift({
          id: '',
          file_name: ''
        });
      }

      var editorState;

      if (this.props.element.hasOwnProperty('content')) {
        editorState = this.convertFromHTML(this.props.element.content);
      }

      if (this.props.element.hasOwnProperty('label')) {
        editorState = this.convertFromHTML(this.props.element.label);
      }

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "clearfix"
      }, /*#__PURE__*/_react["default"].createElement("h4", {
        className: "float-left"
      }, this.props.element.text), /*#__PURE__*/_react["default"].createElement("i", {
        className: "float-right fas fa-times dismiss-edit",
        onClick: this.props.manualEditModeOff
      })), this.props.element.hasOwnProperty('content') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "text-to-display"
      }), ":"), /*#__PURE__*/_react["default"].createElement(_reactDraftWysiwyg.Editor, {
        toolbar: toolbar,
        defaultEditorState: editorState,
        onBlur: this.updateElement.bind(this),
        onEditorStateChange: this.onEditorStateChange.bind(this, 0, 'content'),
        stripPastedStyles: true
      })), this.props.element.hasOwnProperty('file_path') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "fileSelect"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "choose-file"
      }), ":"), /*#__PURE__*/_react["default"].createElement("select", {
        id: "fileSelect",
        className: "form-control",
        defaultValue: this.props.element.file_path,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'file_path', 'value')
      }, this_files.map(function (file) {
        var this_key = "file_".concat(file.id);
        return /*#__PURE__*/_react["default"].createElement("option", {
          value: file.id,
          key: this_key
        }, file.file_name);
      }))), this.props.element.hasOwnProperty('href') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.href,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'href', 'value')
      })), this.props.element.hasOwnProperty('label') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "display-label"
      })), /*#__PURE__*/_react["default"].createElement(_reactDraftWysiwyg.Editor, {
        toolbar: toolbar,
        defaultEditorState: editorState,
        onBlur: this.updateElement.bind(this),
        onEditorStateChange: this.onEditorStateChange.bind(this, 0, 'label'),
        stripPastedStyles: true
      }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "is-required",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_checked,
        value: true,
        onChange: this.editElementProp.bind(this, 'required', 'checked')
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "is-required"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "required"
      }))), this.props.element.hasOwnProperty('readOnly') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "is-read-only",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_read_only,
        value: true,
        onChange: this.editElementProp.bind(this, 'readOnly', 'checked')
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "is-read-only"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "read-only"
      }))), this.props.element.hasOwnProperty('defaultToday') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "is-default-to-today",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_default_today,
        value: true,
        onChange: this.editElementProp.bind(this, 'defaultToday', 'checked')
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "is-default-to-today"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "default-to-today"
      }), "?")), this.props.element.hasOwnProperty('showTimeSelect') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "show-time-select",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_show_time_select,
        value: true,
        onChange: this.editElementProp.bind(this, 'showTimeSelect', 'checked')
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "show-time-select"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "show-time-select"
      }), "?")), this_show_time_select && this.props.element.hasOwnProperty('showTimeSelectOnly') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "show-time-select-only",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_show_time_select_only,
        value: true,
        onChange: this.editElementProp.bind(this, 'showTimeSelectOnly', 'checked')
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "show-time-select-only"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "show-time-select-only"
      }), "?")), this.props.element.hasOwnProperty('showTimeInput') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "show-time-input",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_show_time_input,
        value: true,
        onChange: this.editElementProp.bind(this, 'showTimeInput', 'checked')
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "show-time-input"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "show-time-input"
      }), "?")), (this.state.element.element === 'RadioButtons' || this.state.element.element === 'Checkboxes') && canHaveDisplayHorizontal && /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "display-horizontal",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_checked_inline,
        value: true,
        onChange: this.editElementProp.bind(this, 'inline', 'checked')
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "display-horizontal"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "display-horizontal"
      })))), this.props.element.hasOwnProperty('src') && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "srcInput"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "link-to"
      }), ":"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "srcInput",
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.src,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'src', 'value')
      }))), canHaveImageSize && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "do-center",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_checked_center,
        value: true,
        onChange: this.editElementProp.bind(this, 'center', 'checked')
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "do-center"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "center"
      }), "?"))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-sm-3"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "elementWidth"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "width"
      }), ":"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "elementWidth",
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.width,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'width', 'value')
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-sm-3"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "elementHeight"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "height"
      }), ":"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "elementHeight",
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.height,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'height', 'value')
      })))), this.state.element.element === 'FileUpload' && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "fileType"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "choose-file-type"
      }), ":"), /*#__PURE__*/_react["default"].createElement("select", {
        id: "fileType",
        className: "form-control",
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'fileType', 'value')
      }, [{
        type: 'image, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, video/mp4,video/x-m4v,video/*',
        typeName: 'All File Type'
      }, {
        type: 'image',
        typeName: 'Image'
      }, {
        type: 'application/pdf',
        typeName: 'PDF'
      }, {
        type: 'application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        typeName: 'Word'
      }, {
        type: 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        typeName: 'Excel'
      }, {
        type: 'application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation',
        typeName: 'Powerpoint'
      }, {
        type: 'video/mp4,video/x-m4v,video/*',
        typeName: 'Videos'
      }].map(function (file, index) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          value: file.type,
          key: index
        }, file.typeName);
      })))), this.state.element.element === 'Signature' && this.props.element.readOnly ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "variableKey"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "variable-key"
      }), ":"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "variableKey",
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.variableKey,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'variableKey', 'value')
      }), /*#__PURE__*/_react["default"].createElement("p", {
        className: "help-block"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "variable-key-desc"
      }), ".")) : /*#__PURE__*/_react["default"].createElement("div", null), canHavePageBreakBefore && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "print-options"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "page-break-before-element",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_checked_page_break,
        value: true,
        onChange: this.editElementProp.bind(this, 'pageBreakBefore', 'checked')
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "page-break-before-element"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "page-break-before-elements"
      }), "?"))), canHaveAlternateForm && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "alternate-signature-page"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "display-on-alternate",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_checked_alternate_form,
        value: true,
        onChange: this.editElementProp.bind(this, 'alternateForm', 'checked')
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "display-on-alternate"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "display-on-alternate-signature-page"
      }), "?"))), this.props.element.hasOwnProperty('step') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group-range"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "rangeStep"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "step"
      })), /*#__PURE__*/_react["default"].createElement("input", {
        id: "rangeStep",
        type: "number",
        className: "form-control",
        defaultValue: this.props.element.step,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'step', 'value')
      }))), this.props.element.hasOwnProperty('min_value') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group-range"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "rangeMin"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "min"
      })), /*#__PURE__*/_react["default"].createElement("input", {
        id: "rangeMin",
        type: "number",
        className: "form-control",
        defaultValue: this.props.element.min_value,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'min_value', 'value')
      }), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.min_label,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'min_label', 'value')
      }))), this.props.element.hasOwnProperty('max_value') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group-range"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "rangeMax"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "max"
      })), /*#__PURE__*/_react["default"].createElement("input", {
        id: "rangeMax",
        type: "number",
        className: "form-control",
        defaultValue: this.props.element.max_value,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'max_value', 'value')
      }), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.max_label,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'max_label', 'value')
      }))), this.props.element.hasOwnProperty('default_value') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group-range"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "defaultSelected"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "default-selected"
      })), /*#__PURE__*/_react["default"].createElement("input", {
        id: "defaultSelected",
        type: "number",
        className: "form-control",
        defaultValue: this.props.element.default_value,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'default_value', 'value')
      }))), this.props.element.hasOwnProperty('static') && this.props.element["static"] && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "text-style"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "do-bold",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_checked_bold,
        value: true,
        onChange: this.editElementProp.bind(this, 'bold', 'checked')
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "do-bold"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "bold"
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "do-italic",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_checked_italic,
        value: true,
        onChange: this.editElementProp.bind(this, 'italic', 'checked')
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "do-italic"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "italic"
      })))), this.props.element.showDescription && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "questionDescription"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "description"
      })), /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
        type: "text",
        className: "form-control",
        id: "questionDescription",
        defaultValue: this.props.element.description,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'description', 'value')
      })), this.props.showCorrectColumn && this.props.element.canHaveAnswer && !this.props.element.hasOwnProperty('options') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "correctAnswer"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "correct-answer"
      })), /*#__PURE__*/_react["default"].createElement("input", {
        id: "correctAnswer",
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.correct,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, 'correct', 'value')
      })), this.props.element.canPopulateFromApi && this.props.element.hasOwnProperty('options') && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "optionsApiUrl"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "populate-options-from-api"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        className: "form-control",
        style: {
          width: '100%'
        },
        type: "text",
        id: "optionsApiUrl",
        placeholder: "http://localhost:8080/api/optionsdata"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.addOptions.bind(this),
        className: "btn btn-success"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "populate"
      }))))), this.props.element.hasOwnProperty('options') && /*#__PURE__*/_react["default"].createElement(_dynamicOptionList["default"], {
        showCorrectColumn: this.props.showCorrectColumn,
        canHaveOptionCorrect: canHaveOptionCorrect,
        canHaveOptionValue: canHaveOptionValue,
        data: this.props.preview.state.data,
        updateElement: this.props.updateElement,
        preview: this.props.preview,
        element: this.props.element,
        key: this.props.element.options.length
      }));
    }
  }]);
  return FormElementsEdit;
}(_react["default"].Component);

exports["default"] = FormElementsEdit;
FormElementsEdit.defaultProps = {
  className: 'edit-element-fields'
};