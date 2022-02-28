import { useEffect } from 'react'
import NewCard from './components/NewCard'
import LoginForm from './components/LoginForm'
import Cards from './components/Cards'
import Footer from './components/Footer'

import { initializeCards } from './reducers/cardReducer'
import { useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeCards()) 
  },[dispatch]) 
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
      <h1>Kysymykset</h1> 
      <Cards  />
      <h3>Lisää uusi kysymys</h3>
      <NewCard />
      <Footer></Footer>
   </div>
  )
}

export default App