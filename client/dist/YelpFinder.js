'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YelpFinder = function (_React$Component) {
  _inherits(YelpFinder, _React$Component);

  function YelpFinder(props) {
    _classCallCheck(this, YelpFinder);

    var _this = _possibleConstructorReturn(this, (YelpFinder.__proto__ || Object.getPrototypeOf(YelpFinder)).call(this, props));

    _this.state = {
      term: '',
      location: ''
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleSearch = _this.handleSearch.bind(_this);
    return _this;
  }

  _createClass(YelpFinder, [{
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(event) {
      event.preventDefault();
      this.props.search(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'col-xs-12' },
        React.createElement(
          'form',
          null,
          React.createElement(
            'div',
            { className: 'col-xs-9' },
            React.createElement(
              'div',
              { className: 'col-xs-5' },
              React.createElement('input', { className: 'form-control', name: 'term', type: 'text', value: this.state.term, onChange: this.handleInputChange, placeholder: 'Find Restaurant ...' })
            ),
            React.createElement(
              'div',
              { className: 'col-xs-5' },
              React.createElement('input', { className: 'form-control', name: 'location', type: 'text', value: this.state.location, onChange: this.handleInputChange, placeholder: 'Location..' })
            ),
            React.createElement(
              'div',
              { className: 'col-xs-2' },
              React.createElement(
                'button',
                { type: 'button', className: 'form-control btn btn-warning', onClick: this.handleSearch },
                'Search'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-xs-9 text-center' },
            React.createElement('label', { text: this.props.message, value: this.props.message })
          )
        )
      );
    }
  }]);

  return YelpFinder;
}(React.Component);

window.YelpFinder = YelpFinder;