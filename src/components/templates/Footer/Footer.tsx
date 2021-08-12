import styled from 'styled-components'
import Rules from '../../organisms/Rules/Rules'

const StyledFooter = styled.footer`
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    margin: 0 0 0 auto;
  }
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Rules />
    </StyledFooter>
  )
}

export default Footer
