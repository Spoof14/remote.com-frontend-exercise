import Text from 'components/Text';
import { usePeople } from '../peopleQueries';

// Needs to be it's own file because of the Suspense
export const PeopleMembersCount = () => {
  const people = usePeople().data;
  return (
    <Text size="bodySmallMuted">
      {`${people.length} ${people.length > 0 ? 'members' : 'member'}`}
    </Text>
  );
};
