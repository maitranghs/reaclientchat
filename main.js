import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import socket from './socket.js'

import App from './App.jsx'
const store = createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument({clientSocket: socket()}))
)
ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>
, document.getElementById('app'))