import { useFetchAlbumsQuery } from "../store"
import Skeleton from './Skeleton'
import ExpandablePanel from './ExpandablePanel'
import Button from './Button'

function AlbumsList({user}) {
  const {data,error, isLoading}=useFetchAlbumsQuery(user.id); // destruction response into 3 parts.
  let content;
  if(isLoading){
  content=<Skeleton times={3}/>
  }else if(error){
  content=<div>Error loading albums!</div>
  }else{

  }


  return (
    <div>
      <div>Albums For {user.name}</div>
    </div>
  )
}

export default AlbumsList
