import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const groceryApi = createApi({
  reducerPath: 'groceryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['product'],
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

    productDelete: builder.mutation({
      query: (id) =>{
      //  console.log('delete id', id.data)
        return {
            url: `/api/v1/product/delete/${id.data}`,
            method: 'DELETE',        
        }
      },
      invalidatesTags: ['product']
    }),

    productUpdate: builder.mutation({
      query: ({id, product}) =>{

        return {
            url: `/api/v1/product/update/${id}`,
            method: 'PATCH',
            body: product        
        }
      },
      invalidatesTags: ['product']
    }),

    productGet: builder.query({
      query: ( ) =>{
       
        return {
            url: '/api/v1/product/all',
        }
      },
      providesTags: ['product']
    }),


  }),
})





export const { useUserSignupMutation, useUserSigninMutation, useProductaddMutation, useProductGetQuery, useProductDeleteMutation, useProductUpdateMutation } = groceryApi