class FriendEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className='row col-xs-3'>
                    <h3>
                        <span>{this.props.firstName}</span>&nbsp;
                        <span>{this.props.lastName}</span>
                    </h3>
                    <h4>
                        {this.props.userName}
                    </h4>
                </div>
                <div className='col-xs-2'>
                    <button type='button' className='btn btn-success btn-circle'><i className='glyphicon glyphicon-link'></i></button>
                </div>
            </div>
        )
    }
}

window.FriendEntry = FriendEntry;