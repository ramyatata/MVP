'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YelpList = function (_React$Component) {
    _inherits(YelpList, _React$Component);

    function YelpList(props) {
        _classCallCheck(this, YelpList);

        var _this = _possibleConstructorReturn(this, (YelpList.__proto__ || Object.getPrototypeOf(YelpList)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(YelpList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var divStyle = {
                marginTop: '20px',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            };
            var entries = this.props.data.map(function (item, ind) {
                return React.createElement(YelpEntry, { data: item, key: ind, addReview: _this2.props.addReview });
            });

            return React.createElement(
                'div',
                { className: 'col-xs-12', style: divStyle },
                entries
            );
        }
    }]);

    return YelpList;
}(React.Component);

window.YelpList = YelpList;