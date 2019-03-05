import { combineReducers as combine } from 'redux'

import { loggedUser } from './loggedUser.js'
import { availableUsers } from './availableUsers.js'
import { chatHistory } from './chatHistory.js'

export default combine({ loggedUser, availableUsers, chatHistory })