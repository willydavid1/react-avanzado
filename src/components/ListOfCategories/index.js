import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

// custom hook encargado de hacer el fetch de los datos
function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // eslint-disable-next-line no-undef
    fetch('https://petgram-server-willydavid.vercel.app/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res)
        setLoading(false)
      })
  }, [])

  return ({ categories, loading })
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'> <Category /> </Item>
          : categories.map((category, i) => <Item key={category.id}> <Category {...category} path={`/pet/${category.id}`} /> </Item>)
      }
    </List>
  )

  // if (loading) return <h1>Cargando...</h1>
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
