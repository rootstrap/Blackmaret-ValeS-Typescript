import ButtonLarge, { ButtonLargeVariants } from 'components/shared/ButtonsLarge';
import Logo from 'components/shared/Icons/Logo';
import InputField, { InputVariants } from 'components/shared/InputFields';
import Link from 'components/shared/Links/links';
import { ChangeEvent, useState, useEffect } from 'react';
import { usePostRegistrationMutation } from 'services/blackMarketApi';

const SignUpForm = () => {
  const [registerRequest, { isSuccess: registerSuccess }] = usePostRegistrationMutation();

  const [user, setUser] = useState({
    email: '',
    password: '',
    confPassword: '',
  });

  const [formFilled, setFormFilled] = useState(false);

  useEffect(() => {
    setFormFilled(user.email !== '' && user.password !== '' && user.confPassword !== '');
  }, [user]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  async function createUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = {
      email: user.email,
      password1: user.password,
      password2: user.confPassword,
    };
    registerRequest(body);
  }

  if (registerSuccess) {
    return <p>Register successful</p>;
  }

  return (
    <div className='mt-16 ml-28 box-content flex h-[34.7rem] w-[22.5rem] flex-col items-center rounded-lg bg-white'>
      <form onSubmit={createUser}>
        <Logo className='mt-12 mb-9 h-7 w-44' />
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
          variant={InputVariants.Password}
          value={user.password}
          onChange={handleChange}
          type='password'
          name='password'
        />
        <InputField
          text='Confirm Password'
          placeholder='Repeat your password'
          variant={InputVariants.Password}
          value={user.confPassword}
          onChange={handleChange}
          type='password'
          name='confPassword'
        />
        <div className='mt-3'>
          <ButtonLarge variant={ButtonLargeVariants.Primary} disabled={!formFilled} type='submit'>
            Sign Up
          </ButtonLarge>
        </div>
      </form>
      <div className='flex flex-col items-center'>
        <div>
          <p className='mx-8 my-5 text-center'>
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
