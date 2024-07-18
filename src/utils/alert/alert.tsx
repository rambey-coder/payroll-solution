import { IconX, IconCheck } from "@tabler/icons-react";
import { showNotification } from "@mantine/notifications";
import { rem } from "@mantine/core";
import React from "react";

const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

const notify = (type: string, message: string) => {
  showNotification({
    title: type === "error" ? "Bummer!" : "Success!",
    message: message,
    color: type === "error" ? "red" : "teal",
    icon: type === "error" ? xIcon : checkIcon,
  });
};

export const alert = {
  error: (message: string) => notify("error", message),
  success: (message: string) => notify("success", message),
};
