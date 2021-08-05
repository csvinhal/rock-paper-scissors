import { Meta, Story } from '@storybook/react'
import EmptyPortrait from '../components/atoms/EmptyPortrait/EmptyPortrait'

export default {
  title: 'Components/Atoms/EmptyPortait',
  component: EmptyPortrait,
} as Meta

const Template: Story = () => {
  return <EmptyPortrait />
}

export const Default = Template.bind({})
