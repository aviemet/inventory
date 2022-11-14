import React from 'react'
import { ColorScheme, ColorSchemeProvider, Global, MantineProvider } from '@mantine/core'
import { useColorScheme, useLocalStorage } from '@mantine/hooks'
import { useTheme, GlobalStyles } from '../app/frontend/Layouts/Providers/UiFrameworkProvider'
import IconProvider from '../app/frontend/Layouts/Providers/IconProvider'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => {
    const systemColorScheme = useColorScheme()
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
      key: 'colorScheme',
      defaultValue: systemColorScheme,
      getInitialValueInEffect: false,
    })

    const toggleColorScheme = (value?: ColorScheme) => {
      const scheme = value || (colorScheme === 'dark' ? 'light' : 'dark')

      setColorScheme(scheme)
    }
    return (
      <ColorSchemeProvider colorScheme={ colorScheme } toggleColorScheme={ toggleColorScheme }>
        <MantineProvider theme={ useTheme(colorScheme) } withGlobalStyles withNormalizeCSS>
          <IconProvider>
            <GlobalStyles />
            
            <Story />
          </IconProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    )
  }
]
