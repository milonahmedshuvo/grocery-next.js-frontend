import { createSlice } from '@reduxjs/toolkit'


type TProduct = {
    _id: string,
    title: string,
    description: string,
    price: number,
    beforePrice: number,
    image:string,
    isDaleted: boolean,
    quantity : number
  }


export interface productState {
  products: TProduct[],
  count: number,
}

const initialState: productState = {
  products: [],
  count: 0
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productAddToCard: (state, action) => {
        // console.log('redux function:')
      const exsisting = state.products.find((product) => product._id === action.payload._id )
      if(exsisting){
          exsisting.quantity = exsisting.quantity + 1 
      }else{
          state.products.push( {...action.payload, quantity: 1 } )
      }
      
    state.count += 1
    },  
  },



})


export const { productAddToCard, } = productSlice.actions

export default productSlice.reducer