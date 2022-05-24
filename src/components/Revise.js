import { useSelector } from 'react-redux'
import { selectUser } from '../reducers/userReducer'

const Revise = () => {
  const user = useSelector(selectUser)
  console.log(user)
  return (
    <div>
      <h2>Omat treenit</h2>
      {user ? null : (
        <p>
          Et ole kirjautunut sisään. Kirjaudu sisään tai rekisteröidy saadaksesi
          kerrattavaa.
        </p>
      )}
    </div>
  )
}

export default Revise
