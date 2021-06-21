import { Meta, Story } from '@storybook/react'
import Portrait, { Props } from '../components/Portrait/Portrait'

export default {
  title: 'Components/Atomic/Portrait',
  component: Portrait,
} as Meta

const Template: Story<Props> = args => {
  return <Portrait {...args} />
}

export const Default = Template.bind({})

Default.args = {
  type: 'rock',
}
