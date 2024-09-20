import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/testUtils';
import { describe, expect, it } from 'vitest';
import Search from '.';

describe('Search', () => {
  it('renders correctly', () => {
    renderWithProviders(<Search />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders placeholder', () => {
    renderWithProviders(<Search />);
    const input = screen.getByPlaceholderText('Search people...');
    expect(input).toBeInTheDocument();
  });

  it('spreads custom attributes', () => {
    renderWithProviders(<Search data-foo="12" />);
    const input = screen.getByRole('textbox');
    expect(input.getAttribute('data-foo')).toBe('12');
  });

  it('changes value', () => {
    renderWithProviders(<Search />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(input).toHaveValue('Hello');
  });
});
