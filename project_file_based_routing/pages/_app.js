import Layout from "@/components/layout/layout";
import Head from "next/head";
import { NotificationContextProvider } from "@/store/notification-context";
import { createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <GlobalStyle />
      <Layout>
        <Head>
          <title>Nextjs Events</title>
          {/* will be overwritten if specified in any pages */}
          <meta name="description" content="Nextjs Events" />
          <meta
            name="viewport"
            content="initial-sacle=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Open Sans", "Lato", sans-serif;
  color: #414141;
  background-color: #e4f1f1;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Lato", sans-serif;
  color: #2b2b2b;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.center {
  margin: auto;
  text-align: center;
} 
`;
