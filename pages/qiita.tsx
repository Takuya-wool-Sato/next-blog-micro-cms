import Link from "next/link";
import { memo, FC } from "react";
import { Layout } from '../components/templates/Layout'
import { client } from "../libs/client";
import { Box, Wrap, WrapItem } from '@chakra-ui/react'
import { QiitaCard } from "../components/templates/organisms/QiitaCard";
import { QiitaPagination } from "../components/QiitaPagination";

const QIITAURL = process.env.QIITA_ENDPOINT_URL
// const QIITAAPIKEY = b5c11a364f3c7036d76fe1cca6ffc3001e5f4279

const totalCount = 100
// eslint-disable-next-line react/display-name
const Blog: FC<Blog> = memo(({ qiita }) => {
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
          {qiita.map((data) => (
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

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer b5c11a364f3c7036d76fe1cca6ffc3001e5f4279`
    },
  }
  const data = await fetch(`https://qiita.com/api/v2/items?page=1&per_page=10&query=tag:Next.js`,
    key
  ).then(res => res.json()).catch(() => null)
  return {
    props: {
      qiita: data
    },
  };
};

export default Blog
