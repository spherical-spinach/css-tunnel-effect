import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'
import registerService from '../services/register'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: state => {
      state.user = null
    },
    register: state => {
      state.user = null
    },
  },
})

export const { login } = userSlice.actions

export const loginUser = (username, password) => {
  return async dispatch => {
    const user = await loginService.login({ username, password })
    window.localStorage.setItem('loggedFlashCardappUser', JSON.stringify(user))
    dispatch(login(user))
  }
}

export const { logout } = userSlice.actions

export const logoutUser = () => {
  return dispatch => {
    window.localStorage.removeItem('loggedFlashCardappUser')
    dispatch(logout())
  }
}

export const { register } = userSlice.actions

export const registerUser = (username, email, password) => {
  return async dispatch => {
    const user = await registerService.register(username, email, password)
    dispatch(register(user))
  }
}

export default userSlice.reducer
