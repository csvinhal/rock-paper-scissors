import { ReactNode } from 'react'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'

interface Props {
  children: ReactNode
}

export const GlobalStyle = createGlobalStyle`
  :root {
    --font: 'Barlow Semi Condensed', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: var(--font);
    color: ${({ theme }) => (theme as any).colors.white};
    font-weight: 600;
    background: radial-gradient(circle at center, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  }
`

const theme = {
  colors: {
    dark: 'hsl(229, 25%, 31%)',
    grey: 'hsl(217, 16%, 45%)',
    white: '#ffffff',
    blue: 'hsl(229, 64%, 46%)',
  },
}

const ThemeProvider = ({ children }: Props): JSX.Element => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider
