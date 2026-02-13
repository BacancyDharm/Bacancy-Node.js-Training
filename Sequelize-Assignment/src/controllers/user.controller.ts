import type { Request, Response } from "express";
import { createUser, editUser, deleteUser, userSignIn } from "../services/user.service";
import jwt from "jsonwebtoken";

interface UserReq extends Request{
    user: {
        id: number,
        name: string,
        email: string,
        createdAt: Date,
        updatedAt: Date
    }
}

export const createUserController = async (req: Request, res: Response) => {
        try {
        const user = await createUser(req.body);

        return res.status(201).json({
            success: true,
            message: "User created successfully",
        });
    } catch (error: any) {
        return res.status(400).json({
            success: false, 
            message: error.message
        })
    }
};

export const userSignInController = async (req: Request, res: Response) => {
    try{
        const user = await userSignIn(req.body);

        (req as UserReq).user = user;

        const token = jwt.sign({id: user.id}, "secret", {expiresIn: "1d"});


        return res.status(200).json({
            success: true,
            message: "User signed in successfully",
            data: token
        });
    }catch(error: any){
        return res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}