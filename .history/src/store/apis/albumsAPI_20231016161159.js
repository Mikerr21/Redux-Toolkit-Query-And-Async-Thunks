import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {faker} from '@faker-js/faker'

const albumsApi=createApi({
    reducerPath:'albums',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3005'
    }),
    endpoints(builder){
        return {
           addAlbum:builder.mutation({
            invalidatesTags:['Album'], // SEE BELOW WE ADDED providesTags and then here invalidateTAgs 
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
                return [{type:'Album', id:user.id}];
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
    useAddAlbumMutation
}= albumsApi;

export {albumsApi};