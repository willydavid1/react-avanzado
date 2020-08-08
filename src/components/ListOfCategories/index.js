import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('https://petgram-server-willydavid.vercel.app/categories')
      .then(res => res.json())
      .then(res => setCategories(res))
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map((category, i) => <Item key={category.id}> <Category {...category} /> </Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
