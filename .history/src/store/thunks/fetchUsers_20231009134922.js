import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers=createAsyncThunk('users/fetch', async()=>{
    const response=await axios.get('ttp://localhost:3005/users')

    return response.data
})

export {fetchUsers}