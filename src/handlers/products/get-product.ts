import { NextFunction, Response } from "express";
import { GetProductArgs } from "../../controllers/products/types";
import { IReq } from "../../routes/types/types";
import getProduct from "../../controllers/products/get-product";

export default async function getProductHandler(
  req: IReq<GetProductArgs>,
  res: Response,
  next: NextFunction
) {
  try {
    const productArgs = req.body;
    const { status, success, data, error } = await getProduct(productArgs);
    res.status(status).json({ success, data, error });
  } catch (error) {
    console.error("ERROR ======> getProductHandler", error);
    next(error);
  }
}
