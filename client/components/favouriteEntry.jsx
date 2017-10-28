class FavouriteEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.deleteFavouriteHandler = this.deleteFavouriteHandler.bind(this);
    this.updateFavouriteHandler = this.updateFavouriteHandler.bind(this);
  }

  deleteFavouriteHandler(){
    this.props.delete(this.props.data.id);
  }

  updateFavouriteHandler(){
    var updateValues = {
      visited: true
    };
    this.props.update(this.props.data.id, updateValues);
  }

  render() {

    const outerDivStyle = {
      marginTop: '10px',
      paddingTop: '5px',
      paddingBottom: '5px',
      paddingLeft: '5px',
      border: '2px solid #E0E0E0',
      backgroundColor: !!this.props.data.visited ? '#C0D9AF' : 'none'
    };
    const contentStyle = {
      padding: '5px 0px 5px 5px',
      color: '#000'
    };
    const imageDivStyle = {
      backgroundPosition: 'center',
      width: '120px',
      height: '100px',
      overflow: 'hidden',
      display: 'block',
      backgroundRepeat:'no-repeat'
    };
    const imageStyle = {
      width: '100%',
      minHeight: '100%'
    }
    const titleStyle = {
      paddingTop: '5spx',
      fontFamily: 'ClanPro-News, Helvetica, sans-serif',
      lineHeight: '24px',
      fontSize: '20px',
      color: '#262626',
      marginBottom: '8px',
      display: 'block'
    };
    const locationStyle = {
      fontWeight: '400',
      padding: '2px 0px',
      maxWidth: '100%',
      fontSize: '14px',
      color: '#757575',
      fontFamily: 'ClanPro-News, Helvetica, sans-serif',
      lineHeight: '21px'
    };
    const detailsStyle = {
      paddingRight: '5px',
      color: '#262626',
      fontFamily: 'ClanPro-News, Helvetica, sans-serif',
      lineHeight: '21px',
      fontSize: '14px'
    };
    const reviewStyle = {
      paddingRight: '5px',
      color: 'darkorchid',
      display: 'block',
      fontFamily: 'ClanPro-News, Helvetica, sans-serif',
      lineHeight: '15px',
      fontSize: '14px'
    };
    const favBtn = {
      marginBottom: '20px',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      textAlign: 'center',
      paddingLeft: '5px',
      paddingTop: '-3px',
      marginRight: '7px'
    };
    const spanStyle = {
      fontSize: '2.5em'
    };

    let visitButton = "";

    if(!this.props.data.visited){
      visitButton = <button style={favBtn} className='btn btn-success'
      onClick={this.updateFavouriteHandler}><span style={spanStyle} className='glyphicon  glyphicon-ok'></span></button>
    }

    return (
      <div style={outerDivStyle} className='col-xs-12'>
        <div style={contentStyle}>
            <div className='col-xs-7'>
              <div style={titleStyle}>{this.props.data.restaurant.yelpName}</div>
              <div style={locationStyle}>
                <span>{this.props.data.restaurant.yelpAddress1},</span><br/>
                <span>{this.props.data.restaurant.yelpCity}</span>&nbsp;
                <span>{this.props.data.restaurant.yelpState}</span>&nbsp;
                <span>{this.props.data.restaurant.yelpZipcode}</span><br/>
                <span>{this.props.data.restaurant.yelpPhone}</span>
              </div>
              <br/>
              <div style={reviewStyle}>
                <p><span>Rating : {this.props.data.restaurant.userRating}</span></p>
                <p>Review: {this.props.data.restaurant.userReview}</p>
              </div>
              <br/>
            </div>
            <div className='col-xs-3'>
              <div style={titleStyle}></div>
              <div style={detailsStyle}>
                <span>Price: {this.props.data.restaurant.yelpPrice}</span><br/>
                <span>Cusine: {this.props.data.restaurant.yelpCategory}</span><br/>
                <span>Yelp Rating: {this.props.data.restaurant.yelpRating}</span><br/>
              </div>
              <div>
                <a href={this.props.data.yelpUrl} target='_blank'>Yelp Reviews ({this.props.data.restaurant.yelpReviewCount}) ...</a>
              </div>
              <div>Visited: <input type='checkbox' checked={this.props.data.visited}></input></div>
            </div>
            <div className='col-xs-2'>
            <div style={imageDivStyle}>
              <img src={this.props.data.restaurant.yelpImageUrl} alt="Mountain View" style={imageStyle}></img>
            </div>
            <br/>
            <div>
              <button style={favBtn} className='btn btn-success' onClick={this.deleteFavouriteHandler}><span style={spanStyle} className='glyphicon glyphicon-thumbs-down'></span></button>
              {visitButton}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
window.FavouriteEntry = FavouriteEntry;