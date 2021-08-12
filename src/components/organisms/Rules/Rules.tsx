import { useState } from 'react'
import RulesButton from '../../molecules/RulesButton/RulesButton'
import RulesModal from '../../molecules/RulesModal/RulesModal'

const Rules: React.FC = () => {
  const [show, setShow] = useState<boolean>(false)

  const showDialog = () => {
    setShow(true)
  }

  const closeDialog = () => {
    setShow(false)
  }

  return (
    <>
      <RulesButton onClick={showDialog} />
      <RulesModal show={show} onClose={closeDialog} />
    </>
  )
}

export default Rules
