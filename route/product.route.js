import express from "express";
import { productList, addProduct, recentProduct, deleteProduct, myProduct, productDescription, updateProduct, getProductByName, ListOfProduct } from "../controller/product.controller.js";

const router = express.Router();

//listing product
router.get("/list", productList);

//all product
router.post("/listOfProduct",ListOfProduct)

//limited product list
router.get("/recent-product", recentProduct);

//adding product
router.post("/addProduct", addProduct);

//search product by category
router.post("/searchCategory", getProductByName);

//delete product
router.post("/delete", deleteProduct);

//update Product
router.post("/update", updateProduct);

//user's own product
router.post("/myProduct", myProduct);

//view product description
router.post("/productDescription", productDescription);

export default router;