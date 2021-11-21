import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

const producSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProducs: (state, { payload }) => {
      state.products = payload
    },
  },
})

export default producSlice.reducer
