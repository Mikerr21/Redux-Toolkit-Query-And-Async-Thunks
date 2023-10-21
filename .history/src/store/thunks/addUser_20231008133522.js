import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {faker} from '@fakerjs/faker'

const addUser=createAsyncThunk('users/add',async()=>{
  const response=await axios.post('http://localhost:3005/users',{
    name:faker.name.fullName()
  })

  return response;
})