import { useFetchAlbumsQuery } from "../store"
import Skeleton from './Skeleton'
import ExpandablePanel from './ExpandablePanel'
import Button from './Button'
import { albumsApi } from "../store/apis/albumsAPI";

function AlbumsList({user}) {
  const {data,error, isLoading}=useFetchAlbumsQuery(user.id); // destruction response into 3 parts.
  let content;
  if(isLoading){
  content=<Skeleton times={3}/>
  }else if(error){
  content=<div>Error loading albums!</div>
  }else{
  const header=<div>{album.title}</div>

  return <ExpandablePanel key={album.id} header={header}>
    List of photos in the album.
  </ExpandablePanel>
  }


  return (
    <div>
      <div>Albums For {user.name}</div>
    </div>
  )
}

export default AlbumsList
