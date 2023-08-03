import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: '회원가입하기',
}

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='ko'><body>{children}</body></html>
  );
}
