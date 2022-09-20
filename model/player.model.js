module.exports = (sequelize, Sequelize) => {
  const Player = sequelize.define(
    "player",
    {
      pid: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        field: "pid",
      },
      name: { type: Sequelize.STRING(50), allowNull: false, field: "name" },
      age: { type: Sequelize.INTEGER(11), allowNull: false, field: "age" },
      position: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "position",
      },
    },
    {
      tableName: "player",
    }
  );

  return Player;
};
