import { CreateApi, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { faker } from "@faker-js/faker";


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
        addPhoto:    builder.mutation({
            query:(album)=>{
                return {
                    method:'POST',
                    url:'/photos',
                    body:{
                        albumId:album.id
                    }
                }
            }
        }),
        removePhoto: builder.mutation({})
    }
    }
})