import styled from 'styled-components'
import Score from '../Score/Score'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 16px;
`

const ItemText = styled.p`
  margin: 0;
`

const List = styled.div`
  line-height: 0.9;
  margin-left: 1rem;
`

export interface Props {
  scoreValue: number
}

const Header: React.FC<Props> = ({ scoreValue }: Props) => (
  <HeaderContainer>
    <List>
      <ItemText>ROCK</ItemText>
      <ItemText>PAPER</ItemText>
      <ItemText>SCISSOR</ItemText>
      <ItemText>LIZZARD</ItemText>
      <ItemText>SPOCK</ItemText>
    </List>
    <Score value={scoreValue} />
  </HeaderContainer>
)

export default Header
