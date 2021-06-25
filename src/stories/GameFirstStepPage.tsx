import Header from '../components/Header/Header'
import HandOptionsStories from '../components/HandOptions/HandOptions'
import styled from 'styled-components'
import Rules from '../components/Rules/Rules'

export interface Props {
  scoreValue: number
}

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

const StyledHeader = styled.header`
  width: 100%;
  max-width: 580px;
`

const StyledFooter = styled.footer`
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    margin: 0 0 0 auto;
  }
`

const GameFirstStepPage = ({ scoreValue }: Props) => {
  return (
    <StyledPage>
      <StyledHeader>
        <Header scoreValue={scoreValue} />
      </StyledHeader>
      <StyledMain>
        <HandOptionsStories onClick={() => {}} />
      </StyledMain>
      <StyledFooter>
        <Rules />
      </StyledFooter>

    </StyledPage>
  )
}

export default GameFirstStepPage
