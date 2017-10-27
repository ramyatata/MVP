const colors = require('colors');
const sql = require('mysql2');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('restaurantReviewApp', 'root', '', {
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
//const friendsRelationship = require('../models/friends')(sequelize, Sequelize);

// users.sync({force: true}).then(() => {
//   return users.create({
//     firstName: 'ramki',
//     lastName: 'Test',
//     userName: 'rtest',
//     email: 'rtest@gmail.com',
//     password: 'ramya'
//   });
// });
 //restaurants.sync();
// favourites.sync();

// friendsRelationship.sync()
// .then(()=>{
//   return friendsRelationship.create({
//     useId: 1,
//     buddyId: 2
//   });
// })


//associations
//one user can review many restaurants USERS <=> RESTAURANTS
// users.hasMany(restaurants, {foreignkey: 'userId'});
// restaurants.belongsTo(users);



//one user can have many favourites USERS <=> FAVOURITES
// users.hasMany(favourites, {foreignkey: 'userId'});
// favourites.belongsTo(users);


//one restaurant can be many favourites. RESTAURANTS <=> FAVOURITES
// restaurants.hasMany(favourites, {foreignkey: 'restaurantId'});
// favourites.belongsTo(restaurants);


//These are not working
//one user can have many user ids in friends, one user can have many friends
// users.belongsToMany(users, {through: 'friends', foreignkey: 'userId'});
// users.belongsToMany(users, {through: 'friends', foreignkey: 'friendId'});

//friends.belongsToMany(users, {foreignkey: 'friendId', through: 'friends_users'});
//friends.belongsTo(users);
//friends.belongsTo(users, {as: 'friendInFriend', foreignkey: 'friendId'});


// users.hasMany(friendsRelationship, {foreignkey: 'buddyId', sourceKey:'id'});
// friendsRelationship.belongsTo(users, {foreignkey: 'buddyId', sourceKey:'id'});

//users.hasMany(friendsRelationship);
//friendsRelationship.belongsTo(users);


//friends.belongsTo(users, {as: 'userInFriend', foreignkey: 'userId'});

// Country.hasMany(City, {foreignKey: 'countryCode', sourceKey: 'isoCode'});
// City.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});

var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = users;
db.restaurants = restaurants;
db.favourites = favourites;
//db.friendsRelationship = friendsRelationship;

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
