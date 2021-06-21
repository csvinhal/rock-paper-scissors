import Icon, { IconType } from '../Icon/Icon'
import Portrait from '../Portrait/Portrait'

export interface Props {
  type: IconType
}

const Hand: React.FC<Props> = ({ type }: Props) => {
  return <Portrait type={type} icon={<Icon type={type} />} />
}

export default Hand
