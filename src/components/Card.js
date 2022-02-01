import React from 'react'

const Card = ({ card }) => {
  return (
    <li className='card'>
      {card.question} 
    </li>
  )
}

export default Card