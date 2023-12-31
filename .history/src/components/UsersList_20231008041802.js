import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../store"
import Skeleton from "./Skeleton";

function UsersList() {
  const dispatch=useDispatch();

  const {isLoading,data,error}=useSelector((state)=>{
    return state.users // To access data
  })

  useEffect(()=>{
   dispatch(fetchUsers());
  },[dispatch])
  
  if(isLoading) return <Skeleton times={data.length}/>
  if(error) return <div>Error!</div>

  return (
    <div>
      {data.length}
    </div>
  )
}

export default UsersList
