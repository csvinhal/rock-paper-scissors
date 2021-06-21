import { Story, Meta } from '@storybook/react'
import Icon, { Props } from '../components/Icon/Icon'

export default {
  title: 'Components/Atomic/Icon',
  component: Icon,
} as Meta

const Template: Story<Props> = args => {
  return <Icon {...args} />
}

export const Default = Template.bind({})

Default.args = {
  type: 'rock',
}
