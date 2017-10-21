const sql = require('mysql2');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('RestaurantBuddy', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
  });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('user', {
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

const Restaurant = sequelize.define('restaurant', {
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
  state:  {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipcode:  {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false
  },
  cusine:  {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price:  {
    type: Sequelize.STRING,
    allowNull: false
  },
  items:  {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false
  },
  image:  {
    type: Sequelize.BLOB
  }
});


User.sync({force: true}).then(()=>{
  return User.create({
    firstName: 'Ramya',
    lastName: 'Test',
    userName: 'rtest',
    email: 'rtest@gmail.com',
    password: 'ramya'
  });
});

Restaurant.sync();

exports.user = User;
