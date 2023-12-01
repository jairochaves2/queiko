import './styles.scss';
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({ text, children, fullWidth, ...rest }: ButtonProps) {
  return (
    <button className={`button ${fullWidth && 'fullWidth'}`} {...rest}>
      {text || children}
    </button>
  );
}
