import { useFetchAlbumsQuery } from "../store"

function AlbumsList({user}) {
  const {data,error, isLoading}=useFetchAlbumsQuery(user.id); // destruction response into 3 parts.
  console.log(data,error,isLoading);
  return (
    <div>
      <div>Albums For {user.name}</div>
    </div>
  )
}

export default AlbumsList
