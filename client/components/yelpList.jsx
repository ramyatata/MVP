class YelpList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var divStyle = {
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        };
        var entries = this.props.data.map((item, ind) => <YelpEntry data={item} key={ind} addReview={this.props.addReview}/>);

        return (
            <div className='col-xs-12' style={divStyle}>{entries}</div>
        )
    }
}
window.YelpList = YelpList;