import Icon, { IconType } from '../../atoms/Icon/Icon'
import Portrait, { PortraitSize } from '../../atoms/Portrait/Portrait'

export interface Props {
  type: IconType
  size: PortraitSize
}

const Hand: React.FC<Props> = ({ type, size }: Props) => {
  return <Portrait type={type} size={size} icon={<Icon type={type} />} />
}

export default Hand
