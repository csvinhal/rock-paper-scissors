import { Meta, Story } from '@storybook/react'
import RulesModal, { Props } from '../components/Rules/RulesModal/RulesModal'

export default {
  title: 'Components/Rules/RulesModal',
  component: RulesModal,
} as Meta

const Template: Story<Props> = args => <RulesModal {...args} />

export const Default = Template.bind({})

Default.args = {
  show: false,
}
