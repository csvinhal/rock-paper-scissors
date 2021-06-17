import ThemeProvider from '../src/components/ThemeProvider/ThemeProvider'

export const parameters = {
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '640px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1366px',
          height: '720px',
        },
      },
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
]
