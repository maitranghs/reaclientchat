import { LOG_IN, LOG_OUT, LOG_IN_FAILED } from './types.js'

export const login = ({ user }) => ({
  type: LOG_IN,
  payload: {
    user
  }
})
export const logout = () => ({
  type: LOG_OUT
})
export const loginFail = ({ error }) => ({
  type: LOG_IN_FAILED,
  payload: {
    error
  }
})