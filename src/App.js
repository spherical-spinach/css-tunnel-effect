import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import Notification from './components/Notification'
import Footer from './components/Footer'
import cardService from './services/cards'
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
      CorrectAnswerId: Number(newCorrectAnswerId)
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


  return (
    <div>
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