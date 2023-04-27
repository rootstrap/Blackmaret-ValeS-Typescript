import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from 'components/SignUpForm';
import { BrowserRouter } from 'react-router-dom';
import { useCreateUserMutation } from 'services/blackMarketApi';

jest.mock('services/blackMarketApi', () => ({
  useCreateUserMutation: jest.fn(),
}));

describe('SignUpForm', () => {
  beforeEach(() => {
    (useCreateUserMutation as jest.Mock).mockReturnValue([jest.fn(), { isSuccess: false }]);
  });

  test('renders the SignUpForm component', () => {
    render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>,
    );
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Repeat your password')).toBeInTheDocument();
  });

  test('disables the Sign Up button when form is not filled', () => {
    render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>,
    );
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeDisabled();
  });

  test('disables the Sign Up button when not all the fields are filled', async () => {
    render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>,
    );
    userEvent.type(screen.getByPlaceholderText('Type your email'), 'test@example.com');
    userEvent.type(screen.getByPlaceholderText('Type your password'), 'password123');

    await waitFor(() => expect(screen.getByRole('button', { name: 'Sign Up' })).toBeDisabled());
  });

  test('enables the Sign Up button when form is filled', async () => {
    render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>,
    );
    userEvent.type(screen.getByPlaceholderText('Type your email'), 'test@example.com');
    userEvent.type(screen.getByPlaceholderText('Type your password'), 'password123');
    userEvent.type(screen.getByPlaceholderText('Repeat your password'), 'password123');

    await waitFor(() => expect(screen.getByRole('button', { name: 'Sign Up' })).toBeEnabled());
  });

  test('handles successful registration', async () => {
    const createUser = jest.fn();
    (useCreateUserMutation as jest.Mock).mockReturnValue([createUser, { isSuccess: false }]);

    render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>,
    );

    await userEvent.type(screen.getByPlaceholderText('Type your email'), 'test@example.com');
    await userEvent.type(screen.getByPlaceholderText('Type your password'), 'password123');
    await userEvent.type(screen.getByPlaceholderText('Repeat your password'), 'password123');

    (useCreateUserMutation as jest.Mock).mockReturnValue([createUser, { isSuccess: true }]);
    userEvent.click(screen.getByRole('button', { name: 'Sign Up' }));

    await screen.findByText('Confirmation email sent.');
  });
});
