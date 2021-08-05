import { MouseEvent } from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button/Button'

const StyledButton = styled(Button)`
  width: 7rem;
`

export interface Props {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const RulesButton: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <StyledButton type="button" modifier="outlined" onClick={onClick}>
      RULES
    </StyledButton>
  )
}

export default RulesButton
