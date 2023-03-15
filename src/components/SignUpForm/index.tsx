import ButtonLarge, { ButtonLargeVariants } from 'components/shared/ButtonsLarge';
import Logo from 'components/shared/Icons/logo';
import InputField, { InputVariants } from 'components/shared/InputFields';
import Link from 'components/shared/Links/links';

const SignUpForm = () => {
  return (
    <div className='flex-col box-content items-center h-[34.7rem] w-[22.5rem] bg-indigo border-4m flex bg-white rounded-lg mt-16 ml-28'>
      <Logo className='h-7 w-44 mt-12 mb-9' />
      <InputField
        text='Email'
        placeholder='Type your email'
        variant={InputVariants.Simple}
        required={true}
      />
      <InputField
        text='Full Name'
        placeholder='Type your full name'
        variant={InputVariants.Simple}
      />
      <InputField text='Password' placeholder='Type your password' variant={InputVariants.Simple} />
      <div className='mt-3'>
        <ButtonLarge variant={ButtonLargeVariants.Primary} disabled>
          Sign Up
        </ButtonLarge>
      </div>
      <div className='flex flex-col items-center'>
        <div>
          <p className='text-center ml-8 mr-8 mt-5 mb-5'>
            By signing up, you accept the {<Link url='asd' text='Data Policy' />} and the{' '}
            {<Link url='asd' text='Cookies Policy' />}
          </p>
        </div>
        <p>Already have an account? {<Link url='asd' text='Log in' />}</p>
      </div>
    </div>
  );
};

export default SignUpForm;
