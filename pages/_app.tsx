import Header from "@/components/Header";
import { GlobalStyle, GlobalWrapper } from "@/styled-components/GlobalStyle";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalWrapper>
      <GlobalStyle />
      <Header/>
      <Component {...pageProps} />
    </GlobalWrapper>
  );
}
