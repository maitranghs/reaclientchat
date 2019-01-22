import React, {Component} from 'react'

class MessageBox extends Component {
    render() {
        return (
            <div className="message-box">
                <div className="message-input">
                    <input type="text" placeholder="Type a message..."/>
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

export default MessageBox