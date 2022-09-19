import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CheckButton } from "./index";

export default {
  title: "Atoms/CheckButton",
  component: CheckButton,
} as ComponentMeta<typeof CheckButton>;

const Template: ComponentStory<typeof CheckButton> = (args) => (
  <CheckButton {...args} />
);

export const NotChecked = Template.bind({});
NotChecked.args = {
  isChecked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
};
