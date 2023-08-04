import Header from "@components/shared/layout/Header";
import { Metadata } from "next";
import { ReactNode } from "react";
import RootStyleRegistry from "../lib/RootStyleRegistry";

export const metadata: Metadata = {
  title: '회원가입하기',
}

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='ko'>
      <body>
        <RootStyleRegistry>
          <Header />
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
