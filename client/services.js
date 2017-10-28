window.services = {
  restaurants: {
    create: function(values, callback) {
      $.ajax({
        url: 'http://localhost:8088/restaurants',
        type: 'POST',
        data: JSON.stringify(values),
        contentType: 'application/json',
        success: function(results){
          callback(results, null);
        },
        error: function(err, callback){
          console.log('create restaurant failed');
          callback(null, err);
        }
      });
    },
    list: function(callback){
      $.ajax({
        url: 'http://localhost:8088/restaurants',
        type: 'GET',
        contentType: 'application/json',
        success: function(results){
          callback(results);
        },
        error: function(err){
          console.log('failed restaurants list');
          callback(err);
        }
      });
    }
  },
  friends: {
    create: function(values, callback){
       $.ajax({
        url: 'http://localhost:8088/friends',
        type: 'POST',
        data: JSON.stringify(values),
        contentType: 'application/json',
        dataType: 'application/json',
        success: function(results){
          console.log(results, null);
        },
        failure: function(err, callback){
          console.log(null, err);
        }
      });
    },
    list: function(callback){
        $.ajax({
        url: 'http://localhost:8088/friends',
        type: 'GET',
        contentType: 'application/json',
        success: function(results){
          console.log('Success friends list');
          callback(results);
        },
        error: function(err){
          console.log('failed friends list');
          callback(err);
        }
      });
    }
  },
  favourites: {
    create: function(values, callback) {
       $.ajax({
        url: 'http://localhost:8088/favourites',
        type: 'POST',
        data: JSON.stringify(values),
        contentType: 'application/json',
        success: function(results){
          callback(results, null);
        },
        failure: function(err, callback) {
          callback(null, err);
        }
      });
    },
    get: function(id, callback){
        $.ajax({
        url: 'http://localhost:8088/favourites/' + id,
        type: 'GET',
        contentType: 'application/json',
        success: function(results){
          console.log('Success fav list');
          callback(results);
        },
        error: function(err){
          console.log('failed fav list');
          callback(err);
        }
      });
    },
    delete: function(id, callback){
      $.ajax({
        url: 'http://localhost:8088/favourites/' + id,
        type: 'DELETE',
        contentType: 'application/json',
        success: function(results){
          console.log('success fav delete');
          callback(results);
        },
        error: function(err){
          console.log('failed fav delete');
          callback(err);
        }
      });
    },
    update: function(id, values, callback) {
      $.ajax({
        url: 'http://localhost:8088/favourites/' + id,
        type: 'PUT',
        data: JSON.stringify(values),
        contentType: 'application/json',
        success: function(results){
          callback(results, null);
        },
        failure: function(err, callback) {
          callback(null, err);
        }
      });
    }
  },
  users: {
    create: function(values, callback){
       $.ajax({
        url: 'http://localhost:8088/users',
        type: 'POST',
        data: JSON.stringify(values),
        contentType: 'application/json',
        success: function(results){
          callback(results, null);
        },
        failure: function(err, callback){
          callback(null, err);
        }
      });
    },
    login: function(values, callback){
      console.log('values : ' );
      console.log(values);
       $.ajax({
        url: 'http://localhost:8088/users/login',
        type: 'POST',
        data: JSON.stringify(values),
        contentType: 'application/json',
        success: function(results){
          callback(results, null);
        },
        failure: function(err, callback){
          callback(null, err);
        }
      });
    },
    list: function(callback){
        $.ajax({
        url: 'http://localhost:8088/users',
        type: 'GET',
        contentType: 'application/json',
        success: function(results){
          console.log('Success users list');
          callback(results);
        },
        error: function(err){
          console.log('failed users list');
          callback(err);
        }
      });
    }
  }
}