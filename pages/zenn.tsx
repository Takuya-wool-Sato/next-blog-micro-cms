import Link from "next/link";
import { memo, FC } from "react";
import { Layout } from '../components/templates/Layout'
import { client } from "../libs/client";
import { Box, Wrap, WrapItem } from '@chakra-ui/react'
import { ZennCard } from "../components/templates/organisms/ZennCard";
// import { ZennPagination } from "../components/ZennPagination";

const totalCount = 100
const ZennAPIKEY = process.env.Zenn_API_KEY

type Zenn = {
  zenn: [];
};

type ZennData = {
  id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
  likedCount: string;
  slug: string;
  user: {
    username: string;
  }
  emoji: string;
}

// eslint-disable-next-line react/display-name
const Zenn: FC<Zenn> = memo(({ zenn }) => {
  console.log(zenn)
  return (
    <>
      <Layout>
        <Box
          as="h2"
          fontSize="24px"
          textAlign="center"
          fontWeight="bold"
        >Zenn記事一覧
        </Box>
        <Wrap
          p={{ base: 2 }}
          justify="space-between"
          alignItems={"stretch"}
          w={{ base: "100%", md: "90%" }}
          m="auto"
          mt="10">
          {zenn.map((data: ZennData) => (
            <WrapItem key={data.id} w={{ base: "100%", lg: "48%" }}>
              <ZennCard
                id={data.id}
                title={data.title}
                imageUrl={data.imageUrl}
                publishedAt={data.publishedAt}
                likedCount={data.likedCount}
                slug={data.slug}
                user={data.user}
                emoji={data.emoji}
              ></ZennCard>
            </WrapItem>
          ))}
        </Wrap>
        {/* <ZennPagination totalCount={totalCount} /> */}
      </Layout>
    </>
  )
})

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: {
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${ZennAPIKEY}`
    },
  }
  const data = await fetch(`next-blog-micro-cms-l8zf7g50e-takuya-wool-sato.vercel.app/api/zenn`,
    key
  ).then(res => res.json()).catch(() => null)
  return {
    props: {
      zenn: data
    },
    revalidate: 60, // ここを追加
  };
};

export default Zenn
