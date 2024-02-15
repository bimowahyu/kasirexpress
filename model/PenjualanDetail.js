import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModel.js";
import Penjualan from "./PenjualanModel.js"; // Import model Penjualan
import ProductModel from "./ProductModel.js"// Import model Produk

const { DataTypes } = Sequelize;

const PenjualanDetail = db.define('penjualan_detail', {
    // uuid: {
    //     type: DataTypes.STRING,
    //     defaultValue: DataTypes.UUIDV4,
    //     allowNull: false,
    //     validate: {
    //         notEmpty: true
    //     }
    // },
    id_penjualan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    id_produk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});



Users.hasMany(PenjualanDetail);
PenjualanDetail.belongsTo(Users, { foreignKey: 'userId' });

Penjualan.hasMany(PenjualanDetail, { foreignKey: 'id_penjualan' });
PenjualanDetail.belongsTo(Penjualan, { foreignKey: 'id_penjualan' });

ProductModel.hasMany(PenjualanDetail, { foreignKey: 'id_produk' });
PenjualanDetail.belongsTo(ProductModel, { foreignKey: 'id_produk' });

export default PenjualanDetail;

// (async () => {
//     try {
//       await db.sync();
//       console.log("Database synchronized successfully!");
//     } catch (error) {
//       console.error("Error synchronizing database:", error);
//     }
//   })();