class FavouriteEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {

    var outerDivStyle = {
      marginTop: '10px',
      paddingTop: '5px',
      paddingBottom: '5px',
      paddingLeft: '5px',
      border: '2px solid #E0E0E0'
    };
    var contentStyle = {
      padding: '5px 0px 5px 5px',
      color: '#000'
    };
    var imageDivStyle = {
      backgroundPosition: 'center',
      width: '120px',
      height: '100px',
      overflow: 'hidden',
      display: 'block',
      backgroundRepeat:'no-repeat'
    };
    var imageStyle = {
      width: '100%',
      minHeight: '100%'
    }
    var titleStyle = {
      paddingTop: '5spx',
      fontFamily: 'ClanPro-News, Helvetica, sans-serif',
      lineHeight: '24px',
      fontSize: '20px',
      color: '#262626',
      marginBottom: '8px',
      display: 'block'
    };
    var locationStyle = {
      fontWeight: '400',
      padding: '2px 0px',
      maxWidth: '100%',
      fontSize: '14px',
      color: '#757575',
      fontFamily: 'ClanPro-News, Helvetica, sans-serif',
      lineHeight: '21px'
    };
    var detailsStyle = {
      paddingRight: '5px',
      color: '#262626',
      fontFamily: 'ClanPro-News, Helvetica, sans-serif',
      lineHeight: '21px',
      fontSize: '14px'
    };
    var reviewStyle = {
      paddingRight: '5px',
      color: '#eea236',
      display: 'block',
      fontFamily: 'ClanPro-News, Helvetica, sans-serif',
      lineHeight: '15px',
      fontSize: '14px'
    };
    var favBtn = {
      marginBottom: '20px'
    };

    return (
      <div style={outerDivStyle} className='col-xs-12'>
        <div style={contentStyle}>
            <div className='col-xs-7'>
              <div style={titleStyle}>{this.props.data.yelpName}</div>
              <div style={locationStyle}>
                <span>{this.props.data.yelpAddress1},</span><br/>
                <span>{this.props.data.yelpCity}</span>&nbsp;
                <span>{this.props.data.yelpState}</span>&nbsp;
                <span>{this.props.data.yelpZipcode}</span><br/>
                <span>{this.props.data.yelpPhone}</span>
              </div>
              <br/>
              <div style={reviewStyle}>
                <p><span>Rating : {this.props.data.userRating}</span></p>
                <p>Review: {this.props.data.userReview}</p>
              </div>
              <br/>
            </div>
            <div className='col-xs-3'>
              <div style={titleStyle}></div>
              <div style={detailsStyle}>
                <span>Price: {this.props.data.yelpPrice}</span><br/>
                <span>Cusine: {this.props.data.yelpCategory}</span><br/>
                <span>Yelp Rating: {this.props.data.yelpRating}</span><br/>
              </div>
              <div>
                <a href={this.props.data.yelpUrl} target='_blank'>Yelp Reviews ({this.props.data.yelpReviewCount}) ...</a>
              </div>
            </div>
            <div className='col-xs-2'>
            <div style={imageDivStyle}>
              <img src={this.props.data.yelpImageUrl} alt="Mountain View" style={imageStyle}></img>
            </div>
            <br/>
            <div>
              <button style={favBtn} className='btn btn-warning'>Favourite This</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
window.FavouriteEntry = FavouriteEntry;