import { Request, Response } from "express";
import { createProductService, getAllProductsService, deleteProductService, getProductByIdService } from "../services/product.service";


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

export const getAllProductsController = async (req: Request, res: Response) => {
    try {
        const products = await getAllProductsService();

        return res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products
        });
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const getProductByIdController = async (req: Request, res: Response) => {
    try {
        const product = await getProductByIdService(Number(req.params.id));

        return res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: product
        })
    }catch(error: any){
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteProductController = async (req: Request, res: Response) => {
    try {
        const deletedRows = await deleteProductService(Number(req.params.id));
        console.log(req.params.id)

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: `${deletedRows} row(s) deleted`
        })
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const editProductController = async (req: Request, res: Response) => {} //ToDo

