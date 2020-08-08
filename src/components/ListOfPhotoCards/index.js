import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3, 2, 2, 2, 2, 2, 2, 2].map(id => <PhotoCard key={id} />)}
    </ul>
  )
}
