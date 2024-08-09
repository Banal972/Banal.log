import type { AppProps } from "next/app"

import dayjs from "dayjs"
import "dayjs/locale/ko"

import "./globals.css"

dayjs.locale("ko")

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}
export default App
