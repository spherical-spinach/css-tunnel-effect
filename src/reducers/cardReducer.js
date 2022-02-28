import { createSlice } from '@reduxjs/toolkit'
import cardService from '../services/cards'

const cardSlice = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    appendCard(state, action) {
      state.push(action.payload)
    },
    setCards(state, action) {
      return action.payload
    }
  },
})

export const { appendCard, setCards } = cardSlice.actions

export const initializeCards = () => {
  return async dispatch => {
    const cards = await cardService.getAll()
    dispatch(setCards(cards))
  }
}

export const createCard = ( courseId, partId, questionTypeId, question, answers, id ) => {
  return async dispatch => {
    const newCard = await cardService.createNew(courseId, partId, questionTypeId, question, answers, id)
    dispatch(appendCard(newCard))
  }
}

export default cardSlice.reducer