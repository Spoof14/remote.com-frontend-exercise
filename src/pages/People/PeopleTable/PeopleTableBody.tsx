import { TableCell, TableRow } from 'components/Table';
import { capitalizeFirstLetter, formatSalary } from 'utils/utils';
import { usePeople } from '../peopleQueries';

type PeopleTableBodyProps = { searchValue: string; filters: Set<string> };
export const PeopleTableBody = ({ searchValue, filters }: PeopleTableBodyProps) => {
  const lowerCaseSearch = searchValue.toLowerCase();
  const people = usePeople(lowerCaseSearch, [...filters]).data;
  // .data.filter((person) => person.name.toLowerCase().includes(lowerCaseSearch))
  // .filter((person) => filters.has(person.employment) || filters.size === 0);

  return (
    <tbody>
      {people.map((person) => (
        <TableRow key={person.id}>
          <TableCell size="tableCellBold">{person.name}</TableCell>
          <TableCell>{person.jobTitle}</TableCell>
          <TableCell>{capitalizeFirstLetter(person.employment)}</TableCell>
          <TableCell>{person.country}</TableCell>
          <TableCell $align="right">{formatSalary(person.salary, person.currency)}</TableCell>
        </TableRow>
      ))}
    </tbody>
  );
};
