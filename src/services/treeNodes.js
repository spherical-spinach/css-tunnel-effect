import axios from 'axios'

const baseUrl = '/api/treeNodes'

const getAllTrees = async () => {
  const response = await axios.get(`${baseUrl}/allTrees`)
  return response.data
}

export default {
  getAllTrees,
}
