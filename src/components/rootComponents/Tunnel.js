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

  return (
    <>
      <div
        className="circle"
        style={{
          left:
            documentCenter.x - circleSize / 2 + distanceX / (circleSize / 20),
          top:
            documentCenter.y - circleSize / 2 + distanceY / (circleSize / 20),
          width: circleSize,
          height: circleSize,
        }}
      />
      <div
        className="circle"
        style={{
          left:
            documentCenter.x -
            circleSize / 1.2 / 2 +
            distanceX / (circleSize / 1.2 / 20),
          top:
            documentCenter.y -
            circleSize / 1.2 / 2 +
            distanceY / (circleSize / 1.2 / 20),
          width: circleSize / 1.2,
          height: circleSize / 1.2,
        }}
      />
      <div
        className="circle"
        style={{
          left:
            documentCenter.x -
            circleSize / 1.4 / 2 +
            distanceX / (circleSize / 1.4 / 20),
          top:
            documentCenter.y -
            circleSize / 1.4 / 2 +
            distanceY / (circleSize / 1.4 / 20),
          width: circleSize / 1.4,
          height: circleSize / 1.4,
        }}
      />
      <div
        className="circle"
        style={{
          left:
            documentCenter.x -
            circleSize / 1.6 / 2 +
            distanceX / (circleSize / 1.6 / 20),
          top:
            documentCenter.y -
            circleSize / 1.6 / 2 +
            distanceY / (circleSize / 1.6 / 20),
          width: circleSize / 1.6,
          height: circleSize / 1.6,
        }}
      />
      <div
        className="circle"
        style={{
          left:
            documentCenter.x -
            circleSize / 1.8 / 2 +
            distanceX / (circleSize / 1.8 / 20),
          top:
            documentCenter.y -
            circleSize / 1.8 / 2 +
            distanceY / (circleSize / 1.8 / 20),
          width: circleSize / 1.8,
          height: circleSize / 1.8,
        }}
      />
      <div
        className="circle"
        style={{
          left:
            documentCenter.x -
            circleSize / 2 / 2 +
            distanceX / (circleSize / 2 / 20),
          top:
            documentCenter.y -
            circleSize / 2 / 2 +
            distanceY / (circleSize / 2 / 20),
          width: circleSize / 2,
          height: circleSize / 2,
        }}
      />
      <div
        className="circle"
        style={{
          left:
            documentCenter.x -
            circleSize / 2.2 / 2 +
            distanceX / (circleSize / 2.2 / 20),
          top:
            documentCenter.y -
            circleSize / 2.2 / 2 +
            distanceY / (circleSize / 2.2 / 20),
          width: circleSize / 2.2,
          height: circleSize / 2.2,
        }}
      />
    </>
  )
}

export default Tunnel
