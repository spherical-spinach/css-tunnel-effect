import { configureStore } from '@reduxjs/toolkit'

import questionReducer from './reducers/questionReducer'

const store = configureStore({
  reducer: questionReducer,
})

export default store
