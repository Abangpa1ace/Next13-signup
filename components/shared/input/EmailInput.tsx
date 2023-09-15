import styled from "styled-components";
import BaseButton from "../button/BaseButton";
import TextInput, { TextInputProps } from "./TextInput";

interface Props extends TextInputProps { };

function EmailInput({ ...inputProps }: Props) {
  return (
    <Wrapper>
      <TextInput {...inputProps} />
      <BaseButton>중복 확인</BaseButton>
    </Wrapper>
  )
}

export default EmailInput;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;