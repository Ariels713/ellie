import Layout from "../components/layout/Layout"
import GlobalStyle from "../styles/GlobalStyle"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
