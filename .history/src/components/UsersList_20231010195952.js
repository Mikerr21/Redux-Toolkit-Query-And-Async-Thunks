import { useEffect, useState,useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, addUser } from "../store"
import { useThunk } from "../hooks/use-thunk"
import Button from './Button'
import Skeleton from "./Skeleton";
import UsersListItem from "./UsersListItem"


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
  if(isLoadingUsers){
    content= <Skeleton times={6} className="h-10 w-full"/>
  }
  else if(loadingUsersError){
    content= <div>Error on fetching data!</div>
  }
  else{
    content=data.map((user)=>{
      return <UsersListItem key={user.id} user={user}/>
  })
  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>+Add User</Button>
         {creatingUserError && 'Error creating user...'}
      </div>
      {content}
    </div>
  )
}
}

export default UsersList;
