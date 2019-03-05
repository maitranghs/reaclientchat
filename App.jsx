import React, {Component} from 'react'

import Header from './parts/Header.jsx'
import LeftMenu from './parts/LeftMenu.jsx'
import ChatBox from './parts/ChatBox.jsx'
import MessageBox from './parts/MessageBox.jsx'
import Footer from './parts/Footer.jsx'
import Login from './parts/Login.jsx';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      withUser: {},
      history: []
    }
  }
  render() {
    return (
      <div className='main-container'>
        <Header/>
        <Login/>
        <div className='main-content'>
          <LeftMenu/>
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