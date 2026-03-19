import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage headline', () => {
  render(<App />);
  const headingElement = screen.getByText(/Fast, trustworthy calculators for everyday decisions/i);
  expect(headingElement).toBeInTheDocument();
});
