import { useFetchAlbumsQuery } from "../store"

function AlbumsList({user}) {
  const {data,error, isLoading}=useFetchAlbumsQuery(user.id); // destruction response into 3 parts.
  return (
    <div>
      <div>Albums For {user.name}</div>
    </div>
  )
}

export default AlbumsList
