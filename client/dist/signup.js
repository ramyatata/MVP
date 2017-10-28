'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_React$Component) {
    _inherits(Signup, _React$Component);

    function Signup() {
        _classCallCheck(this, Signup);

        var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));

        _this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: ''
        };

        _this.handleSignupClick = _this.handleSignupClick.bind(_this);
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleLoginClick = _this.handleLoginClick.bind(_this);
        return _this;
    }

    _createClass(Signup, [{
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
            this.props.addUser(this.state);
        }
    }, {
        key: 'handleLoginClick',
        value: function handleLoginClick() {
            ReactDOM.render(React.createElement(Login, null), document.getElementById('root'));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                password: ''
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'col-xs-4 col-xs-offset-4' },
                React.createElement(
                    'form',
                    null,
                    React.createElement(
                        'div',
                        { className: 'col-xs-12 text-center' },
                        React.createElement(
                            'h3',
                            null,
                            'Signup in Seconds'
                        ),
                        React.createElement('br', null),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-12' },
                        React.createElement(
                            'div',
                            { className: 'input-group input-group-lg' },
                            React.createElement(
                                'span',
                                { className: 'input-group-addon' },
                                React.createElement('span', { className: 'glyphicon glyphicon-user' })
                            ),
                            React.createElement('input', { className: 'form-control', type: 'text', name: 'firstName', placeholder: 'First Name', onChange: this.handleInputChange })
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'div',
                            { className: 'input-group input-group-lg' },
                            React.createElement(
                                'span',
                                { className: 'input-group-addon' },
                                React.createElement('span', { className: 'glyphicon glyphicon-user' })
                            ),
                            React.createElement('input', { className: 'form-control', type: 'text', name: 'lastName', placeholder: 'Last Name', onChange: this.handleInputChange })
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'div',
                            { className: 'input-group input-group-lg col-xs-12' },
                            React.createElement(
                                'span',
                                { className: 'input-group-addon' },
                                React.createElement('span', { className: 'glyphicon glyphicon-user' })
                            ),
                            React.createElement('input', { className: 'form-control', type: 'text', name: 'userName', placeholder: 'User Name', onChange: this.handleInputChange })
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'div',
                            { className: 'input-group input-group-lg col-xs-12' },
                            React.createElement(
                                'span',
                                { className: 'input-group-addon' },
                                React.createElement('span', { className: 'glyphicon glyphicon-envelope' })
                            ),
                            React.createElement('input', { className: 'form-control', type: 'text', name: 'email', placeholder: 'Email', onChange: this.handleInputChange })
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'div',
                            { className: 'input-group input-group-lg col-xs-12' },
                            React.createElement(
                                'span',
                                { className: 'input-group-addon' },
                                React.createElement('span', { className: 'glyphicon glyphicon-lock' })
                            ),
                            React.createElement('input', { className: 'form-control', type: 'password', name: 'password', placeholder: 'Password', onChange: this.handleInputChange })
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'div',
                            { className: 'col-xs-12' },
                            React.createElement(
                                'button',
                                { type: 'button', className: 'btn btn-info btn-block btn-lg', onClick: this.handleSignupClick },
                                'Sign up'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-xs-12' },
                            React.createElement(
                                'h4',
                                { onClick: this.handleLoginClick },
                                'Already Have an account ? Click here to Login'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Signup;
}(React.Component);

window.Signup = Signup;