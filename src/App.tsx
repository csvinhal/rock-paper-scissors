import styled from 'styled-components'
import Content from './components/Content/Content'
import Footer from './components/templates/Footer/Footer'
import Header from './components/templates/Header/Header'
import ThemeProvider from './components/ThemeProvider/ThemeProvider'
import { ScoreProvider } from './context/scoreContext'

const StyledPage = styled.div`
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const StyledMain = styled.main`
  flex: 1;
  width: 100%;
`

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ScoreProvider>
        <StyledPage>
          <Header />
          <StyledMain>
            <Content />
          </StyledMain>
          <Footer />
        </StyledPage>
      </ScoreProvider>
    </ThemeProvider>
  )
}

export default App
