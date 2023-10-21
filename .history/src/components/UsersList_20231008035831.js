import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../store"

function UsersList() {
  const dispatch=useDispatch();

  const {isLoading,data,error}useSelector((state)=>{
    return state.users // To access data
  })

  useEffect(()=>{
   dispatch(fetchUsers());
  },[dispatch])
  
  if(isLoading) return <div>Is Loading!</div>
  return (
    <div>
      UsersList
    </div>
  )
}

export default UsersList
