import React from 'react'

const NewCardForm = ({ addCard, newQuestion, newCourseId, newPartId, newAnswerA, newAnswerB, newAnswerC, newAnswerD,
                      NewCorrectAnswerId,
                      handleQuestionChange, handleCourseIdChange, handlePartIdChange, 
                      handleAnswerAChange, handleAnswerBChange, handleAnswerCChange, handleAnswerDChange,
                      handleCorrectAnswerIdChange
                  }) => {
    return (
      <form onSubmit={addCard}>
        <div>
          kurssi_id: <input
          value={newCourseId}
          onChange={handleCourseIdChange}
          />
        </div>
        <div>
          osan_id: <input
          value={newPartId}
          onChange={handlePartIdChange}
          />
        </div>
        <div>
          kysymys: <input
          value={newQuestion}
          onChange={handleQuestionChange}
          />
        </div>
        <div>
          vastausvaihtoehto 1: <input
          value={newAnswerA}
          onChange={handleAnswerAChange}
          />
        </div>
        <div>
          vastausvaihtoehto 2: <input
          value={newAnswerB}
          onChange={handleAnswerBChange}
          />
        </div>
        <div>
          vastausvaihtoehto 3: <input
          value={newAnswerC}
          onChange={handleAnswerCChange}
          />
        </div>
        <div>
          vastausvaihtoehto 4: <input
          value={newAnswerD}
          onChange={handleAnswerDChange}
          />
        </div>
        <div>
          oikean vastauksen numero: <input
          value={NewCorrectAnswerId}
          onChange={handleCorrectAnswerIdChange}
          />
        </div>
        <div>
          <button type="submit">add</button>  
        </div>
      </form>
    )
  }

export default NewCardForm