import { createSlice } from '@reduxjs/toolkit'
import courseService from '../services/courses'

const courseSlice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {
    setCourses(state, action) {
      return action.payload
    },
  },
})

export const { appendCourse, setCourses } = courseSlice.actions

export const initializeCourses = () => async dispatch => {
  const courses = await courseService.getAll()
  dispatch(setCourses(courses))
}

export default courseSlice.reducer
