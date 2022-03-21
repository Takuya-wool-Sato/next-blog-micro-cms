import { memo, FC } from 'react'
import { Header } from './Header'
import { Flex, List, ListItem, Box } from '@chakra-ui/react'
import NextLink from "next/link"

// eslint-disable-next-line react/display-name
export const Layout: FC = memo((props) => {
  return (
    <>
      <Header />
      <Flex
        as="main"
      >
        <Flex
          as="nav"
          color="black"
          padding={{ base: "30px 0 !important", md: 5 }}
          display={{ base: "none", md: "block" }}
          w="280px"
          top="56px"
          position="sticky"
          overflow-y="auto"
          height="calc(100vh - 56px)"
          borderRight="1px solid #f4f4fa"
          bg="white"
        >
          <List>
            <ListItem>
              <NextLink href='/blog' passHref>
                <Box
                  _hover={{ cursor: "pointer", opacity: 0.6 }}
                  transition="0.3s"
                  fontWeight="bold"
                  textAlign="center"
                  bg="blue.50"
                  p={3}
                  mb="20px"
                >
                  記事一覧
                </Box>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href='/qiita' passHref>
                <Box
                  _hover={{ cursor: "pointer", opacity: 0.6 }}
                  transition="0.3s"
                  fontWeight="bold"
                  textAlign="center"
                  bg="blue.50"
                  p={3}
                  mb="20px"
                >
                  Qiita記事
                </Box>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href='/zenn' passHref>
                <Box
                  _hover={{ cursor: "pointer", opacity: 0.6 }}
                  transition="0.3s"
                  fontWeight="bold"
                  textAlign="center"
                  bg="blue.50"
                  p={3}
                  mb="20px"
                >
                  Zenn記事
                </Box>
              </NextLink>
            </ListItem>
          </List>
        </Flex>
        <Box
          padding={{ base: 10 }}
          width={{ base: "100%", md: "calc(90% - 280px)" }}
          m="40px auto"
          borderRadius="2xl"
          boxShadow="2xl"
        >
          {props.children}
        </Box>
      </Flex>
    </>
  )
})
