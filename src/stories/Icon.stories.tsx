import { Story, Meta } from '@storybook/react'
import Icon, { Props } from '../components/atoms/Icon/Icon'

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
} as Meta

const Template: Story<Props> = args => {
  return <Icon {...args} />
}

export const Default = Template.bind({})

Default.args = {
  type: 'rock',
}
