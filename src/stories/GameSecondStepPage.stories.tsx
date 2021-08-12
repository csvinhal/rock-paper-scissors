import { Meta, Story } from '@storybook/react'
import GameSecondStepPage, { Props } from './GameSecondStepPage'

export default {
  title: 'Components/Pages/GameSecondStepPage',
  component: GameSecondStepPage,
} as Meta

const Template: Story<Props> = args => {
  return <GameSecondStepPage {...args} />
}

export const Default = Template.bind({})

Default.args = {
  scoreValue: 12,
}
