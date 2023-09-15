import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  category?: 'white';
  width?: number | string;
}

function BaseButton({ children, category = 'white', width, ...props }: PropsWithChildren<Props>) {
  return <Button category={category} width={width} {...props}>{children}</Button>

}

export default BaseButton;

const Button = styled.button<Pick<Props, 'category' | 'width'>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => typeof width === 'string' ? width : `${width || 90}px`};
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  letter-spacing: -0.18px;
  font-weight: 600;

  ${({ category }) => {
    switch (category) {
      case 'white':
      default:
        return css`
          border: ${({ theme }) => `1px solid ${theme.border.dark}`};
          background-color: #fff;

          &:hover, &:focus {
            border: ${({ theme }) => `2px solid ${theme.border.dark}`};
          }
          &:disabled {
            border: ${({ theme }) => `1px solid ${theme.border.disabled}`};
            background-color: ${({ theme }) => theme.action.disabled};
            color: ${({ theme }) => theme.text.disabled};
          }
        `;
    }
  }}
`;