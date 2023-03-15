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
    'rounded-lg w-72 h-11 border font-semibold hover:bg-hover disabled:bg-light-grey disabled:text-dark-grey disabled:outline-none active:text-white focus:outline-focus focus:outline-dashed active:bg-active active:outline-active-outline active:outline active:outline-2',
    {
      'bg-dark-violet text-white ': variant === ButtonLargeVariants.Primary,
      'bg-white border-dark-violet text-dark-violet hover:border-0 hover:text-white disabled:border-grey':
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
