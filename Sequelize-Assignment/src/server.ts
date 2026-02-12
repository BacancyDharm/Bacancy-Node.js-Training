import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = require('./database/db');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

async function startServer(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}

startServer();