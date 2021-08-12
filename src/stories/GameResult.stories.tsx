import { Meta, Story } from '@storybook/react'
import GameResult, {
  Props,
} from '../components/molecules/GameResult/GameResult'

export default {
  title: 'Components/Molecules/GameResult',
  component: GameResult,
} as Meta

const Template: Story<Props> = args => {
  return <GameResult {...args} />
}

export const Default = Template.bind({})
