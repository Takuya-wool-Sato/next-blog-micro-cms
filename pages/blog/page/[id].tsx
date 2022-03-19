import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import { memo, FC } from "react";
import { Layout } from "../../../components/templates/Layout";
import { PhotoCard } from "../../../components/templates/organisms/PhotoCard";
import { Pagination } from "../../../components/templates/Pagenation";
import { client } from "../../../libs/client";


const PER_PAGE = 4;

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
export default function Home({ blog, totalCount }: { blog: blog, totalCount: number }) {
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
        <Wrap p={{ base: 2 }} justify="space-between" w={{ base: "100%", md: "90%" }} m="auto" mt="10">
          {blog.map((blog: blog) => (
            <WrapItem key={blog.id}>
              <PhotoCard
                id={blog.id}
                title={blog.title}
                imageUrl={blog.image.url}
                publishedAt={blog.publishedAt}
                tag={blog.tag}
              />
            </WrapItem>
          ))}
        </Wrap>
        <Pagination totalCount={totalCount} />
      </Layout>
    </>
  )
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
  };

  const res = await fetch('https://m3r0vgn82h.microcms.io/api/v1/blog', key)

  const repos = await res.json();

  const pageNumbers = [];

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`)

  return { paths, fallback: false };
};
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const key = {
    headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
  };

  const data = await fetch(
    `https://m3r0vgn82h.microcms.io/api/v1/blog?offset=${(id - 1) * 4}&limit=4`,
    key
  ).then(res => res.json()).catch(() => null)

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount
    },
  };
};

// export default Home
