import styled from 'styled-components'
import ScoreHeader from '../../organisms/ScoreHeader/ScoreHeader'

const StyledHeader = styled.header`
  width: 100%;
  max-width: 580px;
`

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <ScoreHeader scoreValue={10} />
    </StyledHeader>
  )
}

export default Header
