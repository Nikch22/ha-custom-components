import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";


const meta = {
  title: 'UI/LABELS/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: 'inline-radio'
    },
    fontColor: {
      control: 'color'
    }
  }
} satisfies Meta<typeof MyLabel>


export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'My Label Component',
  }
}

export const AllCaps: Story = {
  args: {
    label: 'AllCaps',
    size: 'h1',
    allCaps: true
  }
}

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    color: 'text-secondary'
  }
}

export const CustomColor: Story = {
  args: {
    label: 'CustomColor',
    fontColor:'#9a0a6a',
    size: 'h1'
  }
}