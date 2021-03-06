'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      term: '',
      location: '',
      restaurant: '',
      numberOfGuests: ''
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleSearch = _this.handleSearch.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      console.log(event);
      var name = event.target.id;
      var value = event.target.value;
      console.log('eventName: ' + name + 'vaue: ' + value);
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(event) {
      alert('here');
      event.preventDefault();
      this.props.searchHandler(this.state());
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          null,
          React.createElement('input', {
            name: 'numberOfGuests',
            type: 'number',
            value: this.state.numberOfGuests,
            onChange: this.handleInputChange, id: 'number' }),
          React.createElement('input', null),
          React.createElement(
            'button',
            { type: 'button' },
            'Submit'
          )
        )
      );
    }
  }]);

  return Search;
}(React.Component);

window.Search = Search;