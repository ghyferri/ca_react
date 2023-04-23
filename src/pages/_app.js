import '@/styles/globals.css'
import '@/styles/Home.module.css'
import '@/styles/heading.css'
import '@/styles/link.css'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
