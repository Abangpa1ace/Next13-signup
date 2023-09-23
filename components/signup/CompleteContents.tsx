"use client";

import Image from 'next/image';
import styled from 'styled-components';

export default function CompleteContents() {
  return (
    <Wrapper>
      <Image src="/images/img-home.png" alt="img_home" width={175} height={170} />
      <Title>{`조금만 기다려주세요.\n마지막으로 내부 승인 절차를 진행하고 있습니다.`}</Title>
      <DescriptionBox>{`1일(영업일)이내에 승인 여부에 관한 메일이 발송됩니다.\n승인이 완료되면 포털에 로그인 할 수 있습니다.`}</DescriptionBox>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 65px;
  color: ${({ theme }) => theme.text.primary};
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.45px;
  white-space: pre-line;
`;

const DescriptionBox = styled.div`
  width: 100%;
  margin-top: 17px;
  padding: 24px;
  background-color: ${({ theme }) => theme.action.disabled};
  color: ${({ theme }) => theme.text.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.12px;
  text-align: center;
  white-space: pre-line;
  border-radius: 8px;
`;

