import Button from 'components/Button';
import Text from 'components/Text';
import styled from 'styled-components';
import IconUser from 'theme/icons/user.svg?react';
import { Suspense } from 'react';
import { PeopleMembersCount } from './PeopleMembersCount';
import { ErrorBoundary } from 'utils/ErrorBoundary';

const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const HeaderInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
`;
export default function PeopleHeader() {
  return (
    <Container>
      <HeaderInfo>
        <Text size="h2">People</Text>
        <Suspense>
          <ErrorBoundary>
            <PeopleMembersCount />
          </ErrorBoundary>
        </Suspense>
      </HeaderInfo>
      <Button Icon={IconUser}>Add member</Button>
    </Container>
  );
}
