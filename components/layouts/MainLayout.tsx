"use client";

import Header from "@/components/shared/Header";
import GlobalStyle from "@/styles/GlobalStyle";
import defaultTheme from "@/styles/theme";
import { PropsWithChildren } from 'react';
import { ThemeProvider } from "styled-components";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  )
}
