import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactElement, Suspense } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { buildQueryClient } from './client';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

type RenderWithProvidersConfig = {
  queryClient?: QueryClient;
  routes?: string[];
};

export function renderWithProviders(ui: ReactElement, config: RenderWithProvidersConfig = {}) {
  const { queryClient = buildQueryClient(), routes = ['/'] } = config;
  const user = userEvent.setup();

  const utils = render(
    <MemoryRouter initialEntries={routes}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={null}>{ui}</Suspense>
        </ThemeProvider>
      </QueryClientProvider>
    </MemoryRouter>,
  );

  return { user, ...utils };
}
