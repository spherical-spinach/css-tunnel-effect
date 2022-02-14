import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import Notification from './components/Notification'
import Footer from './components/Footer'
import cardService from './services/cards'
import loginService from './services/login'
import NewCardForm from './components/NewCardForm'
import LoginForm from './components/LoginForm'


const App = () => {
  const [cards, setCards] = useState([])
  const [newQuestion, setNewQuestion] = useState('')
  const [newCourseId, setNewCourseId] = useState('')
  const [newPartId, setNewPartId] = useState('')
  const [newAnswerA, setNewAnswerA] = useState('')
  const [newAnswerB, setNewAnswerB] = useState('')
  const [newAnswerC, setNewAnswerC] = useState('')
  const [newAnswerD, setNewAnswerD] = useState('')
  const [newCorrectAnswerId, setNewCorrectAnswerId] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [loginVisible, setLoginVisible] = useState(false)

  useEffect(() => {
    cardService
      .getAll()
      .then(initialCards => {
      setCards(initialCards)
    })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedFlashCardappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      cardService.setToken(user.token)
    }
  }, [])

  const addCard = (event) => {
    event.preventDefault()
    const cardObject = {
      question: newQuestion,
      courseId: newCourseId,
      partId: newPartId,
      answers: [
        {
          id: 1,
          answer: newAnswerA
        },
        {
          id: 2,
          answer: newAnswerB
        },
        {
          id: 3,
          answer: newAnswerC
        },
        {
          id: 4,
          answer: newAnswerD
        }
      ],
      correctAnswerId: newCorrectAnswerId
    }

    cardService
      .create(cardObject)
        .then(returnedCard => {
        setCards(cards.concat(returnedCard))
        setNewQuestion('')
        setNewCourseId('')
        setNewAnswerA('')
        setNewAnswerB('')
        setNewAnswerC('')
        setNewAnswerD('')
        setNewPartId('')
        setNewCorrectAnswerId('')
      })
  }

  const handleQuestionChange = (event) => {
    setNewQuestion(event.target.value)
  }

  const handleCourseIdChange = (event) => {
    setNewCourseId(event.target.value)
  }

  const handlePartIdChange = (event) => {
    setNewPartId(event.target.value)
  }

  const handleAnswerAChange = (event) => {
    setNewAnswerA(event.target.value)
  }

  const handleAnswerBChange = (event) => {
    setNewAnswerB(event.target.value)
  }

  const handleAnswerCChange = (event) => {
    setNewAnswerC(event.target.value)
  }

  const handleAnswerDChange = (event) => {
    setNewAnswerD(event.target.value)
  }

  const handleCorrectAnswerIdChange = (event) => {
    setNewCorrectAnswerId(event.target.value)
  }

  const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? 'none' : '' }
    const showWhenVisible = { display: loginVisible ? '' : 'none' }

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setLoginVisible(true)}>log in</button>
        </div>
        <div style={showWhenVisible}>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
          <button onClick={() => setLoginVisible(false)}>cancel</button>
        </div>
      </div>
    )
  }

  const logoutButton = () => (
    <button onClick={handleLogout}>
      logout
    </button>  
  )

  const handleLogout = async (event) => {
    event.preventDefault()

    try {
      window.localStorage.removeItem(
        'loggedFlashCardappUser', JSON.stringify(user)
      ) 
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('something went wrong')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }


  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedFlashCardappUser', JSON.stringify(user)
      ) 
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      {user === null ?
      loginForm() :
      <div>
        <p>logged in as {user.username} </p>
        {logoutButton()}
      </div>
      }
      <h1>Kysymykset</h1>
      <Notification message={errorMessage} />
      <ul>
        {cards.map(card => 
            <Card
              key={card.id}
              card={card} 
            />
        )}
      </ul>
      <h3>Lisää uusi kysymys</h3>
      <NewCardForm 
      addCard={addCard} 
      newQuestion={newQuestion} 
      newCourseId={newCourseId} 
      newPartId={newPartId} 
      newAnswerA={newAnswerA}
      newAnswerB={newAnswerB}
      newAnswerC={newAnswerC}
      newAnswerD={newAnswerD}
      handleQuestionChange={handleQuestionChange} 
      handleCourseIdChange={handleCourseIdChange}
      handlePartIdChange={handlePartIdChange}
      handleAnswerAChange={handleAnswerAChange}
      handleAnswerBChange={handleAnswerBChange}
      handleAnswerCChange={handleAnswerCChange}
      handleAnswerDChange={handleAnswerDChange}
      handleCorrectAnswerIdChange={handleCorrectAnswerIdChange}
      >
      </NewCardForm>
      <Footer />
    </div>
  )
}

export default App