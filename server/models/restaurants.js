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
    userRating: {
      type: Sequelize.STRING
    },
    userReview:  {
      type: Sequelize.STRING
    },
    yelpId: {
      type: Sequelize.STRING
    },
    yelpName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    yelpAddress1: {
      type: Sequelize.STRING
    },
    yelpAddress2: {
      type: Sequelize.STRING
    },
    yelpCity: {
      type: Sequelize.STRING
    },
    yelpState:  {
      type: Sequelize.STRING
    },
    yelpZipcode:  {
      type: Sequelize.INTEGER
    },
    yelpPhone:{
      type: Sequelize.STRING
    },
    yelpCategory:  {
      type: Sequelize.STRING
    },
    yelpRating: {
      type: Sequelize.STRING
    },
    yelpPrice:  {
      type: Sequelize.STRING
    },
    yelpReviewCount: {
      type: Sequelize.INTEGER
    },
    yelpUrl:{
      type: Sequelize.STRING
    },
    yelpImageUrl:  {
      type: Sequelize.STRING
    }
  });
};