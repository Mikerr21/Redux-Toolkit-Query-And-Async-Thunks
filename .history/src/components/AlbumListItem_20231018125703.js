
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button"
import ExpandablePanel from "./ExpandablePanel"
import { GoTrash } from "react-icons/go";

function AlbumListItem({album}) {

    const [removeAlbum,results]=useRemoveAlbumMutation();
    const handleRemoveAlbum=()=>{
         removeAlbum(album);
    }
    const header=<>
        <Button loading={results.isLoading} c onClick={handleRemoveAlbum}>
            <GoTrash/>
        </Button>
        {album.title}
        </>;
    return(
    <ExpandablePanel key={album.id} header={header}>
       List of photos in the album.
    </ExpandablePanel>)
 
}

export default AlbumListItem
