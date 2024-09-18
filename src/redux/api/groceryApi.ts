import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const groceryApi = createApi({
  reducerPath: 'groceryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000',
    prepareHeaders: (Headers) => {
      const token = localStorage.getItem('accessToken')
      if(token){
        Headers.set('Authorization', token)
      }
     }
   }),
  tagTypes: ['product', 'orders'],
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

    productGetReverce: builder.query({
      query: ( ) =>{
       
        return {
            url: '/api/v1/product/all/reverce',
        }
      },
      providesTags: ['product']
    }),

    orderCreate: builder.mutation({
      query: (commingData) =>{
       
        return {
            url: '/api/v1/order/create',
            method: 'POST',
            body : commingData
        }
      }
    }),

    orderStatusChange: builder.mutation({
      query: (id) =>{
       
        return {
            url: `/api/v1/order//status/change/${id.id}`,
            method: 'DELETE',
        }
      },
      invalidatesTags: ['orders']
    }),


    orderGetAll: builder.query({
      query: ( ) =>{
       
        return {
            url: '/api/v1/order/all',   
        }
      },
      providesTags: ['orders']
    }),

    
    myOrder: builder.query({
      query: ( ) =>{
       
        return {
            url: '/api/v1/order/myorder',   
        }
      },
      providesTags: ['orders']
    }),


    currentUser: builder.query({
      query: ( ) =>{
       
        return {
            url: '/api/v1/user/currentUser',   
        }
      },
    }),


  }),
})





export const { useUserSignupMutation, useUserSigninMutation, useProductaddMutation, useProductGetQuery, useProductDeleteMutation, useProductUpdateMutation, useOrderCreateMutation, useProductGetReverceQuery, useOrderGetAllQuery, useOrderStatusChangeMutation, useMyOrderQuery, useCurrentUserQuery } = groceryApi