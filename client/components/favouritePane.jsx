class FavouritePane extends React.Component{
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
        <h3 style={headerStyle}>My Favourites</h3>
        <FavouriteList data={this.props.favourites} delete={this.props.delete} update={this.props.update}/>
      </div>
    )
  }
}

window.FavouritePane = FavouritePane;
