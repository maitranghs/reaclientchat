import React, {PureComponent} from 'react'
import { connect as connectWithRedux } from "react-redux"

class Header extends PureComponent {
  render() {
    const { isLoggedIn, user } = this.props
    return (
      <div className="main-header">
        <div className="welcome-message">
          <h3>Welcome to ReaCli-Chat, let chat for fun!</h3>
        </div>
        {isLoggedIn &&
        <div className="profile-info">
          <div className="profile-pic-icon">
            <img src={user.img}/>
          </div>
          <div className="profile-nick-name">{user.userName}</div>
        </div>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.loggedUser.user,
  isLoggedIn: state.loggedUser.isLoggedIn,
})
export default connectWithRedux(mapStateToProps)(Header)