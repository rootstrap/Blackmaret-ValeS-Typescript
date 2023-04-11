import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import SignUpForm from 'components/SignUpForm';
import { useCreateUserMutation } from 'services/blackMarketApi';

jest.mock('services/blackMarketApi', () => ({
  useCreateUserMutation: jest.fn(),
}));

describe('SignUpForm', () => {
  beforeEach(() => {
    (useCreateUserMutation as jest.Mock).mockReturnValue([jest.fn(), { isSuccess: false }]);
  });

  test('renders the SignUpForm component', () => {
    render(<SignUpForm />);
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  test('disables the Sign Up button when form is not filled', () => {
    render(<SignUpForm />);
    expect(screen.getByText('Sign Up')).toBeDisabled();
  });

  test('enables the Sign Up button when form is filled', async () => {
    render(<SignUpForm />);
    fireEvent.change(screen.getByPlaceholderText('Type your email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Type your password'), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByPlaceholderText('Repeat your password'), {
      target: { value: 'password123' },
    });

    await waitFor(() => expect(screen.getByText('Sign Up')).toBeEnabled());
  });

  test('handles successful registration', async () => {
    (useCreateUserMutation as jest.Mock).mockReturnValue([jest.fn(), { isSuccess: true }]);
    render(<SignUpForm />);
    expect(screen.getByText('Register successful')).toBeInTheDocument();
  });
});
