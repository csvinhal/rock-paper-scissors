import { useCallback, useState } from 'react'
import RulesButton from './RulesButton/RulesButton'
import RulesModal from './RulesModal/RulesModal'

const Rules: React.FC = () => {
  const [show, setShow] = useState<boolean>(false)

  const onClickButton = useCallback(() => {
    setShow(true)
  }, [])
  const onCloseDialog = useCallback(() => {
    setShow(false)
  }, [])

  return (
    <>
      <RulesButton onClick={onClickButton} />
      <RulesModal show={show} onClose={onCloseDialog} />
    </>
  )
}

export default Rules
