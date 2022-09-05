import React from 'react'
import { useSelector } from 'react-redux'

import FancyTable from './FancyTable'
import '../css/UserView.css'

const UserView = () => {
  const user = useSelector(state => state.user)
  return (
    <div
      className="userViewContainer
  "
    >
      <FancyTable
        headers={['Käyttäjänimi', 'Tietorivi 2', 'Tietorivi 3']}
        contents={[user.username, 'tietoa', 'lisää tietoa']}
      />
    </div>
  )
}

export default UserView
