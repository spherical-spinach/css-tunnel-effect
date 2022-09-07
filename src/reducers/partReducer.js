import { createSlice } from '@reduxjs/toolkit'
import partService from '../services/parts'

const partSlice = createSlice({
  name: 'parts',
  initialState: [],
  reducers: {
    setParts(state, action) {
      return action.payload
    },
  },
})

export const { appendPart, setParts } = partSlice.actions

export const initializeParts = () => async dispatch => {
  const parts = await partService.getAll()
  dispatch(setParts(parts))
}

export default partSlice.reducer
