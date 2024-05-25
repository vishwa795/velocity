import express from "express";
import getProductHandler from "../handlers/products/get-product";
import createProductHandler from "../handlers/products/create-product";
import deleteProductHandler from "../handlers/products/delete-product";
import updateProductHandler from "../handlers/products/update-product";

const productsRouter = express.Router();

productsRouter.get("/:id", getProductHandler);
productsRouter.post("/", createProductHandler);
productsRouter.delete("/:id", deleteProductHandler);
productsRouter.patch("/:id", updateProductHandler);

export default productsRouter;
