'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      currentUser: 2,
      message_review: '',
      clear_review: false,
      restaurantsList: [],
      message_restaurant: '',
      newFriendsList: [],
      message_fav: '',
      favouritesList: []
    };

    _this.callServiceListRestaurant = _this.callServiceListRestaurant.bind(_this);
    _this.callServiceListUser = _this.callServiceListUser.bind(_this);
    _this.callServiceGetUserFavourites = _this.callServiceGetUserFavourites.bind(_this);
    _this.callServiceAddFavourite = _this.callServiceAddFavourite.bind(_this);
    _this.callServiceFilterRestaurants = _this.callServiceFilterRestaurants.bind(_this);
    return _this;
  }
  //Restaurant


  _createClass(App, [{
    key: 'callServiceListRestaurant',
    value: function callServiceListRestaurant() {
      var self = this;
      services.restaurants.list(function (restaurants, err) {
        if (restaurants) {
          self.setState({
            'restaurantsList': restaurants
          });
        } else {
          self.setState('message_review');
        }
      });
    }

    //Users

  }, {
    key: 'callServiceListUser',
    value: function callServiceListUser() {
      var self = this;
      services.users.list(function (users, err) {
        if (users) {
          self.setState({});
        } else {
          self.setState('message_user');
        }
      });
    }

    //Favourites

  }, {
    key: 'callServiceGetUserFavourites',
    value: function callServiceGetUserFavourites(userId) {
      var _this2 = this;

      services.favourites.get(userId, function (favs, err) {
        if (favs) {
          _this2.setState({ 'favouritesList': favs });
        } else {
          _this2.setState('message_fav');
        }
      });
    }
  }, {
    key: 'callServiceAddFavourite',
    value: function callServiceAddFavourite(restaurantId) {
      var _this3 = this;

      var userId = this.state.currentUser;
      var values = {
        userId: userId,
        restaurantId: restaurantId
      };
      services.favourites.create(values, function (newFav, err) {
        if (newFav) {
          _this3.callServiceGetUserFavourites(userId);

          var filteredList = _this3.state.restaurantsList.filter(function (restaurant) {
            return restaurant.id !== restaurantId;
          });

          _this3.setState({ restaurantsList: filteredList });
        } else {
          _this3.setState('message_fav');
        }
      });
    }
  }, {
    key: 'callServiceFilterRestaurants',
    value: function callServiceFilterRestaurants() {
      alert('clickec');
      var favouritesId = this.state.favouritesList.map(function (item) {
        return item.id;
      });
      var filteredList = this.state.restaurantsList.filter(function (item) {
        var index = favouritesId.indexOf(item.id);
        if (index === -1) {
          return true;
        }
        return false;
      });
      alert(filteredList.length);
      this.setState({ 'restaurantsList': filteredList });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.callServiceGetUserFavourites(this.callServiceGetUserFavourites(2));
      this.callServiceListRestaurant();
    }
  }, {
    key: 'render',
    value: function render() {
      var titleStyle = {
        width: '10px'
      };

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement('div', null),
        React.createElement(
          'ul',
          { className: 'nav nav-tabs nav-justified' },
          React.createElement(
            'li',
            { className: 'active' },
            React.createElement(
              'a',
              { href: '#review', 'data-toggle': 'tab' },
              'Rate & Review'
            )
          ),
          React.createElement(
            'li',
            { onClick: this.callServiceFilterRestaurants },
            React.createElement(
              'a',
              { href: '#restaurant', 'data-toggle': 'tab' },
              'Pick Restaurants'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#favourite', 'data-toggle': 'tab' },
              'Favourites'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'tab-content' },
          React.createElement(
            'div',
            { className: 'tab-pane fade in active', id: 'review' },
            React.createElement(ReviewContainer, { callServiceCreate: this.callServiceAddRestaurant, message: this.state.message, listRestaurants: this.callServiceListRestaurant })
          ),
          React.createElement(
            'div',
            { className: 'tab-pane fade', id: 'restaurant' },
            React.createElement(RestaurantPane, { restaurants: this.state.restaurantsList, addToFavourites: this.callServiceAddFavourite })
          ),
          React.createElement(
            'div',
            { className: 'tab-pane fade', id: 'favourite' },
            React.createElement(FavouritePane, { favourites: this.state.favouritesList })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

//send userId for fav restuarants - TODO -- set currentUser in state


window.App = App;