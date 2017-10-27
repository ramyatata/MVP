// class RestaurantList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     render() {
//         const listStyle = {
//           'listStyle': 'none'
//         };

//         var entries = this.props.data.map((item, ind) => <li key={ind}><RestaurantEntry data={item} showRestaurantDetails={this.props.showRestaurantDetails}/></li>);

//         return (
//             <div>
//                 <ul style={listStyle}>
//                   {entries}
//                 </ul>
//             </div>
//         )
//     }
// }

// window.RestaurantList = RestaurantList;

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var divStyle = {
            display: 'block',
            padding: '40px',
            margin: 'auto'
        };
        var entries = this.props.data.map((item, ind) => <RestaurantEntry data={item} key={ind}/>);

        return (
            <div style={divStyle} className='col-xs-10'>{entries}</div>
        )
    }
}

window.RestaurantList = RestaurantList;