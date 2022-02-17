import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Card from './Card'

test('renders content', () => {
  const card = {
    id: 1,
    courseId: 1,
    partId: 1,
    question: 'Mikä seuraavista väittämistä pitää paikkansa?',
    answers: [
      {
        id: 1,
        answer: "Korkeimman oikeuden ennakkopäätökset ovat sekä vertikaalisesti että horisontaalisesti oikeudellisesti sitovia."
      },
      {
        id: 2,
        answer: "Korkeimman oikeuden ennakkopäätökset ovat vertikaalisesti oikeudellisesti sitovia, mutta eivät ole horisontaalisesti oikeudellisesti sitovia"
      },
      {
        id: 3,
        answer: "Korkeimman oikeuden ennakkopäätökset ovat horisontaalisesti oikeudellisesti sitovia, mutta eivät ole vertikaalisesti oikeudellisesti sitovia."
      },
      {
        id: 4,
        answer: "Korkeimman oikeuden ennakkopäätökset eivät ole vertikaalisesti tai horisontaalisesti oikeudellisesti sitovia."
      }
    ],
    correctAnswerId: 4
  }

  render(<Card card={card} />)

  const element = screen.getByText('Mikä seuraavista väittämistä pitää paikkansa?')
  expect(element).toBeDefined()
})