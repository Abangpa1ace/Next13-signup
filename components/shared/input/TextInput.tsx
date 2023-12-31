import { ChangeEvent, forwardRef, InputHTMLAttributes } from "react";
import styled from "styled-components";

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: string | number | undefined | null;
  onChangeInput?: (value: string) => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ value, onChangeInput, ...props }, ref) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInput?.(e.target.value);
  };

  return (
    <Input {...props} value={value || ''} onChange={handleChange} ref={ref} />
  )
});

export default TextInput;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 11px 12px;
  border: ${({ theme }) => `1px solid ${theme.border.dark}`};
  box-shadow: 0px 5px 4px -4px #00000005;
  box-shadow: 0px 1px 2px 0px #0000000F;
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.18px;
  border-radius: 8px;

  &:focus {
    box-shadow: 0px 0px 0px 2px #0000001A;
  }
`;