// eslint-disable-next-line max-classes-per-file

import React from 'react';
// import Select from 'react-select';
import { Select, Form, Checkbox, Radio, Input, InputNumber, DatePicker} from 'antd';
import xss from 'xss';
import HeaderBar from './header-bar';

import 'antd/dist/antd.css';

const FormElements = {};
const myxss = new xss.FilterXSS({
  whiteList: {
    u: [],
    br: [],
    b: [],
    i: [],
    ol: ['style'],
    ul: ['style'],
    li: [],
    p: ['style'],
    sub: [],
    sup: [],
    div: ['style'],
    em: [],
    strong: [],
    span: ['style'],
  },
});

const ComponentLabel = (props) => {
  const hasRequiredLabel = (props.data.hasOwnProperty('required') && props.data.required === true && !props.read_only);

  return (
    <label className={props.className || ''}>
      <span dangerouslySetInnerHTML={{ __html: myxss.process(props.data.label) }} />
      {hasRequiredLabel && <span className="label-required label label-danger">Required</span>}
    </label>
  );
};

const ComponentHeader = (props) => {
  if (props.mutable) {
    return null;
  }
  return (
    <div>
      {props.data.pageBreakBefore &&
        <div className="preview-page-break">Page Break</div>
      }
      <HeaderBar parent={props.parent} editModeOn={props.editModeOn} data={props.data} onDestroy={props._onDestroy} onEdit={props.onEdit} static={props.data.static} required={props.data.required} />
    </div>
  );
};

class Header extends React.Component {
  render() {
    let classNames = 'static';
    if (this.props.data.bold) { classNames += ' bold'; }
    if (this.props.data.italic) { classNames += ' italic'; }

    let baseClasses = 'SortableItem rfb-item';
    if (this.props.data.pageBreakBefore) { baseClasses += ' alwaysbreak'; }

    return (
      <div className={baseClasses}>
        <ComponentHeader {...this.props} />
        <h3 className={classNames}> {this.props.data.content} </h3>
      </div>
    );
  }
}

class Paragraph extends React.Component {
  render() {
    let classNames = 'static';
    if (this.props.data.bold) { classNames += ' bold'; }
    if (this.props.data.italic) { classNames += ' italic'; }

    let baseClasses = 'SortableItem rfb-item';
    if (this.props.data.pageBreakBefore) { baseClasses += ' alwaysbreak'; }

    return (
      <div className={baseClasses}>
        <ComponentHeader {...this.props} />
        <p className={classNames} dangerouslySetInnerHTML={{ __html: myxss.process(this.props.data.content) }} />
      </div>
    );
  }
}

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }

  render() {
    const props = {};
    const { getFieldDecorator } = this.props.form;
    props.type = 'text';
    props.name = this.props.data.field_name;

    let baseClasses = 'SortableItem rfb-item';
    if (this.props.data.pageBreakBefore) { baseClasses += ' alwaysbreak'; }

    if (this.props.read_only) {
      props.disabled = 'disabled';
    }

    return (
      <div className={baseClasses}>
        <ComponentHeader {...this.props} />
        <Form.Item label={this.props.data.label}>
          {getFieldDecorator('username', {
            rules: [{ required: this.props.data.required, message: 'This field is required!' }],
          })(
            <Input {...props} style={{ minWidth: 200 }} />
          )}
        </Form.Item>
      </div>
    );
  }
}

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }

  render() {
    const props = {};
    const { getFieldDecorator } = this.props.form;

    if (this.props.mutable) {
      props.defaultValue = this.props.defaultValue;
      props.ref = this.inputField;
    }

    if (this.props.read_only) {
      props.disabled = 'disabled';
    }

    let baseClasses = 'SortableItem rfb-item';
    if (this.props.data.pageBreakBefore) { baseClasses += ' alwaysbreak'; }

    return (
      <div className={baseClasses}>
        <ComponentHeader {...this.props} />
        <Form.Item label={this.props.data.label}>
          {getFieldDecorator(this.props.data.field_name, {
            rules: [{ required: this.props.data.required, message: 'This field is required!' }],
          })(
            <InputNumber {...props} style={{ minWidth: 200 }} />
          )}
        </Form.Item>
      </div>
    );
  }
}

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const props = {};

    if (this.props.read_only) {
      props.disabled = 'disabled';
    }

    let baseClasses = 'SortableItem rfb-item';
    if (this.props.data.pageBreakBefore) { baseClasses += ' alwaysbreak'; }

    return (
      <div className={baseClasses}>
        <ComponentHeader {...this.props} />
        <Form.Item label={this.props.data.label}>
          {getFieldDecorator(this.props.data.field_name, {
            rules: [{ required: this.props.data.required, message: 'This field is required!' }],
          })(
            <Input.TextArea {...props} style={{ minWidth: 200 }} />
          )}
        </Form.Item>
      </div>
    );
  }
}

class DatePickerComponent extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const props = {};

    if (this.props.read_only) {
      props.disabled = 'disabled';
    }

    let baseClasses = 'SortableItem rfb-item';
    if (this.props.data.pageBreakBefore) { baseClasses += ' alwaysbreak'; }

    return (
      <div className={baseClasses}>
        <ComponentHeader {...this.props} />
        <Form.Item label={this.props.data.label}>
          {getFieldDecorator(this.props.data.field_name, {
            rules: [{ required: this.props.data.required, message: 'This field is required!' }],
          })(
            <DatePicker {...props} style={{ minWidth: 200 }} />
          )}
        </Form.Item>
      </div>
    );
  }
}

class Dropdown extends React.Component {

  render() {
    const props = {};
    const { getFieldDecorator } = this.props.form;
    let baseClasses = 'SortableItem rfb-item';

    props.name = this.props.data.field_name;
    if (this.props.mutable) {
      props.defaultValue = this.props.defaultValue;
    }

    if (this.props.read_only) {
      props.disabled = 'disabled';
    }

    if (this.props.data.multiple) {
      props.mode = "multiple";
    }
    return (
      <div className={baseClasses}>
        <ComponentHeader {...this.props} />
        <Form.Item label={this.props.data.label}>
          {getFieldDecorator('username', {
            rules: [{ required: this.props.data.required, message: 'This field is required!' }],
          })(
            <Select {...props} style={{ minWidth: 200 }}>
              {this.props.data.options.map((option) => {
                const this_key = `preview_${option.key}`;
                return <Select.Option value={option.value} key={this_key}>{option.text}</Select.Option>;
              })}
            </Select>,
          )}
        </Form.Item>
      </div>
    );
  }
}

class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.options = {};
  }

  render() {
    const self = this;
    const { getFieldDecorator } = this.props.form;
    if (this.props.data.inline) { classNames += ' option-inline'; }

    let baseClasses = 'SortableItem rfb-item';
    if (this.props.data.pageBreakBefore) { baseClasses += ' alwaysbreak'; }

    return (
      <div className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <Form.Item label={this.props.data.label}>
            {getFieldDecorator('checkbox', {
              initialValue: self.props.defaultValue,
              rules: [{ required: this.props.data.required, message: 'This field is required!' }],
            })(
              <Checkbox.Group >
                {this.props.data.options.map(item => <Checkbox key={item.value} value={item.key}> {item.value}  </Checkbox>)}
              </Checkbox.Group>
            )}
          </Form.Item>
        </div>
      </div>
    );
  }
}

class RadioButtons extends React.Component {
  constructor(props) {
    super(props);
    this.options = {};
  }

  render() {
    const self = this;
    if (this.props.data.inline) { classNames += ' option-inline'; }
    const { getFieldDecorator } = this.props.form;
    let baseClasses = 'SortableItem rfb-item';
    if (this.props.data.pageBreakBefore) { baseClasses += ' alwaysbreak'; }

    return (
      <div className={baseClasses}>
      <ComponentHeader {...this.props} />
      <div className="form-group">
        <Form.Item label={this.props.data.label}>
          {getFieldDecorator('radiobutton', {
            initialValue: self.props.defaultValue,
            rules: [{ required: this.props.data.required, message: 'This field is required!' }],
          })(
            <Radio.Group>
              {this.props.data.options.map(({value, key}) => <Radio key={value} value={key}> {value}  </Radio>)}
            </Radio.Group>
          )}
        </Form.Item>
      </div>
    </div>
    );
  }
}

class HyperLink extends React.Component {
  render() {
    let baseClasses = 'SortableItem rfb-item';
    if (this.props.data.pageBreakBefore) { baseClasses += ' alwaysbreak'; }

    return (
      <div className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <a target="_blank" href={this.props.data.href}>{this.props.data.content}</a>
        </div>
      </div>
    );
  }
}

class Download extends React.Component {
  render() {
    let baseClasses = 'SortableItem rfb-item';
    if (this.props.data.pageBreakBefore) { baseClasses += ' alwaysbreak'; }

    return (
      <div className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <a href={`${this.props.download_path}?id=${this.props.data.file_path}`}>{this.props.data.content}</a>
        </div>
      </div>
    );
  }
}
FormElements.Header = Header;
FormElements.Paragraph = Paragraph;
FormElements.TextInput = TextInput;
FormElements.NumberInput = NumberInput;
FormElements.TextArea = TextArea;
FormElements.Dropdown = Dropdown;
FormElements.Checkboxes = Checkboxes;
FormElements.DatePicker = DatePickerComponent;
FormElements.HyperLink = HyperLink;
FormElements.Download = Download;
FormElements.RadioButtons = RadioButtons;

export default FormElements;
