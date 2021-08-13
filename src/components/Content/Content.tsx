import styled from 'styled-components'
import { useGameLogic } from '../../hooks/useGameLogic'
import { IconType } from '../atoms/Icon/Icon'
import HandOptions from '../organisms/HandOptions/HandOptions'
import PlayersHand from '../templates/PlayersHand/PlayersHand'

const StyledContent = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
`

const Content: React.FC = () => {
  const [{ playerHand, houseHand, result }, resetGame, selectPlayerHand] =
    useGameLogic()

  const content = playerHand ? (
    <PlayersHand
      playerHand={playerHand}
      houseHand={houseHand as IconType}
      result={result}
      onPlayAgain={resetGame}
    />
  ) : (
    <HandOptions onClick={selectPlayerHand} />
  )

  return <StyledContent>{content}</StyledContent>
}

export default Content
