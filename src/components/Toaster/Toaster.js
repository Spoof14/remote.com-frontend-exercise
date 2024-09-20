import { useToasterConsumer } from 'components/Toaster';
import { Wrapper, Message, ToasterCloser } from './Toaster.styled.js';
import { ReactComponent as IconCheckCircle } from 'theme/icons/check-circle.svg';

export default function Toaster() {
  const { toaster, setToaster } = useToasterConsumer();

  function deleteToaster() {
    setToaster(null);
  }

  return toaster.text ? (
    <Wrapper>
      <IconCheckCircle />
      <Message>{toaster.text}</Message>
      <ToasterCloser onClick={deleteToaster}></ToasterCloser>
    </Wrapper>
  ) : null;
}
