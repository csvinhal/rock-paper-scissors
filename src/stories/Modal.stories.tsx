import { Meta, Story } from '@storybook/react'
import Modal, { Props } from '../components/atoms/Modal/Modal'

export default {
  title: 'Components/Atoms/Modal',
  component: Modal,
} as Meta

const Template: Story<Props> = args => (
  <Modal {...args}>
    <h1 style={{ color: 'black' }}>Exemple of a modal</h1>
    <p style={{ color: 'black' }}>
      Modal is full screen on mobile and fix content on desktop
    </p>
  </Modal>
)

export const Default = Template.bind({})
