import { InputHTMLAttributes, useState } from 'react';
import classnames from 'classnames';
import VisibilityOff from 'components/shared/Icons/VisibilityOff';
import Visibility from 'components/shared/Icons/Visibility';

export enum InputVariants {
  Simple = 'simple',
  Error = 'error',
  Password = 'password',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariants;
  text: string;
  required?: boolean;
}

const InputField = ({ variant, text, required, ...rest }: InputProps) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordShown((prevState) => !prevState);
  };
  const variants = classnames(
    'h-11 w-72 rounded-lg border border-dark-violet p-3 hover:border-hover focus:outline-dashed focus:outline-focus active:outline active:outline-1 active:outline-active-outline disabled:border-dark-grey',
    {
      'border-error': variant === InputVariants.Error,
    },
  );
  return (
    <div className='flex flex-col'>
      <label className='mt-3'> {required ? text + ' *' : text}</label>
      <div className='flex content-center justify-end'>
        {variant === InputVariants.Password ? (
          <>
            <input className={variants} type={isPasswordShown ? 'text' : 'password'} {...rest} />
            <div className='absolute mt-4 mr-3 h-4 w-6' onClick={togglePasswordVisibility}>
              {isPasswordShown ? (
                <Visibility className={'text-full-black'} />
              ) : (
                <VisibilityOff className={'text-full-black'} />
              )}
            </div>
          </>
        ) : (
          <input className={variants} type='text' {...rest} />
        )}
      </div>
    </div>
  );
};

export default InputField;
