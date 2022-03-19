import { memo, FC } from 'react'
import { Header } from './Header'
import { Flex, List, ListItem, Link } from '@chakra-ui/react'
import NextLink from "next/link"

export const Layout: FC = memo((props) => {
  const sideBarNavStyles = {
    width: '280px'
  }
  return (
    <>
      <Header />
      <Flex
        as="main"
      >
        <Flex
          as="nav"
          bg="White"
          color="black"
          padding={{ base: 3, md: 5 }}
          display={{ base: "none", md: "block" }}
          w="280px"
          top="56px"
          position="sticky"
          overflow-y="auto"
          height="calc(100vh - 56px)"
        >
          <List spacing={3}>
            <ListItem>
              <NextLink href='/news' passHref>
                <Link>投稿一覧</Link>
              </NextLink>
            </ListItem>
          </List>
        </Flex>
        {props.children}
      </Flex>
    </>
  )
})
