import { HTMLProps, PropsWithChildren } from "react";
import styled from "styled-components";

const ErrorMessage = ({ children, ...props }: PropsWithChildren<HTMLProps<HTMLParagraphElement>>) => {
  return (
    <Message {...props}>{children}</Message>
  )
}

export default ErrorMessage;

const Message = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.error.primary};
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
`;