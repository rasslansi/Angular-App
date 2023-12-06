import {Product} from "./Produit";

export interface ProductResponse {
  products: Product[];
  total: number;
  skip?: number;
  limit?: number;
}
