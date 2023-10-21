
import { useFetchPhotoQuery } from "../store"

function PhotosList({album}) {

  useFetchPhotoQuery(album);

  return 'PhotosList'
}

export default PhotosList
