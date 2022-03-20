import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC } from "react";
import { Layout } from "../../../components/templates/Layout";
import { QiitaCard } from "../../../components/templates/organisms/QiitaCard";
import { QiitaPagination } from "../../../components/QiitaPagination";

const PER_PAGE = 10
const totalCount = 100
const QIITAAPIKEY = process.env.QIITA_API_KEY

type Qiita = {
  qiita: [];
}

type QiitaData = {
  id: string;
  title: string;
  user: {
    profile_image_url: string;
  }
  created_at: string;
  tags: [];
}

type context = {
  params: {
    id: string;
  }
}
// eslint-disable-next-line react/display-name
const Qiita: FC<Qiita> = memo(({ qiita }) => {
  console.log(qiita)
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
        <Wrap p={{ base: 2 }} justify="space-between" alignItems={"stretch"} w={{ base: "100%", md: "90%" }} m="auto" mt="10">
          {qiita.map((data: QiitaData) => (
            <WrapItem key={data.id} w="100%">
              <QiitaCard
                id={data.id}
                title={data.title}
                imageUrl={data.user.profile_image_url}
                publishedAt={data.created_at}
                tags={data.tags}
              ></QiitaCard>
            </WrapItem>
          ))}
        </Wrap>
        <QiitaPagination totalCount={totalCount} />
      </Layout>
    </>
  )
})

// 動的なページを作成
export const getStaticPaths = async () => {
  // const key: any = {
  //   headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
  // };

  // const res = await fetch('https://m3r0vgn82h.microcms.io/api/v1/blog', key)

  // const repos = await res.json();

  // const pageNumbers = [];

  const range = (start: any, end: any) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map((repo) => `/qiita/page/${repo}`)

  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: context) => {
  const id = context.params.id;
  const key = {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${QIITAAPIKEY}`
    },
  }
  const data = await fetch(`https://qiita.com/api/v2/items?page=${id}&per_page=10&query=tag:Next.js`,
    key
  ).then(res => res.json()).catch(() => null)
  return {
    props: {
      qiita: data
    },
  };
};

export default Qiita
