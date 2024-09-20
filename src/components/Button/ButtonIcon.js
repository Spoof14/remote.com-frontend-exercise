import { ButtonIconStyled } from './ButtonIcon.styled';

export default function ButtonIcon({ children, ...props }) {
  return (
    <ButtonIconStyled type="button" {...props}>
      {children}
    </ButtonIconStyled>
  );
}
