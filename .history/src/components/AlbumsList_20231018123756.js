import { useFetchAlbumsQuery,useAddAlbumMutation } from "../store"
import Skeleton from './Skeleton'
import Button from './Button'
import ExpandablePanel from "./ExpandablePanel";
import AlbumListItem from "./AlbumListItem";

function AlbumsList({user}) {
  const {data,error, isLoading}=useFetchAlbumsQuery(user.id); // destruction response into 3 parts.
  const [addAlbum,results]=useAddAlbumMutation();

  const handleAddAlbum=()=>{
    addAlbum(user);
  }

  let content;

  if(isLoading){
  content=<Skeleton className="h-10 w-full" times={3}/>
  }else if(error){
  content=<div>Error loading albums!</div>
  }else{

  content=data.map(album=>{
    return <AlbumListItem key={album.id} album={album} />
  })
  }


  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
       <h3 className="text-lg font-bold">Albums For {user.name}</h3> 
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          +Add Album
        </Button>
        </div>
        <div>
          {content}
        </div>
    </div>
  )
}

export default AlbumsList
