import ButtonLarge, { ButtonLargeVariants } from 'components/shared/ButtonsLarge';
import Logo from 'components/shared/Icons/Logo';
import InputField, { InputVariants } from 'components/shared/InputFields';
import Link from 'components/shared/Links/links';
import { ChangeEvent, useState } from 'react';
import { usePostRegistrationMutation } from 'services/blackMarketApi';

const SignUpForm = () => {
  const [registerRequest, { isSuccess: registerSuccess }] = usePostRegistrationMutation();

  const [user, setUser] = useState({
    email: '',
    password: '',
    confPassword: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  async function createUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = {
      user: {
        email: user.email,
        password1: user.password,
        password2: user.confPassword,
      },
    };
    registerRequest(body);
  }
  if (registerSuccess) {
    return <p>Register successful</p>;
  }
  return (
    <div className='flex-col box-content items-center h-[34.7rem] w-[22.5rem] bg-indigo border-4m flex bg-white rounded-lg mt-16 ml-28'>
      <form onSubmit={createUser}>
        <Logo className='h-7 w-44 mt-12 mb-9' />
        <InputField
          text='Email'
          placeholder='Type your email'
          variant={InputVariants.Simple}
          value={user.email}
          onChange={handleChange}
          name='email'
        />
        <InputField
          text='Password'
          placeholder='Type your password'
          variant={InputVariants.Simple}
          value={user.password}
          onChange={handleChange}
          name='password'
        />
        <InputField
          text='Confirm Password'
          placeholder='Repeat your password'
          variant={InputVariants.Simple}
          value={user.confPassword}
          onChange={handleChange}
          name='confPassword'
        />
        <div className='mt-3'>
          <ButtonLarge variant={ButtonLargeVariants.Primary} disabled>
            Sign Up
          </ButtonLarge>
        </div>
      </form>
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
