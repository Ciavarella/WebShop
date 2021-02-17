export interface Item {
  id: Number,
  name: String,
  brand: String,
  price: String,
  picture: String,
  available: Boolean,
  weight: Number,
  options: Array<Options>
};

export interface Options {
  color: String | Array<String>,
  quantity: Number,
  storage?: Array<String>,
  power?: Array<Number>
};