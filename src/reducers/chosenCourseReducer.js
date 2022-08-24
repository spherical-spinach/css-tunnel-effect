import { createSlice } from '@reduxjs/toolkit'

const chosenCourseSlice = createSlice({
  name: 'course',
  initialState: {},
  reducers: {
    setChosenCourse: (state, action) => action.payload,
  },
})

export const { setChosenCourse } = chosenCourseSlice.actions

export default chosenCourseSlice.reducer
