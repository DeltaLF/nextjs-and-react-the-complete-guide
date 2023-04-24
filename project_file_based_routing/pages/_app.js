import Layout from "@/components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Nextjs Events</title>
        {/* will be overwritten if specified in any pages */}
        <meta name="description" content="Nextjs Events" />
        <meta name="viewport" content="initial-sacle=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
