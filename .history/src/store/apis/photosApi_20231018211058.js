import { CreateApi, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
                        albumId:album.id,
                        url:faker.image.abstract(150,150,true)
                    }
                }
            }
        }),
        removePhoto: builder.mutation({
            query:(photo)=>{
                return{
                    method:'DELETE',
                    url:`/photos/${photo.id}`
                }
            }
        })
    }
    }
})

export const {useFetchPhotosQuery,
    useAddPhotosMutation,useRemovePhotosMutation}=photosApi;
export {photosApi}