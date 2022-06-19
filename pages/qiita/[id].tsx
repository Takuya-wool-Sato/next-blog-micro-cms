import { Box } from "@chakra-ui/react";
import { memo, FC } from "react";
import { Layout } from "../../components/templates/Layout";

const QIITAAPIKEY = process.env.QIITA_API_KEY

type Qiita = {
  qiita: {
    title: string;
    publishedAt: string;
    rendered_body: any;
  };
}
// eslint-disable-next-line react/display-name
const Qiita: FC<Qiita> = memo(({ qiita }) => {
  console.log(qiita)
  return (
    <>
      <Layout>
        <article className="markdown-body">
          <Box
            padding={{ base: 10 }}
          >
            <h1>{qiita.title}</h1>
            <p>{qiita.publishedAt}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: `${qiita.rendered_body}`,
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

  const data = await fetch(`https://qiita.com/api/v2/items?page=1&per_page=100&query=tag:Next.js+stocks:>10`,
    key
  ).then(res => res.json()).catch(() => null)

  const paths = data.map((content: any) => `/qiita/${content.id}`);
  return { paths, fallback: 'blocking' };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const key = {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${QIITAAPIKEY}`
    },
  }
  const data = await fetch(`https://qiita.com/api/v2/items/${id}`,
    key
  ).then(res => res.json()).catch(() => null)
  return {
    props: {
      qiita: data
    },
    revalidate: 60, // ここを追加
  };
};

export default Qiita
