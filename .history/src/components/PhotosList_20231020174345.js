
import { useFetchPhotoQuery,useAddPhotoMutation } from "../store"
import Button from './Button'

function PhotosList({album}) {

  useFetchPhotoQuery(album);
  const [addPhoto,results]=useAddPhotoMutation();

  return 'PhotosList'
}

export default PhotosList
