import styled from 'styled-components'
import { useGameScore } from '../../../context/scoreContext'
import ScoreHeader from '../../organisms/ScoreHeader/ScoreHeader'

const StyledHeader = styled.header`
  width: 100%;
  max-width: 580px;
`

const Header: React.FC = () => {
  const { score } = useGameScore()
  return (
    <StyledHeader>
      <ScoreHeader scoreValue={score} />
    </StyledHeader>
  )
}

export default Header
