import { memo, FC } from 'react'
import { Flex, Box, Heading, Spacer, Button, Image } from '@chakra-ui/react'
import NextLink from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

// eslint-disable-next-line react/display-name
export const Header: FC = memo(() => {

  const { data: session, status } = useSession();

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
                <Image
                  src={session.user.image}
                  w="50px"
                  height={"50px"}
                  borderRadius="50%"
                ></Image>
                <Box
                  fontWeight={"bold"}
                  fontSize="16px"
                  m={"0 10px"}
                >{session.user.name}</Box>
                <Button onClick={() => signOut()}>
                  <a>Log out</a>
                </Button>
              </>
            ) :
              (
                <>
                  <Link href="/api/auth/signin">
                    <Button colorScheme='blue'>
                      Log in
                    </Button>
                  </Link>
                </>
              )
          }
        </Flex>
      </Flex>
    </>
  )
})
