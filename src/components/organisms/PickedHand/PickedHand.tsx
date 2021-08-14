import styled from 'styled-components'
import EmptyPortrait from '../../atoms/EmptyPortrait/EmptyPortrait'
import Hand from '../../molecules/Hand/Hand'
import { IconType } from '../../atoms/Icon/Icon'

const StyledPickedHand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }
`

const StyledContent = styled.div`
  position: relative;
  height: 9.5rem;
  width: 9.5rem;
`

const StyledHandContainer = styled.div<{ show: boolean }>`
  position: absolute;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`

const StyledEmptyPortraitContainer = styled.div<{ show: boolean }>`
  position: absolute;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`

const StyledLabel = styled.p`
  text-transform: uppercase;
  margin: 1rem 0 0;

  @media only screen and (min-width: 768px) {
    margin: 0 0 1rem;
  }
`

export interface Props {
  label: string
  selected?: IconType
}

const PickedHand: React.FC<Props> = ({ label, selected }: Props) => {
  return (
    <StyledPickedHand aria-labelledby="picked-label">
      <StyledContent>
        <StyledHandContainer show={!!selected}>
          <Hand type={selected as IconType} size="lg" />
        </StyledHandContainer>
        <StyledEmptyPortraitContainer show={!selected}>
          <EmptyPortrait />
        </StyledEmptyPortraitContainer>
      </StyledContent>
      <StyledLabel id="picked-label">{label}</StyledLabel>
    </StyledPickedHand>
  )
}

export default PickedHand
