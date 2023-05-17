export type ProductType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    name: string;
    categories: { id: number; name: string }[];
    product_picture: string;
    is_favorite: boolean;
    unit_price: string;
    state: string;
    state_display: string;
  }[];
};
