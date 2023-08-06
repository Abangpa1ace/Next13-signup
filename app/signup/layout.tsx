import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: '회원가입을 진행중이에요.',
}

export default function SignUpLayout({ children }: PropsWithChildren) {
  return (
    <SignUpLayout>
      {children}
    </SignUpLayout>
  )
}
