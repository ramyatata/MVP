class RestaurantPane extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        <h2>List of restaurant</h2>
        <RestaurantList data={this.props.restaurants} addToFavourites={this.props.addToFavourites}/>
      </div>
    )
  }
}

window.RestaurantPane = RestaurantPane;