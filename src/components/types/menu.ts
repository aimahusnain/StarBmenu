export type Size = {
  size: string;
  calories: number;
  price: string;
  size2: string;
};

export type Product = {
  name: string;
  image: string;
  link: string;
  sizes?: Size[];
  size?: string;
  calories?: number;
  price?: string;
};

export type SubItem = { 
  category: string; 
  products: Product[] 
};

export type Item = {
  name: string;
  image: string;
  link: string;
  subItems: SubItem[];
};

export type Category = {
  category: string;
  items: Item[];
  totalItems: number;
  subItems: SubItem[];
};

