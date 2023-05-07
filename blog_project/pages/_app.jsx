import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import { NotificationProvider } from "@/store/notificationContext";

export default function App({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  );
}
