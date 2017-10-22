'use strict';

module.exports = function (sequelize, Sequelize) {
  return sequelize.define('restaurant', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    state: {
      type: Sequelize.STRING,
      allowNull: false
    },
    zipcode: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
    },
    cusine: {
      type: Sequelize.STRING,
      allowNull: false
    },
    rating: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false
    },
    items: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
    },
    image: {
      type: Sequelize.BLOB
    }
  });
};