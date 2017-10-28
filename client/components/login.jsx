class Login extends React.Component {
    constructor() {
      super();
      this.state = {
        userName:'',
        password:''
      };

      this.handleSignupClick = this.handleSignupClick.bind(this);
      this.callServiceLoginUser = this.callServiceLoginUser.bind(this);
      this.callServiceCreateUser = this.callServiceCreateUser.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
      const target = event.target;
      const name = target.name;
      const value = target.value;
      this.setState({[name]: value});
    }
    handleSignupClick(){
      ReactDOM.render(<Signup addUser={this.callServiceCreateUser}/>, document.getElementById('root'));
    }
    callServiceLoginUser(){
      var values = this.state;
      services.users.login(values, (newUser, err) => {
        if(newUser) {
          this.setState({
            userName:'',
            password:''
          });
          ReactDOM.render(<App user={newUser}/>, document.getElementById('root'));
        } else {
          console.log('Login user err');
        }
      });
    }
    callServiceCreateUser(values){
      services.users.create(values, (newUser, err) => {
        if(newUser) {
          ReactDOM.render(<App user={newUser}/>, document.getElementById('root'));
        } else {
          console.log('Create user err');
        }
      });
    }
    componentDidMount(){
      this.setState({
        userName:'',
        password:''
      });
    }


    render() {
        return (
            <div className='col-xs-3 col-xs-offset-4'>
                <form>
                    <div className='col-xs-12 text-center'>
                        <h3>Login to Your Account</h3>
                        <br />
                        <br />
                    </div>
                    <div className='input-group input-group-lg'>
                        <span className='input-group-addon'><span className='glyphicon glyphicon-user'></span></span>
                        <input className='form-control' type='text' placeholder='Username' name='userName' onChange={this.handleInputChange}/>
                    </div>
                    <br/>
                    <div className='input-group input-group-lg'>
                        <span className='input-group-addon'><span className='glyphicon glyphicon-lock'></span></span>
                        <input className='form-control' type='password' placeholder='Password' name='password' onChange={this.handleInputChange}/>
                    </div>
                    <br/>
                    <div className='col-xs-12'>
                        <button type='button' className='btn btn-success btn-lg btn-block' onClick={this.callServiceLoginUser}>Login</button>
                    </div>
                    <div className='col-xs-12 text-center'>
                        <h4 onClick={this.handleSignupClick}>New here? Create an account.</h4>
                    </div>
                </form>
            </div>
        )
    }
}


window.Login = Login;

ReactDOM.render(<Login />, document.getElementById('root'));