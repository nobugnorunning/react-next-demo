import "@/styles/antd.cover.scss";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/common/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}
