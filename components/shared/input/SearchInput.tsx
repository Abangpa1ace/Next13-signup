"use client"

import { ClickOutside } from "@/components/shared/tools";
import Image from "next/image";
import { Children, useState } from "react";
import styled from "styled-components";
import TextInput, { TextInputProps } from "./TextInput";

export interface SearchOptionItem<T = string> {
  label: string;
  value: T;
}

interface Props<T> extends TextInputProps {
  searchList: string[] | SearchOptionItem<T>[];
  onChangeOption: (option: T) => void;
}

function SearchInput<T>({ searchList = [], onChangeOption, onChangeInput, ...inputProps }: Props<T>) {
  const [isShowSearchList, setIsShowSearchList] = useState<boolean>(false);

  const handleChangeInput = (value) => {
    onChangeInput(value);
    if(!isShowSearchList) setIsShowSearchList(true);
  }

  const handleClickOption = (value: T) => {
    onChangeOption(value);
    setIsShowSearchList(false);
  }

  return (
    <Wrapper>
      <SearchIcon src="/icon-search.svg" alt="icon_search" width={14} height={14} />
      <TextInput
        onChangeInput={handleChangeInput}
        {...inputProps}
        style={{ paddingLeft: '44px' }}
      />
      {(isShowSearchList && !!searchList?.length) ?
        <ClickOutside onClickOutside={() => setIsShowSearchList(false)}>
          <SearchList>
            {Children.toArray(searchList.map((option) => {
              const isString = typeof option === 'string';
              return <SearchItem onClick={() => handleClickOption(isString ? option : option.value)}>{isString ? option : option.label}</SearchItem>
            }))}
          </SearchList>
        </ClickOutside>
        : null
      }
    </Wrapper>
  )
}

export default SearchInput;

const Wrapper = styled.div`
  position: relative;
`;

const SearchIcon = styled(Image)`
  position: absolute;
  left: 20px;
  top: 24px;
  transform: translateY(-50%);
`;

const SearchList = styled.ul`
  position: absolute;
  left: 0;
  top: 54px;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  background-color: #fff;
  border: ${({ theme }) => `1px solid ${theme.border.light}`};
  box-shadow: 0px 0px 4px 0px #0000000A;
  box-shadow: 0px 12px 12px -8px #00000014;
  border-radius: 8px;
  z-index: 1;
`;

const SearchItem = styled.li`
  padding: 9px 28px;
  color: ${({ theme }) => theme.text.primary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  z-index: 2;
  :hover {
    border: 2px solid red;
  }
`;