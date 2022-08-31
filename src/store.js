import { configureStore } from '@reduxjs/toolkit'

import questionReducer from './reducers/questionReducer'
import courseReducer from './reducers/courseReducer'
import partReducer from './reducers/partReducer'
import chosenCourseReducer from './reducers/chosenCourseReducer'
import chosenPartReducer from './reducers/chosenPartReducer'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    questions: questionReducer,
    courses: courseReducer,
    parts: partReducer,
    chosenCourse: chosenCourseReducer,
    chosenPart: chosenPartReducer,
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
