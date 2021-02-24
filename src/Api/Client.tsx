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

const getCart = async (): Promise<Array<[]>> =>
  new Promise<any>((resolve, reject) => {
    const res = [{
      id: 1,
      name: "someNameHere",
      extra: {
        color: 'red',
        storage: 256
      }
    }];
    setTimeout(() => resolve(res), 1500);
});

export { getAllItems, getItemById, addItemToCart, getCart }
