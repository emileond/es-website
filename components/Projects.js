'use client'
import {
  Section,
  Heading,
  Flex,
  Card,
  Text,
  Separator,
  Button,
} from '@radix-ui/themes'

const Projects = () => {
  return (
    <Section size="2">
      <Heading size="4" mb="3">
        Personal projects
      </Heading>
      <Flex gap="3" wrap="wrap" align="center">
        <Card
          size="3"
          style={{
            maxWidth: 400,
          }}
        >
          <Flex gap="3" direction="column">
            <Heading size="3">Subly</Heading>
            <Text as="p" size="2">
              SaaS to help small businesses to manage their recurring expenses
            </Text>
            <a
              href="https://subly.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                color="gray"
                variant="soft"
                highContrast
                style={{
                  cursor: 'pointer',
                }}
              >
                Visit website
              </Button>
            </a>
          </Flex>
        </Card>
      </Flex>
    </Section>
  )
}

export default Projects
