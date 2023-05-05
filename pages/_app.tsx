import Header from "@/components/Header";
import type { AppProps } from "next/app";
import { GlobalStyle, GlobalWrapper } from "@/styled-components/GlobalStyle";
import { createContext, useState } from "react";

export const MyContext = createContext<contextProps>({
  menu: false,
  setMenu: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [menu, setMenu] = useState<Boolean>(false);

  return (
    <MyContext.Provider value={{ menu, setMenu }}>
      <GlobalWrapper>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </GlobalWrapper>
    </MyContext.Provider>
  );
}
