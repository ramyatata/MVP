'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReviewContainer = function (_React$Component) {
  _inherits(ReviewContainer, _React$Component);

  function ReviewContainer(props) {
    _classCallCheck(this, ReviewContainer);

    var _this = _possibleConstructorReturn(this, (ReviewContainer.__proto__ || Object.getPrototypeOf(ReviewContainer)).call(this, props));

    _this.state = {
      name: '',
      userId: 2,
      street: '',
      city: '',
      state: '',
      zipcode: '',
      cuisine: '',
      rating: '',
      price: '',
      review: ''
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(ReviewContainer, [{
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var name = event.target.name;
      var value = event.target.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.state));
      this.props.callServiceCreate(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'Leave review of restaurant'
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'form-group col-xs-9' },
            React.createElement(
              'label',
              { className: 'col-xs-3' },
              'Name'
            ),
            React.createElement(
              'div',
              { className: 'col-xs-7' },
              React.createElement('input', { className: 'form-control', name: 'name', value: this.state.name, onChange: this.handleInputChange })
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group col-xs-9' },
            React.createElement(
              'label',
              { className: 'col-xs-3' },
              'Street'
            ),
            React.createElement(
              'div',
              { className: 'col-xs-7' },
              React.createElement('input', { className: 'form-control', name: 'street', value: this.state.street, onChange: this.handleInputChange })
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group col-xs-9' },
            React.createElement(
              'label',
              { className: 'col-xs-3' },
              'City'
            ),
            React.createElement(
              'div',
              { className: 'col-xs-7' },
              React.createElement('input', { className: 'form-control', name: 'city', value: this.state.city, onChange: this.handleInputChange })
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group col-xs-9' },
            React.createElement(
              'label',
              { className: 'col-xs-3' },
              'State'
            ),
            React.createElement(
              'div',
              { className: 'col-xs-7' },
              React.createElement('input', { className: 'form-control', name: 'state', value: this.state.state, onChange: this.handleInputChange })
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group col-xs-9' },
            React.createElement(
              'label',
              { className: 'col-xs-3' },
              'Zipcode'
            ),
            React.createElement(
              'div',
              { className: 'col-xs-7' },
              React.createElement('input', { className: 'form-control', name: 'zipcode', value: this.state.zipcode, onChange: this.handleInputChange })
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group col-xs-9' },
            React.createElement(
              'label',
              { className: 'col-xs-3' },
              'Cuisine'
            ),
            React.createElement(
              'div',
              { className: 'col-xs-7' },
              React.createElement('input', { className: 'form-control', name: 'cuisine', value: this.state.cuisine, onChange: this.handleInputChange })
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group col-xs-9' },
            React.createElement(
              'label',
              { className: 'col-xs-3' },
              'Rating'
            ),
            React.createElement(
              'div',
              { className: 'col-xs-7' },
              React.createElement(
                'select',
                { className: 'form-control', name: 'rating', value: this.state.rating, onChange: this.handleInputChange },
                React.createElement(
                  'option',
                  { value: '1' },
                  'One'
                ),
                React.createElement(
                  'option',
                  { value: '2' },
                  'Two'
                ),
                React.createElement(
                  'option',
                  { value: '3' },
                  'Three'
                ),
                React.createElement(
                  'option',
                  { value: '4' },
                  'Four'
                ),
                React.createElement(
                  'option',
                  { value: '5' },
                  'Five'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group col-xs-9' },
            React.createElement(
              'label',
              { className: 'col-xs-3' },
              'Price Range'
            ),
            React.createElement(
              'div',
              { className: 'col-xs-7' },
              React.createElement(
                'select',
                { className: 'form-control', name: 'price', value: this.state.Price, onChange: this.handleInputChange },
                React.createElement(
                  'option',
                  { value: '1' },
                  '$'
                ),
                React.createElement(
                  'option',
                  { value: '2' },
                  '$$'
                ),
                React.createElement(
                  'option',
                  { value: '3' },
                  '$$$'
                ),
                React.createElement(
                  'option',
                  { value: '4' },
                  '$$$$'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group col-xs-9' },
            React.createElement(
              'label',
              { className: 'col-xs-3' },
              'Review'
            ),
            React.createElement(
              'div',
              { className: 'col-xs-7' },
              React.createElement('textarea', { className: 'form-control', name: 'review', rows: '3', value: this.state.Review, onChange: this.handleInputChange })
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group col-xs-9' },
            React.createElement(
              'label',
              { className: 'col-xs-3' },
              'Picture'
            ),
            React.createElement(
              'div',
              { className: 'col-xs-7' },
              React.createElement('input', { className: 'form-control', name: 'name' })
            )
          ),
          React.createElement(
            'div',
            { className: 'row col-xs-9 text-center' },
            React.createElement(
              'button',
              { className: 'btn btn-default btn-primary bold', type: 'button', onClick: this.handleSubmit },
              'Add Restaurant'
            )
          )
        )
      );
    }
  }]);

  return ReviewContainer;
}(React.Component);

//export default ReviewContainer;


window.ReviewContainer = ReviewContainer;