import { GET_AVAILABLE_USERS, REMOVE_AVAILABLE_USERS } from './types.js'

export const getAvailableUsers = ({ users }) => {
  return {
    type: GET_AVAILABLE_USERS,
    payload: {
      users
    }
  }
}
export const removeUsers = () => {
  return {
    type: REMOVE_AVAILABLE_USERS
  }
}