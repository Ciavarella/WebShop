import MockData from '../Mockdata/Mockdata.json';
import { Item } from './types';
const mockData: Array<Item> = MockData.items

const getAllItems = async (): Promise <Array<Item>> =>
  new Promise<Array<Item>>((resolve) => {
  setTimeout(() => resolve(mockData), 2000);
});


export { getAllItems }