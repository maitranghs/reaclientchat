import React, {Component} from 'react'

import Header from './parts/Header.jsx'
import LeftMenu from './parts/LeftMenu.jsx'
import ChatBox from './parts/ChatBox.jsx'
import MessageBox from './parts/MessageBox.jsx'
import Footer from './parts/Footer.jsx'

import socket from './socket.js'
const client = socket()

import Login from './parts/Login.jsx';

class App extends Component {
    constructor() {
        super()
        this.state = {
            showLogin: true,
            availableUsers: [],
            user: {}
        }
        this.fnSubmittedUser = this.fnSubmittedUser.bind(this)
        this.onAvailableUsers = this.onAvailableUsers.bind(this)
    }
    onAvailableUsers(users, user) {
        if (this._isMounted) {
            this.setState({user: user, availableUsers: users})
        }
    }
    componentDidMount() {
        this._isMounted = true
        client.getAvailableUsers(this.onAvailableUsers)
    }
    componentWillUnmount() {
        this._isMounted = false
    }
    fnSubmittedUser(loggedUser, users) {
        this.setState({user: loggedUser, availableUsers: users, showLogin: false})
    }
    render() {
        return (
            <div className='main-container'>
                <Header user={this.state.user}/>
                {this.state.showLogin && <Login socket={client} fnSubmittedUser={this.fnSubmittedUser}/>}
                <div className='main-content'>
                    <LeftMenu availableUsers={this.state.availableUsers}/>
                    <div className='main-content-right'>
                        <ChatBox/>
                        <MessageBox/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App