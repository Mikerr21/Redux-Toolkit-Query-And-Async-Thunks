import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photosApi=createApi({
    reducerPath:'photos',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3005'
    }),
    endpoints(builder){
    return {
        fetchPhoto: builder.query({
            providesTags:(result,error,album)=>{
              const tags=result.map((photo)=>{
                return{type:'Photo',id:photo.id}
              });
              tags.push({type:'AlbumPhoto',id:album.id});
              return tags;
            },
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
        addPhoto: builder.mutation({
            invalidatesTags:(result,error,album)=>{
             return [{type:'AlbumPhoto,id:album.id'}]
            },
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
            invalidatesTags:(result,error,photo)=>{
                return[{type:'Photo',id:photo}]
            },
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

export const {
    useFetchPhotoQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation}
    =photosApi;
export {photosApi}