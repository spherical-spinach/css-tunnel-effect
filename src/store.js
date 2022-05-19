import { configureStore } from '@reduxjs/toolkit'

import questionReducer from './reducers/questionReducer'
import courseReducer from './reducers/courseReducer'
import partReducer from './reducers/partReducer'
import chosenCourseReducer from './reducers/chosenCourseReducer'

const store = configureStore({
  reducer: {
    questions: questionReducer,
    courses: courseReducer,
    parts: partReducer,
    course: chosenCourseReducer
  },
})


export default store
