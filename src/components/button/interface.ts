export interface ButtonVariantProps {
  variant: "filled" | "outline" | "light" | "subtle" | "default";
  name: string;
  color?: string;
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type: "button" | "submit" | "reset";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface ButtonWithIconProps extends ButtonVariantProps {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  justify?: "space-between" | "center";
}