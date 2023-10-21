
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button"
import ExpandablePanel from "./ExpandablePanel"
import { GoTrash } from "react-icons/go";

function AlbumListItem({album}) {

    const [removeAlbum,results]=useRemoveAlbumMutation();
    const handleRemoveAlbum=()=>{
         removeAlbum(album.id);
    }
    const header=<div>
        <Button loading={results.isLoading} onClick={removeAlbum}>
            <GoTrash/>
        </Button>
        {album.title}
        </div>;
    return(
    <ExpandablePanel key={album.id} header={header}>
       List of photos in the album.
    </ExpandablePanel>)
 
}

export default AlbumListItem
