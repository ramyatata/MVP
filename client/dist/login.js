'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.state = {
      userName: '',
      password: '',
      user: {}
    };

    _this.handleSignupClick = _this.handleSignupClick.bind(_this);
    _this.callServiceLoginUser = _this.callServiceLoginUser.bind(_this);
    _this.callServiceCreateUser = _this.callServiceCreateUser.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSignupClick',
    value: function handleSignupClick() {
      ReactDOM.render(React.createElement(Signup, { addUser: this.callServiceCreateUser }), document.getElementById('root'));
    }
  }, {
    key: 'callServiceLoginUser',
    value: function callServiceLoginUser() {
      var _this2 = this;

      var values = this.state;
      services.users.login(values, function (newUser, err) {
        if (newUser) {
          _this2.setState({
            userName: '',
            password: ''
          });
          _this2.setState({ 'user': newUser });
          console.log('logged in user');
          console.log(_this2.state.user);
          ReactDOM.render(React.createElement(App, { user: _this2.state.user }), document.getElementById('root'));
        } else {
          console.log('Login user err');
        }
      });
    }
  }, {
    key: 'callServiceCreateUser',
    value: function callServiceCreateUser(values) {
      var _this3 = this;

      services.users.create(values, function (newUser, err) {
        if (newUser) {
          _this3.setState({ 'user': newUser });
          ReactDOM.render(React.createElement(App, { user: _this3.state.user }), document.getElementById('root'));
        } else {
          console.log('Create user err');
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        userName: '',
        password: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'col-xs-3 col-xs-offset-4' },
        React.createElement(
          'form',
          null,
          React.createElement(
            'div',
            { className: 'col-xs-12 text-center' },
            React.createElement(
              'h3',
              null,
              'Login to Your Account'
            ),
            React.createElement('br', null),
            React.createElement('br', null)
          ),
          React.createElement(
            'div',
            { className: 'input-group input-group-lg' },
            React.createElement(
              'span',
              { className: 'input-group-addon' },
              React.createElement('span', { className: 'glyphicon glyphicon-user' })
            ),
            React.createElement('input', { className: 'form-control', type: 'text', placeholder: 'Username', name: 'userName', onChange: this.handleInputChange })
          ),
          React.createElement('br', null),
          React.createElement(
            'div',
            { className: 'input-group input-group-lg' },
            React.createElement(
              'span',
              { className: 'input-group-addon' },
              React.createElement('span', { className: 'glyphicon glyphicon-lock' })
            ),
            React.createElement('input', { className: 'form-control', type: 'password', placeholder: 'Password', name: 'password', onChange: this.handleInputChange })
          ),
          React.createElement('br', null),
          React.createElement(
            'div',
            { className: 'col-xs-12' },
            React.createElement(
              'button',
              { type: 'button', className: 'btn btn-success btn-lg btn-block', onClick: this.callServiceLoginUser },
              'Login'
            )
          ),
          React.createElement(
            'div',
            { className: 'col-xs-12 text-center' },
            React.createElement(
              'h4',
              { onClick: this.handleSignupClick },
              'New here? Create an account.'
            )
          )
        )
      );
    }
  }]);

  return Login;
}(React.Component);

window.Login = Login;

ReactDOM.render(React.createElement(Login, null), document.getElementById('root'));