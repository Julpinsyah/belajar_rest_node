import Sequelize from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const produk_model = db.define("produk", {
    title:{
        type: DataTypes.STRING,
    },
    price:{
        type: DataTypes.DOUBLE,
    }
}, {freezeTableName: true});


export default produk_model;