
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      message_review: '',
      clear_review: false
    };

    this.callServiceAddRestaurant = this.callServiceAddRestaurant.bind(this);
  }

  callServiceAddRestaurant(values){
    services.restaurant.create(values, function(newRestaurant, err){
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
            <RestaurantPane/>
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

