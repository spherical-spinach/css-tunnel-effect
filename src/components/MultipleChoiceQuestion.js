import { Field } from 'formik'

const MultipleChoiceQuestion = ({ question }) => {
  const letters = ['A', 'B', 'C', 'D']
  let i = -1
  return (
    <div
      className={`checkbox-group${question.id}`}
      role="group"
      aria-labelledby="checkbox-group"
    >
      <h4>KYSYMYS {question.id}</h4>
      {question.choices.map(choice => {
        i++
        return (
          <div className="checkbox-group-item" key={choice.id}>
            {letters[i]}: {choice.text}
            <label className="custom-checkbox">
              <Field
                type="radio"
                name={`toggled${question.id}`}
                value={String(choice.id)}
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
