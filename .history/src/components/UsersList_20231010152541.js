import { useEffect, useState,useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, addUser } from "../store"
import { useThunk } from "../hooks/use-thunk"
import Button from './Button'
import Skeleton from "./Skeleton";


function UsersList() {
  
  const [doFetchUsers,isLoadingUsers,loadingUsersError]=useThunk(fetchUsers);

  const [doCreateUsers,isCreatingUser,creatingUserError]=useThunk(addUser);

  const dispatch=useDispatch();
  const handleUserAdd=()=>{
    doCreateUsers()
  }
  const {data}=useSelector((state)=>{
    return state.users // To access data
  })

  useEffect(()=>{
  doFetchUsers()
  },[doFetchUsers])
  let content;
  if(isLoadingUsers){ content= <Skeleton times={6} className="h-10 w-full"/> }
  else if(loadingUsersError){ content= <div>Error on fetching data!</div> }

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
        <Button loading={isCreatingUser} onClick={handleUserAdd}>+Add User</Button>
         {creatingUserError && 'Error creating user...'}
      </div>
      {renderedUsers}
    </div>
  )
}

export default UsersList
