import { Story, Meta } from '@storybook/react'
import Header from '../components/Header/Header'
import Score from '../components/Score/Score'

export default {
  title: 'Components/Header',
  component: Header,
} as Meta

const Template: Story = args => (
  <Header>
    <Score value={args.value} />
  </Header>
)

export const Default = Template.bind({})

Default.args = {
  value: 12,
}
