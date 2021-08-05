import { Meta, Story } from '@storybook/react'
import EmptyPortrait from '../components/EmptyPortrait/EmptyPortrait'

export default {
  title: 'Components/Atomic/EmptyPortait',
  component: EmptyPortrait,
} as Meta

const Template: Story = () => {
  return <EmptyPortrait />
}

export const Default = Template.bind({})
