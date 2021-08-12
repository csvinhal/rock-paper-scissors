import styled from 'styled-components'
import HandOptions from '../components/organisms/HandOptions/HandOptions'
import Footer from '../components/templates/Footer/Footer'
import Header from '../components/templates/Header/Header'

export interface Props {
  scoreValue: number
}

const StyledPage = styled.div`
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

const GameFirstStepPage = ({ scoreValue }: Props) => {
  return (
    <StyledPage>
      <Header />
      <StyledMain>
        <HandOptions onClick={() => {}} />
      </StyledMain>
      <Footer />
    </StyledPage>
  )
}

export default GameFirstStepPage
