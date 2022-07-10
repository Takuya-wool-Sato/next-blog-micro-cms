import { Box, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import { memo, FC } from "react";
import { Layout } from "../../../components/templates/Layout";
import { PhotoCard } from "../../../components/templates/organisms/PhotoCard";
import { Pagination } from "../../../components/Pagenation";
import { client } from "../../../libs/client";


const PER_PAGE = 9;

type blog = {
  id: string;
  title: string;
  image: {
    url: string;
  }
  url: string;
  imageUrl: string;
  publishedAt: string;
  tag: string;
};


// const Home: FC = memo((blog) => {
export default function Home({ blogs, totalCount }: { blogs: any, totalCount: number }) {
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
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const key: any = {
    headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
  };

  const res = await fetch('https://m3r0vgn82h.microcms.io/api/v1/blog', key)

  const repos = await res.json();

  const pageNumbers = [];

  const range = (start: any, end: any) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`)

  return { paths, fallback: false };
};
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;

  const key: any = {
    headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
  };

  const data = await fetch(
    `https://m3r0vgn82h.microcms.io/api/v1/blog?offset=${(id - 1) * 9}&limit=9`,
    key
  ).then(res => res.json()).catch(() => null)

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount
    },
  };
};

// export default Home
