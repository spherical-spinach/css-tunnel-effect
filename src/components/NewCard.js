import { useDispatch } from 'react-redux'
import { createCard } from '../reducers/cardReducer'

const NewCard = (props) => {
  const dispatch = useDispatch()

  const addCard = async (event) => {
    event.preventDefault()
    const question = event.target.question.value
    event.target.question.value = ''
    const courseId = event.target.courseId.value
    event.target.courseId.value = ''
    const partId = event.target.partId.value
    event.target.partId.value = ''
    const questionTypeId = event.target.questionTypeId.value
    event.target.questionTypeId.value = ''
    const answer1 = event.target.answer1.value
    event.target.answer1.value = ''
    const answer2 = event.target.answer2.value
    event.target.answer2.value = ''
    const answer3 = event.target.answer3.value
    event.target.answer3.value = ''
    const answer4 = event.target.answer4.value
    event.target.answer4.value = ''
    dispatch(createCard(courseId, partId, questionTypeId, question, [answer1, answer2, answer3, answer4]))
  }

  return (
    <form onSubmit={addCard}>
      <div>
        kurssi_id: <input name='courseId'>
        </input>
      </div>
      <div>
        osan_id: <input name="partId"t>
        </input>
      </div>
      <div>
        kysymystyypin_id: <input name="questionTypeId"t>
        </input>
      </div>
      <div>
        kysymys: <input name="question">
        </input>
      </div>
      <div>
       vastausvaihtoehto 1: <input name="answer1">
       </input>
      </div>
      <div>
       vastausvaihtoehto 2: <input name="answer2">
       </input>
      </div>
      <div>
       vastausvaihtoehto 3: <input name="answer3">
       </input>
      </div>
      <div>
       vastausvaihtoehto 4: <input name="answer4">
       </input>
      </div>
     <button type="submit">add</button>
   </form>
  )
}

export default NewCard