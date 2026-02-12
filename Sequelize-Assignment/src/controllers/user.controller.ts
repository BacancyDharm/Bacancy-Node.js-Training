import type { Request, Response } from "express";
import { createUserService } from "../services/createUserService";

export const createUserController = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body);

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        });
    } catch (error: any) {
        return res.status(400).json({
            success: false, 
            message: error.message
        })
    }
};

