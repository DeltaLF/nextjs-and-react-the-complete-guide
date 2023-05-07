import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import { NotificationProvider } from "@/store/notificationContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  );
}
