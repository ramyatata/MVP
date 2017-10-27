module.exports = function(sequelize, Sequelize){
  return sequelize.define('friendsRelationship', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    buddyId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })
};

