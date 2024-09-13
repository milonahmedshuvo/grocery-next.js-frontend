import { configureStore } from '@reduxjs/toolkit'
import { groceryApi } from './api/groceryApi'



export const store = configureStore({
  reducer: {
   
    [groceryApi.reducerPath] : groceryApi.reducer
  },


  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(groceryApi.middleware),
})





export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch