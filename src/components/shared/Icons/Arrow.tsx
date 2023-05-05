interface iconProps {
  className: string;
}

const Arrow = ({ className }: iconProps) => (
  <svg
    className={className}
    width='14'
    height='8'
    viewBox='0 0 14 8'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6.99999 7.7126L13.01 1.7026L11.597 0.287598L6.99999 4.8876L2.40399 0.287598L0.98999 1.7016L6.99999 7.7126Z'
      fill='currentColor'
    />
  </svg>
);

export default Arrow;
