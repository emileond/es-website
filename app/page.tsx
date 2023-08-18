/* eslint-disable react/no-unescaped-entities */
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
  Separator,
} from '@radix-ui/themes'
import Nav from '../components/Nav'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import Projects from '../components/Projects'
import DreamList from '../components/DreamList'

export default function Home() {
  return (
    <>
      <Nav />
      <Container size="4">
        <AboutMe />
        <Experience />
        <Portfolio />
        <Projects />
        <DreamList />
      </Container>
    </>
  )
}
