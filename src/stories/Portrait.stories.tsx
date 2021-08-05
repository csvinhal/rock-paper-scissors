import { Meta, Story } from '@storybook/react'
import Portrait, { Props } from '../components/atoms/Portrait/Portrait'

export default {
  title: 'Components/Atoms/Portrait',
  component: Portrait,
} as Meta

const Template: Story<Props> = args => {
  return <Portrait {...args} />
}

export const Default = Template.bind({})

Default.args = {
  type: 'rock',
}
