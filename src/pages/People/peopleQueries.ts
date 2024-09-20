import { useSuspenseQuery } from '@tanstack/react-query';
import { Person } from 'types';
import queryClient from 'utils/client';

const fetchPeople = async (search?: string, filters?: string[]): Promise<Person[]> => {
  const params = new URLSearchParams();
  search && params.append('name_like', search);
  filters?.length === 1 && params.append('employment', filters.join(','));
  return fetch(`http://localhost:4002/people${params.size > 0 ? '?' : ''}${params}`, {
    method: 'GET',
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch people data');
    }
    return response.json();
  });
};

const fetchPerson = async (id: number): Promise<Person> => {
  return fetch(`http://localhost:4002/people/${id}`, { method: 'GET' }).then((response) =>
    response.json(),
  );
};

export const peopleKeys = {
  all: ['people'] as const,
  filteredPeople: (search?: string, filters?: string[]) => ['people', search, filters] as const,
  person: (id: number) => ['person', id] as const,
};

export const peopleQuery = (search?: string, filters?: string[]) => ({
  queryKey: peopleKeys.filteredPeople(search, filters),
  queryFn: () => fetchPeople(search, filters),
  throwOnError: true,
});

export const personQuery = (id: number) => ({
  queryKey: peopleKeys.person(id),
  queryFn: () => fetchPerson(id),
});

export const usePerson = (id: number) => {
  return useSuspenseQuery(personQuery(id));
};

export const usePeople = (search?: string, filters?: string[]) => {
  let query;
  if (!search && filters?.length === 0) query = peopleQuery();
  else query = peopleQuery(search, filters);
  return useSuspenseQuery(query);
};

export const peopleLoader =
  (client = queryClient) =>
  () => {
    return client.ensureQueryData(peopleQuery());
  };
