class FavouritePane extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        <h2>Favourites</h2>
        <FavouriteList data={this.props.favourites}/>
      </div>
    )
  }
}

window.FavouritePane = FavouritePane;
