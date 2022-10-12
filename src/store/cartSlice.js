import { createSlice, current } from '@reduxjs/toolkit'

const initialState = { 
                       products: JSON.parse(localStorage.getItem("cart")) ?? [],
                       openModal:false, 
                       successMsg:false,
                       product:[]
                     }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state,action) => {
      state.products.push({...action.payload})
      state.openModal=false
      state.successMsg=true
      localStorage.setItem("cart", JSON.stringify(state.products));
  //    console.log(current(state.products))
    },
    modalOpen: (state,action) => {
      state.openModal=action.payload
    },   
    success: (state,action) => {
      state.successMsg=action.payload
    },
    setProduct: (state,action) => {
      state.product=action.payload
    }
  },
})

export const { add, modalOpen, success, setProduct} = cartSlice.actions

export default cartSlice.reducer
