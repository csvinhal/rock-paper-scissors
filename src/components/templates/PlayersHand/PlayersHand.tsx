import styled from 'styled-components'
import { Result } from '../../../hooks/useGameLogic'
import { IconType } from '../../atoms/Icon/Icon'
import GameResult from '../../molecules/GameResult/GameResult'
import PickedHand from '../../organisms/PickedHand/PickedHand'

const StyledPlayersHand = styled.div`
  display: grid;
  grid-template-areas:
    'player . house'
    'result result result';
  width: 100%;
  height: 100%;
  max-width: 864px;
  margin: auto;
  align-content: space-evenly;

  @media only screen and (min-width: 768px) {
    grid-template-areas:
      'player result house'
      'player result house';
  }
`

const StyledPlayer = styled.div`
  grid-area: player;
`

const StyledGameResult = styled.div<{ show: boolean }>`
  grid-area: result;
  margin: auto;
  height: 6.5rem;
  min-width: 12rem;
  width: 100%;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;

  @media only screen and (min-width: 768px) {
    height: 11.75rem;
  }
`

const StyledHouse = styled.div`
  grid-area: house;
`

export interface Props {
  playerHand: IconType
  houseHand: IconType
  result: Result | undefined
  onPlayAgain: () => void
}

const PlayersHand: React.FC<Props> = ({
  playerHand,
  houseHand,
  result,
  onPlayAgain,
}: Props) => {
  return (
    <StyledPlayersHand>
      <StyledPlayer>
        <PickedHand label="You picked" selected={playerHand} />
      </StyledPlayer>
      <StyledGameResult show={!!result}>
        <GameResult result={result as Result} onPlayAgain={onPlayAgain} />
      </StyledGameResult>
      <StyledHouse>
        <PickedHand label="The house picked" selected={houseHand} />
      </StyledHouse>
    </StyledPlayersHand>
  )
}

export default PlayersHand
