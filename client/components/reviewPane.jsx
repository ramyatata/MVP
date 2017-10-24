class ReviewContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      userId: 2,
      street: '',
      city: '',
      state:'',
      zipcode: '',
      cuisine: '',
      rating: '',
      price: '',
      review: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    this.props.callServiceCreate(this.state);
  }

  render() {
    return(
      <div>
        <h2>Leave review of restaurant</h2>
        <div className='row'>
          <div className='form-group col-xs-9'>
            <label className='col-xs-3'>Name</label>
            <div className='col-xs-7'>
              <input className='form-control' name='name' value={this.state.name} onChange={this.handleInputChange}></input>
            </div>
          </div>
          <div className='form-group col-xs-9'>
            <label className='col-xs-3'>Street</label>
            <div className='col-xs-7'>
              <input className='form-control' name='street' value={this.state.street} onChange={this.handleInputChange}></input>
            </div>
          </div>
          <div className='form-group col-xs-9'>
            <label className='col-xs-3'>City</label>
            <div className='col-xs-7'>
              <input className='form-control' name='city' value={this.state.city} onChange={this.handleInputChange}></input>
            </div>
          </div>
          <div className='form-group col-xs-9'>
            <label className='col-xs-3'>State</label>
            <div className='col-xs-7'>
              <input className='form-control' name='state' value={this.state.state} onChange={this.handleInputChange}></input>
            </div>
          </div>
          <div className='form-group col-xs-9'>
            <label className='col-xs-3'>Zipcode</label>
            <div className='col-xs-7'>
              <input className='form-control' name='zipcode' value={this.state.zipcode} onChange={this.handleInputChange}></input>
            </div>
          </div>
          <div className='form-group col-xs-9'>
            <label className='col-xs-3'>Cuisine</label>
            <div className='col-xs-7'>
              <input className='form-control' name='cuisine' value={this.state.cuisine} onChange={this.handleInputChange}></input>
            </div>
          </div>
          <div className='form-group col-xs-9'>
            <label className='col-xs-3'>Rating</label>
            <div className='col-xs-7'>
            <select className='form-control' name='rating' value={this.state.rating} onChange={this.handleInputChange}>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
              <option value='4'>Four</option>
              <option value='5'>Five</option>
            </select>
            </div>
          </div>

          <div className='form-group col-xs-9'>
            <label className='col-xs-3'>Price Range</label>
            <div className='col-xs-7' >
              <select className='form-control' name='price' value={this.state.Price} onChange={this.handleInputChange}>
              <option value='1'>$</option>
              <option value='2'>$$</option>
              <option value='3'>$$$</option>
              <option value='4'>$$$$</option>
            </select>
            </div>
          </div>
          <div className='form-group col-xs-9'>
            <label className='col-xs-3'>Review</label>
            <div className='col-xs-7'>
              <textarea className='form-control' name='review' rows='3' value={this.state.Review} onChange={this.handleInputChange}></textarea>
            </div>
          </div>
          <div className='form-group col-xs-9'>
            <label className='col-xs-3'>Picture</label>
            <div className='col-xs-7'>
              <input className='form-control' name='name'></input>
            </div>
          </div>
          <div className='row col-xs-9 text-center'>
            <button className='btn btn-default btn-primary bold' type='button' onClick={this.handleSubmit}>Add Restaurant</button>
          </div>
        </div>
      </div>
    )
  }
}

//export default ReviewContainer;
window.ReviewContainer = ReviewContainer;