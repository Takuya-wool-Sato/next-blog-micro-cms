import Link from "next/link";
import { memo, FC } from "react";
import { Layout } from '../components/templates/Layout'
import { client } from "../libs/client";
import { Box, Flex, Wrap, WrapItem } from '@chakra-ui/react'
import { PhotoCard } from "../components/templates/organisms/PhotoCard";
import { Pagination } from "../components/Pagenation";

type blog = {
  id: string;
  title: string;
  image: {
    url: string;
  }
  imageUrl: string;
  publishedAt: string;
  tag: string;
};

type Blog = {
  blogs: any;
  totalCount: number
}

// eslint-disable-next-line react/display-name
const Blog: FC<Blog> = memo(({ blogs, totalCount }) => {
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
        <Flex p={{ base: 2 }} justify="center" w={{ base: "100%"}} m="auto" mt="10" flexWrap={"wrap"}>
          {blogs.map((blog: blog) => (
            <Box key={blog.id} m={{ base: "0", sm: "0 20px 20px"}}>
              <PhotoCard
                id={blog.id}
                title={blog.title}
                imageUrl={blog.image.url}
                publishedAt={blog.publishedAt}
                tag={blog.tag}
              />
            </Box>
          ))}
          <Box m={{ base: "0", sm: "0 20px 20px"}}>
            <Box
              w={{ base: "70vw", md: "400px" }}
              h={{ base: 0}}
            >
            </Box>
          </Box>
          <Box m={{ base: "0", sm: "0 20px 20px"}}>
            <Box
              w={{ base: "70vw", md: "400px" }}
              h={{ base: 0}}
            >
            </Box>
          </Box>
        </Flex>
        <Pagination totalCount={totalCount} />
      </Layout>
    </>
  )
})

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key: any = {
    headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
  };

  const data = await fetch(
    `https://m3r0vgn82h.microcms.io/api/v1/blog?offset=0&limit=9`,
    key
  ).then(res => res.json()).catch(() => null)

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount
    },
  };
};

export default Blog
