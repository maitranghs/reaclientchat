import React, {Component} from 'react'

class ChatBox extends Component {
    render() {
        return (
            <div className="main-chat-box">
                <div className="chat-main-message">
                    {
                        this.props.history.map(
                            (row, idx) => 
                            <div className={row.from._id === this.props.user.id ? 'chat-a-message message-right' : 'chat-a-message message-left'} key={idx}>
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

export default ChatBox