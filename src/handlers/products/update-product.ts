import { NextFunction, Response } from "express";
import { UpdateProductArgs } from "../../controllers/products/types";
import { IReq } from "../../routes/types/types";
import updateProduct from "../../controllers/products/update-product";

export default async function updateProductHandler(
  req: IReq<UpdateProductArgs>,
  res: Response,
  next: NextFunction
) {
  try {
    const productArgs = req.body;
    const { status, success, data, error } = await updateProduct(productArgs);
    res.status(status).json({ success, data, error });
  } catch (error) {
    console.error("ERROR ======> updateProductHandler", error);
    next(error);
  }
}
