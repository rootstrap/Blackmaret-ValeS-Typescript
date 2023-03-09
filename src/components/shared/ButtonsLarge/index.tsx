import classnames from 'classnames';

export enum ButtonLargeVariants {
  Primary = 'primary',
  Outline = 'outline',
  PrimaryDisabled = 'primary-disabled',
  OutlineDisabled = 'outline-disabled',
}

interface ButtonLargeProps {
  variant: string;
  text: string;
  hasIcon: boolean;
  onClick: () => unknown;
}

const ButtonLarge = ({ variant, text, hasIcon, onClick }: ButtonLargeProps) => {
  const variants = classnames('rounded-lg w-72 h-11 border font-semibold', {
    'bg-dark-violet text-white hover:bg-hover focus:outline-focus focus:outline-dashed active:bg-active active:text-white active:outline-active-outline active:outline active:outline-2':
      variant === ButtonLargeVariants.Primary,
    'bg-white border-dark-violet text-dark-violet hover:bg-hover hover:border-0 hover:text-white focus:outline-focus focus:outline-dashed active:bg-active active:text-white active:outline-active-outline active:outline active:outline-2':
      variant === ButtonLargeVariants.Outline,
    'bg-light-grey text-dark-grey': variant === ButtonLargeVariants.PrimaryDisabled,
    'bg-light-grey border-grey text-dark-grey': variant === ButtonLargeVariants.OutlineDisabled,
  });
  return (
    <>
      <button className={variants} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default ButtonLarge;
