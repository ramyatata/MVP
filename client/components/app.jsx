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
    this.callServiceListUser = this.callServiceListUser.bind(this);
    this.callServiceGetUserFavourites = this.callServiceGetUserFavourites.bind(this);
    this.callServiceAddFavourite = this.callServiceAddFavourite.bind(this);
    this.callServiceFilterRestaurants = this.callServiceFilterRestaurants.bind(this);
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

  //Favourites
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

        const filteredList = this.state.restaurantsList.filter((restaurant) =>
          restaurant.id !== restaurantId
        );

        this.setState({restaurantsList: filteredList});
      } else {
        this.setState('message_fav': err.message);
      }
    });
  }
  callServiceFilterRestaurants(){
    alert('clickec');
    var favouritesId = this.state.favouritesList.map((item)=>item.id);
    var filteredList = this.state.restaurantsList.filter((item)=>{
      var index = favouritesId.indexOf(item.id);
      if(index === -1){
        return true;
      }
      return false;
    });
    alert(filteredList.length);
    this.setState({'restaurantsList': filteredList});
  }

  componentDidMount(){
    this.callServiceGetUserFavourites(this.callServiceGetUserFavourites(2));
    this.callServiceListRestaurant();
  }

  render() {
    const titleStyle={
      width: '10px'
    };

    return (
      <div className='container'>
      <div></div>
        <ul className='nav nav-tabs nav-justified'>
          <li className='active'><a href='#review' data-toggle='tab'>Rate & Review</a></li>
          <li onClick={this.callServiceFilterRestaurants}><a href='#restaurant' data-toggle='tab'>Pick Restaurants</a></li>
          <li><a href='#favourite' data-toggle='tab'>Favourites</a></li>
        </ul>
        <div className='tab-content'>
          <div className='tab-pane fade in active' id='review'>
            <ReviewContainer callServiceCreate={this.callServiceAddRestaurant} message={this.state.message} listRestaurants={this.callServiceListRestaurant}/>
          </div>
          <div className='tab-pane fade' id='restaurant'>
            <RestaurantPane restaurants={this.state.restaurantsList} addToFavourites={this.callServiceAddFavourite}/>
          </div>
          <div className='tab-pane fade' id='favourite' >
            <FavouritePane favourites={this.state.favouritesList}/>
          </div>
        </div>
      </div>
    );
  }
}

//send userId for fav restuarants - TODO -- set currentUser in state


window.App = App;

