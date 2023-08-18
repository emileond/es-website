import { Section, Heading, Flex, Card } from '@radix-ui/themes'

const Portfolio = () => {
  return (
    <Section size="2">
      <Heading size="4" mb="3">
        Portfolio
      </Heading>
      <Flex gap="3" wrap="wrap" align="center">
        <Card size="2">
          <Flex gap="3" direction="column">
            <Heading size="3">Zenput</Heading>
          </Flex>
        </Card>
        <Card size="2">
          <Flex gap="3" direction="column">
            <Heading size="3">EPAM</Heading>
          </Flex>
        </Card>
        <Card size="2">
          <Flex gap="3" direction="column">
            <Heading size="3">iTexico</Heading>
          </Flex>
        </Card>
      </Flex>
    </Section>
  )
}

export default Portfolio
