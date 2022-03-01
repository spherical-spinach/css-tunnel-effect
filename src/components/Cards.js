import { useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'

const Card = ({ card }) => {
  console.log('card', card)
  return(
    <li className='card'>
      {card.question} 
    </li>
  )
}

const Cards = () => {
  const cards = useSelector(state => state)
  return(
    <ul>
      {cards.map(card =>
        <Card
          key={card.id}
          card={card}
        />
      )}
    </ul>
  )
}

export default Cards