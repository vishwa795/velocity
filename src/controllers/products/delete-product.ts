import { Product } from "@prisma/client";
import HttpStatusCodes from "../../constants/http-status-codes";
import prisma from "../../singletons/prisma";
import { ControllerReturnType } from "../../types/generic";
import { DeletedProductArgs } from "./types";

export default async function deleteProduct({
  id,
}: DeletedProductArgs): Promise<ControllerReturnType<undefined>> {
  try {
    await prisma.product.update({
      where: { id },
      data: {
        archive: true,
      },
    });
    return { status: 200, success: true };
  } catch (e) {
    console.log("ERROR =====> deleteProduct", e);
    return {
      status: HttpStatusCodes.BAD_REQUEST,
      success: false,
      error: {
        code: "FAIL",
        type: "DELETE_FAILURE",
        message: `Failed to Delete Product. ${e.message}`,
      },
    };
  }
}
