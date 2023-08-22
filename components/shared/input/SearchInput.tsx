import styled from "styled-components";
import TextInput from "./TextInput";

const SearchInput = () => {
  return (
    <Wrapper>
      <img src="/static/icon-search.svg" />
      <TextInput style={{ paddingLeft: '44px' }} />
    </Wrapper>
  )
}

export default SearchInput;

const Wrapper = styled.div`
  position: relative;
`;