import { KeyboardEvent, MouseEvent, useRef } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 0.5rem 1rem;
  width: 7rem;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  ${({ theme }) => `
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.white};
  `};
  transition: 0.3s easy;
  transition-property: color, background-color, box-shadow;

  ${({ theme }) => `
    :focus {
      outline: none;
      box-shadow: 0 1px 4px 0 ${theme.colors.white};
    }

    :hover {
      color: ${theme.colors.spaceCadet};
      border-color: ${theme.colors.white};
      background-color: ${theme.colors.white};;
    }

    :active {
      color: ${theme.colors.white};
      border-color: ${theme.colors.white};
      background-color: ${theme.colors.spaceCadet};
    }
  `};
`

interface Props {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Rules: React.FC<Props> = ({ onClick }: Props) => {
  const ref = useRef<HTMLButtonElement>()
  const onKeyUp = (e: KeyboardEvent) => {
    const isEnter = e.key === 'Enter' || e.keyCode === 13
    const isSpace = e.key === ' ' || e.keyCode === 32

    if (isEnter || isSpace) ref.current?.click()
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button
      type="button"
      ref={ref as never}
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      RULES
    </Button>
  )
}

export default Rules
