"use client";

import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>가입하기</HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: #040435;
  color: white;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.464px;
`;