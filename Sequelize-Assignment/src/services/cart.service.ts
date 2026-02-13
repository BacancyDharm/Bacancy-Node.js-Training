import { Cart } from "../models/cart.model";
import { Products } from "../models/product.model";

export const addToCartService = async(userId: number, productId: number, quantity: number) => {
    const itemExists = await Products.findOne({where: {id: productId}});

    if(!itemExists){
        throw new Error("Product not found");
    }

    const existingItem = await Cart.findOne({where: {userId, productId}});
    if(existingItem) {
        existingItem.quantity += quantity;
        const cart = await existingItem.save();
        return cart;
    }
    const cart = await Cart.create({userId, productId, quantity});
    // const cart = await Cart.create({userId, productId, quantity: existingItem ? existingItem.quantity + quantity : quantity});
    return cart;

}

export const getCartService = async(userId: number) => {
    const cart = await Cart.findAll({where: {userId}});
    if(!cart) throw new Error("Cart not found");

    const productIds = cart.map(item => item.productId);

    const products = await Products.findAll({where: {id: productIds}})
    
    const finalData: any = [];
    products.forEach(product => {
        finalData.push({...product.dataValues, quantity: cart.find(item => item.productId === product.id)?.quantity})
    })

    return finalData;
}
