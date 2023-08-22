import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  height?: number;
}

const InputLayout = ({ children, title, height = 48 }: PropsWithChildren<Props>) => {
  return (
    <Layout height={height}>
      <Title height={height}>{title}</Title>
      <InputWrapper>{children}</InputWrapper>
    </Layout>
  )
}

export default InputLayout;

const Layout = styled.div<Pick<Props, 'height'>>`
  position: relative;
  height: ${({ height }) => `${height}px`};
`;

const Title = styled.label<Pick<Props, 'height'>>`
  position: absolute;
  left: 0;
  top: ${({ height }) => `${(height || 48) / 2}px`};
  transform: translateY(-50%);
  display: block;
  width: 140px;
  margin-right: 24px;
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.18px;
`;

const InputWrapper = styled.div`
  margin-left: 164px;
  width: calc(100% - 164px);
`;