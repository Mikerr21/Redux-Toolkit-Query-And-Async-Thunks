import {useState,useCallback} from 'react'
import { useDispatch } from 'react-redux';
function useThunk(thunk){      // REUSABLE CUSTOM THUNK HOOK
  
    const [isLoading,setIsLoading]= useState(false);
    const [error,setError]=useState(null);
    const dispatch=useDispatch();
   
    const runThunk=useCallback((arg)=>{
     setIsLoading(true);
     dispatch(thunk(arg))
      .unwrap()
      .catch(err=>setError(null))
      .finally(()=>setIsLoading(false))
    },[dispatch,thunk])
    return [runThunk,isLoading,error]
   }