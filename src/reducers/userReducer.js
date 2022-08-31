import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'
import registerService from '../services/register'

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    login: (state, action) => action.payload,
    logout: () => null,
    register: () => null,
  },
})

export const { login, logout } = userSlice.actions

export const selectUser = state => state.user

export const loginUser = (username, password) => async dispatch => {
  const user = await loginService.login({ username, password })
  window.localStorage.setItem('loggedFlashCardappUser', JSON.stringify(user))
  dispatch(login(user))
}

export const logoutUser = () => dispatch => {
  window.localStorage.removeItem('loggedFlashCardappUser')
  dispatch(logout())
}

export const { register } = userSlice.actions

export const registerUser = (username, email, password) => async dispatch => {
  const user = await registerService.register(username, email, password)
  dispatch(register(user))
}

export default userSlice.reducer
