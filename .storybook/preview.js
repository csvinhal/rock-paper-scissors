import ThemeProvider from '../src/components/ThemeProvider/ThemeProvider'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
]
