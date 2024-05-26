import { NextFunction, Response, Request } from "express";
import { GetProductArgs } from "../../controllers/products/types";
import { IReq } from "../../routes/types/types";
import getProduct from "../../controllers/products/get-product";

export default async function getProductHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const { status, success, data, error } = await getProduct({
      id: parseInt(id as string),
    });
    res.status(status).json({ success, data, error });
  } catch (error) {
    console.error("ERROR ======> getProductHandler", error);
    next(error);
  }
}
