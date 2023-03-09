import { useState } from 'react';
import classnames from 'classnames';
import VisibilityOff from '../Icons/visibility_off';
import Visibility from '../Icons/visibility';

export enum InputVariants {
  Simple = 'simple',
  Error = 'error',
  Password = 'password',
}

interface InputProps {
  variant: string;
  text: string;
  placeholder: string;
  required: boolean;
  disabled?: boolean;
}

const InputField = ({ variant, text, required, placeholder, disabled }: InputProps) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const variants = classnames(
    'w-72 h-11 rounded-lg border p-3 focus:outline-focus focus:outline-dashed disabled:border-dark-grey disabled:background-background active:outline-active-outline active:outline active:outline-1 hover:border-hover',
    {
      'border-dark-violet': variant === InputVariants.Simple,
      'border-error': variant === InputVariants.Error,
      'border-dark-violet ': variant === InputVariants.Password,
    },
  );
  return (
    <div className='flex flex-col'>
      <label className='mt-3'> {required ? text + ' *' : text}</label>
      <div className='flex justify-end content-center'>
        {variant === 'password' ? (
          <>
            <input
              className={variants}
              type={passwordShown ? 'text' : 'password'}
              placeholder={placeholder}
              disabled={disabled}
            />
            <button
              className='w-[22px] h-[15px] absolute mt-4 mr-3'
              onClick={togglePasswordVisibility}
            >
              {passwordShown ? (
                <Visibility className={'text-full-black'} />
              ) : (
                <VisibilityOff className={'text-full-black'} />
              )}
            </button>
          </>
        ) : (
          <input className={variants} type='text' placeholder={placeholder} disabled={disabled} />
        )}
      </div>
    </div>
  );
};

export default InputField;
