import { Router } from "express";
import { createProductController, deleteProductController,editProductController,getAllProductsController, getProductByIdController} from "../controllers/product.controller";

const route = Router();

route.post("/createProduct", createProductController);
route.delete("/deleteProduct/:id", deleteProductController);
route.patch("/editProduct/:id", editProductController); //Todo
route.get('/getAllProducts', getAllProductsController);
route.get('/getProduct/:id', getProductByIdController);

export default route;