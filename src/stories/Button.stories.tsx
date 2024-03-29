import { Story, Meta } from '@storybook/react'
import Button, { Props } from '../components/atoms/Button/Button'

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as Meta

const Template: Story<Props> = args => {
  const { children, ...others } = args

  return <Button {...others}>{children}</Button>
}

export const Default = Template.bind({})

Default.args = {
  children: 'Click',
  modifier: 'solid',
}
