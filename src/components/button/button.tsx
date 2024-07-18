import React from "react";
import { ButtonVariantProps, ButtonWithIconProps } from "./interface";
import { Button } from "@mantine/core";

export const PrimaryButton: React.FC<ButtonVariantProps> = ({
  type,
  name,
  radius,
  color,
  fullWidth,
  onClick,
  disabled,
  loading,
  variant,
}) => {
  return (
    <Button
      variant={variant}
      type={type}
      radius={radius}
      size="md"
      color={color ? color : "#9263F8"}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      loading={loading}>
      {name}
    </Button>
  );
};

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  name,
  radius,
  color,
  fullWidth,
  onClick,
  disabled,
  loading,
  type,
  variant,
  leftSection,
  rightSection,
  justify,
}) => (
  <Button
    variant={variant}
    type={type}
    radius={radius}
    size="md"
    color={color ? color : "#9263F8"}
    fullWidth={fullWidth}
    onClick={onClick}
    disabled={disabled}
    loading={loading}
    leftSection={leftSection}
    rightSection={rightSection}
    justify={justify ? justify : "center"}>
    {name}
  </Button>
);
