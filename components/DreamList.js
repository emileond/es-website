import { Section, Heading, Flex, Text } from '@radix-ui/themes'
import DreamListItem from './DreamListItem'
import Link from 'next/link'

const DreamList = () => {
  return (
    <Section size="2">
      <Heading size="4" mb="3">
        Dream list
      </Heading>
      <Flex
        gap="3"
        wrap="wrap"
        direction="column"
        style={{
          height: 220,
        }}
      >
        <DreamListItem label="Learn to code" completed />
        <DreamListItem label="Work at a startup" completed></DreamListItem>
        <DreamListItem
          label="Build a SaaS from scratch"
          completed
        ></DreamListItem>
        <DreamListItem label="Speak 3 languages"></DreamListItem>
        <DreamListItem label="Run a podcast"></DreamListItem>
        <DreamListItem label="Design new OS"></DreamListItem>
        <DreamListItem label="Design physical object"></DreamListItem>
        <DreamListItem label="Invest in 5 startups"></DreamListItem>
        <DreamListItem label="Live in EU"></DreamListItem>
        <DreamListItem label="Meet you">
          <Link href="#">Get in touch</Link>
        </DreamListItem>
      </Flex>
    </Section>
  )
}

export default DreamList
