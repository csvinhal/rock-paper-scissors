import { Story, Meta } from '@storybook/react'
import Score, { Props } from '../components/atoms/Score/Score'

export default {
  title: 'Components/Atoms/Score',
  component: Score,
} as Meta

const Template: Story<Props> = (args: Props) => <Score {...args} />

export const Default = Template.bind({})

Default.args = {
  value: 12,
}
