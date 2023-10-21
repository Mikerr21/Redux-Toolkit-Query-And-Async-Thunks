import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsAPI";

export const store=configureStore({
   reducer:{
    users:  usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer
   },
   middleware:(getDefaultMiddleware)=>{
      return getDefaultMiddleware()
      .concat(albumsApi.middleware)
   }
})

export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/removeUser'