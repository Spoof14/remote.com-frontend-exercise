import { screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Checkbox from '.';
import { renderWithProviders } from 'utils/testUtils';

describe('Button', () => {
  it('renders correctly', () => {
    renderWithProviders(<Checkbox label="Hello"></Checkbox>);
    const checkbox = screen.getByLabelText('Hello');
    expect(checkbox).toBeInTheDocument();
  });

  it('spreads custom attributes', () => {
    const clickFn = vi.fn();
    renderWithProviders(<Checkbox data-foo="12" label="hello" onClick={clickFn} />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox.getAttribute('data-foo')).toBe('12');

    fireEvent.click(checkbox);
    expect(clickFn).toHaveBeenCalledTimes(1);
  });
});
