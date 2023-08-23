import Image from "next/image";
import styled from "styled-components";
import TextInput, { TextInputProps } from "./TextInput";

interface Props extends TextInputProps {

}

const SearchInput = () => {
  return (
    <Wrapper>
      <SearchIcon src="/icon-search.svg" alt="icon_search" width={14} height={14} />
      <TextInput style={{ paddingLeft: '44px' }} />
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