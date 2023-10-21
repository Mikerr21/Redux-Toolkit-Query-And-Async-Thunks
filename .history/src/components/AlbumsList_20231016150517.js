import { useFetchAlbumsQuery,useAddAlbumMutation } from "../store"
import Skeleton from './Skeleton'
import Button from './Button'
import ExpandablePanel from "./ExpandablePanel";

function AlbumsList({user}) {
  const {data,error, isLoading}=useFetchAlbumsQuery(user.id); // destruction response into 3 parts.
  const [addAlbum,results]=useAddAlbumMutation();

  const handleAddAlbum=()=>{
    addAlbum(user);
  }



  let content;
  if(isLoading){
  content=<Skeleton times={3}/>
  }else if(error){
  content=<div>Error loading albums!</div>
  }else{
  content=data.map(album=>{
  const header=<div>{album.title}</div>;

  return <ExpandablePanel key={album.id} header={header}>
    List of photos in the album.
  </ExpandablePanel>
  })
  }


  return (
    <div>
      <div>
        Albums For {user.name}
        <Button onClick={handleAddAlbum}>

        </Button>
        </div>
        <div>
          {content}
        </div>
    </div>
  )
}

export default AlbumsList
