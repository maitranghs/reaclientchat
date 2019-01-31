import React, {Component} from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChangeUsername(e) {
        this.setState({username: e.target.value})
    }
    handleChangePassword(e) {
        this.setState({password: e.target.value})
    }
    handleSubmit() {
        this.props.client.register('Bui Thi Mai Trang', this.state.username, this.state.password, (loggedUser, users) => {
            this.props.fnSubmittedUser(loggedUser, users)
        })
    }
    render() {
        return (
            <div className="wrapper">
                <div className="inner-wrapper">
                    <div className="row">
                        <div className="prop-left">Username/ Email (*)</div>
                        <input type="text" value={this.state.username} onChange={this.handleChangeUsername}/>
                    </div>
                    <div className="row">
                        <div className="prop-left">Password (optional)</div>
                        <input type="password" value={this.state.password} onChange={this.handleChangePassword}/>
                    </div>
                    <div className="row">
                        <button onClick={this.handleSubmit}>GO!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login