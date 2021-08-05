import { Story, Meta } from '@storybook/react'
import HandOptions, { Props } from '../components/organisms/HandOptions/HandOptions'

export default {
  title: 'Components/Organism/HandOptions',
  component: HandOptions,
} as Meta

const Template: Story<Props> = args => {
  return <HandOptions {...args} />
}

export const Default = Template.bind({})


Default.args = {
  onClick: () => {console.log('clicked')},
}
