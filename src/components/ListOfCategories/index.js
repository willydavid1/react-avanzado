import React from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  return (
    <List>
      {
        [1, 2].map((category, i) => <Item key={i}> <Category /> </Item>)
      }
    </List>
  )
}
