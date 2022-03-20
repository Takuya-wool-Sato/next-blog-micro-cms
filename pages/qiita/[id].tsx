import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { memo, FC } from "react";
import { Layout } from "../../components/templates/Layout";

// const QIITAURL = process.env.QIITA_ENDPOINT_URL
// const QIITAAPIKEY = b5c11a364f3c7036d76fe1cca6ffc3001e5f4279


// eslint-disable-next-line react/display-name
const Blog: FC<> = memo(({ qiita }) => {
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

  const data = await fetch(`https://qiita.com/api/v2/items?page=1&per_page=100&query=tag:Next.js`,
    key
  ).then(res => res.json()).catch(() => null)

  const paths = data.map((content: any) => `/qiita/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const key = {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer b5c11a364f3c7036d76fe1cca6ffc3001e5f4279`
    },
  }
  const data = await fetch(`https://qiita.com/api/v2/items/${id}`,
    key
  ).then(res => res.json()).catch(() => null)
  return {
    props: {
      qiita: data
    },
  };
};

export default Blog
