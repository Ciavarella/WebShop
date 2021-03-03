import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from './Header'

it('Should contain Home', () => {
  render(<MemoryRouter><Header /></MemoryRouter>);
  expect(screen.getByText('Home')).toBeInTheDocument();
});

it('Checkout', () => {
  render(<MemoryRouter><Header /></MemoryRouter>);
  expect(screen.getByText('Checkout')).toBeInTheDocument();
});