// class YelpEntry extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(){
//       this.props.addReview(this.props.data);
//     }

//     render() {
//         return (
//             <div>
//                 <div className='row col-xs-9' onClick={this.handleClick}>
//                     <div className='col-xs-6'>
//                         <h4>{this.props.data.name}</h4>
//                         <h5>Rating : {this.props.data.rating}</h5>
//                         <h5><span>Price: {this.props.data.price}</span>&nbsp;&nbsp;&nbsp;<span>Category: {this.props.data.categories[0].alias}</span></h5>
//                     </div>
//                     <div className='col-xs-6'>
//                         <span>{this.props.data.location.address1}</span><br/>
//                         <span>{this.props.data.location.city}</span><br/>
//                         <span>{this.props.data.location.state}</span>&nbsp;&nbsp;&nbsp;<span>{this.props.data.location.zip_code}</span><br/>
//                         <span>{this.props.data.display_phone}</span><br/>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


// var outerDivStyle = {
//             width: '33.3333 %',
//             paddingLeft: '60px',
//             height: '357px'
//         };
//         var imageStyle = {
//             backgroundPosition: 'center',
//             height: '240px',
//             display: 'block'
//         };
//
//
//
class YelpEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      this.props.addReview(this.props.data);
    }

    render() {
        var containerStyle = {
            width: '20%',
            cursor: 'pointer',
            marginBottom: '25px',
            marginRight: '25px',
            height: '300px'
        };
        var imageStyle = {
            width:'100%',
            height: '50%'
        };
         var titleStyle = {
            paddingTop: '10px',
            fontFamily: 'ClanPro-News, Helvetica, sans-serif',
            lineHeight: '24px',
            fontSize: '16px',
            color: '#262626',
        };
        var locationStyle = {
            paddingRight: '5px',
            color: 'dimgrey',
            display: 'block',
            fontFamily: 'ClanPro-News, Helvetica, sans-serif',
            lineHeight: '21px',
            fontSize: '13px'
        };
        var detailsStyle = {
            fontWeight: '400',
            padding: '2px 0px',
            maxWidth: '100%',
            fontSize: '14px',
            color: 'black',
            fontFamily: 'ClanPro-News, Helvetica, sans-serif',
            lineHeight: '21px'
        };

        return (
            <div onClick={this.handleClick} style={containerStyle}>
                <img src={this.props.data.image_url} alt={this.props.data.name} style={imageStyle}></img>
                 <div style={titleStyle}>{this.props.data.name}</div>
                 <div style={locationStyle}>
                    <span>{this.props.data.location.address1},</span>&nbsp;
                    <span>{this.props.data.location.city}</span>&nbsp;
                    <span>{this.props.data.location.state}</span>&nbsp;
                    <span>{this.props.data.location.zip_code}</span><br />
                    <span>{this.props.data.display_phone}</span>
                </div>
                 <div>
                    <span>Rating : {this.props.data.rating}</span>&nbsp;&nbsp;
                    <span>Price: {this.props.data.price}</span><br/>
                    <span>Cusine: {this.props.data.categories[0].alias}</span>
                </div>
                <br/>
            </div>
        )
    }
}

window.YelpEntry = YelpEntry;