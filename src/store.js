import { configureStore } from '@reduxjs/toolkit'

import questionReducer from './reducers/questionReducer'
import courseReducer from './reducers/courseReducer'
import partReducer from './reducers/partReducer'
import chosenCourseReducer from './reducers/chosenCourseReducer'
import chosenPartsReducer from './reducers/chosenPartsReducer'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    questions: questionReducer,
    courses: courseReducer,
    parts: partReducer,
    chosenCourse: chosenCourseReducer,
    chosenParts: chosenPartsReducer,
    user: userReducer,
    notification: notificationReducer,
  },
  preloadedState: {
    user: localStorage.getItem('loggedFlashCardappUser')
      ? JSON.parse(localStorage.getItem('loggedFlashCardappUser'))
      : null,
  },
})

export default store
