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

    userSignin: builder.mutation({
      query: (commingData) =>{
       
        return {
            url: '/api/v1/user/login',
            method: 'POST',
            body : commingData
        }
      }
    }),

    productadd: builder.mutation({
      query: (commingData) =>{
       
        return {
            url: '/api/v1/product/add',
            method: 'POST',
            body : commingData
        }
      }
    }),

    productGet: builder.query({
      query: ( ) =>{
       
        return {
            url: '/api/v1/product/all',
        }
      }
    }),


  }),
})





export const { useUserSignupMutation, useUserSigninMutation, useProductaddMutation, useProductGetQuery } = groceryApi