import { Meta, Story } from '@storybook/react'
import RulesModal from '../components/RulesModal/RulesModal'

export default {
  title: 'Components/RulesModal',
  component: RulesModal,
} as Meta

const Template: Story = args => <RulesModal {...args} />

export const Default = Template.bind({})
