'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestaurantEntry = function (_React$Component) {
    _inherits(RestaurantEntry, _React$Component);

    function RestaurantEntry(props) {
        _classCallCheck(this, RestaurantEntry);

        var _this = _possibleConstructorReturn(this, (RestaurantEntry.__proto__ || Object.getPrototypeOf(RestaurantEntry)).call(this, props));

        _this.state = {};

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(RestaurantEntry, [{
        key: 'handleClick',
        value: function handleClick() {
            this.props.showRestaurantDetails(this.props.data);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'row col-xs-9', onClick: this.handleClick },
                    React.createElement(
                        'div',
                        { className: 'col-xs-6' },
                        React.createElement(
                            'h4',
                            null,
                            this.props.data.name
                        ),
                        React.createElement(
                            'h5',
                            null,
                            'Rating : ',
                            this.props.data.rating
                        ),
                        React.createElement(
                            'h5',
                            null,
                            React.createElement(
                                'span',
                                null,
                                'Price: ',
                                this.props.data.price
                            ),
                            '\xA0\xA0\xA0',
                            React.createElement(
                                'span',
                                null,
                                'Cuisine: ',
                                this.props.data.cusine
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6' },
                        React.createElement(
                            'span',
                            null,
                            this.props.data.street
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'span',
                            null,
                            this.props.data.city
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'span',
                            null,
                            this.props.data.state
                        ),
                        '\xA0\xA0\xA0',
                        React.createElement(
                            'span',
                            null,
                            this.props.data.zipcode
                        ),
                        React.createElement('br', null)
                    )
                )
            );
        }
    }]);

    return RestaurantEntry;
}(React.Component);

window.RestaurantEntry = RestaurantEntry;