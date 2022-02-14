import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import Notification from './components/Notification'
import Footer from './components/Footer'
import cardService from './services/cards'
import loginService from './services/login'
import NewCardForm from './components/NewCardForm'


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

  useEffect(() => {
    cardService
      .getAll()
      .then(initialCards => {
      setCards(initialCards)
    })
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

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>      
  )


  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
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