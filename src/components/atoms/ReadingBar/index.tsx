// src/components/sections/AlertSection.tsx
import React from 'react'

const ReadingBar = ({ text }) => {
  return (
    <div id="reading-progress" className="border-yellow squiggle">
        <div id="reading-progress-fill"></div>
    </div>
  )
}

export default ReadingBar
