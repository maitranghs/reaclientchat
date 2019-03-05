import { ADD_NEW_MESSAGE, SET_HISTORY } from '../actions/types.js'

const initialState = {
  chattedUser: {},
  history: []
}
export const chatHistory = (state=initialState, action) => {
  switch(action.type) {
    case SET_HISTORY: return {
      chattedUser: action.payload.chattedUser,
      history: action.payload.history
    }
    case ADD_NEW_MESSAGE: return {
      ...state,
      history: [...state.history, action.newMessage]
    }
    default: return state
  }
}