"use client";

import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>회원 가입</HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: ${({ theme }) => theme.accent.primary};
  color: white;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.464px;
`;