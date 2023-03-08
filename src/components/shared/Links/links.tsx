import classnames from 'classnames';

interface ButtonLargeProps {
  variant: string;
  text: string;
  url: string;
}

// add enum

const Link = ({ variant, text, url }: ButtonLargeProps) => {
  const variants = classnames('', {
    'text-color-link': variant === 'default',
    'text-color-dark-grey': variant === 'disabled',
  });
  return (
    <a href={url} className={variants}>
      {text}
    </a>
  );
};

export default Link;
