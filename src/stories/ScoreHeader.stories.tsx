import { Story, Meta } from '@storybook/react'
import ScoreHeader, {
  Props,
} from '../components/organisms/ScoreHeader/ScoreHeader'

export default {
  title: 'Components/Organism/ScoreHeader',
  component: ScoreHeader,
} as Meta

const Template: Story<Props> = args => <ScoreHeader {...args} />

export const Default = Template.bind({})

Default.args = {
  scoreValue: 12,
}
