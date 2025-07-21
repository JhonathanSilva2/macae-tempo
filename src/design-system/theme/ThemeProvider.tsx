// design-system/theme/ThemeProvider.tsx
"use client"

import { createContext, useContext, useMemo, useState } from "react"
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { createMuiTheme } from "./create-mui-theme"

type ThemeMode = "light" | "dark"

interface ThemeContextType {
  mode: ThemeMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleTheme: () => {},
})

export const useThemeMode = () => useContext(ThemeContext)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("light")

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"))

  const theme = useMemo(() => createMuiTheme(mode), [mode])

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
