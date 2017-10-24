class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className = 'form-group row'>
          <label className = 'col-xs-4 label-control'>First Name</label>
          <div className ='col-xs-4'>
            <input className = 'form-control' name = 'firstName' type = 'text'/>
          </div>
        </div>
        <div className = 'form-group row'>
          <label className = 'col-xs-4'>lastName</label>
          <div className ='col-xs-4'>
            <input className = 'form-control' name = 'lastName' type = 'password'/>
          </div>
        </div>
        <div className = 'form-group row'>
          <label className = 'col-xs-4 label-control'>email</label>
          <div className ='col-xs-4'>
            <input className = 'form-control' name = 'email' type = 'text'/>
          </div>
        </div>
        <div className = 'form-group row'>
          <label className = 'col-xs-4 label-control'>UserName</label>
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

window.Signup = Signup;