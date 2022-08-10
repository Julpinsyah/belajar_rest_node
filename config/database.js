import { Sequelize } from "sequelize";

const db = new Sequelize('pasarkamu2','root','',{
    host: 'localhost',
    dialect: 'mysql',
});

export default db;