import { createSlice } from '@reduxjs/toolkit'
import courseService from '../services/courses'

const courseSlice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {
    appendCourse(state, action) {
      state.push(action.payload)
    },
    setCourses(state, action) {
      return action.payload
    }
  },
})

export const { appendCourse, setCourses } = courseSlice.actions

export const initializeCourses = () => {
  return async dispatch => {
    const courses = await courseService.getAll()
    dispatch(setCourses(courses))
  }
}

export const createCourse = ( name, parts, cards, id ) => {
  return async dispatch => {
    const newCourse = await courseService.createNew(name, parts, cards, id)
    dispatch(appendCourse(newCourse))
  }
}

export default courseSlice.reducer