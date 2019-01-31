import React, {Component} from 'react'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            username: 'Anonymous'
        }
    }
    render() {
        return (
            <div className="main-header">
                <div className="welcome-message">
                    <h3>Welcome to ReaCli-Chat, let chat for fun!</h3>
                </div>
                <div className="profile-info">
                    <div className="profile-pic-icon">
                        <img src={this.props.user.img}/>
                    </div>
                    <div className="profile-nick-name">{this.props.user.userName}</div>
                </div>
            </div>
        )
    }
}

export default Header