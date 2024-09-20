import { ComponentPropsWithRef } from 'react';
import styled from 'styled-components';

export const CheckboxInput = styled.input.attrs<ComponentPropsWithRef<'input'>>({
  type: 'checkbox',
})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:focus-visible {
    outline: none;
  }
`;

export const CheckboxLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 13px;
  border-radius: 12px;
  width: max-content;
  cursor: pointer;
  user-select: none;
  height: 40px;
  background: var(--colors-blank);
  border: 1.5px solid var(--colors-shades-spindle, #b7b8eb);
  ${({ theme }) => theme.typography.checkboxLabel}

  &:hover {
    background: var(--colors-linkWater);
    div {
      border-color: var(--colors-irisBlue);
    }
  }

  &:has(:focus-visible) {
    outline: none;
    box-shadow:
      0 0 0 4px var(--colors-blank),
      0 0 0 6px var(--colors-irisBlue);
      div {
        border-color: var(--colors-irisBlue);
      }
  }
  // Styles for the checkmark
  & input:checked ~ div div {
    background-color: var(--colors-irisBlue);
  }
`;

export const CheckmarkBox = styled.div`
  height: 14px;
  width: 14px;
  background-color: var(--colors-blank);
  border: 1px solid var(--colors-shades-spindle);
  border-radius: 2px;

  &:hover {
    border-color: var(--colors-irisBlue);
  }
`;

export const Checkmark = styled.div`
    border-radius: 2px;
    margin: 2px;
    height: 8px;
    width: 8px;
`;
