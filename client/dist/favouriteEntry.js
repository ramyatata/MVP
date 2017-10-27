'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FavouriteEntry = function (_React$Component) {
  _inherits(FavouriteEntry, _React$Component);

  function FavouriteEntry(props) {
    _classCallCheck(this, FavouriteEntry);

    var _this = _possibleConstructorReturn(this, (FavouriteEntry.__proto__ || Object.getPrototypeOf(FavouriteEntry)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(FavouriteEntry, [{
    key: 'render',
    value: function render() {

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
        backgroundRepeat: 'no-repeat'
      };
      var imageStyle = {
        width: '100%',
        minHeight: '100%'
      };
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

      return React.createElement(
        'div',
        { style: outerDivStyle, className: 'col-xs-12' },
        React.createElement(
          'div',
          { style: contentStyle },
          React.createElement(
            'div',
            { className: 'col-xs-7' },
            React.createElement(
              'div',
              { style: titleStyle },
              this.props.data.yelpName
            ),
            React.createElement(
              'div',
              { style: locationStyle },
              React.createElement(
                'span',
                null,
                this.props.data.yelpAddress1,
                ','
              ),
              React.createElement('br', null),
              React.createElement(
                'span',
                null,
                this.props.data.yelpCity
              ),
              '\xA0',
              React.createElement(
                'span',
                null,
                this.props.data.yelpState
              ),
              '\xA0',
              React.createElement(
                'span',
                null,
                this.props.data.yelpZipcode
              ),
              React.createElement('br', null),
              React.createElement(
                'span',
                null,
                this.props.data.yelpPhone
              )
            ),
            React.createElement('br', null),
            React.createElement(
              'div',
              { style: reviewStyle },
              React.createElement(
                'p',
                null,
                React.createElement(
                  'span',
                  null,
                  'Rating : ',
                  this.props.data.userRating
                )
              ),
              React.createElement(
                'p',
                null,
                'Review: ',
                this.props.data.userReview
              )
            ),
            React.createElement('br', null)
          ),
          React.createElement(
            'div',
            { className: 'col-xs-3' },
            React.createElement('div', { style: titleStyle }),
            React.createElement(
              'div',
              { style: detailsStyle },
              React.createElement(
                'span',
                null,
                'Price: ',
                this.props.data.yelpPrice
              ),
              React.createElement('br', null),
              React.createElement(
                'span',
                null,
                'Cusine: ',
                this.props.data.yelpCategory
              ),
              React.createElement('br', null),
              React.createElement(
                'span',
                null,
                'Yelp Rating: ',
                this.props.data.yelpRating
              ),
              React.createElement('br', null)
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                'a',
                { href: this.props.data.yelpUrl, target: '_blank' },
                'Yelp Reviews (',
                this.props.data.yelpReviewCount,
                ') ...'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-xs-2' },
            React.createElement(
              'div',
              { style: imageDivStyle },
              React.createElement('img', { src: this.props.data.yelpImageUrl, alt: 'Mountain View', style: imageStyle })
            ),
            React.createElement('br', null),
            React.createElement(
              'div',
              null,
              React.createElement(
                'button',
                { style: favBtn, className: 'btn btn-warning' },
                'Favourite This'
              )
            )
          )
        )
      );
    }
  }]);

  return FavouriteEntry;
}(React.Component);

window.FavouriteEntry = FavouriteEntry;