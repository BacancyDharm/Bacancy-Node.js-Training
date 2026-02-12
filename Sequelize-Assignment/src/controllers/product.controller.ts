import { Request, Response } from "express";
import { createProductService } from "../services/createProductService";


export const createProductController = async (req: Request, res: Response) => {
    try {
        const product = await createProductService(req.body);

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product
        });
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

