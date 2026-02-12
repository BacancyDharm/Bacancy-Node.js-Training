import { Model, DataTypes } from "sequelize";

import sequelize from "../config/database";

export class Products extends Model{
    // id, name, description, price
    public id!: number;
    public name!: string;
    public description!: string;
    public price!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Products.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    sequelize,
    tableName: "Products",
    timestamps: true
})