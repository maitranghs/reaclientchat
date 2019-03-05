import React, {Component} from 'react'
import { connect as connectWithRedux } from "react-redux"
import { login as doLogin } from '../actions'

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
    const { doLogin } = this.props
    const { username, password } = this.state
    doLogin(username, password)
  }
  render() {
    const {
      isLoggedIn,
      error,
    } = this.props
    const {
      username,
      password
    } = this.state
    return (
      !isLoggedIn && <div className="wrapper">
        { error && <p className="error">{error}</p>}
        <div className="inner-wrapper">
          <div className="row">
            <div className="prop-left">Username/ Email (*)</div>
            <input type="text" value={username} onChange={this.handleChangeUsername}/>
          </div>
          <div className="row">
            <div className="prop-left">Password (optional)</div>
            <input type="password" value={password} onChange={this.handleChangePassword}/>
          </div>
          <div className="row">
            <button onClick={this.handleSubmit}>GO!</button>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  loggedUser: state.loggedUser.user,
  isLoggedIn: state.loggedUser.isLoggedIn,
  error: state.loggedUser.error
})
const mapDispatchToProps = dispatch => ({
  doLogin: (username, password) => dispatch(doLogin({ username, password }))
})
export default connectWithRedux(mapStateToProps, mapDispatchToProps)(Login)