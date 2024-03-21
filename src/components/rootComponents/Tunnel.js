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

  const circleSize = 400

  const circles = [
    {
      id: 1,
      size: 1,
      borderStyle: 'solid hidden solid hidden',
      className: 'circle--rotation',
    },
    {
      id: 2,
      size: 1.2,
      borderStyle: 'hidden solid hidden solid',
      className: 'circle--rotation',
    },
    {
      id: 3,
      size: 1.4,
      borderStyle: 'solid hidden solid hidden',
      className: 'circle--rotation',
    },
    {
      id: 4,
      size: 1.6,
      borderStyle: 'hidden solid hidden solid',
      className: 'circle--rotation',
    },
    {
      id: 5,
      size: 1.8,
      borderStyle: 'solid hidden solid hidden',
      className: 'circle--rotation',
    },
    {
      id: 6,
      size: 2,
      borderStyle: 'hidden solid hidden solid',
      className: 'circle--rotation',
    },
    {
      id: 7,
      size: 2.2,
      borderStyle: 'solid hidden solid hidden',
      className: 'circle--rotation',
    },
  ]

  return (
    <>
      {circles.map(circle => (
        <div
          key={circle.id}
          className={`circle ${circle.className}`}
          style={{
            left:
              documentCenter.x -
              circleSize / circle.size / 2 +
              distanceX / (circleSize / circle.size / 20),
            top:
              documentCenter.y -
              circleSize / circle.size / 2 +
              distanceY / (circleSize / circle.size / 20),
            width: circleSize / circle.size,
            height: circleSize / circle.size,
            borderStyle: circle.borderStyle,
          }}
        />
      ))}
      <div
        className="circle circle--small"
        style={{
          left:
            documentCenter.x - circleSize / 2.5 + distanceX / (circleSize / 20),
          top:
            documentCenter.y - circleSize / 2.5 + distanceY / (circleSize / 20),
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
          left:
            320 +
            documentCenter.x -
            circleSize / 1.6 +
            distanceX / (circleSize / 1.6 / 20),
          top:
            320 +
            +documentCenter.y -
            circleSize / 1.6 +
            distanceY / (circleSize / 1.6 / 20),
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
