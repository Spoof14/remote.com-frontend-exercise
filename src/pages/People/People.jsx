import styled from 'styled-components';
import PeopleTable from './PeopleTable/PeopleTable';
import LinkPlayground from 'components/LinkPlayground';
import PeopleHeader from './PeopleHeader/PeopleHeader';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  padding: 0 16px;
  width: 100%;
  max-width: var(--layout-width);
  gap: 32px;
`;

export default function People() {
  return (
    <Container>
      <PeopleHeader />
      <PeopleTable />

      <LinkPlayground />
    </Container>
  );
}
