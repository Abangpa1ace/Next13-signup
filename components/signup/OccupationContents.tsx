"use client"

import ValidatorFieldWrapper from "@/components/shared/form/ValidatorFieldWrapper";
import { occupationList } from "@/constants/signup";
import useValidatorField from "@/hooks/shared/validator/useValidatorField";
import { OccupationKey } from "@/types/signup";
import { Children } from "react";
import styled, { css } from "styled-components";

const OccupationContents = () => {
  const { value, setValue, fieldProps } = useValidatorField<OccupationKey>('signup-occupation');

  const handleClickOccupation = (key: OccupationKey) => {
    setValue(prev => prev === key ? null : key);
  }

  return (
    <ValidatorFieldWrapper {...fieldProps}>
      <OccupationList>
        {Children.toArray(occupationList.map(({ key, name }) => {
          return <OccupationItem isSelected={value === key} onClick={() => handleClickOccupation(key)}>{name}</OccupationItem>;
        }))}
      </OccupationList>
    </ValidatorFieldWrapper>
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