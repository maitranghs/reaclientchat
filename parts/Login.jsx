import React, {Component} from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: undefined
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
        this.props.client.register('', this.state.username, this.state.password, (err, loggedUser, users) => {
            if (err) {
                this.setState({error: err})
            } else {
                this.setState({error: undefined})
                this.props.fnSubmittedUser(loggedUser, users)
            }
        })
    }
    render() {
        return (
            <div className="wrapper">
                { this.state.error && <p className="error">{this.state.error}</p>}
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