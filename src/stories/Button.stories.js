import React from "react";

import Button from "../components/Button/Button";

import { MailIcon, SyncIcon } from "@primer/octicons-react";
export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const OutlineGray = Template.bind({});
OutlineGray.args = {
  icon: <MailIcon />,
  name: "Button",
  className: "outline--gray regular",
  fontSize: "16px",
};
