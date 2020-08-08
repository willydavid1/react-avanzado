import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('https://petgram-server-willydavid.vercel.app/categories')
      .then(res => res.json())
      .then(res => setCategories(res))
  }, [])
  return (
    <List>
      {
        categories.map((category, i) => <Item key={category.id}> <Category {...category} /> </Item>)
      }
    </List>
  )
}
