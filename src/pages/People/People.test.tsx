import { screen, waitFor } from '@testing-library/react';
import { Person } from 'types';
import { renderWithProviders } from 'utils/testUtils';
import { describe, expect, it } from 'vitest';
import People from '.';
import queryClient from 'utils/client';
import { peopleKeys } from './peopleQueries';
import userEvent from '@testing-library/user-event';

const people: Person[] = [
  {
    id: 1,
    name: 'John Doe',
    jobTitle: 'Developer',
    employment: 'employee',
    country: 'USA',
    salary: 100000,
    currency: 'USD',
  },
  {
    id: 2,
    name: 'Jane Doe',
    jobTitle: 'Designer',
    employment: 'contractor',
    country: 'USA',
    salary: 80000,
    currency: 'USD',
  },
];

describe('People', () => {
  it('renders correctly', () => {
    renderWithProviders(<People />);
    const people = screen.getByText('People');
    expect(people).toBeInTheDocument();
  });

  it('renders people', async () => {
    queryClient.setQueryData(peopleKeys.all, people);
    renderWithProviders(<People />, { queryClient });
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });
  });

  it('filters for contractors', async () => {
    queryClient.setQueryData(peopleKeys.all, people);
    renderWithProviders(<People />, { queryClient });

    const contractorCheckbox = screen.getByLabelText('Contractor');
    // Contractor is checked
    contractorCheckbox.click();
    await waitFor(() => {
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
      expect(screen.queryByText('John Doe')).toBeNull();
    });
  });

  it('filters for employees', async () => {
    queryClient.setQueryData(peopleKeys.all, people);
    renderWithProviders(<People />, { queryClient });

    const employeeCheckbox = screen.getByLabelText('Employee');
    // Employee is checked
    employeeCheckbox.click();
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.queryByText('Jane Doe')).toBeNull();
    });
  });

  it('filters for employees and contractors', async () => {
    queryClient.setQueryData(peopleKeys.all, people);
    renderWithProviders(<People />, { queryClient });

    const contractorCheckbox = screen.getByLabelText('Contractor');
    const employeeCheckbox = screen.getByLabelText('Employee');
    // Both are checked
    contractorCheckbox.click();
    employeeCheckbox.click();
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });
  });

  it('filters with the search bar', async () => {
    queryClient.setQueryData(peopleKeys.all, people);
    renderWithProviders(<People />, { queryClient });

    const searchInput = screen.getByPlaceholderText('Search people...');
    await userEvent.type(searchInput, 'John');
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.queryByText('Jane Doe')).toBeNull();
    });
  });

  it('has the correct number in the header', async () => {
    queryClient.setQueryData(peopleKeys.all, people);
    renderWithProviders(<People />, { queryClient });
    await waitFor(() => {
      expect(screen.queryByText('2 members')).toBeInTheDocument();
    });
    queryClient.setQueryData(peopleKeys.all, []);
    await waitFor(() => {
      expect(screen.queryByText('2 members')).toBeNull();
    });
  });

  it('shows a loading logo', async () => {
    renderWithProviders(<People />, { queryClient });
    await waitFor(() => {
      expect(screen.getByTitle('Loading logo')).toBeInTheDocument();
    });
  });
});
