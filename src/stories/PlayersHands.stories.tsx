import { Meta, Story } from '@storybook/react'
import PlayersHand, {
  Props,
} from '../components/templates/PlayersHand/PlayersHand'

export default {
  title: 'Components/Templates/PlayersHand',
  component: PlayersHand,
} as Meta

const Template: Story<Props> = args => (
  <div style={{ maxWidth: '560px' }}>
    <PlayersHand {...args} />
  </div>
)

export const Default = Template.bind({})
