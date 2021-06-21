import { Meta, Story } from '@storybook/react'
import Hand, { Props } from '../components/Hand/Hand'

export default {
  title: 'Components/Molecules/Hand',
  component: Hand,
} as Meta

const Template: Story<Props> = args => {
  return <Hand {...args} />
}

export const Default = Template.bind({})

Default.args = {
  type: 'rock',
}