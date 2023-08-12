"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import GlobalStyle from "@/styles/GlobalStyle";
import defaultTheme from "@/styles/theme";
import { PropsWithChildren } from 'react';
import { RecoilRoot } from "recoil";
import styled, { ThemeProvider } from "styled-components";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Main>
          <Header />
          {children}
          <Footer />
        </Main>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export const Main = styled.div`
  position: relative;
  min-height: 100vh;
`;