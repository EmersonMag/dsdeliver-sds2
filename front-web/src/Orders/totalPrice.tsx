import { Product } from "./types";

export const totalPrice = (selectedProducts: Product[]) =>
  selectedProducts.reduce((acc, { price }) => {
    return acc + price;
  }, 0);