window.fetchYelpData = function(searchCriteria, callback){
  $.ajax({
    url:'http://localhost:8088/yelp',
    type: 'POST',
    data: JSON.stringify(searchCriteria),
    contentType: 'application/json',
    success: function(results) {
      console.log('Success Yelp cal');
      callback(results.businesses, null)
    },
    error: function(err){
      console.log('Yelp call Failed' + err.message);
      callback(null, err);
    }
  });
}