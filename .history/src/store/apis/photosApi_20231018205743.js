import { CreateApi, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const photosApi=createApi({
    reducerPath:'photos',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3005'
    }),
    endpoints(builder){
    return {
        fetchPhoto:  builder.query({}),
        addPhoto:    builder.mutation({}),
        removePhoto: builder.mutation({})
    }
    }
})