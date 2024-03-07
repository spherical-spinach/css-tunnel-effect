import React, { useState, useEffect } from 'react'
import '../../css/Tunnel.scss'

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

  return (
    <>
      <div
        className="circle"
        style={{
          left: documentCenter.x - 100 + distanceX / 20,
          top: documentCenter.y - 100 + distanceY / 20,
        }}
      />
      <div
        className="big-circle"
        style={{
          left: documentCenter.x - 200 + distanceX / 10,
          top: documentCenter.y - 200 + distanceY / 10,
        }}
      />
      <div
        className="small-circle"
        style={{
          left: documentCenter.x - 50 + distanceX / 30,
          top: documentCenter.y - 50 + distanceY / 30,
        }}
      />
    </>
  )
}

export default Tunnel
