import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { background, baseButtonStyle } from './button.css';
import { myStyle } from '@/_styles/vars.css';
import { myFont } from '@/assets/fonts/font';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof background;
}

export default function Button({
  variant,
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const classNames = ` ${background[variant]} ${myStyle} ${className ?? ''} ${myFont.className} ${baseButtonStyle}`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
