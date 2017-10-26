class YelpList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const listStyle = {
          'listStyle': 'none'
        };

        var entries = this.props.data.map((item, ind) => <li key={ind}><YelpEntry data={item} addReview={this.props.addReview}/></li>);

        return (
            <div>
                <ul style={listStyle}>
                  {entries}
                </ul>
            </div>
        )
    }
}

window.YelpList = YelpList;