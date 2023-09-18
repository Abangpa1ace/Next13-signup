"use client";

import useValidatorForm from "@/hooks/shared/validator/useValidatorForm";
import useSignUpStep from "@/hooks/useSignUpStep";
import styled from "styled-components";

export default function Footer() {
  const { isFirstStep, isLastStep, routePrevStep, routeNextStep, routeToStep } = useSignUpStep();
  const { isAllValid, firstInvalidField, startValidate, onValidate } = useValidatorForm();

  const handleClickNext = () => {
    if (!isAllValid) {
      routeToStep(firstInvalidField?.key.split('-')[1]);
      startValidate();
    }
    else routeNextStep();
  }

  return (
    <FooterContainer>
      {!isFirstStep && <FooterButton onClick={routePrevStep}>이전</FooterButton>}
      {!isLastStep && <FooterButton primary onClick={handleClickNext}>다음</FooterButton>}
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

const FooterButton = styled.button<{ primary?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 304px;
  height: 48px;
  background-color: ${({ primary, theme }) => primary ? theme["3billion"]["blue-light-900"] : theme.action.light};
  color: ${({ primary, theme }) => primary ? theme.accent.contrast : theme.text.primary};
  border-radius: 51px;
`;