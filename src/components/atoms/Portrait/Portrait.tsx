import { ReactElement } from 'react'
import styled from 'styled-components'
import Icon, { IconType } from '../Icon/Icon'

const getBackground = (type: IconType) => {
  switch (type) {
    case 'scissors':
      return 'background: linear-gradient(hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%);'
    case 'paper':
      return 'background: linear-gradient(hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%);'
    case 'rock':
      return 'background: linear-gradient(hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%);'
    case 'lizard':
      return 'background: linear-gradient(hsl(261, 73%, 60%) 0%, hsl(261, 72%, 63%) 100%);'
    case 'spock':
      return 'background: linear-gradient(hsl(189, 59%, 53%) 0%, hsl(189, 58%, 57%) 100%);'
    default:
      return ''
  }
}

export type PortraitSize = 'md' | 'lg'

export interface Props {
  type: IconType
  icon?: ReactElement<typeof Icon>
  size: PortraitSize
}

const StyledPortrait = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: inset -1px -5px 0px 0px rgb(0 0 0 / 25%);

  ${({ type, size }) => `
    height: ${size === 'md' ? '6.5rem' : '9.5rem'};
    width: ${size === 'md' ? '6.5rem' : '9.5rem'};
    ${getBackground(type)}
  `}
`

const PortraitContent = styled.div<{ size: PortraitSize }>`
  ${({ theme, size }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    height: ${size === 'md' ? '5rem' : '7rem'};
    width: ${size === 'md' ? '5rem' : '7rem'};
    border-radius: 50%;
    box-shadow: inset 1px 5px 0px 0px rgb(0 0 0 / 25%);
  `}
`

const Portrait: React.FC<Props> = ({ icon, type, size }: Props) => {
  return (
    <StyledPortrait type={type} size={size}>
      <PortraitContent size={size}>{icon}</PortraitContent>
    </StyledPortrait>
  )
}

export default Portrait
