import * as React from 'react';

type BaseElement = {
  id: string;
  element: "Header Text" | "Label" | "Paragraph" | "Line Break" | "Dropdown" | "Tags" | "Checkboxes" | "Multiple Choice" | "Text Input" | "Number Input" | "Multi-line Input" | "Two Column Row" | "Three Column Row" | "Four Column Row" | "Image" | "Rating" | "Date" | "Signature" | "Web site" | "File Attachment" | "Range" | "Camera";
  showDescription?: boolean;
  required: boolean;
  canHaveAlternateForm: boolean;
  canHaveDisplayHorizontal: boolean;
  canHaveOptionCorrect: boolean;
  canHaveOptionValue: boolean;
  canHavePageBreakBefore: boolean;
  canPopulateFromApi: boolean;
  text: string;
}
export type StaticElement = {
  bold: boolean;
  content: string;
  inline?: boolean;
  italic: boolean;
  static: true;
}
export type FormBuilderInput = {
  canHaveAnswer?: true;
  field_name: string;
  label: string;
}
export type Option = {
  key: string;
  label?: string;
  text: string;
  value: string;
}
export type SelectableElement = {
  options: Option[];
} & FormBuilderInput
export type ImageElement = {
  field_name: string;
  src: string;
}
export type DateElement = {
  dateFormat: string;
  defaultToday: boolean;
  readOnly: boolean;
  showTimeSelect: boolean;
  showTimeSelectOnly: boolean;
  timeFormat: string;
} & FormBuilderInput
export type RangeElement = {
  max_label: string;
  max_value: number;
  min_label: string;
  min_value: number;
} & FormBuilderInput
export type FileElement = {
  _href: string;
  file_path: string;
  field_name: string;
} & StaticElement;
export type WebsiteElement = {
  href: string;
} & StaticElement;
export type SignatureElement = {
  readOnly: boolean;
} & FormBuilderInput
export type TaskData =
  BaseElement
  // eslint-disable-next-line no-use-before-define
  & (StaticElement | FormBuilderInput | SelectableElement | ImageElement | DateElement | RangeElement | WebsiteElement | FileElement | SignatureElement | FormBuilderLayout);
export type FormBuilderLayout = {
  isContainer: true;
  childItems: TaskData[];
  field_name: string;
};
export type FormBuilderPostData = {
  task_data: TaskData[];
}

export interface FormBuilderProps {
  toolbarItems?: any;
  onPost?: (data: FormBuilderPostData) => void;
}

export class ReactFormBuilder extends React.Component<FormBuilderProps> {

}
