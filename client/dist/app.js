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
      name: 'Ram'
    };

    _this.callServiceAddRestaurant = _this.callServiceAddRestaurant.bind(_this);
    _this.callServiceListRestaurant = _this.callServiceListRestaurant.bind(_this);
    _this.callServiceAddFriend = _this.callServiceAddFriend.bind(_this);
    _this.callServiceListFriend = _this.callServiceListFriend.bind(_this);
    _this.callServiceAddUser = _this.callServiceAddUser.bind(_this);
    _this.callServiceListUser = _this.callServiceListUser.bind(_this);
    _this.callServiceShowRestaurantDetails = _this.callServiceShowRestaurantDetails.bind(_this);
    _this.callServiceFetchYelpData = _this.callServiceFetchYelpData.bind(_this);

    return _this;
  }
  //Restaurant


  _createClass(App, [{
    key: 'callServiceAddRestaurant',
    value: function callServiceAddRestaurant(values) {
      services.restaurants.create(values, function (newRestaurant, err) {
        if (newRestaurant) {
          this.setState({
            'message_review': 'Restaurant is added',
            'clear_review': true
          });
        } else {
          this.setState('message_review');
        }
      });
    }
  }, {
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

    //Friend

  }, {
    key: 'callServiceAddFriend',
    value: function callServiceAddFriend(values) {
      services.friends.create(values, function (newFriend, err) {
        if (newFriend) {
          this.setState({});
        } else {
          this.setState('message_friend');
        }
      });
    }
  }, {
    key: 'callServiceListFriend',
    value: function callServiceListFriend() {
      var self = this;
      services.friends.list(function (friends, err) {
        if (friends) {
          self.setState({
            //'friendsList': friends
          });
        } else {
          self.setState('message_friend');
        }
      });
    }

    //Users

  }, {
    key: 'callServiceAddUser',
    value: function callServiceAddUser(values) {
      services.users.create(values, function (newUser, err) {
        if (newUser) {
          this.setState({});
        } else {
          this.setState('message_user');
        }
      });
    }
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
  }, {
    key: 'callServiceuserNewFriendList',
    value: function callServiceuserNewFriendList(userId) {
      var users = [];
      var friends = [];
      var newFriends = [];
      // services.users.list(function(results, err){
      //   if(results){
      //     users = results.filter((user) => user.id !== this.state.currentUser);
      //     services.friends.list(function(results, err){
      //       if(results){
      //         newFriends = users.filter(function(user){})
      //       } else {
      //         self.setState('message_friend': err.message);
      //       }
      //     })
      //   } else {
      //     self.setState('message_friend': err.message);
      //   }
      // })
    }
  }, {
    key: 'callServiceFetchYelpData',
    value: function callServiceFetchYelpData() {
      window.fetchYelpData(function (results, err) {});
    }
  }, {
    key: 'callServiceShowRestaurantDetails',
    value: function callServiceShowRestaurantDetails(data) {
      this.callServiceFetchYelpData();

      var review1 = 'THiss dasasd das dasdasfrr rewwer we r ewrwer w err. ewrewrwerewrr';
      var review2 = 'THiss dasasd das dasdasfrr rewwer we r ewrwer w err. ewrewrwerewrr';
      var review3 = 'THiss dasasd das dasdasfrr rewwer we r ewrwer w err. ewrewrwerewrr';

      var html = "<div class='row'><div class='col-xs-6'>" + "<h5>Cuisine : " + data.cusine + "</h5>" + "<h5>Rating : " + data.rating + "</h5>" + "<h5><span>Price : " + data.price + "</span></h5></div><div class='col-xs-6'>" + "<span>" + data.street + "</span><br/><span>" + data.city + "</span><br/>" + "<span>" + data.state + "</span>&nbsp;&nbsp;&nbsp;<span>" + data.zipcode + "</span><br/>" + "</div></div><div class='col-xs-12'>" + "<p>" + data.review + "</p></div>" + "<h6>" + review1 + "</h6>" + "<h6>" + review2 + "</h6>" + "<h6>" + review3 + "</h6>";

      var dialog = bootbox.dialog({
        title: data.name,
        message: html,
        buttons: {
          noclose: {
            label: 'Favourite',
            className: 'btn-warning',
            callback: function callback() {}
          },
          ok: {
            label: 'Ok',
            className: 'btn-info',
            callback: function callback() {}
          }
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.callServiceListRestaurant();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'ul',
          { className: 'nav nav-tabs nav-justified' },
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#review', 'data-toggle': 'tab' },
              'Write Review'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#restaurants', 'data-toggle': 'tab' },
              'Find Restaurant'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#friends', 'data-toggle': 'tab' },
              'Friends'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#login', 'data-toggle': 'tab' },
              'Login'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'tab-content' },
          React.createElement(
            'div',
            { className: 'tab-pane', id: 'review' },
            React.createElement(ReviewContainer, { callServiceCreate: this.callServiceAddRestaurant, message: this.state.message })
          ),
          React.createElement(
            'div',
            { className: 'tab-pane', id: 'restaurants' },
            React.createElement(RestaurantPane, { restaurants: this.state.restaurantsList, showRestaurantDetails: this.callServiceShowRestaurantDetails })
          ),
          React.createElement(
            'div',
            { className: 'tab-pane', id: 'friends' },
            React.createElement(FriendsPane, null)
          ),
          React.createElement(
            'div',
            { className: 'tab-pane', id: 'login' },
            React.createElement(Login, null)
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

window.App = App;