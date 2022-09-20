const {Sequelize, queryInterface} = require("sequelize");

const sequelize = new Sequelize(
   'test_db',
   'root',
   '1234',
    {
      host: '127.0.0.1',
      dialect: 'mysql'
    }
  );

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.Book = require("./model/book.model")( sequelize , Sequelize );
//   db.Player = require("./model/player.model")( sequelize , Sequelize )

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});