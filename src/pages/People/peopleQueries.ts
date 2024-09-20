import { useSuspenseQuery } from '@tanstack/react-query';
import { Person } from 'types';
import queryClient from 'utils/client';

const fetchPeople = async (): Promise<Person[]> => {
  return fetch(`http://localhost:4002/people`, { method: 'GET' }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch people data');
    }
    return response.json();
  });
};

export const peopleKeys = {
  all: ['people'] as const,
};

export const peopleQuery = () => ({
  queryKey: peopleKeys.all,
  queryFn: fetchPeople,
  throwOnError: true,
});

export const usePeople = () => {
  return useSuspenseQuery(peopleQuery());
};

export const peopleLoader =
  (client = queryClient) =>
  () => {
    return client.ensureQueryData(peopleQuery());
  };
