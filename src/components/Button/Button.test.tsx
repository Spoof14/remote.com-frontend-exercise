import { screen, fireEvent } from '@testing-library/react';
import Button from '.';
import { describe, it, expect, vi } from 'vitest';
import { renderWithProviders } from 'utils/testUtils';

describe('Button', () => {
  it('renders correctly', () => {
    renderWithProviders(<Button>Hello</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('type')).toBe('button');
    expect(button).toHaveTextContent('Hello');
  });

  it('spreads custom attributes', () => {
    const clickFn = vi.fn();
    renderWithProviders(
      <Button data-foo="12" onClick={clickFn}>
        Hello
      </Button>,
    );

    const button = screen.getByRole('button');

    expect(button.getAttribute('data-foo')).toBe('12');

    fireEvent.click(button);
    expect(clickFn).toHaveBeenCalledTimes(1);
  });
});
