import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button, { ButtonSize, ButtonVariants } from 'components/shared/Buttons';
import Logo from 'components/shared/Icons/Logo';
import InputField, { InputVariants } from 'components/shared/InputFields';
import Link from 'components/shared/Links';
import { useLogInMutation } from 'services/blackMarketApi';
import Dashboard from 'pages/Dashboard/dashboard';
import { SIGNUP } from 'routes';
import { setCredentials } from 'store/auth.reducer';

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registerRequest, { isSuccess: signInSuccess }] = useLogInMutation();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  async function authenticateUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = {
      email: user.email,
      password: user.password,
    };
    try {
      const response = await registerRequest(body);
      if (response && 'data' in response && !('error' in response)) {
        const refreshToken = response.data.refresh_token;
        dispatch(setCredentials(response.data));
        localStorage.setItem('auth', JSON.stringify(response.data));
        if (refreshToken !== null) {
          localStorage.setItem('refresh_token', refreshToken); // save the refresh token to local storage
        }
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  if (signInSuccess) {
    return <Dashboard />;
  }
  return (
    <>
      <div className='mt-16 ml-28 box-content flex h-[26.5rem] w-[22.5rem] flex-col items-center rounded-lg bg-white'>
        <form onSubmit={authenticateUser}>
          <Logo className='ml-14 mt-12 mb-9 h-7 w-44' />
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
          <div className='mt-3'>
            <Button variant={ButtonVariants.Primary} size={ButtonSize.Large} type='submit'>
              Log in
            </Button>
          </div>
        </form>
        <p className='m-8 text-center'>{<Link url='asd' text='I forgot my password.' />}</p>
      </div>
      <div className='mt-5 ml-28 box-content flex h-32 w-[22.5rem] flex-col items-center rounded-lg bg-white'>
        <p className='mt-6 mb-4'> Don&apos;t have an account?</p>
        <Button
          variant={ButtonVariants.Outline}
          size={ButtonSize.Large}
          onClick={() => navigate(SIGNUP)}
        >
          Sign up
        </Button>
      </div>
    </>
  );
};

export default SignInForm;
