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
      message_fav: '',
      favouritesList: []
    };

    this.callServiceListRestaurant = this.callServiceListRestaurant.bind(this);
    this.callServiceAddUser = this.callServiceAddUser.bind(this);
    this.callServiceListUser = this.callServiceListUser.bind(this);
    this.callServiceGetUserFavourites = this.callServiceGetUserFavourites.bind(this);
    this.callServiceAddFavourite = this.callServiceAddFavourite.bind(this);
  }
  //Restaurant
  callServiceListRestaurant(){
    var self = this;
    services.restaurants.list((restaurants, err) => {
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
    services.users.create(values, (newUser, err) => {
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
  callServiceGetUserFavourites(userId){
    services.favourites.get(userId, (favs, err) => {
      if(favs){
        this.setState({'favouritesList': favs});
      } else {
        this.setState('message_fav': err.message);
      }
    });
  }
  callServiceAddFavourite(restaurantId){
    const userId = this.state.currentUser;
    const values = {
      userId: userId,
      restaurantId: restaurantId
    };
    services.favourites.create(values, (newFav, err) => {
      if(newFav) {
        this.callServiceGetUserFavourites(userId);
      } else {
        this.setState('message_fav': err.message);
      }
    });
  }

  componentDidMount(){
    this.callServiceListRestaurant();
    this.callServiceGetUserFavourites(2);
  }

  render() {
    return (
      <div className='container'>
        <ul className='nav nav-tabs nav-justified'>
          <li><a href='#review' data-toggle='tab'>Write Review</a></li>
          <li><a href='#restaurant' data-toggle='tab'>Find Restaurant</a></li>
          <li><a href='#favourite' data-toggle='tab'>Favourites</a></li>
          <li><a href='#login' data-toggle='tab'>Login</a></li>
        </ul>
        <div className='tab-content'>
          <div className='tab-pane' id='review'>
            <ReviewContainer callServiceCreate={this.callServiceAddRestaurant} message={this.state.message} listRestaurants={this.callServiceListRestaurant}/>
          </div>
          <div className='tab-pane' id='restaurant'>
            <RestaurantPane restaurants={this.state.restaurantsList} addToFavourites={this.callServiceAddFavourite}/>
          </div>
          <div className='tab-pane' id='favourite' >
            <FavouritePane favourites={this.state.favouritesList}/>
          </div>
          <div className='tab-pane' id='login'>
             <Login/>
          </div>
        </div>
      </div>
    );
  }
}

//send userId for fav restuarants - TODO -- set currentUser in state
ReactDOM.render(<App/>, document.getElementById('root'));

window.App = App;

