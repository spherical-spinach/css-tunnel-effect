/* eslint-disable react/destructuring-assignment */
import { useDispatch } from 'react-redux'
// import { loginUser } from '../reducers/togglerReducer'

const Togglable = props => {
  console.log('props', props)

  const dispatch = useDispatch()

  const toggleVisibility = async event => {
    event.preventDefault()
    // console.log('event', event)
    // console.log('event.target', event.target)
    console.log('event.target.visible.value', event.target.visible.value)
    const visible = event.target.visible.value
    dispatch(visible())
  }

  // const hideWhenVisible = { display: visible ? 'none' : '' }
  // const showWhenVisible = { display: visible ? '' : 'none' }

  return (
    // <div>
    //   <div style={hideWhenVisible}>
    //     <button onClick={toggleVisibility}>{props.buttonLabel}</button>
    //   </div>
    //   <div style={showWhenVisible}>
    //     {props.children}
    //     <button onClick={toggleVisibility}>cancel</button>
    //   </div>
    // </div>
    <div>
      <div>
        <button onClick={toggleVisibility} type="button">
          {props.buttonLabel}
        </button>
      </div>
      <div>
        {props.children}
        <button onClick={toggleVisibility} type="button">
          cancel
        </button>
      </div>
    </div>
  )
}

export default Togglable
