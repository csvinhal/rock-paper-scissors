import styled from 'styled-components'
import LizardIcon from '../../assets/icon-lizard.svg'
import PaperIcon from '../../assets/icon-paper.svg'
import RockIcon from '../../assets/icon-rock.svg'
import ScissorIcon from '../../assets/icon-scissors.svg'
import SpockIcon from '../../assets/icon-spock.svg'

export type IconType = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock'

export interface Props {
  type: IconType
}

const IconsTypeMap: Record<IconType, string> = {
  rock: RockIcon,
  paper: PaperIcon,
  scissors: ScissorIcon,
  lizard: LizardIcon,
  spock: SpockIcon,
}

const StyledIcon = styled.img`
  height: 3em;
  width: 3em;
`

const Icon: React.FC<Props> = ({ type }: Props) => {
  return <StyledIcon alt="" src={IconsTypeMap[type]} />
}

export default Icon
