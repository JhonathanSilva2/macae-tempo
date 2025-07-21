"use client"
import { useThemeMode } from "@/design-system/theme/ThemeProvider"
import { IconButton } from "@mui/material"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"

export function ThemeToggleButton() {
  const { mode, toggleTheme } = useThemeMode()

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  )
}
