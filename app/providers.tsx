'use client'

import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return <Theme>{children}</Theme>
}
