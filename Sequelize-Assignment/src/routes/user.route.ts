import { Router } from "express";
import {
  createUserController,
  userSignInController,
} from "../controllers/user.controller";
import authenticate from "../middleware/authenticate";
import type { Request, Response } from "express";
import route from "./product.route";

interface UserReq extends Request {
  user: {
    id: number;
  };
}

const router = Router();

router.post("/signup", createUserController);
router.post("/signin", userSignInController);
// router.post("/addToCart/:productId", authenticate, addToCartController);
// router.delete("/removeFromCart/:productId", authenticate, removeFromCartController);
// router.get("/cart", authenticate, getCartController);

export default router;
