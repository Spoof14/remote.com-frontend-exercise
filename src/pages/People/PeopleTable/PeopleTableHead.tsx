import { TableThCell } from 'components/Table';

export default function PeopleTableHead() {
  return (
    <thead>
      <tr>
        <TableThCell>Name</TableThCell>
        <TableThCell>Role</TableThCell>
        <TableThCell>Type</TableThCell>
        <TableThCell>Country</TableThCell>
        <TableThCell $align="right">Salary</TableThCell>
      </tr>
    </thead>
  );
}
