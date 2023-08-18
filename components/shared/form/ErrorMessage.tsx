import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  isValid?: boolean;
}

const ErrorMessage = ({ children, isValid }: PropsWithChildren<Props>) => {
  if (isValid) return null;
  
  return (
    <Message>{children}</Message>
  )
}

export default ErrorMessage;

const Message = styled.p`
  margin-top: 2px;
  color: ${({ theme }) => theme.error.primary};
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;