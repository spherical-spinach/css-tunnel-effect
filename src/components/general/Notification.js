import { useSelector } from 'react-redux'
import '../../css/Notification.css'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  if (!notification.class) {
    return null
  }
  return (
    <div className={`notificationContainer ${notification.class}`}>
      {notification.text}
    </div>
  )
}

export default Notification
