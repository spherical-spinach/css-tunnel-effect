import { createSlice } from '@reduxjs/toolkit'
import treeNodeService from '../services/treeNodes'

const treeNodeSlice = createSlice({
  name: 'treeNodes',
  initialState: [],
  reducers: {
    setTreeNodes(state, action) {
      return action.payload
    },
  },
})

export const { setTreeNodes } = treeNodeSlice.actions

export const initializeTreeNodes = () => async dispatch => {
  const treeNodes = await treeNodeService.getAllTrees()
  const preparedTreeNodes = treeNodes.map(treeNode => ({
    ...treeNode,
    hasChildren:
      treeNodes.filter(t => t.parent[0].value === treeNode.id).length > 0,
  }))
  dispatch(setTreeNodes(preparedTreeNodes))
}

export default treeNodeSlice.reducer
