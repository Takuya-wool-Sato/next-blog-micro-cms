import { memo, FC } from 'react'
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react'

// eslint-disable-next-line react/display-name
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
        bgGradient='linear(to-r, blue.50, blue.100)'
      >
        <Box p='2'>
          <Heading size='md'>Next.js & Micro CMS</Heading>
        </Box>
        <Spacer />
        <Button colorScheme='blue'>Button</Button>
      </Flex>
    </>
  )
})
