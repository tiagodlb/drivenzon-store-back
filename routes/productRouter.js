import { Router } from "express";

import { product, productid } from "../controllers/productController.js";

const productRouter = Router();

productRouter.get("/api/products", product);
productRouter.get("/api/products/:id", productid)

export default productRouter;