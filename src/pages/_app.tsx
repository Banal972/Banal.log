import type { AppProps } from "next/app";

import "@/font/pretendard/pretendard-subset.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";

import "./globals.css";

dayjs.locale("ko");

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
