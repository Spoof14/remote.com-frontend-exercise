import { ComponentProps } from 'react';
import styled, { css, keyframes } from 'styled-components';

export const ButtonStyled = styled.button<ComponentProps<'button'>>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  gap: 8px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  min-height: 44px;
  padding: 10px 24px;
  border: none;
  border-radius: 50px;

  background: var(--colors-irisBlue);
  color: var(--colors-blank);

  &:hover {
    background: var(--colors-irisBlueLight);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 4px var(--colors-blank),
      0 0 0 6px var(--colors-irisBlueTransparent);
  }
`;

export const Text = styled.span<{ $isLoading?: boolean }>`
  transition: color 250ms;

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      color: transparent;
    `}
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.span`
  position: absolute;
  display: block;
  width: 1em;
  height: 1em;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  border-width: 2px;
  border-color: inherit;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-style: solid;
  border-radius: 50%;
  animation: ${spin} 0.45s linear infinite;
`;
