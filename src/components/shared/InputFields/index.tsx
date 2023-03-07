import classnames from 'classnames';
import VisibilityOff from '../Icons/visibility_off';

interface InputProps {
  variant: string; // ["simple", "error", "password", "disabled"]
  text: string;
  placeholder: string;
  required: boolean;
}

// add enum

const InputField = ({ variant, text, required, placeholder }: InputProps) => {
  const variants = classnames('w-72 h-11 rounded-lg border', {
    'border-dark-violet': variant === 'simple',
    'border-error': variant === 'error',
    'border-dark-violet ': variant === 'password',
    'border-dark-grey': variant === 'disabled',
  });
  return (
    <div className=''>
      <label className={variants}>{text}</label>
      <input type='text' />
    </div>
  );
};

export default InputField;

// <InputField ofType='default' label='' required enabled error='false' />

/*
import styles from "./index.module.scss";
import classnames from "classnames";

const Button = ({ name, text, type, variant = "default", onClick }) => {
  const variants = classnames({
    [styles.smallButton]: variant === "small",
    [styles.smallLinkText]: variant === "smallLink",
    [styles.mediumButton]: variant === "medium",
    [styles.largeButton]: variant === "default",
    [styles.mediumLinkText]: variant === "mediumLink",
    [styles.mediumLinkTextBlue]: variant === "mediumLinkBlue",
  });
  return (
    <button name={name} className={variants} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

*/
