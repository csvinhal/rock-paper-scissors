import {
  ReactElement,
  ButtonHTMLAttributes,
  ReactNode,
  JSXElementConstructor,
} from 'react'
import styled from 'styled-components'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children:
    | (ReactNode & ReactElement<any, string | JSXElementConstructor<any>>)
    | string
  modifier?: 'solid' | 'outlined' | 'ghost'
}

const StyledButton = styled.button<Props>`
  height: 3rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.3s easy;
  transition-property: color, background-color, border-color, box-shadow;

  ${({ theme, modifier }) => {
    switch (modifier) {
      case 'outlined':
        return `
          border: 2px solid transparent;
          color: ${theme.colors.white};
          border-color: ${theme.colors.white};
          background-color: transparent;

          :focus {
            outline: none;
            box-shadow: 0 1px 4px 0 ${theme.colors.white};
          }

          :hover {
            color: ${theme.colors.prusianBlue};
            border-color: ${theme.colors.white};
            background-color: ${theme.colors.white};
          }

          :active {
            color: ${theme.colors.white};
            background-color: ${theme.colors.grey};
            border-color: ${theme.colors.grey};
            box-shadow: none;
          }
        `
      case 'ghost':
        return `
          color: ${theme.colors.white};
          border: 2px solid transparent;
          background-color: transparent;

          :focus {
            outline: none;
            border: 2px solid ${theme.colors.white};
            box-shadow: 0 1px 4px 0 ${theme.colors.white};
          }

          :hover {
            color: ${theme.colors.white};
            border-color: ${theme.colors.white};
          }

          :active {
            border-color: ${theme.colors.grey};
            box-shadow: none;
          }
        `
      case 'solid':
      default:
        return `
          color: ${theme.colors.prusianBlue};
          border: 2px solid ${theme.colors.white};
          background-color: ${theme.colors.white};

          :focus {
            outline: none;
            box-shadow: 0 1px 4px 0 ${theme.colors.white};
          }

          :active {
            color: ${theme.colors.spaceCadet};
            background-color: ${theme.colors.grey};
            border-color: ${theme.colors.grey};
            box-shadow: none;
          }
        `
    }
  }};
`

const Button: React.FC<Props> = ({
  children,
  modifier = 'solid',
  type = 'button',
  ...buttonProps
}: Props) => {
  return (
    <StyledButton type={type} modifier={modifier} {...buttonProps}>
      {children}
    </StyledButton>
  )
}

export default Button
