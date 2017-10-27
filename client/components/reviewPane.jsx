class ReviewContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: 2,
      userRating:'',
      userReview:'',
      yelpId:'',
      yelpName:'',
      yelpAddress1:'',
      yelpAddress2:'',
      yelpCity:'',
      yelpState:'',
      yelpZipcode:'',
      yelpPhone:'',
      yelpCategory:'',
      yelpRating:'',
      yelpPrice:'',
      yelpReviewCount:'',
      yelpUrl:'',
      yelpImageUrl:'',
      yelpList: [],
      errorMessage: '',
      message_review: '',
      clearFlag_review: ''
    }

    this.callServiceAddRestaurantReview = this.callServiceAddRestaurantReview.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callServiceFetchYelpData = this.callServiceFetchYelpData.bind(this);
    this.callServiceAddReview = this.callServiceAddReview.bind(this);
    this.callServiceConstructRestaurantData = this.callServiceConstructRestaurantData.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  }

  callServiceConstructRestaurantData(data){
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
      yelpCategory: data.categories[0].alias,
      yelpRating: data.rating,
      yelpPrice: data.price,
      yelpReviewCount: data.review_count,
      yelpUrl: data.url,
      yelpImageUrl: data.image_url
    });
    return this.state;
  }

  callServiceAddRestaurantReview(values) {
    var restaurantData = this.callServiceConstructRestaurantData(values);
    services.restaurants.create(restaurantData, (newRestaurant, err)=>{
      if(newRestaurant){
        this.setState({
          'message_review': 'Restaurant is added',
          'clearFlag_review' : true
        });
        setTimeout(()=>{
          this.setState({'message_review':''});
        }, 1000);
        this.props.listRestaurants();
      } else {
        this.setState('errorMessage': err.message);
      }
    });
  }

  callServiceAddRestaurant(resData){
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

  callServiceFetchYelpData(searchCriteria){
    window.fetchYelpData(searchCriteria, (results, err) => {
      if(results) {
        this.setState({'yelpList': results});
        console.log(this.state.yelpList.length);
      } else {
        this.setState({'errorMessage': err.message});
      }
    });
  }



  callServiceAddReview(data){
    var html = "<div clas='bootbox-body row'>" +
            "<div class = 'form-group row'>" +
            "<label class = 'col-xs-5 label-control'>Rating</label>" +
            "<div class ='col-xs-7'>" +
              "<select class = 'form-control' id='userRating'>" +
                "<option value='1'>One</option>" +
                "<option value='2'>Two</option>" +
                "<option value='3'>Three</option>" +
                "<option value='4'>Four</option>" +
                "<option value='5'>Five</option>" +
              "</select>" +
            "</div>" +
          "</div>" +
          "<div class = 'form-group row'>" +
            "<label class = 'col-xs-5'>Review</label>" +
            "<div class ='col-xs-7'>" +
              "<textarea class = 'form-control' id='userReview' rows='3'></textarea>" +
            "</div>" +
          "</div>" +
         "</div>";

    var self = this;

    let dialog = bootbox.dialog({
      title: 'Review ' + data.name,
      message : html,
      buttons: {
        noclose: {
          label: 'Add Review',
          className: 'btn-warning',
          callback: () => {
            var userReview = $('#userReview').val();
            var userRating = $('#userRating').val();

            data.userReview = userReview;
            data.userRating = userRating;

            this.callServiceAddRestaurantReview(data);
          }
        },
        ok: {
          label: 'Cancel',
          className: 'btn-info',
          callback: function(){

          }
        }
      }
    });
  }

  render() {
    return(
      <div>
        <h2>Review Restaurant</h2>
          <YelpFinder search={this.callServiceFetchYelpData} message={this.props.message_review}/>
          <YelpList data={this.state.yelpList} addReview={this.callServiceAddReview} />
      </div>
    )
  }
}

window.ReviewContainer = ReviewContainer;


