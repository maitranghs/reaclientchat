import React, {Component} from 'react'

import MenuRow from './MenuRow.jsx'

class LeftMenu extends Component {
    constructor() {
        super()
        this.chooseUser = this.chooseUser.bind(this)
    }
    chooseUser(e, chosenUser) {
        this.props.fnChooseUSer(chosenUser)
    }
    render() {
        return (
            <div className="main-left-menu">
                <div className="left-menu-search">
                    <input type="text" className="left-search-input" placeholder="Search..."/>
                </div>
                <div className="left-menu-list-chat">
                    <ul>
                        {this.props.availableUsers.map(
                            user => <MenuRow user={user} key={user.id} onClick={(e) => {this.chooseUser(e, user)}}/>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default LeftMenu