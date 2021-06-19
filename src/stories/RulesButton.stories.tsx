import { Meta, Story } from '@storybook/react'
import RulesButton, { Props } from '../components/Rules/RulesButton/RulesButton'

export default {
  title: 'Components/Molecules/RulesButton',
  component: RulesButton,
} as Meta

const Template: Story<Props> = args => <RulesButton {...args} />

export const Default = Template.bind({})
