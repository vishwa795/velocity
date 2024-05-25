import { NextFunction, Response } from "express";
import { DeletedProductArgs } from "../../controllers/products/types";
import { IReq } from "../../routes/types/types";
import deleteProduct from "../../controllers/products/delete-product";

export default async function deleteProductHandler(
  req: IReq<DeletedProductArgs>,
  res: Response,
  next: NextFunction
) {
  try {
    const productArgs = req.body;
    const { status, success, data, error } = await deleteProduct(productArgs);
    res.status(status).json({ success, data, error });
  } catch (error) {
    console.error("ERROR ======> deleteProductHandler", error);
    next(error);
  }
}
