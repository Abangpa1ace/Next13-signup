"use client";

import useValidatorForm from "@/hooks/shared/validator/useValidatorForm";
import useSignUpStep from "@/hooks/useSignUpStep";
import { validatorFieldKeysState } from "@/recoil/shared/validator";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

export default function Footer() {
  const { isFirstStep, isLastStep, routePrevStep, routeNextStep } = useSignUpStep();
  const { isAllValid, startValidate } = useValidatorForm();
  const keys = useRecoilValue(validatorFieldKeysState);

  const handleClickNext = () => {
    if (!isAllValid) startValidate();
    else routeNextStep();
  }

  return (
    <FooterContainer>
      {!isFirstStep && <FooterButton onClick={routePrevStep}>이전</FooterButton>}
      {!isLastStep && <FooterButton isPrimary onClick={handleClickNext}>다음</FooterButton>}
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 24px;
  width: 100%;
  padding: 15px 10px 48px;
`;

const FooterButton = styled.button<{ isPrimary?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 304px;
  height: 48px;
  background-color: ${({ isPrimary, theme }) => isPrimary ? theme["3billion"]["blue-light-900"] : theme.action.light};
  color: ${({ isPrimary, theme }) => isPrimary ? theme.accent.contrast : theme.text.primary};
  border-radius: 51px;
`;