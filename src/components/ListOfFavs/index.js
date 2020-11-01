/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Grid, Image, Link, DivContainerNoFavs, H2NoFavs, DivNoFavs } from './styles'
import PropTypes from 'prop-types'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.length >= 1
          ? favs.map((fav) => <Link key={fav.id} to={`/detail/${fav.id}`}> <Image src={fav.src} /> </Link>)
          : (<DivContainerNoFavs>
            <DivNoFavs rosa />
            <DivNoFavs derecha />
            <H2NoFavs>No Te ha gustado ninguna foto</H2NoFavs>
          </DivContainerNoFavs>)
      }
    </Grid>
  )
}

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
