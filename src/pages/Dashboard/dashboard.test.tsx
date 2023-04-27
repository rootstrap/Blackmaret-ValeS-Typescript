import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch } from 'react-redux';
import Dashboard from './dashboard';
import { revokeCredentials } from 'store/auth.reducer';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

jest.mock('store/auth.reducer', () => ({
  revokeCredentials: jest.fn(),
}));

jest.mock('services/blackMarketApi', () => ({
  useLogOutMutation: jest.fn(() => [jest.fn()]),
}));

describe('Dashboard', () => {
  it('renders the logout button', () => {
    render(<Dashboard />);
    const logoutButton = screen.getByRole('button', { name: /log out/i });
    expect(logoutButton).toBeInTheDocument();
  });

  it('calls handleLogout when the logout button is clicked', () => {
    const dispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);

    render(<Dashboard />);
    const logoutButton = screen.getByRole('button', { name: /log out/i });

    userEvent.click(logoutButton);

    expect(revokeCredentials).toHaveBeenCalled();
  });
});
