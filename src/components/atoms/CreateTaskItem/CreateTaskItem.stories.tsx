import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CreateTaskItem } from "./index";

export default {
  title: "Atoms/CreateTaskItem",
  component: CreateTaskItem,
} as ComponentMeta<typeof CreateTaskItem>;

const Template: ComponentStory<typeof CreateTaskItem> = (args) => (
  <CreateTaskItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
