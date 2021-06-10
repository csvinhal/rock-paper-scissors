import styled from 'styled-components'

export interface Props {
  value: number
}

const ContainerDiv = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  width: 6rem;
  height: 6rem;
  line-height: 1.1;
`
const ScoreTitle = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.095rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.blue};
`

const ScoreValue = styled.p`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.dark};
`

const Score: React.FC<Props> = ({ value }: Props) => {
  return (
    <ContainerDiv>
      <ScoreTitle>SCORE</ScoreTitle>
      <ScoreValue>{value}</ScoreValue>
    </ContainerDiv>
  )
}

export default Score
