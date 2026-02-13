import { Products } from "../models/product.model";

export const createProductService = async (data: any) => {
    const existingProduct = await Products.findOne({
        where: {
            name: data.name
        }
    });
    if (existingProduct) {
        throw new Error("Product already exists");
    }

    const product = await Products.create(data);
    return product;
}

export const getAllProductsService = async () => {
    const products = await Products.findAll();
    if(products.length === 0){
        throw new Error("No products found");
    }
    return products;
}

export const getProductByIdService = async (id: number) => {
    const product = await Products.findByPk(id);

    if (!product) {
        throw new Error("Product not found");
    }
    return product;
}

export const deleteProductService = async (id: number) => {
    const product = await Products.destroy({
        where:{
            id
        }
    })
    if(!product){
        throw new Error("Product not found to delete");
    }
    return product;
}

export const editProductService = async () => {} //Todo