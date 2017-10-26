
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

    this.callServiceListRestaurant = this.callServiceListRestaurant.bind(this);
    this.callServiceAddUser = this.callServiceAddUser.bind(this);
    this.callServiceListUser = this.callServiceListUser.bind(this);
    this.callServiceShowRestaurantDetails = this.callServiceShowRestaurantDetails.bind(this);
  }
  //Restaurant
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



  callServiceShowRestaurantDetails(data){
    //this.callServiceFetchYelpData();

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


  }

  componentDidMount(){
    //this.callServiceListRestaurant();
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

