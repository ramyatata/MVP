module.exports = (sequelize, Sequelize) => {
  return sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userName:  {
      type: Sequelize.STRING,
      allowNull: false
    },
    email:  {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    password:  {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
};