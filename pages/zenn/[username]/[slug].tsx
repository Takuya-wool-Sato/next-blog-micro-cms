import { Box } from "@chakra-ui/react";
import { memo, FC } from "react";
import { Layout } from "../../../components/templates/Layout";

const ZennAPIKEY = process.env.Zenn_API_KEY

type Zenn = {
  zenn: {
    title: string;
    publishedAt: string;
    bodyHtml: any;
  };
}

// eslint-disable-next-line react/display-name
const Zenn: FC<Zenn> = memo(({ zenn }) => {
  console.log(zenn)
  return (
    <>
      <Layout>
        <article className="markdown-body">
          <Box
            padding={{ base: 10 }}
          >
            <h1>{zenn.title}</h1>
            <p>{zenn.publishedAt}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: `${zenn.bodyHtml}`,
              }}
            />
          </Box>
        </article>
      </Layout>
    </>
  )
})

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const key = {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer b5c11a364f3c7036d76fe1cca6ffc3001e5f4279`
    },
  }

  const data = await fetch(`https://next-blog-micro-cms.vercel.app/api/zenn`,
    key
  ).then(res => res.json()).catch(() => null)

  const paths = data.map((content: any) => `/zenn/${content.user.username}/${content.slug}`);
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async (context: any) => {
  const username = context.params.username;
  const slug = context.params.slug;

  const key = {
    headers: {
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${ZennAPIKEY}`
    },
  }
  const data = await fetch(`https://next-blog-micro-cms.vercel.app/api/${username}/${slug}`,
  // const data = await fetch(`https://next-blog-micro-cms.vercel.app/api/takepepe/nextjs-testing-strategy-2022`,

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