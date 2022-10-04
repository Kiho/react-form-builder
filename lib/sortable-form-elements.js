"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sortableElement = _interopRequireDefault(require("./sortable-element"));

var _formPlaceHolder = _interopRequireDefault(require("./form-place-holder"));

var _formElements = _interopRequireDefault(require("./form-elements"));

var _multiColumn = require("./multi-column");

var _customElement = _interopRequireDefault(require("./form-elements/custom-element"));

var Header = _formElements.default.Header,
    Paragraph = _formElements.default.Paragraph,
    Label = _formElements.default.Label,
    LineBreak = _formElements.default.LineBreak,
    TextInput = _formElements.default.TextInput,
    EmailInput = _formElements.default.EmailInput,
    PhoneNumber = _formElements.default.PhoneNumber,
    NumberInput = _formElements.default.NumberInput,
    TextArea = _formElements.default.TextArea,
    Dropdown = _formElements.default.Dropdown,
    Checkboxes = _formElements.default.Checkboxes,
    DatePicker = _formElements.default.DatePicker,
    RadioButtons = _formElements.default.RadioButtons,
    Image = _formElements.default.Image,
    Rating = _formElements.default.Rating,
    Tags = _formElements.default.Tags,
    Signature = _formElements.default.Signature,
    HyperLink = _formElements.default.HyperLink,
    Download = _formElements.default.Download,
    Camera = _formElements.default.Camera,
    Range = _formElements.default.Range,
    FileUpload = _formElements.default.FileUpload;
var FormElements = {};
FormElements.Header = (0, _sortableElement.default)(Header);
FormElements.Paragraph = (0, _sortableElement.default)(Paragraph);
FormElements.Label = (0, _sortableElement.default)(Label);
FormElements.LineBreak = (0, _sortableElement.default)(LineBreak);
FormElements.TextInput = (0, _sortableElement.default)(TextInput);
FormElements.EmailInput = (0, _sortableElement.default)(EmailInput);
FormElements.PhoneNumber = (0, _sortableElement.default)(PhoneNumber);
FormElements.NumberInput = (0, _sortableElement.default)(NumberInput);
FormElements.TextArea = (0, _sortableElement.default)(TextArea);
FormElements.Dropdown = (0, _sortableElement.default)(Dropdown);
FormElements.Signature = (0, _sortableElement.default)(Signature);
FormElements.Checkboxes = (0, _sortableElement.default)(Checkboxes);
FormElements.DatePicker = (0, _sortableElement.default)(DatePicker);
FormElements.RadioButtons = (0, _sortableElement.default)(RadioButtons);
FormElements.Image = (0, _sortableElement.default)(Image);
FormElements.Rating = (0, _sortableElement.default)(Rating);
FormElements.Tags = (0, _sortableElement.default)(Tags);
FormElements.HyperLink = (0, _sortableElement.default)(HyperLink);
FormElements.Download = (0, _sortableElement.default)(Download);
FormElements.Camera = (0, _sortableElement.default)(Camera);
FormElements.FileUpload = (0, _sortableElement.default)(FileUpload);
FormElements.Range = (0, _sortableElement.default)(Range);
FormElements.PlaceHolder = (0, _sortableElement.default)(_formPlaceHolder.default);
FormElements.TwoColumnRow = (0, _sortableElement.default)(_multiColumn.TwoColumnRow);
FormElements.ThreeColumnRow = (0, _sortableElement.default)(_multiColumn.ThreeColumnRow);
FormElements.FourColumnRow = (0, _sortableElement.default)(_multiColumn.FourColumnRow);
FormElements.CustomElement = (0, _sortableElement.default)(_customElement.default);
var _default = FormElements;
exports.default = _default;