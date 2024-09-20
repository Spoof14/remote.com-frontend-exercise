import { render, screen, fireEvent } from '@testing-library/react';
import Toaster, { ToasterProvider } from 'components/Toaster';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '../../../theme';

import { DeletePerson } from './PeopleTable';

describe('PeopleTable', () => {
  it('should open the delete modal', async () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToasterProvider>
          <DeletePerson
            person={{
              id: 1,
              name: 'Ann Henry',
            }}
          />
          <Toaster />
        </ToasterProvider>
      </ThemeProvider>,
    );

    const openModalBtn = screen.getByTestId('deletePerson');

    fireEvent.click(openModalBtn);

    expect(
      screen.getByRole('button', {
        name: 'Delete',
      }),
    ).toBeInTheDocument();
  });
});
