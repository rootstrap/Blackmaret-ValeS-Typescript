interface LinkProps {
  text: string;
  url: string;
}

const Link = ({ text, url }: LinkProps) => {
  return (
    <a
      href={url}
      className={
        'font-semibold text-links disabled:text-dark-grey hover:underline focus:outline-focus focus:outline-dashed active:text-active active:outline-none'
      }
    >
      {text}
    </a>
  );
};

export default Link;
