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

export { getAllItems, getItemById }
