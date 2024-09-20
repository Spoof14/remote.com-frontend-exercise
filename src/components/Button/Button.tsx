import { ComponentProps, ComponentPropsWithRef, FunctionComponent, PropsWithChildren } from 'react';
import { ButtonStyled, Text, Loading } from './Button.styled';
import SROnly from 'components/SROnly';

type ButtonProps = PropsWithChildren<ComponentPropsWithRef<'button'>> & {
  isLoading?: boolean;
  Icon?: FunctionComponent<ComponentProps<'svg'>>;
};
export default function Button({ children, isLoading, Icon, ...props }: ButtonProps) {
  return (
    <ButtonStyled type="button" {...props}>
      {Icon && <Icon height={20} width={20} fill={'#FFF'} />}
      {children && <Text $isLoading={isLoading}>{children}</Text>}
      {isLoading && (
        <>
          <SROnly aria-live="assertive">Loading</SROnly>
          <Loading />
        </>
      )}
    </ButtonStyled>
  );
}
