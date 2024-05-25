import { NextFunction, Response } from "express";
import { CreateProductArgs } from "../../controllers/products/types";
import { IReq } from "../../routes/types/types";
import createProduct from "../../controllers/products/create-products";

export default async function createProductHandler(
  req: IReq<CreateProductArgs>,
  res: Response,
  next: NextFunction
) {
  try {
    const productArgs = req.body;
    const { status, success, data, error } = await createProduct(productArgs);
    res.status(status).json({ success, data, error });
  } catch (error) {
    console.error("ERROR ======> createProductHandler", error);
    next(error);
  }
}
