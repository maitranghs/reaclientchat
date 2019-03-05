import React, {Component} from 'react'
import { connect as connectWithRedux } from "react-redux";
import { chooseChatUser, updateAvailableUsers } from '../actions'

import MenuRow from './MenuRow.jsx'

class LeftMenu extends Component {
  componentDidMount() {
    this.props.updateAvailableUsers()
  }
  render() {
    const {
      users,
      isLoggedIn,
      chooseUser
    } = this.props
    return (
      <div className="main-left-menu">
        {isLoggedIn && <div className="left-menu-search">
          <input type="text" className="left-search-input" placeholder="Search..."/>
        </div>}
        {isLoggedIn && <div className="left-menu-list-chat">
          <ul>
            {users.map(
              user => <MenuRow user={user} key={user.id} onClick={() => chooseUser(user)}/>
            )}
          </ul>
        </div>}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  users: state.availableUsers,
  isLoggedIn: state.loggedUser.isLoggedIn
})
const mapDispatchToProps = (dispatch) => ({
  chooseUser: (chatUser) => dispatch(chooseChatUser({ chatUser })),
  updateAvailableUsers: () => dispatch(updateAvailableUsers())
})
export default connectWithRedux(mapStateToProps, mapDispatchToProps)(LeftMenu)