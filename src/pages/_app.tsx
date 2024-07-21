import type { AppProps } from "next/app";
import "@/font/pretendard/pretendard-subset.css";
import "./globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
