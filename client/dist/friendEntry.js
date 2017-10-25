'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FriendEntry = function (_React$Component) {
    _inherits(FriendEntry, _React$Component);

    function FriendEntry(props) {
        _classCallCheck(this, FriendEntry);

        var _this = _possibleConstructorReturn(this, (FriendEntry.__proto__ || Object.getPrototypeOf(FriendEntry)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(FriendEntry, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'row col-xs-3' },
                    React.createElement(
                        'h3',
                        null,
                        React.createElement(
                            'span',
                            null,
                            this.props.firstName
                        ),
                        '\xA0',
                        React.createElement(
                            'span',
                            null,
                            this.props.lastName
                        )
                    ),
                    React.createElement(
                        'h4',
                        null,
                        this.props.userName
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-xs-2' },
                    React.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-success btn-circle' },
                        React.createElement('i', { className: 'glyphicon glyphicon-link' })
                    )
                )
            );
        }
    }]);

    return FriendEntry;
}(React.Component);

window.FriendEntry = FriendEntry;