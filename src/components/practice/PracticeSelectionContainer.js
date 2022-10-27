import Tree from '../general/Tree'
import nestedTreeData from '../general/nestedTreeData.json'

const mockTree = nestedTreeData.map(item => ({
  ...item,
  hasChildren: nestedTreeData.filter(i => i.parentId === item.id).length > 0,
}))

const PracticeSelectionContainer = () => {
  console.log('here is PracticeSelectionContainer')
  return (
    <div style={{ padding: '20px', backgroundColor: 'cyan' }}>
      <Tree treeData={mockTree} />
    </div>
  )
}

export default PracticeSelectionContainer
