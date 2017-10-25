
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: 2,
      message_review: '',
      clear_review: false,
      restaurantsList: [],
      message_restaurant: '',
      newFriendsList: [],
      name: 'Ram'
    };

    this.callServiceAddRestaurant = this.callServiceAddRestaurant.bind(this);
    this.callServiceListRestaurant = this.callServiceListRestaurant.bind(this);
    this.callServiceAddFriend = this.callServiceAddFriend.bind(this);
    this.callServiceListFriend = this.callServiceListFriend.bind(this);
    this.callServiceAddUser = this.callServiceAddUser.bind(this);
    this.callServiceListUser = this.callServiceListUser.bind(this);
    this.callServiceShowRestaurantDetails = this.callServiceShowRestaurantDetails.bind(this);
    this.callServiceFetchYelpData = this.callServiceFetchYelpData.bind(this);

  }
  //Restaurant
  callServiceAddRestaurant(values){
    services.restaurants.create(values, function(newRestaurant, err){
      if(newRestaurant){
        this.setState({
          'message_review': 'Restaurant is added',
          'clear_review' : true
        });
      } else {
        this.setState('message_review': err.message);
      }
    });
  }
  callServiceListRestaurant(){
    var self = this;
    services.restaurants.list(function(restaurants, err){
      if(restaurants){
        self.setState({
          'restaurantsList': restaurants
        });
      } else {
        self.setState('message_review': err.message);
      }
    });
  }

  //Friend
  callServiceAddFriend(values){
    services.friends.create(values, function(newFriend, err){
      if(newFriend){
        this.setState({

        });
      } else {
        this.setState('message_friend': err.message);
      }
    });
  }
  callServiceListFriend(){
    var self = this;
    services.friends.list(function(friends, err){
      if(friends){
        self.setState({
          //'friendsList': friends
        });
      } else {
        self.setState('message_friend': err.message);
      }
    });
  }

  //Users
  callServiceAddUser(values){
    services.users.create(values, function(newUser, err){
      if(newUser){
        this.setState({

        });
      } else {
        this.setState('message_user': err.message);
      }
    });
  }
  callServiceListUser(){
    var self = this;
    services.users.list(function(users, err){
      if(users){
        self.setState({

        });
      } else {
        self.setState('message_user': err.message);
      }
    });
  }
  callServiceuserNewFriendList(userId){
    const users = [];
    const friends = [];
    const newFriends = [];
    // services.users.list(function(results, err){
    //   if(results){
    //     users = results.filter((user) => user.id !== this.state.currentUser);
    //     services.friends.list(function(results, err){
    //       if(results){
    //         newFriends = users.filter(function(user){})
    //       } else {
    //         self.setState('message_friend': err.message);
    //       }
    //     })
    //   } else {
    //     self.setState('message_friend': err.message);
    //   }
    // })
  }

  callServiceFetchYelpData(){
    window.fetchYelpData(function(results, err){});
  }

  callServiceShowRestaurantDetails(data){
    this.callServiceFetchYelpData();

    let review1 = 'THiss dasasd das dasdasfrr rewwer we r ewrwer w err. ewrewrwerewrr';
    let review2 = 'THiss dasasd das dasdasfrr rewwer we r ewrwer w err. ewrewrwerewrr';
    let review3 = 'THiss dasasd das dasdasfrr rewwer we r ewrwer w err. ewrewrwerewrr';

    let html = "<div class='row'><div class='col-xs-6'>"+
               "<h5>Cuisine : "+data.cusine+"</h5>"+
               "<h5>Rating : "+data.rating+"</h5>"+
               "<h5><span>Price : "+data.price+"</span></h5></div><div class='col-xs-6'>"+
               "<span>"+data.street+"</span><br/><span>"+data.city+"</span><br/>" +
               "<span>"+data.state+"</span>&nbsp;&nbsp;&nbsp;<span>"+data.zipcode+"</span><br/>"+
               "</div></div><div class='col-xs-12'>"+
               "<p>"+data.review+"</p></div>"+
               "<h6>"+ review1 + "</h6>" +
               "<h6>"+ review2 + "</h6>" +
               "<h6>"+ review3 + "</h6>" ;

    let dialog = bootbox.dialog({
      title: data.name,
      message : html,
      buttons: {
        noclose: {
          label: 'Favourite',
          className: 'btn-warning',
          callback: function(){

          }
        },
        ok: {
          label: 'Ok',
          className: 'btn-info',
          callback: function(){

          }
        }
      }
    });
  }

  componentDidMount(){
    this.callServiceListRestaurant();
  }

  render() {
    return (
      <div className='container'>
        <ul className='nav nav-tabs nav-justified'>
          <li><a href='#review' data-toggle='tab'>Write Review</a></li>
          <li><a href='#restaurants' data-toggle='tab'>Find Restaurant</a></li>
          <li><a href='#friends' data-toggle='tab'>Friends</a></li>
          <li><a href='#login' data-toggle='tab'>Login</a></li>
        </ul>
        <div className='tab-content'>
          <div className='tab-pane' id='review'>
            <ReviewContainer callServiceCreate={this.callServiceAddRestaurant} message={this.state.message}/>
          </div>
          <div className='tab-pane' id='restaurants'>
            <RestaurantPane restaurants={this.state.restaurantsList} showRestaurantDetails={this.callServiceShowRestaurantDetails}/>
          </div>
          <div className='tab-pane' id='friends'>
            <FriendsPane/>
          </div>
          <div className='tab-pane' id='login'>
             <Login/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

window.App = App;

