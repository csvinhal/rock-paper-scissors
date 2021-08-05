import { Meta, Story } from '@storybook/react'
import RulesModal, { Props } from '../components/molecules/RulesModal/RulesModal'

export default {
  title: 'Components/Molecules/RulesModal',
  component: RulesModal,
} as Meta

const Template: Story<Props> = args => <RulesModal {...args} />

export const Default = Template.bind({})

Default.args = {
  show: false,
}
