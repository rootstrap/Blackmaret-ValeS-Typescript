interface LinkProps {
  text: string;
  url: string;
}

const Link = ({ text, url }: LinkProps) => {
  return (
    <a
      href={url}
      className={
        'font-semibold text-links hover:underline focus:outline-dashed focus:outline-focus active:text-active active:outline-none disabled:text-dark-grey'
      }
    >
      {text}
    </a>
  );
};

export default Link;
