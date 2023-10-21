
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button"
import ExpandablePanel from "./ExpandablePanel"
import { GoTrash } from "react-icons/go";

function AlbumListItem({album}) {

    const [removeAlbum,results]=useRemoveAlbumMutation();
    const handleRemoveAlbum=()=>{
         removeAlbum(album);
    }
    const header=<div>
        <Button className="mr-2 items-center" loading={results.isLoading} onClick={handleRemoveAlbum}>
            <GoTrash/>
        </Button>
        {album.title} + Hey
        </div>;
    return(
    <ExpandablePanel key={album.id} header={header}>
       List of photos in the album.
    </ExpandablePanel>)
 
}

export default AlbumListItem
