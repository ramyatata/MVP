class RestaurantPane extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        <h2>List of restaurant</h2>
        <RestaurantList data={this.props.restaurants} showRestaurantDetails={this.props.showRestaurantDetails}/>
      </div>
    )
  }
}

window.RestaurantPane = RestaurantPane;