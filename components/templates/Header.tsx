import { memo, FC } from 'react'
import { Flex, Box, Heading, Spacer } from '@chakra-ui/react'

export const Header: FC = memo(() => {
  return (
    <>
      <Flex
        p='2'
        shadow="md"
        as="header"
        position="sticky"
        zIndex="10"
        top="0"
      >
        <Box p='2'>
          <Heading size='md'>Chakra App</Heading>
        </Box>
        <Spacer />
      </Flex>
    </>
  )
})
