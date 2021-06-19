import { useRef, useEffect, ReactNode, HTMLAttributes } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean
  children: ReactNode
  onClose: () => void
}

const StyledModal = styled.div<Pick<Props, 'show'>>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s linear;
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
  background-color: ${({ theme }) => theme.colors.white};

  @media only screen and (min-width: 768px) {
    height: auto;
    max-width: max-content;
    border-radius: 8px;
    padding: 32px;
  }
`

const Modal: React.FC<Props> = ({ children, show, ...props }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const focusTrap = (e: KeyboardEvent) => {
      const isTab = e.key === 'Tab' || e.keyCode === 9
      if (isTab) {
        const focusableModalElements =
          modalRef.current?.querySelectorAll(
            'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"], [tabindex^="2"], [tabindex^="3"], [tabindex^="4"], [tabindex^="5"], [tabindex^="6"], [tabindex^="7"], [tabindex^="8"], [tabindex^="9"]',
          ) || []
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
    return () => {
      document.removeEventListener('keydown', focusTrap)
    }
  }, [modalRef])

  const modalRoot = document.getElementById('modal-root') as HTMLElement

  return show
    ? ReactDOM.createPortal(
        <StyledModal role="dialog" show aria-modal {...props}>
          <Overlay />
          <ModalDialog>
            <ModalContent ref={modalRef}>{children}</ModalContent>
          </ModalDialog>
        </StyledModal>,
        modalRoot,
      )
    : null
}

export default Modal
