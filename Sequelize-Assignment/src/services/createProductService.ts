import { Products } from "../models/product.model";

export const createProductService = async (data: any) => {
    const product = await Products.create(data);
    return product;
}