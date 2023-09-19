
import { ValidatorFieldProps } from "@/types/shared/validator"
import { PropsWithChildren } from "react"
import styled from "styled-components"
import ErrorMessage from "./ErrorMessage"

const ValidatorFieldWrapper = ({ children, isValid, invalidMessage, onValidate }: PropsWithChildren<ValidatorFieldProps>) => {
  return (
    <Wrapper>
      {children}
      {(onValidate && !isValid) && <ErrorMessage>{invalidMessage ?? ''}</ErrorMessage>}
    </Wrapper>
  )
}

export default ValidatorFieldWrapper;

const Wrapper = styled.div`
  width: 100%;
`;