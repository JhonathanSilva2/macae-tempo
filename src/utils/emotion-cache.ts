// utils/emotion-cache.ts
"use client" // necessário se for usado também no cliente

import createCache from "@emotion/cache"

export const createEmotionCache = () =>
  createCache({ key: "css", prepend: true })
