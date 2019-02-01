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
            user: {},
            withUser: {},
            history: []
        }
        this.fnSubmittedUser = this.fnSubmittedUser.bind(this)
        this.onAvailableUsers = this.onAvailableUsers.bind(this)
        this.fnGetHistory = this.fnGetHistory.bind(this)
        this.fnHistory = this.fnHistory.bind(this)
    }
    onAvailableUsers(users, user) {
        if (this._isMounted) {
            this.setState({availableUsers: users})
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
    fnGetHistory(withUser) {
        client.getHistory(this.state.user.id, withUser.id, (err, history) => {
            if (err) {
                console.log(err)
            } else {
                this.setState({history: history, withUser: withUser})
            }
        })
    }
    fnHistory(historyRow) {
        let newHistory = this.state.history
        newHistory.push(historyRow)
        console.log(newHistory)
        this.setState({history: newHistory})
    }
    render() {
        return (
            <div className='main-container'>
                <Header user={this.state.user}/>
                {this.state.showLogin && <Login client={client} fnSubmittedUser={this.fnSubmittedUser}/>}
                <div className='main-content'>
                    <LeftMenu availableUsers={this.state.availableUsers} fnChooseUSer={this.fnGetHistory}/>
                    <div className='main-content-right'>
                        <ChatBox user={this.state.user} history={this.state.history}/>
                        <MessageBox client={client} fromId={this.state.user.id} toId={this.state.withUser.id} fnHistory={this.fnHistory}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App