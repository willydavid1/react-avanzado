/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Grid, Image, Link, DivContainerNoFavs, H2NoFavs } from './styles'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.length >= 1
          ? favs.map((fav) => <Link key={fav.id} to={`/detail/${fav.id}`}> <Image src={fav.src} /> </Link>)
          : (<DivContainerNoFavs>
            <H2NoFavs>No Te ha gustado ninguna foto</H2NoFavs>
          </DivContainerNoFavs>)
      }
    </Grid>
  )
}
