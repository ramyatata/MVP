window.fetchYelpData = function(callback){
  console.log('callingyelp api');
    $.ajax({
        url: 'https://api.yelp.com/v3/businesses/matches/best?name=Bombay Sweets&address1=5827 Hillcroft St&city=Houston&state=TX&country=US',

        type: 'GET',

        Authorization:'Bearer O2oNtjjwyEqL_8d0k2qjmp_75zXkS0WcAsCzqQSjWTGeFGscLok_6aliNRS3c0H7Vp7eSg_Tx3J91C0bXnZE4ky0LxwArBjMWHLc1xlOXsd41Ie5RfGIouumuzzuWXYx',

        //contentType: 'application/json',

        // dataType: 'application/json',

        // dataType: 'jsonp',

        success: function(results){
          console.log('yelp success');
          var id = JSON.parse(results).businesses[0].id;
          if(id){
            getBusinessData(id, callback)
          } else {
            callback(null, {message: 'no yelp data found'})
          }
        },
        error: function(err){
          console.log('yelp businessId failed');
          callback(null, err)
        }
      });
}

function getBusinessData(id, callback){
   $.ajax({
        url: 'https://api.yelp.com/v3/businesses/'+id+'/reviews',
        type: 'GET',
        Authorization:'Bearer O2oNtjjwyEqL_8d0k2qjmp_75zXkS0WcAsCzqQSjWTGeFGscLok_6aliNRS3c0H7Vp7eSg_Tx3J91C0bXnZE4ky0LxwArBjMWHLc1xlOXsd41Ie5RfGIouumuzzuWXYx',
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(results){
          console.log('yelp review data success');
          console.log(results);
          callback(results, null);
        },
        error: function(err, callback){
          console.log('yelp review data failed');
          callback(null, err);
        }
      });

}