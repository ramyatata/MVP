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
      userId: 2,
      userRating: '',
      userReview: '',
      yelpId: '',
      yelpName: '',
      yelpAddress1: '',
      yelpAddress2: '',
      yelpCity: '',
      yelpState: '',
      yelpZipcode: '',
      yelpPhone: '',
      yelpCategory: '',
      yelpRating: '',
      yelpPrice: '',
      yelpReviewCount: '',
      yelpUrl: '',
      yelpImageUrl: '',
      yelpList: [],
      errorMessage: ''
    };

    _this.callServiceAddRestaurantReview = _this.callServiceAddRestaurantReview.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.callServiceFetchYelpData = _this.callServiceFetchYelpData.bind(_this);
    _this.callServiceAddReview = _this.callServiceAddReview.bind(_this);
    _this.callServiceConstructRestaurantData = _this.callServiceConstructRestaurantData.bind(_this);
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
    }
  }, {
    key: 'callServiceConstructRestaurantData',
    value: function callServiceConstructRestaurantData(data) {
      this.setState({
        userRating: data.userRating,
        userReview: data.userReview,
        yelpId: data.id,
        yelpName: data.name,
        yelpAddress1: data.location.address1,
        yelpAddress2: data.location.address2,
        yelpCity: data.location.city,
        yelpState: data.location.state,
        yelpZipcode: data.location.zip_code,
        yelpPhone: data.display_phone,
        yelpCategory: data.categories.alias,
        yelpRating: data.rating,
        yelpPrice: data.price,
        yelpReviewCount: data.review_count,
        yelpUrl: data.url,
        yelpImageUrl: data.image_url
      });
      return this.state;
    }
  }, {
    key: 'callServiceAddRestaurantReview',
    value: function callServiceAddRestaurantReview(values) {
      var restaurantData = this.callServiceConstructRestaurantData(values);
      services.restaurants.create(restaurantData, function (newRestaurant, err) {
        if (newRestaurant) {
          console.log(newRestaurant);
          // this.setState({
          //   'message_review': 'Restaurant is added',
          //   'clear_review' : true
          // });
        } else {
          this.setState('errorMessage');
        }
      });
    }
  }, {
    key: 'callServiceAddRestaurant',
    value: function callServiceAddRestaurant(resData) {
      alert('in');

      console.log(resData);

      //
      //console.log(JSON.stringify(restaurantData));
      // services.restaurants.create(values, function(newRestaurant, err){
      //   if(newRestaurant){
      //     // this.setState({
      //     //   'message_review': 'Restaurant is added',
      //     //   'clear_review' : true
      //     // });
      //   } else {
      //     // this.setState('message_review': err.message);
      //   }
      // });
    }
  }, {
    key: 'callServiceFetchYelpData',
    value: function callServiceFetchYelpData(searchCriteria) {
      var _this2 = this;

      window.fetchYelpData(searchCriteria, function (results, err) {
        if (results) {
          _this2.setState({ 'yelpList': results });
          console.log(_this2.state.yelpList.length);
        } else {
          _this2.setState({ 'errorMessage': err.message });
        }
      });
    }
  }, {
    key: 'callServiceAddReview',
    value: function callServiceAddReview(data) {
      var _this3 = this;

      var html = "<div class='col-xs-12'>" + "<div class = 'form-group row'>" + "<label class = 'col-xs-5 label-control'>Rating</label>" + "<div class ='col-xs-7'>" + "<select class = 'form-control' id='userRating'>" + "<option value='1'>One</option>" + "<option value='2'>Two</option>" + "<option value='3'>Three</option>" + "<option value='4'>Four</option>" + "<option value='5'>Five</option>" + "</select>" + "</div>" + "</div>" + "<div class = 'form-group row'>" + "<label class = 'col-xs-5'>Review</label>" + "<div class ='col-xs-7'>" + "<textarea class = 'form-control' id='userReview' rows='3'></textarea>" + "</div>" + "</div>" + "</div>";
      var self = this;

      var dialog = bootbox.dialog({
        title: 'Review ' + data.name,
        message: html,
        buttons: {
          noclose: {
            label: 'Add Review',
            className: 'btn-warning',
            callback: function callback() {
              var userReview = $('#userReview').val();
              var userRating = $('#userRating').val();

              data.userReview = userReview;
              data.userRating = userRating;

              _this3.callServiceAddRestaurantReview(data);
            }
          },
          ok: {
            label: 'Cancel',
            className: 'btn-info',
            callback: function callback() {}
          }
        }
      });
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
          'Review Restaurant'
        ),
        React.createElement(YelpFinder, { search: this.callServiceFetchYelpData }),
        React.createElement(YelpList, { data: this.state.yelpList, addReview: this.callServiceAddReview })
      );
    }
  }]);

  return ReviewContainer;
}(React.Component);

window.ReviewContainer = ReviewContainer;