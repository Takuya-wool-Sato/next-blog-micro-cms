import { memo, FC } from "react";
import { Layout } from '../components/templates/Layout'

// eslint-disable-next-line react/display-name
const Blog: FC = memo(() => {
  return (
    <>
      <Layout>
        <h2>404</h2>
      </Layout>
    </>
  )
})

export default Blog
