import axios from 'axios'
const baseUrl = '/api/users'
// const baseUrl = 'http://localhost:3001/users'

const register = async (username, email, password) => {
  const object = { username, email, password }
  const response = await axios.post(baseUrl, object)
  return response.data
}


export default { register }


