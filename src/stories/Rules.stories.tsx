import { Meta, Story } from '@storybook/react'
import Rules from '../components/Rules/Rules'

export default {
  title: 'Components/Rules',
  component: Rules,
} as Meta

const Template: Story = args => <Rules {...args} />

export const Default = Template.bind({})
