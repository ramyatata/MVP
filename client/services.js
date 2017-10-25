window.services = {
  restaurants: {
    create: function(values, callback) {
      $.ajax({
        url: 'http://localhost:8088/restaurants',
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
        url: 'http://localhost:8088/restaurants',
        type: 'GET',
        contentType: 'application/json',
        success: function(results){
          console.log('Success restaurants list');
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
  users: {
    create: function(values, callback){
       $.ajax({
        url: 'http://localhost:8088/users',
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