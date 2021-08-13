import styled from 'styled-components'
import { IconType } from '../components/atoms/Icon/Icon'
import Rules from '../components/organisms/Rules/Rules'
import Header from '../components/templates/Header/Header'
import PlayersHand from '../components/templates/PlayersHand/PlayersHand'
import { Result } from '../hooks/useGameLogic'

const StyledPage = styled.div`
  margin: -1rem;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const StyledMain = styled.main`
  width: 100%;
  max-width: 580px;
`

const StyledFooter = styled.footer`
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    margin: 0 0 0 auto;
  }
`

export interface Props {
  scoreValue: number
  playerHand: IconType
  houseHand: IconType
  result: Result
}

const GameSecondStepPage = ({ playerHand, houseHand, result }: Props) => {
  return (
    <StyledPage>
      <Header />
      <StyledMain>
        <PlayersHand
          houseHand={houseHand}
          playerHand={playerHand}
          onPlayAgain={() => {}}
          result={result}
        />
      </StyledMain>
      <StyledFooter>
        <Rules />
      </StyledFooter>
    </StyledPage>
  )
}

export default GameSecondStepPage
