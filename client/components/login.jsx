class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className = 'form-group row'>
          <label className = 'col-xs-4 label-control'>User Name</label>
          <div className ='col-xs-4'>
            <input className = 'form-control' name = 'userName' type = 'text'/>
          </div>
        </div>
        <div className = 'form-group row'>
          <label className = 'col-xs-4'>Password</label>
          <div className ='col-xs-4'>
            <input className = 'form-control' name = 'userName' type = 'password'/>
          </div>
        </div>
      </div>
    );
  }
}

window.Login = Login;