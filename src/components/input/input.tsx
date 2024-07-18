import React from "react";
import { DatePickerProps, ISelect, InputVariantProps } from "./interface";
import { DatePickerInput } from "@mantine/dates";
import { TextInput, Textarea, Select } from "@mantine/core";
import "./style.scss";

export const TxtInput: React.FC<InputVariantProps> = ({
  label,
  placeholder,
  required,
  leftSection,
  rightSection,
  disabled,
  error,
  onChange,
  value,
  type,
  name,
  id,
  ...rest
}) => (
  <TextInput
    label={label}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    radius="md"
    size="md"
    leftSection={leftSection}
    rightSection={rightSection}
    disabled={disabled}
    error={error}
    type={type}
    name={name}
    id={id}
    {...rest}
  />
);

export const TxtArea: React.FC<InputVariantProps> = ({
  label,
  placeholder,
  required,
  disabled,
  error,
  onChange,
  value,
  name,
  id,
}) => (
  <Textarea
    label={label}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    radius="md"
    size="md"
    disabled={disabled}
    error={error}
    autosize
    minRows={4}
    name={name}
    id={id}
  />
);

export const SelectOption: React.FC<ISelect> = ({
  label,
  placeholder,
  data,
  defaultValue,
  clearable,
  onChange,
  name,
  id,
  required,
}) => {
  return (
    <Select
      label={label}
      placeholder={placeholder}
      data={data}
      defaultValue={defaultValue}
      clearable={clearable}
      onChange={onChange}
      name={name}
      id={id}
      required={required}
      radius="md"
      size="md"
    />
  );
};



export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  placeholder,
  required,
  value,
  onChange,
  disabled,
  error,
  name,
  id,
  ...rest
}) => (
  <DatePickerInput
    label={label}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    radius="md"
    size="md"
    disabled={disabled}
    error={error}
    name={name}
    id={id}
    {...rest}
  />
);