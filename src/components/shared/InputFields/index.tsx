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
    <div className='flex flex-col'>
      <label className='mt-3'>{text}</label>
      <div className='flex justify-end content-center'>
        {variant === 'password' ? (
          <>
            <input className={variants} type='password' placeholder={placeholder} />
            <VisibilityOff className={'text-full-black absolute mt-3 mr-3'} />
          </>
        ) : (
          <input className={variants} type='text' placeholder={placeholder} />
        )}
      </div>
    </div>
  );
};

export default InputField;
