import styled from 'styled-components';
import Text from 'components/Text';

export const Overlay = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 35, 75, 0.6);
  overflow: hidden auto;
  z-index: 999999;
`;

export const Area = styled.div`
  position: relative;
  width: auto;
  max-width: 620px;
  min-height: calc(100% - 100px);
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dialog = styled.div`
  position: relative;
  width: 100%;
  color: var(--colors-bayoux);
  background: var(--colors-blank);
  border-radius: 12px;
  padding: 88px 24px;
`;

export const ModalClose = styled.button`
  all: initial;
  box-sizing: border-box;
  position: relative;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 30px;
  right: 30px;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 20px;
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

export const Title = styled(Text).attrs({
  size: 'h2',
  as: 'h2',
})`
  text-align: center;
  color: var(--colors-redPink);
`;

export const Body = styled.div`
  margin: 24px 0 48px;
  text-align: center;
`;

export const CTAs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
