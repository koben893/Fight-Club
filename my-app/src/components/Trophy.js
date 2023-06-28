
import React from 'react'

function Trophy({text, emoji}) {
  return (
    <div>
        <span>{text}</span>: <span>{emoji}</span>
    </div>
  )
}

export default Trophy