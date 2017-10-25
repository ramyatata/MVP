class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const listStyle = {
          'listStyle': 'none'
        };

        var entries = this.props.data.map((item, ind) => <li key={ind}><RestaurantEntry data={item} showRestaurantDetails={this.props.showRestaurantDetails}/></li>);

        return (
            <div>
                <ul style={listStyle}>
                  {entries}
                </ul>
            </div>
        )
    }
}

window.RestaurantList = RestaurantList;