const colors = require('colors');
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
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
});

const users = require('../models/users')(sequelize, Sequelize);
const restaurants = require('../models/restaurants')(sequelize, Sequelize);
const favourites = require('../models/favourites')(sequelize, Sequelize);
const friends = require('../models/friends')(sequelize, Sequelize);

// users.sync();
 //restaurants.sync();
// favourites.sync();
// friends.sync();


//associations
//one user can review many restaurants USERS <=> RESTAURANTS
users.hasMany(restaurants, {foreignkey: 'userId'});
restaurants.belongsTo(users);
//one user can have many favourites USERS <=> FAVOURITES
users.hasMany(favourites, {foreignkey: 'userId'});
favourites.belongsTo(users);
//one restaurant can be many favourites. RESTAURANTS <=> FAVOURITES
restaurants.hasMany(favourites, {foreignkey: 'restaurantId'});
favourites.belongsTo(restaurants);
//one user can have many user ids in friends, one user can have many friends
users.hasMany(friends, {foreignkey: 'friendId'});
friends.belongsTo(users);
//friends.belongsTo(users, {as: 'friendInFriend', foreignkey: 'friendId'});
users.hasMany(friends, {foreignkey: 'userId'});
//friends.belongsTo(users, {as: 'userInFriend', foreignkey: 'userId'});

var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = users;
db.restaurants = restaurants;
db.favourites = favourites;
db.friends = friends;

module.exports = db;







//////////////////////////////. COMMENTED FOR FUTURE USE ////////////////////////

// users.sync({force: true}).then(() => {
//   return users.create({
//     firstName: 'ramki',
//     lastName: 'Test',
//     userName: 'rtest',
//     email: 'rtest@gmail.com',
//     password: 'ramya'
//   });
// });
// restaurants.sync({force:true})
// .then(() => {
//   return restaurants.create({
//     userId: 1,
//     name: 'Chick Fila',
//     street: '1303 campbell',
//     city: 'Houston',
//     state: 'TX',
//     zipcode: '77081',
//     rating: 3,
//     price: '$$',
//     item: 'burger',
//     cusine: 'American'
//   });
// });
