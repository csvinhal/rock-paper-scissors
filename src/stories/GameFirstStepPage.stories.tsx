import { Meta, Story } from '@storybook/react'
import GameFirstStepPage, { Props } from './GameFirstStepPage'

export default {
  title: 'Components/Page/GameFirstStep',
  component: GameFirstStepPage,
} as Meta

const Template: Story<Props> = args => {
  return <GameFirstStepPage {...args} />
}

export const Default = Template.bind({})

Default.args = {
  scoreValue: 12,
}
