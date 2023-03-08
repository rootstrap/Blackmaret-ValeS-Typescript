import Logo from '../shared/Icons/logo';
import InputField from '../shared/InputFields';

const SignUpForm = () => {
  return (
    <div className='flex-col box-content items-center h-[34.75rem] w-[22.5rem] bg-indigo border-4m flex bg-white rounded-lg mt-16 ml-[7.438rem]'>
      <Logo className='h-[1.875rem] w-[10.813rem] mt-12' />
      <InputField text='Email' placeholder='Type your email' variant='simple' required={false} />
      <InputField
        text='Full Name'
        placeholder='Type your full name'
        variant='simple'
        required={false}
      />
      <InputField
        text='Password'
        placeholder='Type your password'
        variant='password'
        required={false}
      />
    </div>
  );
};

export default SignUpForm;
