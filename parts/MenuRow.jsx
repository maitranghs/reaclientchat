import React, { PureComponent } from 'react'

class MenuRow extends PureComponent {
  render() {
    let {
      user,
      onClick
    } = this.props

    let userStyle = {
      color: user.color
    }

    return (
      <li className="chat-wrap-li" onClick={onClick}>
        <div className="chat-avatar">
          <img src={user.img}/>
        </div>
        <div className="chat-details" style={userStyle}>
          <div className="chat-username">{ user.userName }</div>
          <div className="chat-last-message">{ user.lastMessage }</div>
        </div>
      </li>
    )
  }
}

export default MenuRow