import { LOG_IN, LOG_OUT, LOG_IN_FAILED } from '../actions/types.js'

const initialState = {
  isLoggedIn: false,
  user: {},
  error: '' 
}

export const loggedUser = (state=initialState, action) => {
  switch(action.type) {
    case LOG_IN:
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true
      }
    case LOG_OUT:
      return initialState
    case LOG_IN_FAILED:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}