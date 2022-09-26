import { createSlice } from '@reduxjs/toolkit'
import answerService from '../services/answers'

const answerSlice = createSlice({
  name: 'answers',
  initialState: [],
  reducers: {
    appendAnswer(state, action) {
      state.push(action.payload)
    },
    setAnswers(state, action) {
      return action.payload
    },
  },
})

export const { appendAnswer, setAnswers } = answerSlice.actions

export const initializeAnswers = () => async dispatch => {
  const answers = await answerService.getAll()
  dispatch(setAnswers(answers))
}

export const createAnswer = (
  content,
  correctAnswer,
  // eslint-disable-next-line arrow-body-style
) => {
  return async dispatch => {
    const newAnswer = await answerService.createNew(content, correctAnswer)
    console.log(
      'täs answerReducerin createAnswer palauttama answer: ',
      newAnswer,
    )
    dispatch(appendAnswer(newAnswer))
  }
}

export default answerSlice.reducer
