// design-system/theme/create-mui-theme.ts
import { createTheme } from "@mui/material/styles"
import { lightPalette, darkPalette } from "./palette"

export const createMuiTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
    typography: {
      fontFamily: "Inter, sans-serif",
    },
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  })
