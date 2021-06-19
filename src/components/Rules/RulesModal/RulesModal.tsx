import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import ImageRules from '../../../assets/image-rules-bonus.svg'
import IconClose from '../../../assets/icon-close.svg'
import Button from '../../Button/Button'
import Modal from '../../Modal/Modal'

const StyledRuleModal = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas:
    'title title'
    'rules rules'
    'close close';
  justify-content: center;
  align-content: space-evenly;

  @media only screen and (min-width: 768px) {
    grid-template:
      'title close'
      'rules rules'
      'rules rules';
    row-gap: 1rem;
    border-radius: 8px;
    padding: 32px;
  }
`

const TitleContainer = styled.div`
  width: 100%;
  grid-area: title;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};

  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`

const CloseIconButton = styled(Button)`
  grid-area: close;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 2.375rem;
  max-height: 2.375rem;
  justify-self: center;
  border-radius: 4px;
  ${({ theme }) => `
  :focus {
    border-color: ${theme.colors.grey};
  }
  
  :hover {
    border-color: ${theme.colors.grey};
    box-shadow: 0 1px 4px 0 ${theme.colors.grey};
  }
  `};

  @media only screen and (min-width: 768px) {
    justify-self: flex-end;
  }
`

const RulesImage = styled.img`
  min-width: 21.25rem;
  min-height: 20.625rem;
  width: 21.25rem;
  height: auto;
  grid-area: rules;
`

interface Props {
  show: boolean
  onClose: () => void
}

const RulesModal: React.FC<Props> = ({ show, onClose }: Props) => {
  const firstElementRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const activeElement = document.activeElement as HTMLElement
    firstElementRef.current?.focus()
    return () => {
      activeElement.focus()
    }
  }, [firstElementRef])

  return (
    <Modal show={show} onClose={onClose}>
      <StyledRuleModal>
        <TitleContainer>
          <Title>RULES</Title>
        </TitleContainer>
        <RulesImage alt="Rules of the game" src={ImageRules} />
        <CloseIconButton
          aria-label="Close dialog"
          modifier="ghost"
          onClick={onClose}
          ref={firstElementRef}
        >
          <img alt="" src={IconClose} />
        </CloseIconButton>
      </StyledRuleModal>
    </Modal>
  )
}

export default RulesModal
