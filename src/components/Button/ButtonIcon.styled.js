import styled, { css } from 'styled-components';

export const ButtonIconStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 32px;

  background: var(--colors-blank);
  color: var(--colors-lynch);
  border: 2px solid var(--colors-geyser);

  &:hover {
    color: var(--colors-redPink);
    border-color: var(--colors-cosmos);
  }

  &:focus {
    outline: none;
    color: var(--colors-redPink);
    border-color: var(--colors-redPink);
    box-shadow: 0 0 0 3px var(--colors-cosmos);
  }
`;
