import express from "express";
import { addProduct, deleteProduct, myProduct, productDescription, searchProduct, updateProduct } from "../controller/product.controller.js";

const router = express.Router();

//adding product
router.post("/addProduct",addProduct);

//search product
router.get("/search/:title",searchProduct);

//delete product
router.post("/delete",deleteProduct);

//update Product
router.post("/update",updateProduct);

//user's own product
router.post("/myProduct",myProduct);

//view product description
router.post("/productDescription",productDescription);


export default router;