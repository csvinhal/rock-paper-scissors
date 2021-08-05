import styled from 'styled-components'
import EmptyPortrait from '../../atoms/EmptyPortrait/EmptyPortrait'
import Hand from '../../molecules/Hand/Hand'
import { IconType } from '../../atoms/Icon/Icon'

const StyledPickedHand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 9rem;

  @media only screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }
`

const Label = styled.p`
  text-transform: uppercase;
`

export interface Props {
  label: string
  selected?: IconType
}

const PickedHand: React.FC<Props> = ({ label, selected }: Props) => {
  const children = selected ? <Hand type={selected} /> : <EmptyPortrait />
  return (
    <StyledPickedHand aria-labelledby="picked-label">
      {children}
      <Label id="picked-label">{label}</Label>
    </StyledPickedHand>
  )
}

export default PickedHand
