'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FavouriteList = function (_React$Component) {
    _inherits(FavouriteList, _React$Component);

    function FavouriteList(props) {
        _classCallCheck(this, FavouriteList);

        var _this = _possibleConstructorReturn(this, (FavouriteList.__proto__ || Object.getPrototypeOf(FavouriteList)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(FavouriteList, [{
        key: 'render',
        value: function render() {
            var divStyle = {
                display: 'block',
                margin: 'auto'
            };
            var entries = this.props.data.map(function (item, ind) {
                return React.createElement(FavouriteEntry, { data: item.restaurant, key: ind });
            });

            return React.createElement(
                'div',
                { style: divStyle, className: 'col-xs-10' },
                entries
            );
        }
    }]);

    return FavouriteList;
}(React.Component);

window.FavouriteList = FavouriteList;