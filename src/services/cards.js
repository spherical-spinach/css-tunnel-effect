import axios from 'axios'
// const baseUrl = '/api/cards'
const baseUrl = 'http://localhost:3001/api/cards'
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (courseId, partId, questionTypeId, question, answers, id) => {
  const object = { courseId, partId, questionTypeId, question, answers, id }
  const response = await axios.post(baseUrl, object)
  return response.data
}


const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { 
  getAll, createNew
}