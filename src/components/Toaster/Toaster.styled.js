import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  margin: 0 0 24px 24px;
  padding: 16px 40px 16px 18px;
  background: var(--colors-blank);
  border-radius: 8px;
`;

export const Message = styled.p`
  color: var(--colors-bayoux);
  margin: 0;
  padding: 0 10px;
`;

export const ToasterCloser = styled.button`
  all: initial;
  box-sizing: border-box;
  position: relative;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 12px;
  right: 12px;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 14px;
    height: 2px;
    border-radius: 2px;
    background-color: var(--colors-bayoux);
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
