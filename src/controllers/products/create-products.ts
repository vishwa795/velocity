import { Product } from "@prisma/client";
import HttpStatusCodes from "../../constants/http-status-codes";
import prisma from "../../singletons/prisma";
import { ControllerReturnType } from "../../types/generic";
import { CreateProductArgs } from "./types";

export default async function createProduct({
  name,
  price,
  stk_qty,
  supplier_id,
  images,
  new_supplier,
}: CreateProductArgs): Promise<ControllerReturnType<Product>> {
  try {
    if (supplier_id && new_supplier) {
      throw new Error(
        "Cannot provide an existing supplier as well as new Supplier to be created."
      );
    }

    const createdProduct = await prisma.product.create({
      data: {
        name,
        price,
        stk_qty,
        images,
        supplier: new_supplier
          ? {
              create: {
                name: new_supplier.name,
                email: new_supplier.email,
                mobile: new_supplier.mobile,
              },
            }
          : {
              connect: {
                id: supplier_id,
              },
            },
      },
    });
    return { status: 200, success: true, data: createdProduct };
  } catch (e) {
    console.log("ERROR =====> createProduct", e);
    return {
      status: HttpStatusCodes.BAD_REQUEST,
      success: false,
      error: {
        code: "FAIL",
        type: "CREATE_FAILURE",
        message: `Failed to Create a new Product. ${e.message}`,
      },
    };
  }
}
