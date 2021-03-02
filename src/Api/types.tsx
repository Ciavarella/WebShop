export interface Item {
  id: Number,
  name: string,
  brand: string,
  price: string,
  picture: string,
  available: Boolean,
  weight: Number,
  options: Array<Options>
};

export interface Options {
  color: string | Array<string>,
  quantity: Number,
  storage?: Array<string>,
  power?: Array<number>
};