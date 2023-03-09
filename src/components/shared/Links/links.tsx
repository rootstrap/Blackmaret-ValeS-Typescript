import classnames from 'classnames';

export enum ButtonVariants {
  Default = 'default',
  Disabled = 'disabled',
}

interface ButtonLargeProps {
  variant: string;
  text: string;
  url: string;
}

const Link = ({ variant, text, url }: ButtonLargeProps) => {
  const variants = classnames('font-semibold', {
    'text-links': variant === ButtonVariants.Default,
    'text-dark-grey': variant === ButtonVariants.Disabled,
  });
  return (
    <a href={url} className={variants}>
      {text}
    </a>
  );
};

export default Link;
