import styled from 'styled-components'
import { IconType } from '../atoms/Icon/Icon'
import HandOptions from '../organisms/HandOptions/HandOptions'
import PlayersHand from '../templates/PlayersHand/PlayersHand'
import { useGame } from './useGame'

const StyledContent = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
`

const Content: React.FC = () => {
  const [playerHand, houseHand, resetHands, playerSelectHand] = useGame()

  const content = playerHand ? (
    <PlayersHand
      playerHand={playerHand}
      houseHand={houseHand as IconType}
      onPlayAgain={resetHands}
    />
  ) : (
    <HandOptions onClick={playerSelectHand} />
  )

  return <StyledContent>{content}</StyledContent>
}

export default Content
