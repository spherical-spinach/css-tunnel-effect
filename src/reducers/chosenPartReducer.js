import { createSlice } from '@reduxjs/toolkit'

const chosenPartSlice = createSlice({
  name: 'part',
  initialState: {},
  reducers: {
    setChosenPart: (state, action) => action.payload,
  },
})

export const { setChosenPart } = chosenPartSlice.actions

export default chosenPartSlice.reducer
