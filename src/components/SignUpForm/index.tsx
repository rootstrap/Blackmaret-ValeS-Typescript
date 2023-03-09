import ButtonLarge from '../shared/ButtonsLarge';
import Logo from '../shared/Icons/logo';
import InputField from '../shared/InputFields';
import Link from '../shared/Links/links';

const SignUpForm = () => {
  return (
    <div className='flex-col box-content items-center h-[34.75rem] w-[22.5rem] bg-indigo border-4m flex bg-white rounded-lg mt-16 ml-[7.438rem]'>
      <Logo className='h-[1.875rem] w-[10.813rem] mt-12 mb-9' />
      <InputField text='Email' placeholder='Type your email' variant='simple' required={true} />
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
      <div className='mt-3'>
        <ButtonLarge variant='primary' text='Sign Up' hasIcon={false} onClick={() => 'hello'} />
      </div>
      <div className='flex flex-col items-center'>
        <div>
          <p className='text-center ml-8 mr-8 mt-5 mb-5'>
            By signing up, you accept the {<Link url='asd' text='Data Policy ' variant='default' />}
            and the
            {<Link url='asd' text=' Cookies Policy.' variant='default' />}
          </p>
        </div>
        <p>Already have an account? {<Link url='asd' text='Log in' variant='default' />}</p>
      </div>
    </div>
  );
};

export default SignUpForm;
