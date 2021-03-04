import { getByRole, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import ListView from './ListView';

const data = {
  "id": 1,
  "name": "Philips hue bulb",
  "brand": "Philips",
  "price": "500",
  "picture": "https://www.philips-hue.com/content/dam/hue/masters/products-overview/bulbs/hue-bulbs-4-3.jpg",
  "available": true,
  "weight": 0.2,
  "options": [
    {
    "color": "white",
    "power": [6.5, 9.5],
    "quantity": 3
    },
    {
    "color": "red",
    "power": [6.5, 9.5],
    "quantity": 7
    }
  ]
};

describe('ListView', () => {
  test('Renders container of listitems', () => {
    const { container } = render(<MemoryRouter><ListView/></MemoryRouter>);
    const parent = container.firstChild;
    expect(parent?.firstChild).toHaveClass('img-container');
  });


});
