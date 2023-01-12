const Sequelize = require('sequelize');
const sequelize = new Sequelize('expense_tracker', 'root', 'Himanshu@12',{
    dialect:"mysql",
    host:'localhost',
    define: {
        timestamps: false
      }
})
module.exports = sequelize;