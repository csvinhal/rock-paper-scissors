import { ReactElement } from 'react'
import styled from 'styled-components'
import { Props as ScoreProps } from '../Score/Score'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 4px;
`

const ItemText = styled.p`
  margin: 0;
`

const List = styled.div`
  line-height: 0.9;
  margin-left: 1rem;
`

interface Props {
  children: ReactElement<ScoreProps>
}

const Header: React.FC<Props> = ({ children }: Props) => (
  <HeaderContainer>
    <List>
      <ItemText>ROCK</ItemText>
      <ItemText>PAPER</ItemText>
      <ItemText>SCISSOR</ItemText>
      <ItemText>LIZZARD</ItemText>
      <ItemText>SPOCK</ItemText>
    </List>
    {children}
  </HeaderContainer>
)

export default Header
