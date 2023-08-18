'use client'

import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Theme accentColor="teal" grayColor="slate" panelBackground="translucent">
        {children}
      </Theme>
    </ThemeProvider>
  )
}
