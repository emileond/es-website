/* eslint-disable react/no-unescaped-entities */
import { Section, Heading, Text, Flex } from '@radix-ui/themes'
import { FiTwitter, FiLinkedin, FiDribbble, FiGithub } from 'react-icons/fi'
import { VscVerifiedFilled } from 'react-icons/vsc'

const AboutMe = () => {
  return (
    <Section>
      <Flex gap="4" direction="column">
        <Flex gap="1" align="center">
          <Heading>Hi, I'm Emilio</Heading>
          <Text
            size="6"
            color="blue"
            style={{
              display: 'contents',
            }}
          >
            <VscVerifiedFilled />
          </Text>
        </Flex>
        <Text>
          I'm a product designer and developer. Currently working at Zenput.{' '}
          <br />
          I'm passionate about building products that are simple, intuitive, and
          delightful to use.
        </Text>
        <Flex gap="5">
          <a
            href="https://linkedin.com/in/emilio-sanchez1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size="1.4rem" />
          </a>
          <a
            href="https://twitter.com/emileond"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter size="1.4rem" />
          </a>
          <a
            href="https://github.com/emileond/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size="1.4rem" />
          </a>
          <a
            href="https://dribbble.com/emileon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiDribbble size="1.4rem" />
          </a>
        </Flex>
      </Flex>
    </Section>
  )
}

export default AboutMe
