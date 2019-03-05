import React, {Component} from 'react'
import { connect as connectWithRedux } from "react-redux";
import { sendAMessage } from '../actions'

class MessageBox extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }
  handleChange(e) {
    this.setState({message: e.target.value})
  }
  handleEnter(e) {
    e.preventDefault()
    if (event.keyCode === 13) {
      let { from, to, sendMessage } = this.props
      sendMessage(from, to, this.state.message)
      this.setState({message: ''})
    }
  }
  render() {
    return (
      <div className="message-box">
        <div className="message-input">
          <input type="text" placeholder="Type a message..."
            value={this.state.message}
            onKeyUp={this.handleEnter}
            onChange={this.handleChange}/>
        </div>
        <div className="message-icons">
          <ul>
            <li>
              <img src="https://cdn1.iconfinder.com/data/icons/emoticons-8/24/Thumbs-Up_Smiley-512.png"/>
            </li>
            <li>
              <img src="https://cdn1.iconfinder.com/data/icons/emoticons-8/24/Thumbs-Up_Smiley-512.png"/>
            </li>
            <li>
              <img src="https://cdn1.iconfinder.com/data/icons/emoticons-8/24/Thumbs-Up_Smiley-512.png"/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    from: state.loggedUser.user,
    to: state.chatHistory.chattedUser
})
const mapDispatchToProps = (dispatch) => ({
  sendMessage: (from, to, message) => dispatch(sendAMessage({ from, to, message }))
})
export default connectWithRedux(mapStateToProps, mapDispatchToProps)(MessageBox)