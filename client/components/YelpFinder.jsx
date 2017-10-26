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
      <form>
          <input name='term' type='text' value={this.state.term} onChange={this.handleInputChange} placeholder='Find Restaurant ...'/>
          <input name='location' type='text' value={this.state.location} onChange={this.handleInputChange} placeholder='Location..'/>
          <button type='button' onClick={this.handleSearch}>Search</button>
      </form>
    );
  }
}

window.YelpFinder = YelpFinder;