class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var divStyle = {
            display: 'block',
            margin: 'auto'
        };
        var entries = this.props.data.map((item, ind) => <RestaurantEntry data={item} key={ind} addToFavourites={this.props.addToFavourites}/>);

        return (
            <div style={divStyle} className='col-xs-10'>{entries}</div>
        )
    }
}

window.RestaurantList = RestaurantList;