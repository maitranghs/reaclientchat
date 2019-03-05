import * as loggedUserActions from './loggedUser'
import * as availableUsersActions from './availableUsers'
import * as chatHistoryActions from './chatHistory'

export const login = ({ username, password }) =>
  (dispatch, getState, { clientSocket }) => {
    clientSocket.register('', username, password, (err, loggedUser, users) => {
      if(err) {
        dispatch(loggedUserActions.loginFail({ error: err }))
      } else {
        dispatch(loggedUserActions.login({ user: loggedUser }))
        dispatch(availableUsersActions.getAvailableUsers({ users }))
      }
    })
  }
export const chooseChatUser = ({ chatUser }) =>
  (dispatch, getState, {clientSocket}) => {
    clientSocket.getHistory(getState().loggedUser.user.id, chatUser.id, (err, history) => {
      if (!err) {
        dispatch(chatHistoryActions.setHistory({ chattedUser: chatUser, history }))
      }
    })
  }
export const updateAvailableUsers = () =>
  (dispatch, getState, { clientSocket }) => {
    clientSocket.getAvailableUsers((users, user) => {
      dispatch(availableUsersActions.getAvailableUsers({ users }))
    })
  }
export const sendAMessage = ({ from, to, message }) => 
  (dispatch, getState, { clientSocket }) => {
    clientSocket.message(from, to, message, (err, historyRow) => {
      if (!err) {
        dispatch(chatHistoryActions.addNewMessage({ historyRow }))
      }
    })
  }
export const updateChatMessage = () => 
  (dispatch, getState, { clientSocket }) => {
    clientSocket.getNewestMessage((historyRow) => {
      dispatch(chatHistoryActions.addNewMessage({ historyRow }))
    })
  }