import { Section, Heading, Flex, Card, Text, Separator } from '@radix-ui/themes'

const Experience = () => {
  return (
    <Section size="2">
      <Heading size="4" mb="3">
        Experience
      </Heading>
      <Flex gap="3" wrap="wrap" align="center">
        <Card size="2">
          <Flex gap="3" direction="column">
            <Heading size="3">Zenput</Heading>
            <Text size="2">2019 - Present</Text>
          </Flex>
        </Card>
        <Separator />
        <Card size="2">
          <Flex gap="3" direction="column">
            <Heading size="3">EPAM</Heading>
            <Text size="2">2020 - 2021</Text>
          </Flex>
        </Card>
        <Separator />
        <Card size="2">
          <Flex gap="3" direction="column">
            <Heading size="3">iTexico</Heading>
            <Text size="2">2018 - 2020</Text>
          </Flex>
        </Card>
        <Separator />
        <Card size="2">
          <Flex gap="3" direction="column">
            <Heading size="3">Yaydoo</Heading>
            <Text size="2">2017 - 2018</Text>
          </Flex>
        </Card>
        <Separator />
        <Card size="2">
          <Flex gap="3" direction="column">
            <Heading size="3">Renderinc / Fluke</Heading>
            <Text size="2">2014 - 2017</Text>
          </Flex>
        </Card>
      </Flex>
    </Section>
  )
}

export default Experience
