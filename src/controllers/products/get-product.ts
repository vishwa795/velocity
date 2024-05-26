import { Product } from "@prisma/client";
import HttpStatusCodes from "../../constants/http-status-codes";
import prisma from "../../singletons/prisma";
import { ControllerReturnType } from "../../types/generic";
import { GetProductArgs } from "./types";

export default async function getProduct({
  id,
}: GetProductArgs): Promise<ControllerReturnType<Product>> {
  try {
    const product = await prisma.product.findUniqueOrThrow({
      where: { id },
      include: {
        supplier: true,
      },
    });
    if (product.archive) {
      throw new Error();
    }

    return { status: 200, success: true, data: product };
  } catch (e) {
    console.log("ERROR =====> getProduct", e);
    return {
      status: HttpStatusCodes.NOT_FOUND,
      success: false,
      error: {
        code: "FAIL",
        type: "GET_FAILURE",
        message: `Failed to Get Product. ${e.message}`,
      },
    };
  }
}
