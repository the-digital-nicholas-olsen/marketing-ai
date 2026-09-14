export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}
/** Square black checkbox. */
export function Checkbox(props: CheckboxProps): JSX.Element;

export interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}
export function Radio(props: RadioProps): JSX.Element;
