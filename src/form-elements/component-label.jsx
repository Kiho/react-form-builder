import React from 'react';
import myxss from './myxss';

const ComponentLabel = (props) => {
  const hasRequiredLabel = (props.data.hasOwnProperty('required') && props.data.required === true && !props.read_only);
  const labelText = myxss.process(props.data.label);
  const html = labelText.replace(/"/g, '\\"').trim();
  // eslint-disable-next-line no-param-reassign
  props.data.label = html;
  return (
    <label className={props.className || ''}>
      <span dangerouslySetInnerHTML={{ __html: html }}/>
      {hasRequiredLabel && <span className="label-required badge badge-danger">Required</span>}
    </label>
  );
};

export default ComponentLabel;
