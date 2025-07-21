// design-system/theme/palette.ts
export const lightPalette = {
  mode: "light" as const,
  primary: {
    light: "#4caaf0",
    main: "#0078c2",
    dark: "#004a8c",
  },
  secondary: {
    light: "#ffffff",
    main: "#ececec",
    dark: "#bdbdbd",
  },
  error: {
    light: "#fddede",
    main: "#f44336",
    dark: "#c62828",
  },
  warning: {
    light: "#fff8e1",
    main: "#ff9800",
    dark: "#ef6c00",
  },
  info: {
    light: "#e3f2fd",
    main: "#2196f3",
    dark: "#1565c0",
  },
  success: {
    light: "#e8f5e9",
    main: "#4caf50",
    dark: "#2e7d32",
  },
}

export const darkPalette = {
  mode: "dark" as const,
  primary: {
    light: "#4caaf0",
    main: "#0078c2",
    dark: "#004a8c",
  },
  secondary: {
    light: "#4f4f4f",
    main: "#2c2c2c",
    dark: "#1a1a1a",
  },
  error: {
    light: "#fddede",
    main: "#ef5350",
    dark: "#c62828",
  },
  warning: {
    light: "#fff3cd",
    main: "#ffb300",
    dark: "#ff6f00",
  },
  info: {
    light: "#bbdefb",
    main: "#64b5f6",
    dark: "#1976d2",
  },
  success: {
    light: "#c8e6c9",
    main: "#66bb6a",
    dark: "#388e3c",
  },
}
