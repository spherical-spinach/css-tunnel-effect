import { configureStore } from '@reduxjs/toolkit'

import questionReducer from './reducers/questionReducer'
import questiontypeReducer from './reducers/questiontypeReducer'
import courseReducer from './reducers/courseReducer'
import partReducer from './reducers/partReducer'
import answerReducer from './reducers/answerReducer'
import chosenCourseReducer from './reducers/chosenCourseReducer'
import chosenPartsReducer from './reducers/chosenPartsReducer'
import chosenQuestiontypesReducer from './reducers/chosenQuestiontypesReducer'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'
import treeNodeReducer from './reducers/treeNodeReducer'

const store = configureStore({
  reducer: {
    questions: questionReducer,
    answers: answerReducer,
    courses: courseReducer,
    questiontypes: questiontypeReducer,
    parts: partReducer,
    chosenCourse: chosenCourseReducer,
    chosenParts: chosenPartsReducer,
    chosenQuestiontypes: chosenQuestiontypesReducer,
    user: userReducer,
    notification: notificationReducer,
    treeNodes: treeNodeReducer,
  },
  preloadedState: {
    user: localStorage.getItem('loggedFlashCardappUser')
      ? JSON.parse(localStorage.getItem('loggedFlashCardappUser'))
      : null,
  },
})

export default store
