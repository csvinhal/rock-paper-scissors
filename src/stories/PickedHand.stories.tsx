import { Meta, Story } from '@storybook/react'
import PickedHand, { Props } from '../components/PickedHand/PickedHand'

export default {
  title: 'Components/Organism/PickedHand',
  component: PickedHand,
} as Meta

const Template: Story<Props> = args => {
  return <PickedHand {...args} />
}

export const Default = Template.bind({})

Default.args = {
  label: 'You picked',
}
