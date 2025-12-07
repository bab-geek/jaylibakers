export interface Cake {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CartItem extends Cake {
  quantity: number;
}