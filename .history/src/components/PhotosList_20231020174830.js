
import { useFetchPhotoQuery,useAddPhotoMutation } from "../store"
import Button from './Button'
import Skeleton from './Skeleton'
import PhotosListItem from "./PhotosListItem";

function PhotosList({album}) {

  const {data,isFetching,error}=useFetchPhotoQuery(album);
  const [addPhoto,addPhotoResults]=useAddPhotoMutation();
  const handleAddPhoto=()=>{
    addPhoto(album);
  }

  let content;
  if(isFetching){
    content=<Skeletion className="h-8 w-8" times={4}></Skeletion>
  }else if(error){
    content=<div>Error fetching photos...</div>
  }

  return <div>
    <div className="m-2 flex flex-row items-center justify-between">
     <h3 className="text-lg font-bold">Photos In {album.title}</h3>
     <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}> + Add Photo</Button>
    </div>
  </div>
}

export default PhotosList
