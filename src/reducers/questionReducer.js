import { createSlice } from '@reduxjs/toolkit'
import questionService from '../services/questions'

const questionSlice = createSlice({
  name: 'questions',
  initialState: [],
  reducers: {
    appendQuestion(state, action) {
      state.push(action.payload)
    },
    setQuestions(state, action) {
      return action.payload
    },
  },
})

export const { appendQuestion, setQuestions } = questionSlice.actions

export const initializeQuestions = () => {
  return async dispatch => {
    const questions = await questionService.getAll()
    dispatch(setQuestions(questions))
  }
}

export const createQuestion = (
  courseId,
  partId,
  questionTypeId,
  content,
  answers,
  id
) => {
  return async dispatch => {
    const newQuestion = await questionService.createNew(
      courseId,
      partId,
      questionTypeId,
      content,
      answers,
      id
    )
    dispatch(appendQuestion(newQuestion))
  }
}

export default questionSlice.reducer
