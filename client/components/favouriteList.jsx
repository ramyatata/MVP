class FavouriteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var divStyle = {
            display: 'block',
            margin: 'auto'
        };
        var entries = this.props.data.map((item, ind) => <FavouriteEntry data={item.restaurant} key={ind} />);

        return (
            <div style={divStyle} className='col-xs-10'>{entries}</div>
        )
    }
}

window.FavouriteList = FavouriteList;