import { photosApi } from "../store/apis/photosApi"
import { GoTrash } from "react-icons/go"
import { useRemovePhotoMutation } from "../store/apis/photosApi"

function PhotosListItem({photo}) {

  return <div className="relative cursor-pointer m-2">
    <img className="h-20 w-20" src={photo.url} alt="random-pic" />
  </div>
}

export default PhotosListItem
