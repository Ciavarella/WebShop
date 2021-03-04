import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import ListItem from './ListItem';

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

describe('Renders a ListItem', () => {
  test('ListItem contains price', () => {
    render(<MemoryRouter><ListItem item={data}/></MemoryRouter>);
    expect(screen.getByText('500:-')).toBeInTheDocument();
  });

  test('ListItem contains name', () => {
    render(<MemoryRouter><ListItem item={data}/></MemoryRouter>);
    expect(screen.getByText('Philips hue bulb')).toBeInTheDocument();
  });
});
