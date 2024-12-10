
export interface BasketInterface {
  id: string;
  totalNet: number;
  totalGross: number;
  customerName: string;
  paysVAT: boolean;
  items: Item[];
}

export interface Item {
  name: string;
  price: string
}

