class RestaurantPane extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    const headerStyle = {
      marginLeft: '30px'
    };
    return(
      <div>
        <h3 style={headerStyle}>Pick Restaurants</h3>
        <RestaurantList data={this.props.restaurants} addToFavourites={this.props.addToFavourites}/>
      </div>
    )
  }
}

window.RestaurantPane = RestaurantPane;