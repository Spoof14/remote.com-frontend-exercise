import { Table, TableThCell, TableCell, TableRow } from 'components/Table';
import { useState, useEffect } from 'react';
import Text from 'components/Text';
import ButtonIcon from 'components/Button/ButtonIcon';
import LoadingLogo from 'components/LoadingLogo';
import { ReactComponent as IconTrash } from 'theme/icons/trash.svg';
import Modal from 'components/Modal';
import { useToasterConsumer } from 'components/Toaster';

async function getPeople() {
  return fetch(`http://localhost:4002/people`, { method: 'GET' }).then((response) =>
    response.json(),
  );
}

async function deletePerson(id) {
  return fetch(`http://localhost:4002/people/${id}`, { method: 'DELETE' }).then((response) =>
    response.json(),
  );
}

export function DeletePerson({ person, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [isDeleting, setIsDeleting] = useState(null);

  async function handleDeleteClick() {
    setIsModalOpen(true);
  }

  async function handleOnDelete() {
    setIsDeleting(true);
    await deletePerson(person.id);
    setIsModalOpen(false);
    onDelete();
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <ButtonIcon onClick={() => handleDeleteClick()} data-testid="deletePerson">
        <IconTrash />
      </ButtonIcon>
      {isModalOpen && (
        <Modal
          title={`Delete ${person.name}?`}
          onClose={handleModalClose}
          onDelete={handleOnDelete}
          onCancel={handleModalClose}
          isDeleting={isDeleting}
        >
          <Text as="p">Are you sure you want to delete {person.name}?</Text>
          <Text as="p">It’s not reversible.</Text>
        </Modal>
      )}
    </>
  );
}

// Again, feel free to modify any code as much as you need.
// We know some of these things are incorrect, so please
// show us how to do it right! ✨
export default function PeopleTable() {
  const [people, setPeople] = useState(null);
  const { setToaster } = useToasterConsumer();

  useEffect(() => {
    async function loadPeople() {
      const people = await getPeople();
      setPeople(people);
    }

    loadPeople();
  }, []);

  function renderDeletePerson(person) {
    async function handleOnDelete() {
      setToaster({
        text: `You have successfully deleted ${person.name}.`,
      });
      const people = await getPeople();
      setPeople(people);
    }

    return <DeletePerson person={person} onDelete={handleOnDelete} />;
  }

  if (!people) {
    return <LoadingLogo />;
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <TableThCell>Name</TableThCell>
            <TableThCell>Role</TableThCell>
            <TableThCell>Type</TableThCell>
            <TableThCell>Country</TableThCell>
            <TableThCell align="right">Salary</TableThCell>
            <TableThCell style={{ width: 120 }} />
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <TableRow key={person.id}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.jobTitle}</TableCell>
              <TableCell>{person.employment}</TableCell>
              <TableCell>{person.country}</TableCell>
              <TableCell align="right">{person.salary}</TableCell>
              <TableCell align="right">{renderDeletePerson(person)}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  );
}
