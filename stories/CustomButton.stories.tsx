import { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "../components/atoms/CustomButton/CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "Custom Button",
  component: CustomButton,
};

export default meta;

type Story = StoryObj<typeof CustomButton>;
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    vairant: "",
    children: "ganteng",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    bukanVariable: {
      options: ["satu", "dua", "tiga"],
      control: { type: "check" },
    },
  },
};
