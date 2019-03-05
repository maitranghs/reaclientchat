import { ADD_NEW_MESSAGE, SET_HISTORY } from './types.js'

export const setHistory = ({ chattedUser, history }) => {
  return {
    type: SET_HISTORY,
    payload: {
      chattedUser,
      history
    }
  }
}
export const addNewMessage = ({ newMessage }) => {
  return {
    type: ADD_NEW_MESSAGE,
    payload: {
      newMessage
    }
  }
}