"use client"

import { occupationList } from "@/constants/signup";
import useValidatorField from "@/hooks/shared/validator/useValidatorField";
import { OccupationKey } from "@/types/signup";
import { Children } from "react";
import styled, { css } from "styled-components";
import ErrorMessage from "../shared/form/ErrorMessage";

const OccupationContents = () => {
  const { value, setValue, isValid, invalidKey, onValidate } = useValidatorField<OccupationKey>({ key: 'signup-occupation' });

  const handleClickOccupation = (key: OccupationKey) => {
    setValue(prev => prev === key ? null : key);
  }

  return (
    <>
      <OccupationList>
        {Children.toArray(occupationList.map(({ key, name }) => {
          return <OccupationItem isSelected={value === key} onClick={() => handleClickOccupation(key)}>{name}</OccupationItem>;
        }))}
      </OccupationList>
      {onValidate && !isValid && <ErrorMessage>{invalidKey} 문제가 있군요..</ErrorMessage>}
    </>
  )
}

export default OccupationContents;

const OccupationList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px 16px;
`;

const OccupationItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  border: ${({ theme }) => `1px solid ${theme.border.dark}`};
  color: ${({ theme }) => `1px solid ${theme.text.primary}`};
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;

  ${({ isSelected }) => isSelected && css`
    border: ${({ theme }) => `2px solid ${theme.accent.primary}`};
    background-color: ${({ theme }) => theme.accent.background};
  `};
`;