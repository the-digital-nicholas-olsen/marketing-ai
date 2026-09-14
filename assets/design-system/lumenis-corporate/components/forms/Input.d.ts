/**
 * @startingPoint section="Components" subtitle="Square text field, textarea and select with label, hint, error" viewport="700x260"
 */
export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'tel' | 'number' | 'password';
  hint?: string;
  error?: string;
  id?: string;
  /** outline = boxed (default); underline = single rule, as on the treatment card */
  variant?: 'outline' | 'underline';
}
export function Input(props: InputProps): JSX.Element;

export interface TextareaProps {
  label?: string; placeholder?: string; value?: string; onChange?: (value: string) => void;
  rows?: number; hint?: string; error?: string; id?: string;
}
export function Textarea(props: TextareaProps): JSX.Element;

export interface SelectProps {
  label?: string;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  hint?: string; error?: string; id?: string;
}
export function Select(props: SelectProps): JSX.Element;
