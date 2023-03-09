import classnames from 'classnames';

export enum ButtonLargeVariants {
  Primary = 'primary',
  Outline = 'outline',
}

interface ButtonLargeProps {
  variant: string;
  text: string;
  hasIcon: boolean;
  disabled?: boolean;
  onClick: () => unknown;
}

const ButtonLarge = ({ variant, text, hasIcon, onClick, disabled }: ButtonLargeProps) => {
  const variants = classnames(
    'rounded-lg w-72 h-11 border font-semibold disabled:bg-light-grey disabled:text-dark-grey disabled:outline-none active:text-white focus:outline-focus focus:outline-dashed active:bg-active active:outline-active-outline active:outline active:outline-2',
    {
      'bg-dark-violet text-white hover:bg-hover': variant === ButtonLargeVariants.Primary,
      'bg-white border-dark-violet text-dark-violet hover:bg-hover hover:border-0 hover:text-white disabled:border-grey':
        variant === ButtonLargeVariants.Outline,
    },
  );
  return (
    <>
      <button className={variants} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </>
  );
};

export default ButtonLarge;
