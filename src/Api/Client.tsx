import MockData from '../Mockdata/Mockdata.json';
import { Item } from './types';
const mockData: Array<Item> = MockData.items

const getAllItems = async (): Promise <Array<Item>> =>
new Promise<Array<Item>>((resolve) => {
  setTimeout(() => resolve(mockData), 1500);
});

const getItemById = async (id: Number): Promise<Item> =>
new Promise<Item>((resolve, reject) => {
  const res: Item | undefined = mockData.find(obj => obj.id === id);
  setTimeout(() => res ? resolve(res) : reject('Could not find product'), 1500);
});

const addItemToCart = async (amount: number, extra: any, id: Number) => {
  const item = mockData.filter(e => e.id === id);
  return new Promise((resolve) => {
    setTimeout(() => resolve(item), 1500); 
  });
};

const getCartDetails = async (cart: any): Promise<Array<[]>> => {
  let result: Array<Item> = [];
  for (let i = 0; i < cart.length; i++) {
    const obj = mockData.filter(el => el.id === cart[i].id);
    result.push(obj[0]);
  };
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => resolve(result), 1500);
  });
}

export { getAllItems, getItemById, addItemToCart, getCartDetails }
