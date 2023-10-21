import { CreateApi, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const photosApi=createApi({
    reducerPath:'photos',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3005'
    }),
    endpoints(builder){
    return {
        fetchPhoto:  builder.query({
            query:(album)=>{
            return {
              url:'/photos',
              params:{
                albumId:album.id
                     },
              method:'GET' // OPTIONAL
            }
        }
            
        }),
        addPhoto:    builder.mutation({}),
        removePhoto: builder.mutation({})
    }
    }
})