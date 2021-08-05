import styled from 'styled-components'
import Pentagon from '../../../assets/bg-pentagon.svg'
import { IconType } from '../../atoms/Icon/Icon'
import HandContainer from './HandContainer/HandContainer'

const StyledHandOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  margin: 0 auto;
  width: 20.5rem;
  height: 22.5rem;

  @media only screen and (min-width: 768px) {
    width: 23.5rem;
    height: 25rem;
  }
`

const BackgroundImg = styled.img`
  width: 17.5rem;
  padding-top: 3rem;

  @media only screen and (min-width: 768px) {
    width: auto;
  }
`

export interface Props {
  onClick: (type: IconType) => void
}

const HandOptions: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <StyledHandOptions>
      <BackgroundImg alt="" src={Pentagon} />
      <HandContainer type="scissors" onClick={onClick} />
      <HandContainer type="spock" onClick={onClick} />
      <HandContainer type="paper" onClick={onClick} />
      <HandContainer type="lizard" onClick={onClick} />
      <HandContainer type="rock" onClick={onClick} />
    </StyledHandOptions>
  )
}

export default HandOptions
