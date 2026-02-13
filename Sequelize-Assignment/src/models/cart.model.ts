import { Model, DataTypes } from "sequelize";

import sequelize from "../config/database";
import { Products } from "./product.model";
import { User } from "./user.model";

export class Cart extends Model{
    public id!: number;
    public userId!: number;
    public productId!: number;
    public quantity!: number;
};

Cart.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Users",
            key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Products",
            key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    tableName: "Carts",
    timestamps: true
})

User.belongsToMany(Products, {through: "Cart", foreignKey: "id"});
Products.belongsToMany(User, {through: "Cart", foreignKey: "id"});

