import classnames from 'classnames';

interface ButtonLargeProps {
  variant: string; // ["primary", "outline"]
  text: string;
  hasIcon: boolean;
  onClick: () => unknown;
}

// add enum

const ButtonLarge = ({ variant, text, hasIcon, onClick }: ButtonLargeProps) => {
  const variants = classnames('rounded-lg w-72 h-11 border font-semibold', {
    'bg-dark-violet text-white': variant === 'primary',
    'bg-white border-dark-violet text-dark-violet': variant === 'outline',
    'bg-light-grey text-dark-grey': variant === 'primary-disabled',
    'bg-light-grey border-grey text-dark-grey': variant === 'outlined-disabled',
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
