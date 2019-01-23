import React, {Component} from 'react'

class Header extends Component {
    render() {
        return (
            <div className="main-header">
                <div className="welcome-message">
                    <h3>Welcome to ReaCli-Chat, let chat for fun!</h3>
                </div>
                <div className="profile-info">
                    <div className="profile-pic-icon">
                        <img src="https://bodiezpro.com/wp-content/uploads/2015/09/medium-default-avatar.png"/>
                    </div>
                    <div className="profile-nick-name">Mai Trang</div>
                </div>
            </div>
        )
    }
}

export default Header