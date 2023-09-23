"use client";

import { signUpTitleMap } from "@/constants/signup";
import useSignUpStep from "@/hooks/useSignUpStep";
import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import Footer from "../signup/shared/Footer";
import Header from "../signup/shared/Header";

export default function SignUpLayout({ children }: PropsWithChildren) {
  const { step } = useSignUpStep();
  const isShowSafetyDescription = step === 'organization' || step === 'license';
  const isComplete = step === 'complete';

  return (
    <>
      <Header />
        <SignUpWrapper isCentered={isComplete}>
          <Title>{signUpTitleMap[step]}</Title>
          {isShowSafetyDescription && <SafetyDescription>쓰리빌리언은 안전한 유전 검사 의뢰를 위해 가입 정보를 확인하고 있습니다.</SafetyDescription>}
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </SignUpWrapper>
      <Footer />
    </>
  )
}

const SignUpWrapper = styled.main<{ isCentered: boolean; }>`
  padding: 128px 12px 160px;
  max-width: calc(632px + 24px);
  margin: 0 auto;
  min-height: 100vh;

  ${({ isCentered }) => isCentered && css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  `};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text.primary};
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: -0.46px;
`;

const SafetyDescription = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: -0.13px;
`;

const ContentWrapper = styled.div`
  margin-top: 32px;
`;