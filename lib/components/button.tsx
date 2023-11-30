export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
}

export function Button({ text, children, ...rest }: ButtonProps) {
  return <button {...rest}>{text || children}</button>;
}
