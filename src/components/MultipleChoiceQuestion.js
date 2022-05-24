import { Field } from 'formik'

const MultipleChoiceQuestion = ({ question, submitStyles }) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  let i = -1
  let badgeClass = ''
  if (submitStyles) {
    const correctAnswer = question.answers.filter(a => a.correctAnswer)[0].id
    Object.values(submitStyles).includes(correctAnswer)
      ? (badgeClass = 'badge success')
      : (badgeClass = 'badge error')
  }
  return (
    <div
      className={`checkbox-group${question.id}`}
      role="group"
      aria-labelledby="checkbox-group"
    >
      <div className="question-header">
        <h4>{question.content}</h4>
        {submitStyles && (
          <div className={badgeClass}>
            {badgeClass === 'badge success' ? 'OIKEIN' : 'VÄÄRIN'}
          </div>
        )}
      </div>
      {question.answers.map(answer => {
        i++
        let checkboxGroupItemClassName = ''
        if (submitStyles) {
          if (answer.correctAnswer) {
            checkboxGroupItemClassName = 'checkbox-group-item-success'
          } else if (Object.values(submitStyles).includes(answer.id)) {
            checkboxGroupItemClassName = 'checkbox-group-item-error'
          }
        }
        return (
          <div className={checkboxGroupItemClassName} key={answer.id}>
            {letters[i]}: {answer.content}
            <label className="custom-checkbox">
              <Field
                type="radio"
                name={`${question.id}`}
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
