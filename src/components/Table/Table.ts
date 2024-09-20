import styled from 'styled-components';
import { FontSize } from 'types/types';
type Align = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0 0;
  ${({ theme }) => theme.typography.bodySmall};
  color: var(--colors-bayoux);
`;

export const TableRow = styled.tr``;

export const TableThCell = styled.th<{ $align?: Align }>`
  white-space: nowrap;
  padding: 16px 0 16px 20px;
  text-transform: uppercase;
  color: var(--colors-darkBlue);
  background-color: var(--colors-catskillWhite);
  text-align: ${({ $align }) => $align};
  ${({ theme }) => theme.typography.tableHeader};

  &:last-child {
    padding-right: 20px;
  }
`;

TableThCell.defaultProps = {
  $align: 'left',
};
export const TableCell = styled.td<{ size?: FontSize; $align?: Align }>`
  padding: 15px 0 16px 20px;
  border-top: 1px solid var(--colors-mischka);
  text-align: ${({ $align }) => $align};
  border-radius: 0;
  background-color: var(--colors-blank);
  ${({ theme, size }) => theme.typography[size || 'tableCell']}

  &:last-child {
    padding-right: 20px;
  }

  ${TableRow}:first-child & {
    border-top: 0;
  }

  ${TableRow}:last-child & {
    &:first-child {
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-bottom-right-radius: 10px;
    }
  }
`;

TableCell.defaultProps = {
  $align: 'left',
};
