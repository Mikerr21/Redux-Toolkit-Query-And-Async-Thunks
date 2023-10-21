
import { useFetchPhotoQuery,useAddPhotoMutation } from "../store"
import Button from './Button'

function PhotosList({album}) {

  useFetchPhotoQuery(album);
  const [addPhoto,addPhotoResults]=useAddPhotoMutation();

  return 'PhotosList'
}

export default PhotosList
