import { Table } from 'components/Table';
import { ChangeEvent, PropsWithChildren, Suspense, useReducer, useState } from 'react';
import LoadingLogo from 'components/LoadingLogo';
import PeopleTableHead from './PeopleTableHead';
import Search from 'components/Search';
import styled from 'styled-components';
import Checkbox from 'components/Checkbox/Checkbox';
import { PeopleTableBody } from './PeopleTableBody';
import { ErrorBoundary } from 'utils/ErrorBoundary';

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: var(--colors-blank);

  border-radius: 10px 10px 0 0;
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const FallbackContainer = styled.div`
  display: flex;
  background: #fff;
  flex-direction: column;
  width: 100%;
  height: 162px;
  justify-content: center;
  align-items: center;
`;

const reducer = (state: Set<string>, filter: string) => {
  const newState = new Set(state);
  if (newState.delete(filter)) {
    return newState;
  }
  return newState.add(filter);
};

export default function PeopleTable() {
  const [searchValue, setSearchValue] = useState('');
  const [filters, toggleFilter] = useReducer(reducer, new Set<string>());

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    toggleFilter(e.target.name);
  };

  return (
    <section>
      <SearchContainer>
        <Search value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <CheckboxContainer>
          <Checkbox name="contractor" label="Contractor" onChange={handleFilterChange} />
          <Checkbox name="employee" label="Employee" onChange={handleFilterChange} />
        </CheckboxContainer>
      </SearchContainer>
      <Suspense
        fallback={
          <Fallback>
            <LoadingLogo />
          </Fallback>
        }
      >
        <ErrorBoundary
          fallback={
            <Fallback>
              <h1>Something went wrong</h1>
            </Fallback>
          }
        >
          <Table>
            <PeopleTableHead />
            <PeopleTableBody searchValue={searchValue} filters={filters} />
          </Table>
        </ErrorBoundary>
      </Suspense>
    </section>
  );
}

const Fallback = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Table>
        <PeopleTableHead />
      </Table>
      <FallbackContainer>{children}</FallbackContainer>
    </>
  );
};
