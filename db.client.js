const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://db_ldt1_user:Fo6WZa38peFwfr35vsMj3a4aNodIX7Ex@dpg-co60btm3e1ms73bddgc0-a/db_ldt1', // TODO
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