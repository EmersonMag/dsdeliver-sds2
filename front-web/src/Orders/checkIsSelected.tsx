import { OrderPayload, Product } from "./types";

export const checkIsSelected = (
  selectedProducts: Product[],
  product: Product
) => {
  return selectedProducts.some(({ id }) => id === product.id);
};
