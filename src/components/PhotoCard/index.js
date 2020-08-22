/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Article, ImgWrapper, Img } from './styles'

import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'

import { useAlert } from 'react-alert'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen() // CUSTOM HOOK
  const alert = useAlert()

  return (
    <Article ref={element}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            {
              (toggleLike, { error }) => {
                const handleFavClick = () => {
                  toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
                }
                if (error) alert.show('Intenta Ingresar para likes')

                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </>
      }
    </Article>
  )
}
