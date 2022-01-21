import React from "react"
import { ThemeProvider as ThemeUiProvider, useThemeUI } from "theme-ui"
import { getTheme } from "gatsby-interface"

export default function ThemeProvider({ children }) {
  const theme = React.useMemo(() => getTheme(), [])

  const extendedTheme = {
    ...theme,
    fonts: {
      ...theme.fonts,
      body: `'Inter', ${theme.fonts.system}`,
    },
    tones: {
      ...theme.tones,
      // these tones let us apply custom active colors to CustomLegend toggle buttons
      DATA_UPDATE: {
        medium: theme.colors.purple[40],
      },
      WARM_START: {
        medium: theme.colors.teal[80],
      },
      COLD_START: {
        medium: theme.colors.orange[80],
      },
    },
  }

  return <ThemeUiProvider theme={extendedTheme}>{children}</ThemeUiProvider>
}

export function useTheme() {
  return useThemeUI().theme
}
