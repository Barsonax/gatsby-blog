import React from 'react'
import { connectHighlight } from 'react-instantsearch-dom'

export const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit
  })

  return (
    <span>
      {parsedHit.map(
        (part, index) => (part.isHighlighted ? (
          <mark key={index}>{part.value}</mark>
        ) : (
          <span key={index}>{part.value}</span>
        ))
      )}
    </span>
  )
})
