'use client'
import Link from 'next/link'
import { Box, Container, Flex, Separator, Text } from '@radix-ui/themes'
import ThemeSwitch from './ThemeSwitch'

const Nav = () => (
  <Box
    position="sticky"
    top="0"
    left="0"
    style={{
      zIndex: 2,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
    }}
  >
    <Container size="4">
      <Flex py="3" gap="3" justify="between">
        <Text size="4" weight="bold">
          ES
        </Text>
        <ThemeSwitch />
      </Flex>
    </Container>
    <Separator size="4" />
  </Box>
)

export default Nav
