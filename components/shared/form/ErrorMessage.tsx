import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  margin?: string;
}

const ErrorMessage = ({ children, margin }: PropsWithChildren<Props>) => {
  return (
    <Message margin={margin}>{children}</Message>
  )
}

export default ErrorMessage;

const Message = styled.p<Pick<Props, 'margin'>>`
  margin: ${({ margin }) => margin || '2px 0 0'};
  color: ${({ theme }) => theme.error.primary};
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;