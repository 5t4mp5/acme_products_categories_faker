const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DATABASE_URL);

db.sync()
    .then(() => console.log("db synced"))
    .catch(ex => console.error(ex));