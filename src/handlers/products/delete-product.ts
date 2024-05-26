import { NextFunction, Response, Request } from "express";
import deleteProduct from "../../controllers/products/delete-product";

export default async function deleteProductHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const { status, success, data, error } = await deleteProduct({
      id: parseInt(id as string),
    });
    res.status(status).json({ success, data, error });
  } catch (error) {
    console.error("ERROR ======> deleteProductHandler", error);
    next(error);
  }
}
