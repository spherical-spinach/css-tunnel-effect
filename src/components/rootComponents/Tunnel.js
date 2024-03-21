import React, { useState, useEffect } from 'react'
import '../../css/Tunnel.css'

const Tunnel = () => {
  const [documentCenter, setDocumentCenter] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = event => {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }

    const calculateDocumentCenter = () => {
      const documentWidth = document.documentElement.clientWidth
      const documentHeight = document.documentElement.clientHeight
      setDocumentCenter({ x: documentWidth / 2, y: documentHeight / 2 })
    }

    window.addEventListener('resize', calculateDocumentCenter)
    calculateDocumentCenter()
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', calculateDocumentCenter)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const distanceX = cursorPosition.x - documentCenter.x
  const distanceY = cursorPosition.y - documentCenter.y

  const circleSize = 180

  const calculateCircleMovement = scalingUpBy => {
    const movementScalingFactor = scalingUpBy / 5
    const scaledDistanceX = distanceX * movementScalingFactor
    const scaledDistanceY = distanceY * movementScalingFactor

    return {
      left:
        documentCenter.x -
        (circleSize * scalingUpBy) / 2 +
        scaledDistanceX / (circleSize / scalingUpBy / 20),
      top:
        documentCenter.y -
        (circleSize * scalingUpBy) / 2 +
        scaledDistanceY / (circleSize / scalingUpBy / 20),
    }
  }

  const circles = [
    {
      id: 1,
      scalingUpBy: 1,
      borderStyle: 'solid hidden solid hidden',
      className: 'circle--rotation',
      opacity: 0.4,
    },
    {
      id: 2,
      scalingUpBy: 1.2,
      borderStyle: 'hidden solid hidden solid',
      className: 'circle--rotation',
      opacity: 0.5,
    },
    {
      id: 3,
      scalingUpBy: 1.4,
      borderStyle: 'solid hidden solid hidden',
      className: 'circle--rotation',
      opacity: 0.6,
    },
    {
      id: 4,
      scalingUpBy: 1.6,
      borderStyle: 'hidden solid hidden solid',
      className: 'circle--rotation',
      opacity: 0.7,
    },
    {
      id: 5,
      scalingUpBy: 1.8,
      borderStyle: 'solid hidden solid hidden',
      className: 'circle--rotation',
      opacity: 0.8,
    },
    {
      id: 6,
      scalingUpBy: 2,
      borderStyle: 'hidden solid hidden solid',
      className: 'circle--rotation',
      opacity: 0.9,
    },
    {
      id: 7,
      scalingUpBy: 2.2,
      borderStyle: 'solid hidden solid hidden',
      className: 'circle--rotation',
      opacity: 1,
    },
  ]

  return (
    <>
      {circles.map(circle => (
        <div
          key={circle.id}
          className={`circle ${circle.className}`}
          style={{
            ...calculateCircleMovement(circle.scalingUpBy),
            width: circleSize * circle.scalingUpBy,
            height: circleSize * circle.scalingUpBy,
            borderStyle: circle.borderStyle,
            opacity: circle.opacity,
          }}
        />
      ))}
      <div
        className="circle circle--small"
        style={{
          ...calculateCircleMovement(2.2),
          transform: 'translate(35px,35px)',
          width: 40,
          height: 40,
        }}
      >
        <div
          className="circle circle--expanding"
          style={{ width: '40px', height: '40px', top: '17px', left: '17px' }}
        />
      </div>
      <div
        className="circle circle--small"
        style={{
          ...calculateCircleMovement(1.6),
          transform: 'translate(270px,100px)',
          width: 30,
          height: 30,
        }}
      >
        <div
          className="circle circle--expanding"
          style={{ width: '30px', height: '30px', top: '12px', left: '12px' }}
        />
      </div>
    </>
  )
}

export default Tunnel
