import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from './Header'

describe('Header renders text', () => {
  test('Should contain Home', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
 
  test('Checkout', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    expect(screen.getByText('Checkout')).toBeInTheDocument();
  });
});
