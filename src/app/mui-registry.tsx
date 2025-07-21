// app/mui-registry.tsx
"use client"

import { CacheProvider } from "@emotion/react"
import { createEmotionCache } from "@/utils/emotion-cache"
import { ReactNode } from "react"
import { ThemeProvider } from "@/design-system/theme/ThemeProvider"

const emotionCache = createEmotionCache()

export default function MuiRegistry({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>{children}</ThemeProvider>
    </CacheProvider>
  )
}
