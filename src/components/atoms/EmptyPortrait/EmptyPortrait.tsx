import styled from 'styled-components'

const StyledEmptyPortrait = styled.div`
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  margin: 1.25rem;
  ${({ theme }) => `background-color: ${theme.colors.spaceCadet}`}
`

const EmptyPortrait: React.FC = () => {
  return <StyledEmptyPortrait />
}

export default EmptyPortrait
