class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName:'',
            lastName:'',
            userName:'',
            email:'',
            password:''
        };

        this.handleSignupClick = this.handleSignupClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({[name]: value});
    }

    handleSignupClick(){
        this.props.addUser(this.state);
    }

    handleLoginClick() {
        ReactDOM.render(<Login />, document.getElementById('root'));
    }

    componentDidMount(){
      this.setState({
         firstName:'',
            lastName:'',
            userName:'',
            email:'',
            password:''
      });
    }

    render() {
        return (
            <div className='col-xs-4 col-xs-offset-4'>
                <form>
                    <div className='col-xs-12 text-center'>
                        <h3>Signup in Seconds</h3>
                        <br />
                        <br />
                    </div>
                    <div className='col-xs-12'>
                        <div className='input-group input-group-lg'>
                            <span className='input-group-addon'><span className='glyphicon glyphicon-user'></span></span>
                            <input className='form-control' type='text' name='firstName' placeholder='First Name' onChange={this.handleInputChange}/>
                        </div>
                        <br />
                        <div className='input-group input-group-lg'>
                            <span className='input-group-addon'><span className='glyphicon glyphicon-user'></span></span>
                            <input className='form-control' type='text' name='lastName' placeholder='Last Name' onChange={this.handleInputChange}/>
                        </div>
                        <br />
                        <div className='input-group input-group-lg col-xs-12'>
                            <span className='input-group-addon'><span className='glyphicon glyphicon-user'></span></span>
                            <input className='form-control' type='text' name='userName' placeholder='User Name' onChange={this.handleInputChange}/>
                        </div>
                        <br />
                        <div className='input-group input-group-lg col-xs-12'>
                            <span className='input-group-addon'><span className='glyphicon glyphicon-envelope'></span></span>
                            <input className='form-control' type='text' name='email' placeholder='Email' onChange={this.handleInputChange}/>
                        </div>
                        <br />
                        <div className='input-group input-group-lg col-xs-12'>
                            <span className='input-group-addon'><span className='glyphicon glyphicon-lock'></span></span>
                            <input className='form-control' type='password' name='password' placeholder='Password' onChange={this.handleInputChange}/>
                        </div>
                        <br />
                        <div className='col-xs-12'>
                            <button type='button' className='btn btn-info btn-block btn-lg' onClick={this.handleSignupClick}>Sign up</button>
                        </div>
                        <div className='col-xs-12'>
                            <h4 onClick={this.handleLoginClick}>Already Have an account ? Click here to Login</h4>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

window.Signup = Signup;