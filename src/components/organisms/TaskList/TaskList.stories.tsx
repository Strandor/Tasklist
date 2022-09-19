import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TaskList } from "./index";

export default {
  title: "Organisms/TaskList",
  component: TaskList,
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = (args) => (
  <TaskList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  date: new Date(),
};
