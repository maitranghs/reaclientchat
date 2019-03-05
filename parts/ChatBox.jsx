import React, {Component} from 'react'
import { connect as connectWithRedux } from "react-redux";
import { updateChatMessage } from '../actions'

class ChatBox extends Component {
  componentDidMount() {
    this.props.updateChatMessage()
  }
  render() {
    const { loggedUser, history } = this.props

    return (
      <div className="main-chat-box">
        <div className="chat-main-message">
          {
            history.map(
              (row, idx) => 
              <div className={(row.from._id === loggedUser.id || row.from.id === loggedUser.id) ? 'chat-a-message message-right' : 'chat-a-message message-left'} key={idx}>
                <div className="chat-message-icon">
                  <img src={row.from.img}/>
                </div>
                <div className="chat-message">{row.content}</div>
              </div>
            )
          }
        </div>
        <div className="chat-box-typing">
          <i>Typing...</i>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  loggedUser: state.loggedUser.user,
  history: state.chatHistory.history
})
const mapDispatchToProps = (dispatch) => ({
  updateChatMessage: () => dispatch(updateChatMessage())
})
export default connectWithRedux(mapStateToProps, mapDispatchToProps)(ChatBox)