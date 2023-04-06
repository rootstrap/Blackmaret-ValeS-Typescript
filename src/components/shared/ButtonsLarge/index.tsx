import classnames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

export enum ButtonLargeVariants {
  Primary = 'primary',
  Outline = 'outline',
}

interface ButtonLargeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonLargeVariants;
  hasIcon?: boolean;
}

const ButtonLarge = ({ variant, children, hasIcon, ...rest }: ButtonLargeProps) => {
  const variants = classnames(
    'h-11 w-72 rounded-lg border font-semibold hover:bg-hover focus:outline-dashed focus:outline-focus active:bg-active active:text-white active:outline active:outline-2 active:outline-active-outline disabled:bg-light-grey disabled:text-dark-grey disabled:outline-none',
    {
      'bg-dark-violet text-white ': variant === ButtonLargeVariants.Primary,
      'border-dark-violet bg-white text-dark-violet hover:border-0 hover:text-white disabled:border-grey':
        variant === ButtonLargeVariants.Outline,
    },
  );
  return (
    <button className={variants} {...rest}>
      {children}
    </button>
  );
};

export default ButtonLarge;
