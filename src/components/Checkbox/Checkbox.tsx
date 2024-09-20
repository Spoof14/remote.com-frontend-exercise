import { ComponentPropsWithRef } from 'react';
import { CheckboxInput, CheckboxLabel, Checkmark, CheckmarkBox } from './Checkbox.styled';

type CheckboxProps = { label: string } & ComponentPropsWithRef<'input'>;
export default function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <CheckboxLabel className={className}>
      {label}
      <CheckboxInput {...props} />
      <CheckmarkBox>
        <Checkmark />
      </CheckmarkBox>
    </CheckboxLabel>
  );
}
