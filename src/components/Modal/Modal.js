import { Overlay, Area, Dialog, ModalClose, Title, Body, CTAs } from './Modal.styled';
import Button from 'components/Button';

export default function Modal({ children, title, onClose, onDelete, onCancel, isDeleting }) {
  return (
    // TODO - I need help here
    // If the user clicks outside the modal, it should
    // close it but I'm not sure how to do it.
    // Could you guide me on how to do it? Thank you!
    <Overlay>
      <Area>
        <Dialog>
          <ModalClose onClick={onClose} />
          <Title>{title}</Title>
          <Body>{children}</Body>
          <CTAs>
            <Button danger wide onClick={onDelete} isLoading={isDeleting}>
              Delete
            </Button>
            <Button outline wide onClick={onCancel}>
              Cancel
            </Button>
          </CTAs>
        </Dialog>
      </Area>
    </Overlay>
  );
}
