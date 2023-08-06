import MainLayout from "@/components/layouts/MainLayout";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import RootStyleRegistry from "../lib/RootStyleRegistry";

export const metadata: Metadata = {
  title: 'Next 13 과제',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ko'>
      <body>
        <RootStyleRegistry>
          <MainLayout>
            {children}
          </MainLayout>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
