import styled from 'styled-components'
import PickedHand from '../../organisms/PickedHand/PickedHand'
import { IconType } from '../../atoms/Icon/Icon'

const StyledPlayersHand = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export interface Props {
  playerHand?: IconType
  houseHand?: IconType
}

const PlayersHand: React.FC<Props> = ({ playerHand, houseHand }: Props) => {
  return (
    <StyledPlayersHand>
      <PickedHand label="You picked" selected={playerHand} />
      <PickedHand label="The house picked" selected={houseHand} />
    </StyledPlayersHand>
  )
}

export default PlayersHand
