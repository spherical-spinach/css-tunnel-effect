import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'
import registerService from '../services/register'
import { setNotification, clearNotification } from './notificationReducer'

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
  try {
    const user = await loginService.login({ username, password })
    window.localStorage.setItem('loggedFlashCardappUser', JSON.stringify(user))
    dispatch(login(user))
    dispatch(
      setNotification({
        class: 'success',
        text: `User '${user.username}' logged in`,
      }),
    )
    setTimeout(() => dispatch(clearNotification()), 5000)
  } catch (e) {
    dispatch(
      setNotification({
        class: 'error',
        text: 'error logging in the user - wrong username or password',
      }),
    )
    setTimeout(() => dispatch(clearNotification()), 5000)
  }
}

export const logoutUser = () => dispatch => {
  window.localStorage.removeItem('loggedFlashCardappUser')
  dispatch(logout())
}

export const { register } = userSlice.actions

export const registerUser = (username, email, password) => async dispatch => {
  const user = await registerService.register(username, email, password)
  console.log('täs userReducerin registerUserin palauttama user: ', user)
  dispatch(register(user))
}

export default userSlice.reducer
