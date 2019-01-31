import React, {Component} from 'react'

import MenuRow from './MenuRow.jsx'

class LeftMenu extends Component {
    render() {
        return (
            <div className="main-left-menu">
                <div className="left-menu-search">
                    <input type="text" className="left-search-input" placeholder="Search..."/>
                </div>
                <div className="left-menu-list-chat">
                    <ul>
                        {this.props.availableUsers.map(
                            user => <MenuRow user={user} key={user.id}/>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default LeftMenu