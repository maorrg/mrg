import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Button } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'
import { FaChevronRight } from 'react-icons/fa'
import { useRouter } from 'next/router'

import { message } from '../templateData'

const MyMessageCard = () => {
  const { colorMode } = useColorMode()
  const router = useRouter()
  return (
    <Box
      bg={colorMode === 'light' ? 'gray.800' : 'gray.900'}
      w='100%'
      p={4}
      color={colorMode === 'light' ? '#fff' : '#ccc'}
    >
      <Heading
        fontSize='xl'
        mb='2'
        bgGradient={
          colorMode === 'light'
            ? 'linear(to-r, green.100, #928DAB)'
            : 'linear(to-r, green.100, purple.700)'
        }
        bgClip='text'
      >
        {message.heading}
      </Heading>
      <Text>{message.body}</Text>
      <Box>
        <Button
          onClick={() => router.push('/nasa')}
          _hover={{
            bg: colorMode === 'light' ? '#928DAB' : 'green.100',
            color: colorMode === 'light' ? null : '#111'
          }}
          variant='outline'
          rightIcon={<FaChevronRight />}
          mt='4'
        >
          View
        </Button>
      </Box>
    </Box>
  )
}

export default MyMessageCard
