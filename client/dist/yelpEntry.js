'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var YelpEntry = function (_React$Component) {
    _inherits(YelpEntry, _React$Component);

    function YelpEntry(props) {
        _classCallCheck(this, YelpEntry);

        var _this = _possibleConstructorReturn(this, (YelpEntry.__proto__ || Object.getPrototypeOf(YelpEntry)).call(this, props));

        _this.state = {};

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(YelpEntry, [{
        key: 'handleClick',
        value: function handleClick() {
            this.props.addReview(this.props.data);
        }
    }, {
        key: 'render',
        value: function render() {
            var containerStyle = {
                width: '20%',
                cursor: 'pointer',
                marginBottom: '25px',
                marginRight: '25px',
                height: '300px'
            };
            var imageStyle = {
                width: '100%',
                height: '50%'
            };
            var titleStyle = {
                paddingTop: '10px',
                fontFamily: 'ClanPro-News, Helvetica, sans-serif',
                lineHeight: '24px',
                fontSize: '16px',
                color: '#262626'
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

            return React.createElement(
                'div',
                { onClick: this.handleClick, style: containerStyle },
                React.createElement('img', { src: this.props.data.image_url, alt: this.props.data.name, style: imageStyle }),
                React.createElement(
                    'div',
                    { style: titleStyle },
                    this.props.data.name
                ),
                React.createElement(
                    'div',
                    { style: locationStyle },
                    React.createElement(
                        'span',
                        null,
                        this.props.data.location.address1,
                        ','
                    ),
                    '\xA0',
                    React.createElement(
                        'span',
                        null,
                        this.props.data.location.city
                    ),
                    '\xA0',
                    React.createElement(
                        'span',
                        null,
                        this.props.data.location.state
                    ),
                    '\xA0',
                    React.createElement(
                        'span',
                        null,
                        this.props.data.location.zip_code
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'span',
                        null,
                        this.props.data.display_phone
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'span',
                        null,
                        'Rating : ',
                        this.props.data.rating
                    ),
                    '\xA0\xA0',
                    React.createElement(
                        'span',
                        null,
                        'Price: ',
                        this.props.data.price
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'span',
                        null,
                        'Cusine: ',
                        this.props.data.categories[0].alias
                    )
                ),
                React.createElement('br', null)
            );
        }
    }]);

    return YelpEntry;
}(React.Component);

window.YelpEntry = YelpEntry;