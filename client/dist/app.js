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
      message_review: '',
      clear_review: false
    };

    _this.callServiceAddRestaurant = _this.callServiceAddRestaurant.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'callServiceAddRestaurant',
    value: function callServiceAddRestaurant(values) {
      services.restaurant.create(values, function (newRestaurant, err) {
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
            React.createElement(RestaurantPane, null)
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