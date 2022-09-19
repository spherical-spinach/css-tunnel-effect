import { createSlice } from '@reduxjs/toolkit'

const chosenPartsSlice = createSlice({
  name: 'part',
  initialState: {},
  reducers: {
    setChosenParts: (state, action) => action.payload,
  },
})

export const { setChosenParts } = chosenPartsSlice.actions

export default chosenPartsSlice.reducer
