import { createSlice } from '@reduxjs/toolkit'
import questiontypeService from '../services/questiontypes'

const questiontypeSlice = createSlice({
  name: 'questiontypes',
  initialState: [],
  reducers: {
    setQuestiontypes(state, action) {
      return action.payload
    },
  },
})

export const { appendQuestiontype, setQuestiontypes } =
  questiontypeSlice.actions

export const initializeQuestiontypes = () => async dispatch => {
  const questiontypes = await questiontypeService.getAll()
  dispatch(setQuestiontypes(questiontypes))
}

export default questiontypeSlice.reducer
