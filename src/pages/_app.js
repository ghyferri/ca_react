import '@/styles/globals.css';
import '@/styles/heading.css';
import '@/styles/link.css';
import '@/styles/card.css';
import '@/styles/station.css';

import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
