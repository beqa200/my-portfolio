import Header from "@/components/Header";
import type { AppProps } from "next/app";
import { GlobalStyle, GlobalWrapper } from "@/styled-components/GlobalStyle";
import { createContext, useEffect, useState } from "react";
import data from "../data.json";
import React from "react";
import Desktop from "@/styled-components/Desktop";
import Footer from "@/components/Footer";
import Head from "next/head";
export const MyContext = createContext<contextProps>({
  menu: false,
  setMenu: () => {},
  data: {
    position: "",
    personalInfo: "",
    proffesionalInfo: "",
    techStacks: [],
    social: [],
    projects: [],
    skills: [],
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [menu, setMenu] = useState<Boolean>(false);

  return (
    <MyContext.Provider value={{ menu, setMenu, data }}>
       <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="./assets/fav-icon.svg"
        />
      </Head>
      <GlobalWrapper menu={menu}>
        <GlobalStyle />
        <Header />
       
        <Component {...pageProps} />
        <Desktop>
          <Footer />
        </Desktop>
      </GlobalWrapper>
    </MyContext.Provider>
  );
}
