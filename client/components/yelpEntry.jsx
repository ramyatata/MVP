class YelpEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      this.props.addReview(this.props.data);
    }

    render() {
        return (
            <div>
                <div className='row col-xs-9' onClick={this.handleClick}>
                    <div className='col-xs-6'>
                        <h4>{this.props.data.name}</h4>
                        <h5>Rating : {this.props.data.rating}</h5>
                        <h5><span>Price: {this.props.data.price}</span>&nbsp;&nbsp;&nbsp;<span>Category: {this.props.data.categories[0].alias}</span></h5>
                    </div>
                    <div className='col-xs-6'>
                        <span>{this.props.data.location.address1}</span><br/>
                        <span>{this.props.data.location.city}</span><br/>
                        <span>{this.props.data.location.state}</span>&nbsp;&nbsp;&nbsp;<span>{this.props.data.location.zip_code}</span><br/>
                        <span>{this.props.data.display_phone}</span><br/>
                    </div>
                </div>
            </div>
        )
    }
}

window.YelpEntry = YelpEntry;