/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { Formik, Form } from 'formik'
import { useSelector } from 'react-redux'

import '../../css/PracticeSelection.css'
import Tree from '../general/Tree'
import MultipleChoiceContainer from './multipleChoice/MultipleChoiceContainer'
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
    <div className="practiceContainer">
      <div style={{ backgroundColor: 'lightgrey', padding: '20px' }}>
        <div className="directoryStructure">
          <Formik
            initialValues={{}}
            onSubmit={values => {
              console.log('täs values', values)
            }}
          >
            <Form>
              <Tree treeData={treeData} />
              <button type="submit">VALITSE KYSSÄRIT</button>
            </Form>
          </Formik>
        </div>
        <MultipleChoiceContainer />
      </div>
    </div>
  )
}

export default PracticeSelectionContainer
