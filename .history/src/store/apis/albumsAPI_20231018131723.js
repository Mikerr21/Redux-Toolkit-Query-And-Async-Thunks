import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {faker} from '@faker-js/faker'

const albumsApi=createApi({
    reducerPath:'albums',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3005'
    }),
    endpoints(builder){
        return {
            removeAlbum:builder.mutation({
                invalidatesTags:(result,error,album)=>{
                 return [{type:'Album',id:album.userId}] // bcz when we clg our album we see it has the id of the user that the album belong to.
                },
                query:(album)=>{
                    return {
                        url:`/albums/${album.id}`,
                        method:'DELETE'
                    }
                }
            }),
           addAlbum:builder.mutation({
            invalidatesTags:(result,error,user)=>{
                return [{type:'UsersAlbums',id:user.id}];
            }, // SEE BELOW WE ADDED providesTags and then here invalidateTAgs 
            query:(user)=>{
                return {
                 url:'/albums',
                 method:'POST',
                 body:{
                    userId:user.id,
                    title: faker.commerce.productName()
                 }
                };
              }
           }),
           fetchAlbums:builder.query({
            providesTags:(result,error,user)=>{         // (result,error,arg) params in docs
                const tags=result.map(album=>{
                 return [{type:'Album', id:album.id}];
                })
                tags.push({type:'UsersAlbums',id:user.id})
                return tags;
            },
            query:(user)=>{
                return {
                url:'/albums',
                params:{
                    userId:user,
                },
                method:'GET'
                };
            }
           })

        }
    }
})

export const {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation
}= albumsApi;

export {albumsApi};