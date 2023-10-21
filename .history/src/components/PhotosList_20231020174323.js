
import { useFetchPhotoQuery,useAddPhotoMutation } from "../store"
import Button from './Button'

function PhotosList({album}) {

  useFetchPhotoQuery(album);

  return 'PhotosList'
}

export default PhotosList
