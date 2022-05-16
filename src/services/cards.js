import axios from 'axios'
const baseUrl = '/api/cards'
// const baseUrl = 'http://localhost:3001/cards'

// eslint-disable-next-line no-unused-vars
let token = null

// eslint-disable-next-line no-unused-vars
const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (
  courseId,
  partId,
  questionTypeId,
  question,
  answers,
  id
) => {
  const object = { courseId, partId, questionTypeId, question, answers, id }
  const response = await axios.post(baseUrl, object)
  return response.data
}

// eslint-disable-next-line no-unused-vars
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default {
  getAll,
  createNew,
}
