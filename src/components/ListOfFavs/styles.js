import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

export const Grid = styled.div`
  padding-top: 32px;
`

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`

export const DivContainerNoFavs = styled.div`
  min-height: 200px;
  background: #9966FF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  border-radius: 8px;
`

export const H2NoFavs = styled.h2`
  font-size: 20px;
  color: white;
`
