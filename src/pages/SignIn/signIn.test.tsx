import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SignInForm from 'components/SignInForm';
import { useLogInMutation } from 'services/blackMarketApi';
import { setupStore } from 'store';
import '@testing-library/jest-dom';

jest.mock('services/blackMarketApi', () => {
  const originalModule = jest.requireActual('services/blackMarketApi');
  return {
    ...originalModule,
    useLogInMutation: jest.fn(),
  };
});

const customRender = () => {
  const store = setupStore();
  (useLogInMutation as jest.Mock).mockReturnValue([jest.fn(), { isSuccess: false }]);
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <SignInForm />
      </BrowserRouter>
    </Provider>,
  );
};

describe('SignInForm', () => {
  test('renders the SignInForm component', () => {
    customRender();
    const emailInput = screen.getByPlaceholderText('Type your email');
    const passwordInput = screen.getByPlaceholderText('Type your password');
    const submitButton = screen.getByRole('button', { name: 'Log in' });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('fills out the form and submits', async () => {
    customRender();
    const emailInput = screen.getByPlaceholderText('Type your email');
    const passwordInput = screen.getByPlaceholderText('Type your password');
    const submitButton = screen.getByRole('button', { name: 'Log in' });

    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'password123');
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(useLogInMutation).toHaveBeenCalled();
    });
  });

  test('navigates to the forgot password link', () => {
    customRender();
    const forgotPasswordLink = screen.getByText('I forgot my password.');
    userEvent.click(forgotPasswordLink);
    expect(forgotPasswordLink).toHaveAttribute('href', 'asd');
  });

  test('navigates to the sign up page', () => {
    customRender();
    const signUpLink = screen.getByText('Sign up');
    userEvent.click(signUpLink);
    expect(screen.getByRole('link', { name: 'Sign up' })).toHaveAttribute('href', '/signup');
  });
});
