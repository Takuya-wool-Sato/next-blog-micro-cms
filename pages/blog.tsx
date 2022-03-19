import Link from "next/link";
import { memo, FC } from "react";
import { Layout } from '../components/templates/Layout'
import { client } from "../libs/client";
import { Box, Wrap, WrapItem } from '@chakra-ui/react'
import { PhotoCard } from "../components/templates/organisms/PhotoCard";
import NextLink from "next/link"
// const Home: FC = memo((blog) => {
export default function Home({ blog }) {
  return (
    <>
      <Layout>
        <Box
          as="h2"
          fontSize="24px"
          textAlign="center"
          fontWeight="bold"
        >記事一覧
        </Box>
        <Wrap p={{ base: 2 }} justify="space-between" w="90%" m="auto" mt="10">
          {blog.map((blog) => (
            <WrapItem key={blog.id}>
              <PhotoCard
                id={blog.id}
                title={blog.title}
                imageUrl={blog.image.url}
                publishedAt={blog.publishedAt}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Layout>
    </>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

// export default Home