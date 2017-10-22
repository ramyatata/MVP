module.exports = function(sequelize, Sequelize){
  return sequelize.define('restaurants', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    street: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state:  {
      type: Sequelize.STRING,
      allowNull: false
    },
    zipcode:  {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    cusine:  {
      type: Sequelize.STRING
    },
    rating: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price:  {
      type: Sequelize.STRING,
      allowNull: false
    },
    item:  {
      type: Sequelize.STRING,
      allowNull: false
    },
    picture:  {
      type: Sequelize.BLOB
    }
  });
};