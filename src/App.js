/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'

import { Router } from '@reach/router'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : (
            <Router>
              <Home path='/' />
              <Home path='/pet/:id' />
            </Router>
          )
      }

    </>
  )
}
