import {
  Card,
  Flex,
  Avatar,
  Box,
  Text,
  Container,
  Heading,
  Section,
  Grid,
} from '@radix-ui/themes'
import Image from 'next/image'
import { FaBeer } from 'react-icons/fa'

export default function Home() {
  return (
    <Container size="4">
      <Section>
        <Flex gap="2" direction="column">
          <Heading>Hi, I'm Emilio</Heading>
          <Text>
            I'm a product designer and developer. Currently working at Zenput.
            I'm passionate about building products that are simple, intuitive,
            and delightful to use.
          </Text>
          <Flex>
            <FaBeer />
            <FaBeer />
          </Flex>
        </Flex>
      </Section>
      <Section>
        <Heading size="4">Work</Heading>
        <Flex gap="3" width="100%" wrap="wrap">
          <Card>Project X</Card>
          <Card>Project X</Card>
          <Card>Project X</Card>
          <Card>Project X</Card>
          <Card>Project X</Card>
          <Card>Project X</Card>
        </Flex>
      </Section>
      <Section>
        <Heading size="4">Portfolio</Heading>
      </Section>
      <Section>
        <Heading size="4">Personal projects</Heading>
      </Section>
      <Section>
        <Heading size="4">Dream list</Heading>
      </Section>
    </Container>
  )
}
