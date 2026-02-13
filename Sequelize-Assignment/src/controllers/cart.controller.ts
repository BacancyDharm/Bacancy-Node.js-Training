import type { Request, Response } from "express";
import { addToCartService, getCartService } from "../services/cart.service";

interface UserReq extends Request{
    user: {id: number}
}

export const getCartController = async (req: Request, res: Response) => {
    try {
        const userId = (req as UserReq).user.id;
        const cart = await getCartService(Number(userId));

        return res.status(200).json({success: true, message: "Cart fetched successfully", data: cart});
    }catch(error: any){
        return res.status(400).json({success: false, message: error.message});
    }
};

export const addToCartController = async (req: Request, res: Response) => {
    try {
        const userId = (req as UserReq).user.id;
        const productId = req.params.productId;

        const cart = await addToCartService(Number(userId), Number(productId), 1);

        return res.status(200).json({success: true, message: "Product added to cart", data: cart});
    } catch (error:any) {
        return res.status(400).json({success: false, message: error.message});
    }
};

export const removeFromCartController = async (req: Request, res: Response) => {};