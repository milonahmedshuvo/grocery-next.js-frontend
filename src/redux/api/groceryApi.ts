import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const groceryApi = createApi({
  reducerPath: 'groceryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    userSignup: builder.mutation({
      query: (commingData) =>{
       
        return {
            url: '/api/v1/user/create',
            method: 'POST',
            body : commingData
        }
      }
    }),
  }),
})





export const { useUserSignupMutation } = groceryApi