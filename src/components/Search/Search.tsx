import TextInput from 'components/TextInput';
import { ComponentPropsWithRef } from 'react';
import styled from 'styled-components';
import IconSearch from 'theme/icons/search.svg?react';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    margin-left: 10px;
    pointer-events: none;
  }
`;

const Search = (props: ComponentPropsWithRef<'input'>) => {
  return (
    <Wrapper>
      <TextInput {...props} placeholder="Search people..." />
      <IconSearch aria-hidden={true} width={16} />
    </Wrapper>
  );
};
export default Search;
