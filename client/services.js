window.services = {
  restaurant: {
    create: function(values, callback) {
      var restaurant = JSON.stringify(values);
      console.log(restaurant);
      $.ajax({
        url: 'http://localhost:8088/restaurants',
        type: 'POST',
        data: restaurant,
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
          console.log(results);
          callback(results);
        },
        error: function(err){
          console.log('failed');
          callback(err);
        }
      });
    }
  }
}