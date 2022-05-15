const { Sequelize } = require("sequelize");


// DataBase connect
const sequelize = new Sequelize("node", "root", "", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false,
    freezeTableName: true,
    timestamps: false,
  }

});

module.exports = sequelize;