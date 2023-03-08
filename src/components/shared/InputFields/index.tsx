import { useState } from 'react';
import classnames from 'classnames';
import VisibilityOff from '../Icons/visibility_off';
import Visibility from '../Icons/visibility';

interface InputProps {
  variant: string; // ["simple", "error", "password", "disabled"]
  text: string;
  placeholder: string;
  required: boolean;
}

// add enum

const InputField = ({ variant, text, required, placeholder }: InputProps) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const variants = classnames('w-72 h-11 rounded-lg border p-3', {
    'border-dark-violet': variant === 'simple',
    'border-error': variant === 'error',
    'border-dark-violet ': variant === 'password',
    'border-dark-grey': variant === 'disabled',
  });
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
          <input className={variants} type='text' placeholder={placeholder} />
        )}
      </div>
    </div>
  );
};

export default InputField;
