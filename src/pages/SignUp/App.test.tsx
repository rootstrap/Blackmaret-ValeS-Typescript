import { render, screen } from '@testing-library/react';
import App from 'App';

test('renders sign up form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign Up/i);
  expect(linkElement).toBeInTheDocument();
});
