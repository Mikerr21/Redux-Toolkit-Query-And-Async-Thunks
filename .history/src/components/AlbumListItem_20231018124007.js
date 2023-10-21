
import Button from "./Button"
import ExpandablePanel from "./ExpandablePanel"
import { GoTrash } from "react-icons/go";

function AlbumListItem({album}) {
    const header=<div>
        <Button></Button>
        {album.title}
        </div>;
    return(
    <ExpandablePanel key={album.id} header={header}>
       List of photos in the album.
    </ExpandablePanel>)
 
}

export default AlbumListItem
