import { Product, Supplier } from "@prisma/client";

export type CreateProductArgs = Omit<
  Product,
  "archive" | "id" | "images" | "u_at" | "c_at" | "supplier_id"
> & {
  images?: string[];
  new_supplier?: Omit<Supplier, "id" | "u_at" | "c_at" | "archive">;
  supplier_id?: number;
};

export type UpdateProductArgs = Pick<Product, "id"> &
  Partial<CreateProductArgs>;

export type DeletedProductArgs = Pick<Product, "id">;

export type GetProductArgs = Pick<Product, "id">;
