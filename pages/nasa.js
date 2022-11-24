import Head from 'next/head'
import { VStack, Container } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/color-mode'
import { Image, Box, Center, Heading, Text, Button } from '@chakra-ui/react'
import { FaChevronRight } from 'react-icons/fa'

import Header from '../components/Header'

const NasaImage = ({ data }) => {
  const { colorMode } = useColorMode()
  return (
    <VStack
      minHeight='100vh'
      bgGradient={
        colorMode === 'light'
          ? 'linear(to-r,#1F1C2C, #928DAB)'
          : 'linear(to-r, #0F2027, #203A43, #24243e)'
      }
    >
      <Head>
        <title>Astronomy Picture of the Day (APOD)</title>
      </Head>
      <Container maxW='960' w='100'>
        <Header />
        <Heading
          fontSize='2xl'
          padding={5}
          color={colorMode === 'light' ? 'green.100' : 'rgba(255,255,255,.8)'}
        >
          {data.title} ({data.date})
        </Heading>
        <Center>
          <Image src={data.url} alt={data.title} h='400' />
        </Center>
        {/* <Box borderWidth='1px' rounded='lg' overflow='hidden' color='white'>
          <Text fontSize='xs'>{data.explanation}</Text>
        </Box> */}
        <Button
          rightIcon={<FaChevronRight />}
          _hover={{
            bg: colorMode === 'light' ? '#928DAB' : 'green.100',
            color: colorMode === 'light' ? null : '#111'
          }}
          size='sm'
        >
          <a
            target='_blank'
            rel='noreferrer'
            href='https://apod.nasa.gov/apod/astropix.html'
          >
            Read more
          </a>
        </Button>
      </Container>
    </VStack>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
  )
  const data = await res.json()
  return { props: { data } }
}

export default NasaImage
