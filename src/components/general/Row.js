/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import { Field } from 'formik'
import { useState } from 'react'
import '../../css/row.css'
import chevron from '../../images/chevron-right.svg'

const Row = ({ item, level, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  return (
    <div key={`section-${item.id}`}>
      <div
        className={`row level-${level}`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="rowContainer">
          {!item.hasChildren ? null : (
            <img
              className={`chevron${!isCollapsed ? ' rotated' : ''}`}
              src={chevron}
              alt="chevron"
            />
          )}
          <span className="rowText">{item.name[0].value}</span>
        </div>
      </div>
      <label className="custom-checkbox">
        <Field
          type="checkbox"
          name={String(item.course)}
          value={String(item.id)}
        />
        <span className="checkmark" />
      </label>
      <div className={`children${isCollapsed ? ' collapsed' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Row
