import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { UpdateModal } from "./index";

export default {
  title: "Atoms/UpdateModal",
  component: UpdateModal,
} as ComponentMeta<typeof UpdateModal>;

const Template: ComponentStory<typeof UpdateModal> = (args) => (
  <UpdateModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Hello world",
  description: "Hello",
  deadline: new Date(9),
};
