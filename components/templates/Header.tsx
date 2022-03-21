import { memo, FC } from 'react'
import { Flex, Box, Heading, Spacer, Button, Image, Avatar } from '@chakra-ui/react'
import NextLink from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

// eslint-disable-next-line react/display-name
export const Header: FC = memo(() => {

  const { data: session, status } = useSession();

  const imageURL: any = session && (session.user && session.user.image)
  const userName = session && (session.user && session.user.name)
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
        alignItems={"center"}
      >
        <Box p='2'>
          <Heading size='md'>
            <Flex align={"center"}>
              <NextLink href='/' passHref>
                Next.js study
              </NextLink>
              <Box ml={"1"}>
                <Image src="/logo.svg" alt="Vercel Logo" w="24px" height="24px" />
              </Box>
            </Flex>
          </Heading>
        </Box>
        <Spacer />
        <Flex
          alignItems={"center"}>
          {
            session ? (
              <>
                <Avatar size='md' name='Ryan Florence' src={imageURL} />
                <Box
                  fontWeight={"bold"}
                  fontSize="16px"
                  m={"0 10px"}
                >{userName}</Box>
                <Button onClick={() => signOut()}>
                  Log out
                </Button>
              </>
            ) :
              (
                <>
                <Button onClick={() => signIn()} colorScheme='blue'>
                  Login
                </Button>
                </>
              )
          }
        </Flex>
      </Flex>
    </>
  )
})
