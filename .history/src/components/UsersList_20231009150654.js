import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, addUser } from "../store"
import Button from './Button'
import Skeleton from "./Skeleton";

function useThunk(thunk){      // REUSABLE CUSTOM THUNK HOOK
 const [isLoading,setIsLoading]= useState(false);
 const [error,setError]=useState(null);
 const dispatch=useDispatch();
 const runThunk=()=>{
  setIsLoading(true);
  dispatch(thunk())
   .unwrap()
   .catch(err=>setError(null))
   .finally(()=>setIsLoading(false))
 }
 return [runThunk,isLoading,error]
}

function UsersList() {
  const [isLoadingUsers,setIsLoadingUsers]=useState(false);
  const [loadingUsersError,setLoadingUsersError]=useState(null)
  const [isCreatingUser,setIsCreatingUser]=useState(false);
  const [creatingUserError,setCreatingUserError]=useState(null);

  const dispatch=useDispatch();
  const handleUserAdd=()=>{
    setIsCreatingUser(true);
    dispatch(addUser())
    .unwrap()
    .catch(err=>setCreatingUserError(err))
    .finally(()=>setIsCreatingUser(false))
  }
  const {data}=useSelector((state)=>{
    return state.users // To access data
  })

  useEffect(()=>{
   dispatch(fetchUsers())
         .unwrap()
         .catch((err)=>setLoadingUsersError(err))
         .finally(()=>setIsLoadingUsers(false))
  },[dispatch])
  
  if(isLoadingUsers) return <Skeleton times={6} className="h-10 w-full"/>
  if(loadingUsersError) return <div>Error!</div>

  const renderedUsers=data.map((user)=>{
    return <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  })
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {
          isCreatingUser
          ? 'Creating User...':
        <Button onClick={handleUserAdd}>+Add User</Button>
         }
         {creatingUserError && 'Error creating user...'}
      </div>
      {renderedUsers}
    </div>
  )
}

export default UsersList
