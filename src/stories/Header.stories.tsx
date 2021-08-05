import { Story, Meta } from '@storybook/react'
import Header, { Props } from '../components/organisms/Header/Header'

export default {
  title: 'Components/Organism/Header',
  component: Header,
} as Meta

const Template: Story<Props> = args => (
  <Header {...args} />
)

export const Default = Template.bind({})

Default.args = {
  scoreValue: 12,
}
