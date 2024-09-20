import { ComponentPropsWithRef } from 'react';
import styled from 'styled-components';

export default styled.input.attrs<ComponentPropsWithRef<'input'>>({
  type: 'text',
})`
  width: 220px;
  // Padding left is 10 (designs) + 16 (icon) + 8 (gap)
  padding: 6px 10px 6px 34px;
  border-radius: 25px;
  border: 1px solid var(--colors-lynch);
  color: var(--colors-darkBlue);
  ${({ theme }) => theme.typography.body}

  &:hover,
  &:focus {
    background: var(--colors-grey-light);
    outline: 0;
  }

  // TODO: Discuss with designer how the intended behaviour should be. Natively in Chrome focus-visible styles is there even for regular users
  // we can use :placeholder-shown to remove it once text is inputted but that would affect users with vision impairment
  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 4px var(--colors-blank),
      0 0 0 6px var(--colors-grey-500);
  }
`;
