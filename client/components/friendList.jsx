class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const listStyle = {
          'listStyle': 'none'
        };

        var entries = this.props.data.map((item, ind) => <li key={ind}><FriendEntry data={item}/></li>);

        return (
            <div>
                <ul style={listStyle}>
                  {entries}
                </ul>
            </div>
        )
    }
}

window.FriendList = FriendList;