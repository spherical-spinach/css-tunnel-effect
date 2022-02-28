import { configureStore } from '@reduxjs/toolkit'

import cardReducer from './reducers/cardReducer'

const store = configureStore({
  reducer: cardReducer
})

export default store