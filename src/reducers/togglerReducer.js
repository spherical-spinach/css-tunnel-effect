import { createSlice } from '@reduxjs/toolkit'
// import loginService from '../services/login'

export const togglerSlice = createSlice({
  name: "visible",
  initialState: {
    visible: false
  },
  reducers: {
    toggle: (state) => {
      state.toggler = (!state)
    }
  }
})


// export const visibility = ( username, password ) => {
//   return async dispatch => {
//     const user = await loginService.login( {username, password} )
//     window.localStorage.setItem(
//       'loggedFlashCardappUser', JSON.stringify(user)
//     ) 
//   }
// }

export default togglerSlice.reducer