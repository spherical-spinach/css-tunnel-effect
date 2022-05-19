import { Field } from 'formik'

const MultipleChoiceQuestion = ({ question }) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  let i = -1
  return (
    <div
      className={`checkbox-group${question.id}`}
      role="group"
      aria-labelledby="checkbox-group"
    >
      <h4>{question.content}</h4>
      {question.answers.map(answer => {
        i++
        return (
          <div className="checkbox-group-item" key={answer.id}>
            {letters[i]}: {answer.content}
            <label className="custom-checkbox">
              <Field
                type="radio"
                name={`toggled${question.id}`}
                value={String(answer.id)}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default MultipleChoiceQuestion
