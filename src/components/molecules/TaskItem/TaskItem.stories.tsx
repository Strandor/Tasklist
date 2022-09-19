import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TaskItem } from "./index";

export default {
  title: "Molecules/TaskItem",
  component: TaskItem,
} as ComponentMeta<typeof TaskItem>;

const Template: ComponentStory<typeof TaskItem> = (args) => (
  <TaskItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isChecked: false,
  title: "Finishing coding the website!",
};
