import styled from 'styled-components';
import { FontSize } from 'types/types';

const Text = styled.span<{ size?: FontSize }>`
  ${({ theme, size }) => theme.typography[size || 'body']}
`;

export default Text;

export const TextLight = styled(Text)`
  color: var(--colors-lynch);
`;
