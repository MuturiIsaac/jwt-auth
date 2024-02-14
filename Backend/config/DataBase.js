import { Sequelize } from "sequelize";
 
const db = new Sequelize('auth_db', 'root', 'ismb4754', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;