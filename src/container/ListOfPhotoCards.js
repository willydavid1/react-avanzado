import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

// HoC para el componente ListOfPhotoCardsComponent con la query de withPhotos
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
