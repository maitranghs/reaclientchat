import { GET_AVAILABLE_USERS, REMOVE_AVAILABLE_USERS } from '../actions/types.js'

export const availableUsers = (state=[], action) => {
  switch(action.type) {
    case GET_AVAILABLE_USERS: return action.payload.users
    case REMOVE_AVAILABLE_USERS: return []
    default: return state
  }
}