import classnames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

export enum ButtonVariants {
  Primary = 'primary',
  Outline = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  hasIcon?: boolean;
  isLarge?: boolean;
  notBold?: boolean;
}

const Button = ({ variant, children, hasIcon, isLarge, notBold, ...rest }: ButtonProps) => {
  const variants = classnames(
    'h-11 rounded-lg border hover:bg-hover focus:outline-dashed focus:outline-focus active:bg-active active:text-white active:outline active:outline-2 active:outline-active-outline disabled:bg-light-grey disabled:text-dark-grey disabled:outline-none',
    {
      'border-white bg-dark-violet text-white': variant === ButtonVariants.Primary,
      'border-dark-violet bg-white text-dark-violet hover:border-0 hover:text-white disabled:border-grey':
        variant === ButtonVariants.Outline,
      'w-32': !isLarge,
      'w-72': isLarge,
      'font-semibold': !notBold,
      'font-normal': notBold,
    },
  );
  return (
    <button className={variants} {...rest}>
      {children}
    </button>
  );
};

export default Button;
