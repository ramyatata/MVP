module.exports = function(sequelize, Sequelize){
  return sequelize.define('favourites', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    restaurantId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    visited: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
};