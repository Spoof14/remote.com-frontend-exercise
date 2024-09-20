import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders', async () => {
    render(<App />);
    const title = await screen.findByText('Playground');
    expect(title).toBeInTheDocument();
  });
});
