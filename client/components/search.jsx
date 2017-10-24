class Search extends React.Component{
  render() {
    return(
      <div>
        <div className='input-group col-xs-6'>
          <input type='text' className='form-control' placeholder='search restaurant...'></input>
          <span className='input-group-btn'>
            <button className='btn btn-secondary' type='button'>search</button>
          </span>
        </div>
      </div>
    )
  }
}

window.Search = Search;
