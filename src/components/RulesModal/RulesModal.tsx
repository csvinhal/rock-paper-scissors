import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import ImageRules from '../../assets/image-rules-bonus.svg'
import IconClose from '../../assets/icon-close.svg'

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  background-color: ${({ theme }) => theme.colors.black};
`

const ModalDialog = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-areas:
    'title title'
    'rules rules'
    'close close';
  justify-content: center;
  align-content: space-evenly;
  margin: auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};

  @media only screen and (min-width: 768px) {
    height: auto;
    max-width: max-content;
    padding: 32px;
    grid-template:
      'title close'
      'rules rules'
      'rules rules';
    row-gap: 1rem;
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

const CloseIconButton = styled.button`
  grid-area: close;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 2.375rem;
  max-height: 2.375rem;
  justify-self: center;
  padding: 0.5rem;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  ${({ theme }) => `
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  `};
  transition: 0.3s easy;
  transition-property: background-color, box-shadow;
  ${({ theme }) => `
  :focus {
    outline: none;
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

const RulesModal: React.FC = () => {
  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const focusTrap = (e: KeyboardEvent) => {
      const isTab = e.key === 'Tab' || e.keyCode === 9

      if (isTab) {
        const focusableModalElements = modalRef.current.querySelectorAll(
          'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"], [tabindex^="2"], [tabindex^="3"], [tabindex^="4"], [tabindex^="5"], [tabindex^="6"], [tabindex^="7"], [tabindex^="8"], [tabindex^="9"]',
        )
        const firstElement = focusableModalElements[0]
        const lastElement =
          focusableModalElements[focusableModalElements.length - 1]

        if (e.shiftKey && document.activeElement === firstElement) {
          ;(lastElement as HTMLElement).focus()
          e.preventDefault()
          return undefined
        }

        if (!e.shiftKey && document.activeElement === lastElement) {
          ;(firstElement as HTMLElement).focus()
          e.preventDefault()
          return undefined
        }
      }

      return undefined
    }
    document.addEventListener('keydown', focusTrap)

    return () => document.removeEventListener('keydown', focusTrap)
  }, [modalRef])

  return (
    <Modal role="dialog">
      <Overlay />
      <ModalDialog>
        <ModalContent ref={modalRef}>
          <TitleContainer>
            <Title>RULES</Title>
          </TitleContainer>
          <RulesImage alt="Rules of the game" src={ImageRules} />
          <CloseIconButton aria-label="Close dialog">
            <img alt="" src={IconClose} />
          </CloseIconButton>
        </ModalContent>
      </ModalDialog>
    </Modal>
  )
}

export default RulesModal
