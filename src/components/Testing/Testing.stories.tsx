import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Testing from "./index";

export default {
  title: "Texting",
  component: Testing,

  //👇 Creates specific argTypes
  argTypes: {
    type: { control: "radio", options: ["prim ", "second"], selected: "prim" },
  },
  args: {
    //👇 Now all Button stories will be primary.
    // type: "prim",
  },
} as ComponentMeta<typeof Testing>;

const Template: ComponentStory<typeof Testing> = ({ ...arg }) => (
  <Testing {...arg} />
);

export const PrimeTesting = Template.bind({});
export const Prime2Testing = Template.bind({});

PrimeTesting.args = {
  title: "salem",
  type: "prim",
  isActibe: false,
};
