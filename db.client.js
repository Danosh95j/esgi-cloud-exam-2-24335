const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'https://dashboard.render.com/d/dpg-co60btm3e1ms73bddgc0-a', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;