import styled from 'styled-components'

const StyledEmptyPortrait = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  ${({ theme }) => `background-color: ${theme.colors.spaceCadet}`}
`

const EmptyPortrait: React.FC = () => {
  return <StyledEmptyPortrait />
}

export default EmptyPortrait
