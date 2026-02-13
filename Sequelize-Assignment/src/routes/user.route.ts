import { Router } from "express";
import {
  createUserController,
  userSignInController,
} from "../controllers/user.controller";
import authenticate from "../middleware/authenticate";
import {
  addToCartController,
  removeFromCartController,
  getCartController,
} from "../controllers/cart.controller";

const router = Router();

router.post("/signup", createUserController);
router.post("/signin", userSignInController);
router.post("/addToCart/:productId", authenticate, addToCartController);
router.delete(
  "/removeFromCart/:productId",
  authenticate,
  removeFromCartController,
);
router.get("/cart", authenticate, getCartController);

export default router;
