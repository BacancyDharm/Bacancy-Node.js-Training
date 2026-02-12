import { Router } from "express";
import { createProductController } from "../controllers/product.controller";

const route = Router();

route.post("/", createProductController);

export default route;