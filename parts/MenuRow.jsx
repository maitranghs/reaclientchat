import React, {Component} from 'react'

class MenuRow extends Component {
    render() {
        let userStyle = {
            color: this.props.user.color
        }
        return (
            <li className="chat-wrap-li">
                <div className="chat-avatar">
                    <img src={this.props.user.img}/>
                </div>
                <div className="chat-details" style={userStyle}>
                    <div className="chat-username">{ this.props.user.userName }</div>
                    <div className="chat-last-message">{ this.props.user.lastMessage }</div>
                </div>
            </li>
        )
    }
}

export default MenuRow