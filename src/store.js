import { configureStore } from '@reduxjs/toolkit'

import questionReducer from './reducers/questionReducer'
import courseReducer from './reducers/courseReducer'
import partReducer from './reducers/partReducer'
import chosenCourseReducer from './reducers/chosenCourseReducer'
import userReducer from './reducers/userReducer'

// import storage from 'redux-persist/lib/storage'
// import { combineReducers } from 'redux'
// import {
//   persistReducer,
// } from 'redux-persist'

// const persistConfig = {
//   key: 'counter',
//   storage,
// }

// const reducers = combineReducers({ counter: counterSlice })

// const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: {
    questions: questionReducer,
    courses: courseReducer,
    parts: partReducer,
    course: chosenCourseReducer,
    user: userReducer,
  },
  preloadedState: {
    user: {
      user: localStorage.getItem('loggedFlashCardappUser') 
        ? JSON.parse(localStorage.getItem('loggedFlashCardappUser'))
        : null
    }
  },
})


export default store
