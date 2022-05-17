/* eslint-disable no-undef */
import questionReducer from './questionReducer'
import deepFreeze from 'deep-freeze'

describe('questionReducer', () => {
  test('returns new state with action NEW_QUESTION', () => {
    const state = []
    const action = {
      type: 'NEW_QUESTION',
      data: {
        courseId: '62064823dc53e2c2bff3bef5',
        partId: '62064831dc53e2c2bff3befa',
        questiontypeId: '620e2a5313353117b5e4df11',
        question: 'testikysymys',
        answers: [
          '620e32c99310b501691b928c',
          '620e32dc98fefcc21e53f07c',
          '620e32d498fefcc21e53f079',
        ],
        id: 1,
      },
    }

    deepFreeze(state)
    const newState = questionReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.data)
  })
})
