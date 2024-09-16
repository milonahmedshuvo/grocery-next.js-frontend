import { createSlice } from '@reduxjs/toolkit'


type TProduct = {
  _id: string,
  title: string,
  description: string,
  price: number,
  beforePrice: number,
  image: string,
  isDaleted: boolean,
  quantity: number
}


export interface productState {
  products: TProduct[],
  count: number,
  totalPrice: number
}

const initialState: productState = {
  products: [],
  count: 0,
  totalPrice: 0
}


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productAddToCard: (state, action) => {
      
      const exsisting = state.products.find((product) => product._id === action.payload._id)
      if (exsisting) {
        exsisting.quantity = exsisting.quantity + 1
      } else {
        state.products.push({ ...action.payload, quantity: 1 })
      }

      state.count += 1 
      state.totalPrice =  state.totalPrice + parseInt(action.payload.price)
    },


    productDelete: (state, action) => {
      state.products = state.products.filter((product) => product._id !== action.payload._id)
      state.totalPrice = state.totalPrice - parseInt(action.payload.price) * action.payload.quantity
      state.count -= 1
    },



  },

  


})


export const { productAddToCard, productDelete } = productSlice.actions

export default productSlice.reducer