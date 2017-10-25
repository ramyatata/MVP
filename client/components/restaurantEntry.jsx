class RestaurantEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      this.props.showRestaurantDetails(this.props.data);
    }

    render() {
        return (
            <div>
                <div className='row col-xs-9' onClick={this.handleClick}>
                    <div className='col-xs-6'>
                        <h4>{this.props.data.name}</h4>
                        <h5>Rating : {this.props.data.rating}</h5>
                        <h5><span>Price: {this.props.data.price}</span>&nbsp;&nbsp;&nbsp;<span>Cuisine: {this.props.data.cusine}</span></h5>
                    </div>
                    <div className='col-xs-6'>
                        <span>{this.props.data.street}</span><br/>
                        <span>{this.props.data.city}</span><br/>
                        <span>{this.props.data.state}</span>&nbsp;&nbsp;&nbsp;<span>{this.props.data.zipcode}</span><br/>
                    </div>
                </div>
            </div>
        )
    }
}

window.RestaurantEntry = RestaurantEntry;