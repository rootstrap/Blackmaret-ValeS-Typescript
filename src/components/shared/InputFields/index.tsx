import React, { FC } from 'react';
import classnames from 'classnames';

interface InputProps {
  variant: Array<string>;
  text: string;
  required: boolean;
  enabled: boolean;
  error: boolean;
}

const InputField: FC<InputProps> = ({}) => {
  return (
    <>
      <label className=''>{text}</label>
      <input type='text'> </input>
    </>
  );
};
*/
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
