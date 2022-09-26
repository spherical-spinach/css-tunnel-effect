import axios from 'axios'

const baseUrl = '/api/answers'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content, isCorrect) => {
  let correctAnswer = 'ei'
  if (isCorrect) {
    correctAnswer = true
  } else {
    correctAnswer = false
  }
  const object = {
    content,
    correctAnswer,
  }
  const response = await axios.post(baseUrl, object)
  return response.data
}

export default {
  getAll,
  createNew,
}
