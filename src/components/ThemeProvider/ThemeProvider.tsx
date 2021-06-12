import { ReactElement } from 'react'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'

interface Props {
  children: ReactElement
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
    font-weight: 600;
    ${({ theme }) => `
    color: ${(theme as any).colors.white};
    background: radial-gradient(circle at center, ${
      (theme as any).colors.prusianBlue
    }, ${(theme as any).colors.spaceCadet});
  `};
  }
`

const theme = {
  colors: {
    dark: 'hsl(229, 25%, 31%)',
    grey: 'hsl(217, 16%, 45%)',
    white: '#ffffff',
    blue: 'hsl(229, 64%, 46%)',
    prusianBlue: 'hsl(214, 47%, 23%)',
    spaceCadet: 'hsl(237, 49%, 15%)',
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
