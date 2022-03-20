import Link from "next/link";
import { memo, FC } from "react";
import { Layout } from '../components/templates/Layout'
import { client } from "../libs/client";
import { Box, Wrap, WrapItem } from '@chakra-ui/react'
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

type home = {
  blogs: any;
  totalCount: number
}

// eslint-disable-next-line react/display-name
const Home: FC<home> = memo(({ blogs, totalCount }) => {
  return (
    <>
      <Layout>
        <Box
          as="h2"
          fontSize="24px"
          textAlign="left"
          fontWeight="bold"
        >Next.js学習のための簡易ブログサイト
        </Box>
        <Box className="markdown-body" mt={"30px"}>
          <h3>今回使用したツール</h3>
          <ul>
            <li>Next.js</li>
            <li>Chakra UI</li>
            <li>Vercel</li>
          </ul>
          <p></p>
          <h3>記事一覧</h3>
          <p>記事一覧はMicro CMSを使用して、投稿</p>
          <p>SSG（静的サイトジェネレータ）を使用</p>
          <h3>Qiita記事一覧</h3>
          <p>QiitaのNext.jsに関する記事（ストック10以上、作成日順）を出しています</p>
          <p>ISRを使用して、静的化をして表示</p>
        </Box>
      </Layout>
    </>
  )
})

export default Home
