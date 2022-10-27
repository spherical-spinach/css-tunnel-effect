import Row from './Row'

const Tree = ({ treeData, parentId = null, level = 0 }) => {
  const items = treeData.filter(item => item.parent[0].value === parentId)
  if (!items.length) return null
  return (
    <div>
      {items.map(item => (
        <Row key={item.id} item={item} level={level}>
          <Tree treeData={treeData} parentId={item.id} level={level + 1} />
        </Row>
      ))}
    </div>
  )
}

export default Tree
