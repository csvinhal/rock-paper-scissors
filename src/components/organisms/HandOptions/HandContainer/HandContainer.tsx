import { KeyboardEvent, useMemo } from 'react'
import styled from 'styled-components'
import { IconType } from '../../../atoms/Icon/Icon'
import Hand from '../../../molecules/Hand/Hand'

interface Props {
  type: IconType
  onClick: (type: IconType) => void
}

const StyledContainer = styled.div<Pick<Props, 'type'>>`
  position: absolute;
  cursor: pointer;

  ${({ type }) => {
    switch (type) {
      case 'scissors':
        return 'top: 0rem;'
      case 'paper':
        return `
          top: 6.5rem;
          right: 0rem;
        `
      case 'rock':
        return `
          right: 1rem;
          bottom: 0;
        `
      case 'lizard':
        return `
          left: 1rem;
          bottom: 0;
        `
      case 'spock':
        return `
          top: 6.5rem;
          left: 0rem;
        `
      default:
        return ''
    }
  }}
`

const HandContainer: React.FC<Props> = ({ type, onClick }: Props) => {
  const label = useMemo(() => {
    switch (type) {
      case 'scissors':
        return 'Scissors'
      case 'paper':
        return 'Pape'
      case 'rock':
        return 'Rock'
      case 'lizard':
        return 'Lizard'
      case 'spock':
        return 'Spock'
      default:
        return ''
    }
  }, [type])

  const onKeyDown = (e: KeyboardEvent) => {
    const isSpace = e.key === 'Space' || e.keyCode === 32
    const isEnter = e.key === 'Enter' || e.keyCode === 13

    if (isSpace || isEnter) {
      onClick(type)
    }
  }

  return (
    <StyledContainer
      type={type}
      role="button"
      tabIndex={0}
      aria-labelledby={`hand_${type}`}
      onClick={() => onClick(type)}
      onKeyDown={onKeyDown}
    >
      <p id={`hand_${type}`} style={{ display: 'none' }} aria-hidden>
        {label}
      </p>
      <Hand type={type} size="md" />
    </StyledContainer>
  )
}

export default HandContainer