export interface InputVariantProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  disabled?: boolean;
  error?: string;
  type?: string;
  name?: string;
  id?: string;
  [key: string]: any;
}

export interface DatePickerProps {
  label: string;
  placeholder?: string;
  value?: Date | null;
  onChange?: (value: Date | null) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  name?: string;
  id?: string;
  [key: string]: any;
}

export interface ISelect {
  label: string;
  placeholder: string;
  data: { value: number | string; label: string }[];
  defaultValue?: string;
  clearable: boolean;
  onChange?: (value: string | any) => void;
  name: string;
  id?: string;
  required?: boolean;
}
