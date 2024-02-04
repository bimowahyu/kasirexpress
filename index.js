import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoutes.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import PenjualanRoute from "./routes/PenjualanRoute.js";
import PenjualanDetailRoute from "./routes/PenjualanDetailRoute.js"

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

// (async () => {
//     try {
//         await db.sync();
//         console.log('Tabel telah diselaraskan');
//     } catch (error) {
//         console.error('Gagal menyelaraskan tabel:', error);
//     }
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
  
    cookie: {
        secure: 'auto'
    }
}));



app.use(cors({
    credentials: true,
    origin:'http://localhost:3000'

}));

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);
app.use(PenjualanRoute);
app.use(PenjualanDetailRoute);

console.log('store.sync()');
store.sync();


app.listen(process.env.APP_PORT, ()=> {console.log('server jalan');});