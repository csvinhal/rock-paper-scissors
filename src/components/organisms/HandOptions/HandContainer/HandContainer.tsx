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
          top: 7rem;
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
          top: 7rem;
          left: 0rem;
        `
      default:
        return ''
    }
  }}
`

const HandContainer: React.FC<Props> = ({ type, onClick }: Props) => {
  const ariaId = `hand_${type}`
  const label = useMemo(() => {
    switch (type) {
      case 'scissors':
        return 'Scissors'
      case 'paper':
        return 'Paper'
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
      aria-labelledby={ariaId}
      onClick={() => onClick(type)}
      onKeyDown={onKeyDown}
    >
      <p id={ariaId} style={{ display: 'none' }} aria-hidden>
        Select {label}
      </p>
      <Hand type={type} size="md" />
    </StyledContainer>
  )
}

export default HandContainer
