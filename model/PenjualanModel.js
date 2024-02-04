import { Sequelize } from "sequelize";
import db from "../config/database.js";
//import Users from "./UserModel";



const { DataTypes } = Sequelize;

const Penjualan = db.define('penjualan', {
    id_penjualan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tanggal_penjualan: {
        type: DataTypes.DATE,
        allowNull: false
    },
    total_harga: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    freezeTableName: true
});



export default Penjualan;

// (async () => {
//     try {
//       await db.sync();
//       console.log("Database synchronized successfully!");
//     } catch (error) {
//       console.error("Error synchronizing database:", error);
//     }
//   })();