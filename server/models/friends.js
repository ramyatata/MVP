module.exports = function(sequelize, Sequelize){
  return sequelize.define('friends', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    friendId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['userId', 'friendId']
      }
    ]
  })
};

