import { Product } from "@prisma/client";
import HttpStatusCodes from "../../constants/http-status-codes";
import prisma from "../../singletons/prisma";
import { ControllerReturnType } from "../../types/generic";
import { UpdateProductArgs } from "./types";

export default async function updateProduct({
  id,
  name,
  price,
  stk_qty,
  supplier_id,
  images,
}: UpdateProductArgs): Promise<ControllerReturnType<Product>> {
  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name,
        price,
        stk_qty,
        supplier_id,
        images,
      },
    });
    return { status: 200, success: true, data: updatedProduct };
  } catch (e) {
    console.log("ERROR =====> updateProduct", e);
    return {
      status: HttpStatusCodes.BAD_REQUEST,
      success: false,
      error: {
        code: "FAIL",
        type: "UPDATE_FAILURE",
        message: `Failed to update Product. ${e.message}`,
      },
    };
  }
}
