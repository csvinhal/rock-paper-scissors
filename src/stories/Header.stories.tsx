import { Story, Meta } from '@storybook/react'
import Header from '../components/Header/Header'
import Score from '../components/Score/Score'

export default {
  title: 'Components/Header',
  component: Header,
} as Meta

const Template: Story = args => (
  <Header {...args}>
    <Score value={12} />
  </Header>
)

export const Default = Template.bind({})
