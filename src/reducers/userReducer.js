import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    }
  }
})


export const loginUser = ( username, password ) => {
  return async dispatch => {
    const user = await loginService.login( {username, password} )
    window.localStorage.setItem(
      'loggedFlashCardappUser', JSON.stringify(user)
    ) 
    // dispatch(appendUser(newUser))
  }
}

// export default userSlice.reducer

// export const { login, logout } = userSlice.actions

// export const selectUser = (state) => state.user.user

export default userSlice.reducer


// const userSlice = createSlice({
//   name: 'user',
//   initialState: [],
//   reducers: {
//     // appendUser(state, action) {
//     //   state.push(action.payload)
//     // },
//     setUser(state, action) {
//       return action.payload
//     }
//   },
// })

// export const { setUser } = userSlice.actions

// const handleLogin = async (event) => {
//   try {
//     const user = await loginService.login({
//       username, password,
//     })
//     window.localStorage.setItem(
//       'loggedFlashCardappUser', JSON.stringify(user)
//     ) 
//     setUser(user)
//     setUsername('')
//     setPassword('')
//   } catch (exception) {
//     setErrorMessage('wrong credentials')
//     setTimeout(() => {
//       setErrorMessage(null)
//     }, 5000)
//   }
// }

// export const initializeUser = () => {
//   return async dispatch => {
//     const user = await loginService.getAll()
//     dispatch(setUser(user))
//   }
// }

// export const loginUser = ( username, password ) => {
//   return async dispatch => {
//     const newUser = await loginService.login(username, password)
//     // dispatch(appendUser(newUser))
//   }
// }

// export default userSlice.reducer

