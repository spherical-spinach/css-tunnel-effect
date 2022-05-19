import { createSlice } from '@reduxjs/toolkit'


const chosenCourseSlice = createSlice({
  name: 'course',
  initialState: [],
  reducers: {
    setCourse(state, action) {
      return action.payload
    }
  },
})

export const { setChosenCourse } = chosenCourseSlice.actions

// export const initializeCourse = () => {
//   return async dispatch => {
//     const course = await courseService.getAll()
//     dispatch(setCourse(course))
//   }
// }


export default chosenCourseSlice.reducer