/* eslint-disable no-unused-vars */
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils'
import { Formik, Field, Form } from 'formik'

import '../css/MultipleChoice.css'

const MultipleChoice = () => {
  return (
    <div>
      <h4>KYSYMYS</h4>
      <Formik
        initialValues={{
          toggled: [],
        }}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2))
        }}
      >
        <Form>
          <div
            className="checkbox-group"
            role="group"
            aria-labelledby="checkbox-group"
          >
            <div className="checkbox-group-item">
              One
              <label className="custom-checkbox">
                <Field type="checkbox" name="toggled" value="One" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="checkbox-group-item">
              Two
              <label className="custom-checkbox">
                <Field type="checkbox" name="toggled" value="Two" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="checkbox-group-item">
              Three
              <label className="custom-checkbox">
                <Field type="checkbox" name="toggled" value="Three" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <button type="submit">TARKISTA</button>
        </Form>
      </Formik>
    </div>
  )
}

export default MultipleChoice
