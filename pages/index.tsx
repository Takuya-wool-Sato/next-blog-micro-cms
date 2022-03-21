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
        >Next.js用の簡易サイト
        </Box>
        <Box className="markdown-body" mt={"30px"}>
          <h3>今回使用したツール</h3>
          <ul>
            <li>Next.js(React.js)</li>
            <li>Chakra UI</li>
            <li>microCMS</li>
            <li>Vercel(サーバーレスプラットフォーム)</li>
            <li>Next auth(ログインは、機能しますが、特に意味はないです。)</li>
          </ul>
          <p>cssはChakra UIのコンポーネント内で調整(別途cssファイルはなし)</p>
          <h3>目的</h3>
          <p>ReactのUIコンポーネントに触れるため</p>
          <p>Next.jsの機能SSG,ISRを活用するため</p>
          <h3>記事一覧</h3>
          <p>記事一覧はmicroCMSを使用して、投稿</p>
          <p>SSG（静的サイトジェネレータ）を使用</p>
          <h3>Qiita記事一覧</h3>
          <p>QiitaのNext.jsに関する記事（ストック10以上、作成日順）をapiで取得</p>
          <p>ISRを使用して、静的に表示</p>
          <h3>Zenn記事一覧</h3>
          <p>公式のAPIが特にないため、Webスクレイピングで情報取得</p>
          <p>ISRを使用して、静的に表示</p>
        </Box>
      </Layout>
    </>
  )
})

export default Home
