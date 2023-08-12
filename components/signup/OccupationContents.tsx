"use client"

import { occupationList } from "@/constants/signup";
import { OccupationKey } from "@/types/signup";
import { Children, useState } from "react";
import styled from "styled-components";

const OccupationContents = () => {
  const [selectedOccupation, setSelectedOccupation] = useState<OccupationKey | null>(null);

  const handleClickOccupation = (key: OccupationKey) => {
    setSelectedOccupation(prev => prev === key ? null : key);
  }

  return (
    <OccupationList>
      {Children.toArray(occupationList.map(({ key, name }) => {
        return <OccupationItem onClick={() => handleClickOccupation(key)}>{name}</OccupationItem>;
      }))}
    </OccupationList>
  )
}

export default OccupationContents;

const OccupationList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px 16px;
`;

const OccupationItem = styled.li`
  height: 48px;
  border: ${({ theme }) => `1px solid ${theme.border.dark}`};
  border-radius: 8px;
`;