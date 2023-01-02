import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import { FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius='lg'
        mb={6}
        p={3}
        textAlign='center'
        // bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        // css={{ backdropFilter: 'blur(10px)' }}
      >
        {/* Hello, I&apos;m an indie app developer based in Japan! */}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Maor Roizman
          </Heading>
          <p>Software Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign='center'
        >
          <Box
            borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            w='100px'
            h='100px'
            display='inline-block'
            borderRadius='full'
            overflow='hidden'
          >
            {/* <ProfileImage
              src="/images/mrg.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            /> */}
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>
        <Paragraph>
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <NextLink href='/works/inkdrop' passHref scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <NextLink href='https://www.youtube.com/devaslife' passHref>
            <Link target='_blank'>Dev as Life</Link>
          </NextLink>
          &quot; has more than 100k subscribers.
        </Paragraph>
        <Box align='center' my={4}>
          <NextLink href='/works' passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Lima, Perú.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed the bachelor&apos;s program in the Faculty of Computer
          Science at Univesity of Technology and Engineering Careers (UTEC).
        </BioSection>
        <BioSection>
          <BioYear>2023 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href='https://illust.odoruinu.net/' target='_blank'>
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href='https://500px.com/p/craftzdog' target='_blank'>
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href='https://github.com/maorrg' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<IoLogoGithub />}
              >
                @maorrg
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://www.linkedin.com/in/maorrg/' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<FaLinkedin />}
              >
                @maorrg
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        <Box align='center' my={4}>
          <NextLink href='/posts' passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
