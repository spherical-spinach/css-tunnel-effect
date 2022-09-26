import { createSlice } from '@reduxjs/toolkit'

const chosenQuestiontypesSlice = createSlice({
  name: 'questiontype',
  initialState: {},
  reducers: {
    setChosenQuestiontypes: (state, action) => action.payload,
  },
})

export const { setChosenQuestiontypes } = chosenQuestiontypesSlice.actions

export default chosenQuestiontypesSlice.reducer
