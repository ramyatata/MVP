class YelpFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSearch(event){
    event.preventDefault();
    this.props.search(this.state);
  }

  render() {
    return (
      <div className='col-xs-12'>
      <form>
      <div className='col-xs-9'>
          <div className='col-xs-5'>
            <input className='form-control' name='term' type='text' value={this.state.term} onChange={this.handleInputChange} placeholder='Find Restaurant ...'/>
          </div>
          <div className='col-xs-5'>
          <input className='form-control' name='location' type='text' value={this.state.location} onChange={this.handleInputChange} placeholder='Location..'/>
          </div>
          <div className='col-xs-2'>
          <button type='button' className='form-control btn btn-warning' onClick={this.handleSearch}>Search</button>
          </div>
        </div>
        <div className='col-xs-9 text-center'>
          <label text={this.props.message} value={this.props.message}></label>
        </div>
        </form>
      </div>
    );
  }
}

window.YelpFinder = YelpFinder;