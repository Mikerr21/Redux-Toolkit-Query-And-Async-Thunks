import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchUsers } from "../store/index"

function UsersList() {
  const dispatch=useDispatch();

  useEffect(()=>{
   dispatch(fetchUsers());
  },[dispatch])

  return (
    <div>
      UsersList
    </div>
  )
}

export default UsersList
