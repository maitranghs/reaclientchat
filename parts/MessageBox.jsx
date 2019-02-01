import React, {Component} from 'react'

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
            let {client, fromId, toId, fnHistory} = this.props
            client.message(fromId, toId, this.state.message, (err, historyRow) => {
                if (err) {
                    console.log(err)
                } else {
                    fnHistory(historyRow)
                }
            })
            this.setState({message: ''})
        }
    }
    render() {
        return (
            <div className="message-box">
                <div className="message-input">
                    <input type="text" placeholder="Type a message..." value={this.state.message} onKeyUp={this.handleEnter} onChange={this.handleChange}/>
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