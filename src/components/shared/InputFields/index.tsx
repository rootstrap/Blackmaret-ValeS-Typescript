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
