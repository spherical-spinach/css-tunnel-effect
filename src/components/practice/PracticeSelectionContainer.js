/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useSelector } from 'react-redux'

import Tree from '../general/Tree'
// import nestedTreeData from '../general/nestedTreeData.json'

// const mockTree = nestedTreeData.map(item => ({
//   ...item,
//   hasChildren: nestedTreeData.filter(i => i.parentId === item.id).length > 0,
// }))

const PracticeSelectionContainer = () => {
  const treeNodes = useSelector(state => state.treeNodes)
  const testCourse = useSelector(state =>
    state.courses.filter(c => c.name === 'testi'),
  )

  const treeData = treeNodes.filter(node => node.course === testCourse[0].id)

  return (
    <div style={{ padding: '20px', backgroundColor: 'cyan' }}>
      <Tree treeData={treeData} />
    </div>
  )
}

export default PracticeSelectionContainer
