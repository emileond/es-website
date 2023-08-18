import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Flex, Switch } from '@radix-ui/themes'
import { FiMoon } from 'react-icons/fi'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Flex gap="3">
      <FiMoon size="1.4rem" />
      <Switch
        size="2"
        checked={theme === 'dark'}
        onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle dark mode"
      />
    </Flex>
  )
}

export default ThemeSwitch
