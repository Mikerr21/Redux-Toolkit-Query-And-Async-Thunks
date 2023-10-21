
import { useFetchPhotoQuery,useAddPhotoMutation } from "../store"
import Button from './Button'

function PhotosList({album}) {

  useFetchPhotoQuery(album);
  const [addPhoto,addPhotoResults]=useAddPhotoMutation();

  return <div>
    <div className="m-2 flex flex-row items-center justify-between">
     <h3 className="text-lg font-bold">Photos In {album.title}</h3>
    </div>
  </div>
}

export default PhotosList
