import { memo, FC } from 'react'
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react'
import NextLink from "next/link"
import Image from 'next/image'

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
          <Heading size='md'>
            <Flex align={"center"}>
              <NextLink href='/' passHref>
                Next.js study
              </NextLink>
              <Box ml={"1"}>
                <Image src="/logo.svg" alt="Vercel Logo" width={24} height={24} />
              </Box>
            </Flex>
          </Heading>
        </Box>
        <Spacer />
        <Button colorScheme='blue'>Button</Button>
      </Flex>
    </>
  )
})
