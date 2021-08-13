import styled from 'styled-components'
import { Result } from '../../../hooks/useGameLogic'
import Button from '../../atoms/Button/Button'

const StyledGameResult = styled.div`
  width: 12rem;
  margin: auto;
`

const StyledTitle = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  text-align: center;
`

const StyledPlayAgain = styled(Button)`
  width: 100%;
`

export interface Props {
  result: Result
  onPlayAgain: () => void
}

const GameResult: React.FC<Props> = ({ result, onPlayAgain }: Props) => {
  let title = ''

  switch (result) {
    case 'win':
      title = 'You Win'
      break
    case 'loose':
      title = 'You Loose'
      break
    case 'tie':
      title = 'Tie'
      break
    default:
      break
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    const isSpace = e.key === 'Space' || e.keyCode === 32
    const isEnter = e.key === 'Enter' || e.keyCode === 13

    if (isSpace || isEnter) {
      onPlayAgain()
    }
  }

  return (
    <StyledGameResult>
      <StyledTitle>{title}</StyledTitle>
      <StyledPlayAgain onClick={onPlayAgain} onKeyDown={onKeyDown}>
        Play Again
      </StyledPlayAgain>
    </StyledGameResult>
  )
}

export default GameResult
